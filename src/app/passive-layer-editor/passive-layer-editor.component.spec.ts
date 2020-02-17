import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveLayerEditorComponent } from './passive-layer-editor.component';

describe('PassiveLayerEditorComponent', () => {
  let component: PassiveLayerEditorComponent;
  let fixture: ComponentFixture<PassiveLayerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassiveLayerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassiveLayerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
