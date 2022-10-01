import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ProfilePageModule} from "./profile/profile.module";

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorPageModule)
  },
  {
    path: 'drivermode',
    loadChildren: () => import('./drivermode/drivermode.module').then(m => m.DrivermodePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then(m => m.CityPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'safety',
    loadChildren: () => import('./safety/safety.module').then(m => m.SafetyPageModule)
  },
  {
    path: 'intercity',
    loadChildren: () => import('./intercity/intercity.module').then(m => m.IntercityPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
