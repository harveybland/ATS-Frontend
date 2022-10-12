import { CreateEditVacancyComponent } from './create-edit-vacancy/create-edit-vacancy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent } from './vacancy.component';
import { RouterModule, Routes } from '@angular/router';
import { GeniusFormsModule } from 'src/app/core/modules/genius-forms.module';
import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';

const routes: Routes = [
  {
    path: '',
    component: VacancyComponent,
    children: [
      {
        path: 'vacancies/:id',
        component: CreateEditVacancyComponent
      },
      {
        path: 'vacancies/create',
        component: CreateEditVacancyComponent
      },
      {
        path: '',
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
    CreateEditVacancyComponent
  ]
})
export class VacancyModule { }
