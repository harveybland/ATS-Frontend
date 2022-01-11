import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ui/ui.module').then(o => o.UiModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(o => o.AccountModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
