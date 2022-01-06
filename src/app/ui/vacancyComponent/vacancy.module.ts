import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent } from './vacancy.component';
import { RouterModule, Routes } from '@angular/router';
import { GeniusFormsModule } from 'src/app/core/modules/genius-forms.module';
import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { VacancyViewComponent } from './vacancyView/vacancyView.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

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
        path: 'vacancy/vacancyView',
        component: VacancyViewComponent
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
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    VacancyComponent,
    VacanciesComponent
  ]
})
export class VacancyModule { }
