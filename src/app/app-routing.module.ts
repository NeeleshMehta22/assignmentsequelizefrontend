import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './main/users/users.component';
import { AdduserComponent } from './main/adduser/adduser.component';
import { CreateuserComponent } from './main/createuser/createuser.component';
import { EditComponent } from './main/edit/edit.component';

const routes: Routes = [
  {
    path:'user-list',
    component:UsersComponent,
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'/user-list',
    pathMatch:'full'
  },
  {
    path:'adduser',
    component:AdduserComponent,
    pathMatch:'full'
  },
  {
    path:'createuser',
    component:CreateuserComponent,
    pathMatch:'full'
  },
  {
    path:'edit',
    component:EditComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
