import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {FaqPage} from './faq.page';

import {FaqPageRoutingModule} from './faq-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqPageRoutingModule
  ],
  declarations: [FaqPage]
})
export class FaqPageModule {
}
