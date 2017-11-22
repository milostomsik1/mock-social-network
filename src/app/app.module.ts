// -- MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { HttpModule } from '@angular/http';

// -- COMPONENTS
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { FriendListItemComponent } from './user-profile/friend-list-item/friend-list-item.component';

// -- SERVICES
import { UsersService } from './_services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserProfileComponent,
    UserListItemComponent,
    FriendListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
