import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserNewComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
      FormsModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
