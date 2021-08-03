import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './main/users/users.component';
import { AdduserComponent } from './main/adduser/adduser.component';
import { CreateuserComponent } from './main/createuser/createuser.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './main/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdduserComponent,
    CreateuserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
