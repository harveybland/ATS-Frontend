import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GeniusFormsModule } from 'src/app/core/modules/genius-forms.module';
import { ThirdPartyModule } from 'src/app/core/modules/third-party.module';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    GeniusFormsModule,
    ThirdPartyModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }
