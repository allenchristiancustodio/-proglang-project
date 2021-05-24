import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'customer',
        children: [
          {
            path: '',
            loadChildren: '../customer/customer.module#CustomerPageModule'
          }
        ]
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: '../setting/setting.module#SettingPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/customer',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/customer',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}