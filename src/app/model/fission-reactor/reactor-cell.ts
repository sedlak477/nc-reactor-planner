import { isAir, isCooler, isFuelCell, isMediator, ReactorComponent } from './reactor-component';
import { ReactorLayout } from './reactor-layout';

export class ReactorCell implements ReactorComponent {

  type: ReactorComponent['type'];
  id: ReactorComponent['id'];
  name: ReactorComponent['name'];
  description: ReactorComponent['description'];
  icon: ReactorComponent['icon'];

  constructor(public component: ReactorComponent,
              private readonly parent: ReactorLayout,
              private readonly x: number,
              private readonly y: number,
              private readonly z: number) {
    Object.assign(this, component);
  }

  get heatMultiplier(): number {
    const numConnected = this.connectedCells.length;
    return (numConnected + 1) * (numConnected + 2) / 2;
  }

  get efficiency(): number {
    const numConnected = this.connectedCells.length;
    return numConnected + 1;
  }

  get heatPerTick(): number {
    if (isAir(this) || !this.valid) { return 0; }

    if (  isCooler(this)) { return -this.rate; }
    if (isFuelCell(this)) {
      return this.parent.config.fission_heat_generation * this.parent.fuel.heat_generation * this.heatMultiplier;
    }
    if (isMediator(this)) {
      let heat = 0;
      for (const fuelCell of this.adjacentFuelCells) {
        heat += this.parent.config.fission_heat_generation
          * this.parent.config.fission_moderator_extra_heat
          * this.parent.fuel.heat_generation
          * fuelCell.efficiency / 6;
      }
      return heat;
    }
    return 0;
  }

  get energyPerTick(): number {
    if (isAir(this) || isCooler(this) || !this.valid) { return 0; }

    if (isFuelCell(this)) {
      return this.parent.config.fission_power * this.parent.fuel.power * this.efficiency;
    }
    if (isMediator(this)) {
      let energy = 0;
      for (const fuelCell of this.adjacentFuelCells) {
        energy += this.parent.config.fission_moderator_extra_power * fuelCell.energyPerTick / 6;
      }
      return energy;
    }
    return 0;
  }

  get valid(): boolean {
    if (isFuelCell(this) || isAir(this)) { return true; }
    if (isMediator(this)) {
      return this.adjacentFuelCells.length > 0;
    }
    return true;  // TODO: Add cooler validity check
  }

  /**
   * Fuel cells adjacent to this cell
   */
  get adjacentFuelCells(): ReactorCell[] {
    const cells: ReactorCell[] = [];

    // Fuel cells
    if (isFuelCell(this.parent.layout[  this.z  ]?.[  this.y  ]?.[this.x + 1])) {
      cells.push(this.parent.layout[  this.z  ][  this.y  ][this.x + 1]);
    }
    if (isFuelCell(this.parent.layout[  this.z  ]?.[  this.y  ]?.[this.x - 1])) {
      cells.push(this.parent.layout[  this.z  ][  this.y  ][this.x - 1]);
    }

    if (isFuelCell(this.parent.layout[  this.z  ]?.[this.y + 1]?.[  this.x  ])) {
      cells.push(this.parent.layout[  this.z  ][this.y + 1][  this.x  ]);
    }
    if (isFuelCell(this.parent.layout[  this.z  ]?.[this.y - 1]?.[  this.x  ])) {
      cells.push(this.parent.layout[  this.z  ][this.y - 1][  this.x  ]);
    }

    if (isFuelCell(this.parent.layout[this.z + 1]?.[  this.y  ]?.[  this.x  ])) {
      cells.push(this.parent.layout[this.z + 1][  this.y  ][  this.x  ]);
    }
    if (isFuelCell(this.parent.layout[this.z - 1]?.[  this.y  ]?.[  this.x  ])) {
      cells.push(this.parent.layout[this.z - 1][  this.y  ][  this.x  ]);
    }

    return cells;
  }

  /**
   * Fuel cells connected to this cell, directly or by moderator blocks.
   */
  get connectedCells(): ReactorCell[] {
    const cells = this.adjacentFuelCells;

    // Mediators, search along mediator axis for up to fission_neutron_reach
    // mediators for a fuel cell
    if (isMediator(this.parent.layout[  this.z  ]?.[  this.y  ]?.[this.x + 1])) {
      for (let i = 2; i <= this.parent.config.fission_neutron_reach + 1; i++) {
        if ( isFuelCell(this.parent.layout[  this.z  ]?.[  this.y  ]?.[this.x + i])) {
          cells.push(this.parent.layout[  this.z  ][  this.y  ][this.x + i]);
        }
        if (!isMediator(this.parent.layout[  this.z  ]?.[  this.y  ]?.[this.x + i])) { break; }
      }
    }
    if (isMediator(this.parent.layout[  this.z  ]?.[  this.y  ]?.[this.x - 1])) {
      for (let i = 2; i <= this.parent.config.fission_neutron_reach + 1; i++) {
        if ( isFuelCell(this.parent.layout[  this.z  ]?.[  this.y  ]?.[this.x - i])) {
          cells.push(this.parent.layout[  this.z  ][  this.y  ][this.x - i]);
        }
        if (!isMediator(this.parent.layout[  this.z  ]?.[  this.y  ]?.[this.x - i])) { break; }
      }
    }

    if (isMediator(this.parent.layout[  this.z  ]?.[this.y + 1]?.[  this.x  ])) {
      for (let i = 2; i <= this.parent.config.fission_neutron_reach + 1; i++) {
        if ( isFuelCell(this.parent.layout[  this.z  ]?.[this.y + i]?.[  this.x  ])) {
          cells.push(this.parent.layout[  this.z  ][this.y + i][  this.x  ]);
        }
        if (!isMediator(this.parent.layout[  this.z  ]?.[this.y + i]?.[  this.x  ])) { break; }
      }
    }
    if (isMediator(this.parent.layout[  this.z  ]?.[this.y - 1]?.[  this.x  ])) {
      for (let i = 2; i <= this.parent.config.fission_neutron_reach + 1; i++) {
        if ( isFuelCell(this.parent.layout[  this.z  ]?.[this.y - i]?.[  this.x  ])) {
          cells.push(this.parent.layout[  this.z  ][this.y - i][  this.x  ]);
        }
        if (!isMediator(this.parent.layout[  this.z  ]?.[this.y - i]?.[  this.x  ])) { break; }
      }
    }

    if (isMediator(this.parent.layout[this.z + 1]?.[  this.y  ]?.[  this.x  ])) {
      for (let i = 2; i <= this.parent.config.fission_neutron_reach + 1; i++) {
        if ( isFuelCell(this.parent.layout[this.z + i]?.[  this.y  ]?.[  this.x  ])) {
          cells.push(this.parent.layout[this.z + i][  this.y  ][  this.x  ]);
        }
        if (!isMediator(this.parent.layout[this.z + i]?.[  this.y  ]?.[  this.x  ])) { break; }
      }
    }
    if (isMediator(this.parent.layout[this.z - 1]?.[  this.y  ]?.[  this.x  ])) {
      for (let i = 2; i <= this.parent.config.fission_neutron_reach + 1; i++) {
        if ( isFuelCell(this.parent.layout[this.z - i]?.[  this.y  ]?.[  this.x  ])) {
          cells.push(this.parent.layout[this.z - i][  this.y  ][  this.x  ]);
        }
        if (!isMediator(this.parent.layout[this.z - i]?.[  this.y  ]?.[  this.x  ])) { break; }
      }
    }

    return cells;
  }

}
