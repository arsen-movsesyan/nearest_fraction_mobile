import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDecimalPage } from './to-decimal.page';

const routes: Routes = [
  {
    path: '',
    component: ToDecimalPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDecimalRoutingModule {}
