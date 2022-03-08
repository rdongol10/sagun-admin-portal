import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchaseListComponent} from './purchase-list/purchase-list.component';
import {PurchaseNewComponent} from './purchase-new/purchase-new.component';

const routes: Routes = [
    {path: 'new', component: PurchaseNewComponent, data: {extraParameter: 'purchase New', title: 'purchase New'}},
    {path: 'list', component: PurchaseListComponent, data: {extraParameter: 'purchase list', title: 'purchase list'}},
    {
        path: 'edit/:id',
        component: PurchaseNewComponent,
        data: {extraParameter: 'purchase edit', title: 'purchase edit'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchaseRoutingModule {
}
