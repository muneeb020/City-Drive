import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntercityPage} from './intercity.page';

const routes: Routes = [
  {
    path: '',
    component: IntercityPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntercityPageRoutingModule {
}
