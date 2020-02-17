import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveEditorComponent } from './passive-editor.component';

describe('PassiveEditorComponent', () => {
  let component: PassiveEditorComponent;
  let fixture: ComponentFixture<PassiveEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassiveEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassiveEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
