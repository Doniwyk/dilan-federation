import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// MASTER DATA
import { AbnormalComponent } from './master-data/abnormal/abnormal.component';
import { DeliveryDestinationComponent } from './master-data/delivery-destination/delivery-destination.component';
import { FleetConditionComponent } from './master-data/fleet-condition/fleet-condition.component';
import { FleetTypeComponent } from './master-data/fleet-type/fleet-type.component';
import { NecessityComponent } from './master-data/necessity/necessity.component';
import { RmpmMaterialComponent } from './master-data/rmpm-material/rmpm-material.component';

// TRANSACTION
import { DeliveryComponent } from './transactions/delivery/delivery.component';
import { IncomingComponent } from './transactions/incoming/incoming.component';

const routes: Routes = [
  // INDEX MASTER DATA
  { path: 'abnormal', component: AbnormalComponent },
  { path: 'delivery-destination', component: DeliveryDestinationComponent },
  { path: 'fleet-condition', component: FleetConditionComponent },
  { path: 'fleet-type', component: FleetTypeComponent },
  { path: 'necessity', component: NecessityComponent },
  { path: 'rmpm-material', component: RmpmMaterialComponent },

  // INDEX TRANSACTION
  { path: 'rmpm-delivery', component: DeliveryComponent },
  { path: 'rmpm-incoming', component: IncomingComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RmpmRoutingModule { }
