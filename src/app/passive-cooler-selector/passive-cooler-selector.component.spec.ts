import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveCoolerSelectorComponent } from './passive-cooler-selector.component';

describe('PassiveCoolerSelectorComponent', () => {
  let component: PassiveCoolerSelectorComponent;
  let fixture: ComponentFixture<PassiveCoolerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassiveCoolerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassiveCoolerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
