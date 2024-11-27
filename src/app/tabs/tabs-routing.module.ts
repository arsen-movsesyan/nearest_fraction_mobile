import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'to-binary',
        loadChildren: () => import('../to-binary/to-binary.module').then(m => m.ToBinaryPageModule)
      },
      {
        path: 'to-decimal',
        loadChildren: () => import('../to-decimal/to-decimal.module').then(m => m.ToDecimalPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/to-decimal',
        pathMatch: 'full'
      }
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
