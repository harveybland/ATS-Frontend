import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeniusFormsModule } from 'src/app/core/modules/genius-forms.module';
import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
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
        component: CreateEditUserComponent
      },
      {
        path: 'users/create',
        component: CreateEditUserComponent
      },
      {
        path: ''
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
    UserListComponent,
    CreateEditUserComponent
  ]
})
export class UsersModule { }
