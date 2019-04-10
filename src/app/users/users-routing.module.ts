import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './pages//user-page/user-page.component';

const routes: Routes = [
  {
    path: ':userId',
    component: UserPageComponent
  },
  {
    path: '',
    component: UserPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
