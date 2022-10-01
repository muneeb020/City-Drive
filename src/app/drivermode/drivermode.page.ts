import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'drivermode.page.html',
  styleUrls: ['drivermode.page.scss']
})
export class DrivermodePage {
  input1: any;
  input2: any;

  constructor(
    private navCtrl: NavController,
  ) {
  }

  passenger() {
    this.navCtrl.navigateForward('/calculator');
  }

  profile() {
    this.navCtrl.navigateForward('/profile');
  }

  city() {
    this.navCtrl.navigateForward('/city');
  }

  history() {
    this.navCtrl.navigateForward('/history');
  }

  intercity() {
    this.navCtrl.navigateForward('/intercity');
  }

  safety() {
    this.navCtrl.navigateForward('/safety');
  }

  setting() {
    this.navCtrl.navigateForward('/setting');
  }

  faq() {
    this.navCtrl.navigateForward('/faq');
  }

  support() {
    this.navCtrl.navigateForward('/support');
  }
}
