import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VacancyComponent } from './vacancy.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { CreateEditVacancyComponent } from './create-edit-vacancy/create-edit-vacancy.component';

import { GeniusFormsModule } from 'src/app/core/modules/genius-forms.module';
import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';

const routes: Routes = [
  {
    path: '',
    component: VacancyComponent,
    children: [
      {
        path: 'vacancies',
        component: VacanciesComponent
      },
      {
        path: 'create',
        component: CreateEditVacancyComponent
      },
      {
        path: ':id',
        component: CreateEditVacancyComponent
      },
      {
        path: '',
        redirectTo: 'vacancies'
      },
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
    VacancyComponent,
    VacanciesComponent,
    CreateEditVacancyComponent
  ]
})
export class VacancyModule { }
