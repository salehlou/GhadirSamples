import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,

  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class AuthModule { }
