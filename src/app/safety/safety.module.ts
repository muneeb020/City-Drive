import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {SafetyPage} from './safety.page';

import {SafetyPageRoutingModule} from './safety-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafetyPageRoutingModule
  ],
  declarations: [SafetyPage]
})
export class SafetyPageModule {
}
