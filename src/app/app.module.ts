import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { FriendListItemComponent } from './user-profile/friend-list-item/friend-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserProfileComponent,
    UserListItemComponent,
    FriendListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
