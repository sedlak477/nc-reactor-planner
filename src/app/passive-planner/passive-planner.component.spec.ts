import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassivePlannerComponent } from './passive-planner.component';

describe('PassivePlannerComponent', () => {
  let component: PassivePlannerComponent;
  let fixture: ComponentFixture<PassivePlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassivePlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassivePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
