import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'addcustomer/:id/:name/:desc', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'showcustomer/:id/:tag/:temp/:date', loadChildren: './showcustomer/showcustomer.module#ShowcustomerPageModule' },
  { path: 'updatecustomer/:id/:tag/:date', loadChildren: './updatecustomer/updatecustomer.module#UpdatecustomerPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'tablinks', loadChildren: './tablinks/tablinks.module#TablinksPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
