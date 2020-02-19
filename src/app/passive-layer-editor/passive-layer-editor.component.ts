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
    this.completeAssign(this.reactorLayer[y][x], component);
  }

  mouseEnter(event: MouseEvent, x: number, y: number, component: ReactorComponent): void {
    // tslint:disable-next-line:no-bitwise
    if (event.buttons & 1) {
      this.setComponent(x, y, component);
    }
  }

  /*
  * This method also copies the getters and setters additional to the object properties.
  *
  * Source: https://www.takuzen.me/2019/03/08/Object-assign-with-accessor-descriptor/
  */
  private completeAssign(target, ...sources) {
    sources.forEach(source => {
      const descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
      // by default, Object.assign copies enumerable Symbols too
      Object.getOwnPropertySymbols(source).forEach(sym => {
        const descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }

}
