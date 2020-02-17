import { Components, ReactorComponent } from './reactor-component';
import { Fuel } from '../fuel';
import { FissionConfig } from '../fission-config';
import { ReactorCell } from './reactor-cell';
import { Block, Layer } from './shapes';


export class ReactorLayout {

  readonly layout: Block<ReactorCell> = [];  // z, y, x

  constructor(public readonly width: number,
              public readonly depth: number,
              public readonly height: number,
              public fuel: Fuel,
              public config: FissionConfig) {

    for (let z = 0; z < height; z++) {
      this.layout.push([]);
      for (let y = 0; y < depth; y++) {
        this.layout[z].push([]);
        for (let x = 0; x < width; x++) {
          this.layout[z][y].push(new ReactorCell(Components.AIR, this, x, y, z));
        }
      }
    }

  }

  layer(z: number): Layer<ReactorComponent> {
    if (!(z in this.layout)) { throw new Error(('Index out of range.')); }
    return this.layout[z];
  }

  set(x: number, y: number, z: number, component: ReactorComponent): void {
    if (z in this.layout && y in this.layout[z] && x in this.layout[z][y]) {
      Object.assign(this.layout[z][y][x], component);
    } else {
      throw new Error('Index out of range.');
    }
  }

  get(x: number, y: number, z: number): ReactorComponent {
    if (z in this.layout && y in this.layout[z] && x in this.layout[z][y]) {
      return this.layout[z][y][x];
    } else {
      throw new Error('Index out of range.');
    }
  }

  heatPerTick(): number {
    let heat = 0;

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.depth; y++) {
        for (let z = 0; z < this.height; z++) {
          heat += this.layout[z][y][x].heatPerTick;
        }
      }
    }

    return heat;
  }

  energyPerTick(): number {
    let energy = 0;

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.depth; y++) {
        for (let z = 0; z < this.height; z++) {
          energy += this.layout[z][y][x].energyPerTick;
        }
      }
    }

    return energy;
  }
}
