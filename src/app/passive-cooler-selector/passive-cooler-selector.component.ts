import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Components, isCooler, ReactorComponent } from '../model/fission-reactor/reactor-component';
import { DataService } from '../data.service';
import { Cooler } from '../model/fission-reactor/cooler';

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

  constructor(data: DataService) {
    this.components.push(...data.passiveCoolers());
  }

  ngOnInit(): void {
  }

  selectionChangedHandler(data: ReactorComponent): void {
    this.selectedComponentChange.emit(data);
  }

  getPopoverTitle(component: ReactorComponent): string {
    return component.name + (isCooler(component) ? ` - ${component.rate} H/t` : '');
  }
}
