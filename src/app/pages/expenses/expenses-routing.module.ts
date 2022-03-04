import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpensesListComponent} from './expenses-list/expenses-list.component';
import {ExpensesNewComponent} from './expenses-new/expenses-new.component';

const routes: Routes = [
    {path: 'new', component: ExpensesNewComponent, data: {extraParameter: 'expenses new', title: 'expenses new'}},
    {path: 'list', component: ExpensesListComponent, data: {extraParameter: 'expenses list', title: 'expenses list'}},
    {path: 'edit/:id', component: ExpensesNewComponent, data: {extraParameter: 'expenses edit', title: 'expenses edit'}},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpensesRoutingModule {
}
