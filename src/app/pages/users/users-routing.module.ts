import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserNewComponent} from './user-new/user-new.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {AuthGuard} from '../../@core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'list', component: UserListComponent, data: {
            extraParameter: 'User List', title: 'User List ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'new', component: UserNewComponent, data: {
            extraParameter: 'User New', title: 'User New ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id', component: UserNewComponent, data: {
            extraParameter: 'User Edit', title: 'User Edit ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'profile', component: UserProfileComponent, data: {
            extraParameter: 'User Profile', title: 'User Profile ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'updatePassword', component: ChangePasswordComponent, data: {
            extraParameter: 'Change password', title: 'Change password ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
