import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ReactorLayout } from '../model/fission-reactor/reactor-layout';

@Component({
  selector: 'app-passive-stats',
  templateUrl: './passive-stats.component.html',
  styleUrls: ['./passive-stats.component.scss']
})
export class PassiveStatsComponent implements OnInit {

  @Input()
  reactor: ReactorLayout;

  constructor() { }

  ngOnInit(): void {
  }

  fuelDuration(): number {
    return this.reactor.fuel.fuel_time / (this.reactor.fuelCellCount() * this.reactor.config.fission_fuel_use * 20);
  }

  meltdownTime(): number {
    return this.reactor.heatPerTick() > 0 ? 1200000 / (this.reactor.heatPerTick() * 20) : Number.POSITIVE_INFINITY;
  }
}
