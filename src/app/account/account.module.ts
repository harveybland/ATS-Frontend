import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { GeniusFormsModule } from '../core/modules/genius-forms.module';
import { CoreModule } from '../core/modules/core.module';
import { ThirdPartyModule } from '../core/modules/third-party.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    GeniusFormsModule,
    CoreModule,
    ThirdPartyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
