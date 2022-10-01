import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DrivermodePage} from './drivermode.page';

const routes: Routes = [
  {
    path: '',
    component: DrivermodePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrivermodePageRoutingModule {
}
