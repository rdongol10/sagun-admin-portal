import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
      FormsModule,
      ToastrModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
