import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmpmMaterialComponent } from './rmpm-material.component';

describe('RmpmMaterialComponent', () => {
  let component: RmpmMaterialComponent;
  let fixture: ComponentFixture<RmpmMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmpmMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmpmMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
