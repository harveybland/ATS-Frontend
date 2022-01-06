import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeniusFormsModule } from 'src/app/core/modules/genius-forms.module';
import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
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
        path: 'users/:id',
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
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsersComponent,
    UserListComponent
  ]
})
export class UsersModule { }
