// -- MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -- COMPONENTS
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path: ':id',
    component: UserProfileComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
