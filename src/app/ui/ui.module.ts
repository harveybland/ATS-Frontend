import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { CoreModule } from '../core/modules/core.module';
import { RouterModule, Routes } from '@angular/router';
import { GeniusFormsModule } from '../core/modules/genius-forms.module';
import { ThirdPartyModule } from '../core/modules/third-party.module';
import { MaterialModule } from '../core/modules/material.module';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(o => o.DashboardModule),
      },
      {
        path: 'vacancy',
        loadChildren: () => import('./vacancyComponent/vacancy.module').then(o => o.VacancyModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./usersComponent/users.module').then(o => o.UsersModule),
      },
      {
        path: 'posts',
        loadChildren: () => import('./postsComponent/posts.module').then(o => o.PostssModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
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
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UiComponent]
})
export class UiModule { }
