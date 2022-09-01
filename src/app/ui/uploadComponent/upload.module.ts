import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';
import { GeniusFormsModule } from 'src/app/core/modules/genius-forms.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    GeniusFormsModule,
    ThirdPartyModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
