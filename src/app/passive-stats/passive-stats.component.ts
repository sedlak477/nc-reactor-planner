import { Component, Input, OnInit } from '@angular/core';
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

}
