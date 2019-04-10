import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserPageComponent } from './pages/user-page/user-page.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule, RouterModule, UsersRoutingModule,
    HttpClientModule
  ]
})
export class UsersModule { }
