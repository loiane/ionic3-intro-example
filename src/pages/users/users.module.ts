import { UsersProvider } from './../../providers/users/users';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
    HttpModule
  ],
  exports: [
    UsersPage
  ],
  providers: [
    UsersProvider
  ]
})
export class UsersPageModule {}
