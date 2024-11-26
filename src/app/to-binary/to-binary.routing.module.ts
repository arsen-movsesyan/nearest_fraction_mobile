import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToBinaryComponent } from './to-binary.page';

const routes: Routes = [
  {
    path: '',
    component: ToBinaryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
