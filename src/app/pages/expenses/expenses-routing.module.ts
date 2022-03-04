import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpensesListComponent} from './expenses-list/expenses-list.component';

const routes: Routes = [
    {path: 'list', component: ExpensesListComponent, data: {extraParameter: 'sales list', title: 'sales list'}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpensesRoutingModule {
}
