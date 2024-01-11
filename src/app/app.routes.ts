import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';


export const routes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' },

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
  })
  export class AppRoutingModule {}