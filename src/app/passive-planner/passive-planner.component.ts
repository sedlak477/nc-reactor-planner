import { Component, OnInit } from '@angular/core';
import { Cooler } from '../model/fission-reactor/cooler';
import { ActivatedRoute } from '@angular/router';
import { Fuel } from '../model/fuel';
import { ReactorLayout } from '../model/fission-reactor/reactor-layout';
import { DataService } from '../data.service';

@Component({
  selector: 'app-passive-planner',
  templateUrl: './passive-planner.component.html',
  styleUrls: ['./passive-planner.component.scss']
})
export class PassivePlannerComponent implements OnInit {

  fuels: Fuel[] = [];

  selectedComponent: Cooler;

  width = 3;
  depth = 3;
  height = 3;

  reactor: ReactorLayout;

  dimensionsCollapsed = false;
  fuelCollapsed = false;
  statsCollapsed = false;
  coolersCollapsed = false;

  constructor(route: ActivatedRoute, private data: DataService) {
    route.data.subscribe(rData => {
      this.fuels.length = 0;
      this.fuels.push(...rData.fuels);

      this.reactor = new ReactorLayout(3, 3, 3, this.fuels[0], this.data.fissionConfig);
    });
  }

  ngOnInit(): void {
  }

  generateLayout(): void {
    this.reactor = new ReactorLayout(this.width, this.depth, this.height, this.reactor.fuel, this.data.fissionConfig);
  }
}
