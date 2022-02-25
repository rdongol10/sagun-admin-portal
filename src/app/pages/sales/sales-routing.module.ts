import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalesNewComponent} from './sales-new/sales-new.component';
import {SalesListComponent} from './sales-list/sales-list.component';

const routes: Routes = [
    {path: 'new', component: SalesNewComponent, data: {extraParameter: 'sales New', title: 'sales New'}},
    {path: 'list', component: SalesListComponent, data: {extraParameter: 'sales list', title: 'sales list'}},
    {path: 'edit/:id', component: SalesNewComponent, data: {extraParameter: 'sales edit', title: 'sales edit'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule {
}
