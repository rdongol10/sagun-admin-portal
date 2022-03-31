import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { PaidTransactionComponent } from './paid-transaction/paid-transaction.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    PaidTransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    SharedModule
  ]
})
export class TransactionModule { }
