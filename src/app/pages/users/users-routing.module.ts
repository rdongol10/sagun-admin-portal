import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserNewComponent} from './user-new/user-new.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  {path: 'list', component: UserListComponent, data: {extraParameter: 'User List'}},
  {path: 'new', component: UserNewComponent, data: {extraParameter: 'User New'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
