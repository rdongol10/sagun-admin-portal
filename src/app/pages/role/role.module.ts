import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import {SharedModule} from '../../shared/shared.module';
import { RoleNewComponent } from './role-new/role-new.component';


@NgModule({
  declarations: [
    RoleListComponent,
    RoleNewComponent
  ],
    imports: [
        CommonModule,
        RoleRoutingModule,
        SharedModule
    ]
})
export class RoleModule { }
