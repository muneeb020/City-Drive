import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DrivermodePage} from './drivermode.page';
import {DrivermodePageRoutingModule} from './drivermode-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DrivermodePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DrivermodePage]
})
export class DrivermodePageModule {
}
