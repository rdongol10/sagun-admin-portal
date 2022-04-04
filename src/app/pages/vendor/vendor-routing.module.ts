import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../@core/guard/auth.guard';
import {VendorListComponent} from './vendor-list/vendor-list.component';
import {VendorNewComponent} from './vendor-new/vendor-new.component';

const routes: Routes = [
    {
        path: 'list', component: VendorListComponent, data: {
            extraParameter: 'Vendor List', title: 'Vendor List ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'new', component: VendorNewComponent, data: {
            extraParameter: 'Vendor new', title: 'Vendor new ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id', component: VendorNewComponent, data: {
            extraParameter: 'Vendor Edit', title: 'Vendor Edit ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorRoutingModule {
}
