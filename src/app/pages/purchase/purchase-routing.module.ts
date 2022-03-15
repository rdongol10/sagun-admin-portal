import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchaseListComponent} from './purchase-list/purchase-list.component';
import {PurchaseNewComponent} from './purchase-new/purchase-new.component';
import {AuthGuard} from '../../@core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'new', component: PurchaseNewComponent, data: {extraParameter: 'purchase New', title: 'purchase New'},
        canActivate: [AuthGuard]
    },
    {
        path: 'list', component: PurchaseListComponent, data: {extraParameter: 'purchase list', title: 'purchase list'},
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id',
        component: PurchaseNewComponent,
        data: {extraParameter: 'purchase edit', title: 'purchase edit'},
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchaseRoutingModule {
}
