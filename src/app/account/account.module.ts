import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { GeniusFormsModule } from '../core/modules/genius-forms.module';
import { CoreModule } from '../core/modules/core.module';
import { ThirdPartyModule } from '../core/modules/third-party.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    GeniusFormsModule,
    CoreModule,
    ThirdPartyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CreateAccountComponent
  ]
})
export class AccountModule { }
