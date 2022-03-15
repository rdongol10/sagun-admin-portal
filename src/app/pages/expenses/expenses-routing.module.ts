import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpensesListComponent} from './expenses-list/expenses-list.component';
import {ExpensesNewComponent} from './expenses-new/expenses-new.component';
import {AuthGuard} from '../../@core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'new', component: ExpensesNewComponent, data: {extraParameter: 'expenses new', title: 'expenses new'},
        canActivate: [AuthGuard]
    },
    {
        path: 'list', component: ExpensesListComponent, data: {extraParameter: 'expenses list', title: 'expenses list'},
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id',
        component: ExpensesNewComponent,
        data: {extraParameter: 'expenses edit', title: 'expenses edit'},
        canActivate: [AuthGuard]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpensesRoutingModule {
}
