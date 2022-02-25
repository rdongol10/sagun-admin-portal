import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserNewComponent} from './user-new/user-new.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
    {
        path: 'list', component: UserListComponent, data: {
            extraParameter: 'User List', title: 'User List ',
            headerDisplay: 'none'
        }
    },
    {
        path: 'new', component: UserNewComponent, data: {
            extraParameter: 'User New', title: 'User New ',
            headerDisplay: 'none'
        }
    },
    {
        path: 'edit/:id', component: UserNewComponent, data: {
            extraParameter: 'User Edit', title: 'User Edit ',
            headerDisplay: 'none'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
