import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LotListComponent} from './lot-list/lot-list.component';
import {AuthGuard} from '../../@core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'list', component: LotListComponent, data: {extraParameter: 'Lot List', title: 'Lot List'},
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LotRoutingModule {
}
