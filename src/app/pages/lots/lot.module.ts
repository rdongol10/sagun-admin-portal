import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LotRoutingModule} from './lot-routing.module';
import {LotListComponent} from './lot-list/lot-list.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    LotListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LotRoutingModule
  ]
})
export class LotModule { }
