import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IncomeListComponent} from './income-list/income-list.component';
import {IncomeNewComponent} from './income-new/income-new.component';
import {AuthGuard} from '../../@core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'new',
        component: IncomeNewComponent,
        data: {extraParameter: 'Income New', title: 'Income New'},
        canActivate: [AuthGuard]
    },
    {
        path: 'list',
        component: IncomeListComponent,
        data: {extraParameter: 'Income List', title: 'Income List'},
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncomeRoutingModule {
}
