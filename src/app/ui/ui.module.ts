import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { CoreModule } from '../core/modules/core.module';
import { RouterModule, Routes } from '@angular/router';
import { GeniusFormsModule } from '../core/modules/genius-forms.module';
import { ThirdPartyModule } from '../core/modules/third-party.module';
const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: 'vacancies',
        loadChildren: () => import('./vacancyComponent/vacancy.module').then(o => o.VacancyModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./usersComponent/users.module').then(o => o.UsersModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(o => o.SearchModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'vacancies'
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
  declarations: [UiComponent]
})
export class UiModule { }
