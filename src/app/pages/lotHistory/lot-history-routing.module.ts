import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotHistoryListComponent} from './lot-history-list/lot-history-list.component';

const routes: Routes = [
    {path: 'list', component: LotHistoryListComponent, data: {extraParameter: 'Lot History List'}},
    {path: 'list/productId/:productId', component: LotHistoryListComponent, data: {extraParameter: 'Lot History List'}},
    {path: 'list/lotId/:lotId', component: LotHistoryListComponent, data: {extraParameter: 'Lot History List'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LotHistoryRoutingModule {
}
