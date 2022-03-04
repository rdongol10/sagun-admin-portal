import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotListComponent} from './lot-list/lot-list.component';

const routes: Routes = [
    {path: 'list', component: LotListComponent, data: {extraParameter: 'Lot List', title: 'Lot List'}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LotRoutingModule {
}
