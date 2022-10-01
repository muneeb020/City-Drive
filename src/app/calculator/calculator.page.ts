import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'calculator.page.html',
  styleUrls: ['calculator.page.scss']
})
export class CalculatorPage {
  input1: any;
  input2: any;

  constructor(private navCtrl: NavController) {
  }

  driver() {
    this.navCtrl.navigateBack('/drivermode');
    console.log(navigator);
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
