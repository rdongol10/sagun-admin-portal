import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchaseListComponent} from './purchase-list/purchase-list.component';

const routes: Routes = [
  // {path: 'new', component: SalesNewComponent, data: {extraParameter: 'sales New', title: 'sales New'}},
  {path: 'list', component: PurchaseListComponent, data: {extraParameter: 'purchase list', title: 'purchase list'}},
  // {path: 'edit/:id', component: SalesNewComponent, data: {extraParameter: 'sales edit', title: 'sales edit'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
