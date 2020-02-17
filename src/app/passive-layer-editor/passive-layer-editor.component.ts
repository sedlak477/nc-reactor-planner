import { Component, Input, OnInit } from '@angular/core';
import { Layer } from '../model/fission-reactor/shapes';
import { ReactorComponent } from '../model/fission-reactor/reactor-component';

@Component({
  selector: 'app-passive-layer-editor',
  templateUrl: './passive-layer-editor.component.html',
  styleUrls: ['./passive-layer-editor.component.scss']
})
export class PassiveLayerEditorComponent implements OnInit {

  @Input()
  reactorLayer: Layer<ReactorComponent>;

  @Input()
  selectedComponent: ReactorComponent;

  constructor() { }

  ngOnInit(): void {
  }

  setComponent(x: number, y: number, component: ReactorComponent): void {
    Object.assign(this.reactorLayer[y][x], component);
  }

  mouseEnter(event: MouseEvent, x: number, y: number, component: ReactorComponent): void {
    // tslint:disable-next-line:no-bitwise
    if (event.buttons & 1) {
      this.setComponent(x, y, component);
    }
  }

}
