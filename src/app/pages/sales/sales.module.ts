import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SalesRoutingModule} from './sales-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import { SalesNewComponent } from './sales-new/sales-new.component';
import { SalesListComponent } from './sales-list/sales-list.component';


@NgModule({
    declarations: [
    SalesNewComponent,
    SalesListComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        SalesRoutingModule
    ]
})
export class SalesModule {
}
