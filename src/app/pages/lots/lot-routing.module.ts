import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotListComponent} from './lot-list/lot-list.component';
import {LotNewComponent} from './lot-new/lot-new.component';

const routes: Routes = [
    {path: 'list', component: LotListComponent, data: {extraParameter: 'Lot List'}},
    {path: 'new', component: LotNewComponent, data: {extraParameter: 'New Lot'}},
    {path: 'addStock/:id', component: LotNewComponent, data: {extraParameter: 'Lot In'}}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LotRoutingModule {
}
