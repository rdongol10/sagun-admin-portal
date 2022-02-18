import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SalesRoutingModule} from './sales-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import { SalesNewComponent } from './sales-new/sales-new.component';


@NgModule({
    declarations: [
    SalesNewComponent
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
