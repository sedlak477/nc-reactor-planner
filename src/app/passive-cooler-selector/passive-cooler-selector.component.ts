import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Components, ReactorComponent } from '../model/fission-reactor/reactor-component';

@Component({
  selector: 'app-passive-cooler-selector',
  templateUrl: './passive-cooler-selector.component.html',
  styleUrls: ['./passive-cooler-selector.component.scss']
})
export class PassiveCoolerSelectorComponent implements OnInit {

  @Input()
  selectedComponent: ReactorComponent;

  @Output()
  selectedComponentChange: EventEmitter<ReactorComponent> = new EventEmitter<ReactorComponent>();

  components: ReactorComponent[] = [
    Components.AIR,
    Components.FUEL_CELL,
    Components.GRAPHITE,
    Components.BERYLLIUM
  ];

  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => {
      this.components.length = 4;
      this.components.push(...data.passiveCoolers);
    });
  }

  ngOnInit(): void {
  }

  selectionChangedHandler(data: ReactorComponent): void {
    this.selectedComponentChange.emit(data);
  }
}
