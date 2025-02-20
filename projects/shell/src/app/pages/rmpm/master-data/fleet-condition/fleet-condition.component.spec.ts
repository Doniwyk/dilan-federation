import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetConditionComponent } from './fleet-condition.component';

describe('FleetConditionComponent', () => {
  let component: FleetConditionComponent;
  let fixture: ComponentFixture<FleetConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
