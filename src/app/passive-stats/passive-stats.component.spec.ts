import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveStatsComponent } from './passive-stats.component';

describe('PassiveStatsComponent', () => {
  let component: PassiveStatsComponent;
  let fixture: ComponentFixture<PassiveStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassiveStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassiveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
