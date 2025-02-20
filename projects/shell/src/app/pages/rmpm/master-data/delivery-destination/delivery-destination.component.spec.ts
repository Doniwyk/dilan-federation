import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDestinationComponent } from './delivery-destination.component';

describe('DeliveryDestinationComponent', () => {
  let component: DeliveryDestinationComponent;
  let fixture: ComponentFixture<DeliveryDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDestinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
