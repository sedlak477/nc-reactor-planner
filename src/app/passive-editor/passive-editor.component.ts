import { Component, Input, OnInit } from '@angular/core';
import { ReactorLayout } from '../model/fission-reactor/reactor-layout';
import { ReactorComponent } from '../model/fission-reactor/reactor-component';

@Component({
  selector: 'app-passive-editor',
  templateUrl: './passive-editor.component.html',
  styleUrls: ['./passive-editor.component.scss']
})
export class PassiveEditorComponent implements OnInit {

  @Input()
  reactor: ReactorLayout;

  @Input()
  selectedComponent: ReactorComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
