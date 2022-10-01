import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {IntercityPage} from './intercity.page';

import {IntercityPageRoutingModule} from './intercity-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntercityPageRoutingModule
  ],
  declarations: [IntercityPage]
})
export class IntercityPageModule {
}
