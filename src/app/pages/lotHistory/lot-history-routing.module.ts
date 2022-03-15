import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotHistoryListComponent} from './lot-history-list/lot-history-list.component';
import {AuthGuard} from '../../@core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'list',
        component: LotHistoryListComponent,
        data: {extraParameter: 'Lot History List', title: 'Lot History List'},
        canActivate: [AuthGuard]
    },
    {
        path: 'list/productId/:productId',
        component: LotHistoryListComponent,
        data: {extraParameter: 'Lot History List', title: 'Lot History List'},
        canActivate: [AuthGuard]
    },
    {
        path: 'list/lotId/:lotId',
        component: LotHistoryListComponent,
        data: {extraParameter: 'Lot History List', title: 'Lot History List'},
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LotHistoryRoutingModule {
}
