import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmpmRoutingModule } from './rmpm-routing.module';
import { AbnormalComponent } from './master-data/abnormal/abnormal.component';
import { DeliveryDestinationComponent } from './master-data/delivery-destination/delivery-destination.component';
import { FleetConditionComponent } from './master-data/fleet-condition/fleet-condition.component';
import { FleetTypeComponent } from './master-data/fleet-type/fleet-type.component';
import { RmpmMaterialComponent } from './master-data/rmpm-material/rmpm-material.component';
import { NecessityComponent } from './master-data/necessity/necessity.component';
import { IncomingComponent } from './transactions/incoming/incoming.component';
import { DeliveryComponent } from './transactions/delivery/delivery.component';

@NgModule({
  declarations: [
    AbnormalComponent,
    DeliveryDestinationComponent,
    FleetConditionComponent,
    FleetTypeComponent,
    RmpmMaterialComponent,
    NecessityComponent,
    IncomingComponent,
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    RmpmRoutingModule
  ]
})
export class RmpmModule { }
