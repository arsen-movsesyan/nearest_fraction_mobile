import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {ToBinaryPage} from "./to-binary/to-binary.page";
import {ToDecimalPage} from "./to-decimal/to-decimal.page";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'to-binary',
        component: ToBinaryPage,
      },
      {
        path: 'to-decimal',
        component: ToDecimalPage,
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/to-binary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
