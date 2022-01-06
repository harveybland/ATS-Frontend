import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNavComponent } from '../components/primary-nav/primary-nav.component';
import { SubNavComponent } from '../components/sub-nav/sub-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PrimaryNavComponent,
    SubNavComponent
  ],
  exports: [
    PrimaryNavComponent,
    SubNavComponent
  ]
})
export class CoreModule { }
