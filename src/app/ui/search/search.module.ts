import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';
import { GeniusFormsModule } from './../../core/modules/genius-forms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    GeniusFormsModule,
    ThirdPartyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
