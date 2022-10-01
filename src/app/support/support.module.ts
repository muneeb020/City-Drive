import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {SupportPage} from './support.page';

import {SupportPageRoutingModule} from './support-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportPageRoutingModule
  ],
  declarations: [SupportPage]
})
export class SupportPageModule {
}
