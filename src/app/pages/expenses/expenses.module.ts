import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExpensesRoutingModule} from './expenses-routing.module';
import {ExpensesNewComponent} from './expenses-new/expenses-new.component';
import {ExpensesListComponent} from './expenses-list/expenses-list.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [
        ExpensesNewComponent,
        ExpensesListComponent
    ],
    imports: [
        CommonModule,
        ExpensesRoutingModule,
        SharedModule
    ]
})
export class ExpensesModule {
}
