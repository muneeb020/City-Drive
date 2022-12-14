import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalculatorPage} from './calculator.page';


import {CalculatorPageRoutingModule} from './calculator-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalculatorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CalculatorPage]
})
export class CalculatorPageModule {
}
