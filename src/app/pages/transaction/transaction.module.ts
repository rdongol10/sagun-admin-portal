import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { PaidTransactionComponent } from './paid-transaction/paid-transaction.component';
import {SharedModule} from '../../shared/shared.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';


@NgModule({
  declarations: [
    PaidTransactionComponent,
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    SharedModule
  ]
})
export class TransactionModule { }
