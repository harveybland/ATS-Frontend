import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeniusFormsModule } from 'src/app/core/modules/genius-forms.module';
import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './userList/userList.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'users/user/:id',
        component: UserComponent
      },
      {
        path: '',
        redirectTo: 'users'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    GeniusFormsModule,
    ThirdPartyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsersComponent,
    UserComponent,
    UserListComponent
  ]
})
export class UsersModule { }
