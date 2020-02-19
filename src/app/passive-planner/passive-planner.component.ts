import { Component, OnInit } from '@angular/core';
import { Cooler } from '../model/fission-reactor/cooler';
import { ActivatedRoute } from '@angular/router';
import { Fuel } from '../model/fission-reactor/fuel';
import { ReactorLayout } from '../model/fission-reactor/reactor-layout';
import { DataService } from '../data.service';

@Component({
  selector: 'app-passive-planner',
  templateUrl: './passive-planner.component.html',
  styleUrls: ['./passive-planner.component.scss']
})
export class PassivePlannerComponent implements OnInit {

  fuels: Fuel[];

  selectedComponent: Cooler;

  width = 3;
  depth = 3;
  height = 3;

  minSize = 1;
  maxSize = 24;

  reactor: ReactorLayout;

  dimensionsCollapsed = false;
  fuelCollapsed = false;
  statsCollapsed = false;
  coolersCollapsed = false;

  constructor(route: ActivatedRoute, private data: DataService) {
    this.fuels = data.fuels();
    this.generateLayout();

    data.getConfig().subscribe(config => {
      if (config) {
        this.reactor.config = config.fission;
        this.minSize = config.fission.fission_min_size;
        this.maxSize = config.fission.fission_max_size;
      }
    });
  }

  ngOnInit(): void {
  }

  generateLayout(): void {
    this.reactor = new ReactorLayout(this.width, this.depth, this.height, this.reactor?.fuel || this.fuels[0], this.reactor?.config);
  }
}
