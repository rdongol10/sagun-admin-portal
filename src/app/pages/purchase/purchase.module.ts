import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    PurchaseListComponent
  ],
    imports: [
        CommonModule,
        PurchaseRoutingModule,
        SharedModule
    ]
})
export class PurchaseModule { }
