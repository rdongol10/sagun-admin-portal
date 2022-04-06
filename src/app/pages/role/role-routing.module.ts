import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../@core/guard/auth.guard';
import {RoleListComponent} from './role-list/role-list.component';
import {RoleNewComponent} from './role-new/role-new.component';

const routes: Routes = [
    {
        path: 'list', component: RoleListComponent, data: {
            extraParameter: 'Role List', title: 'Role List ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'new', component: RoleNewComponent, data: {
            extraParameter: 'Role new', title: 'Role new ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id', component: RoleNewComponent, data: {
            extraParameter: 'Role Edit', title: 'Role Edit ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoleRoutingModule {
}
