import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'setting.page.html',
  styleUrls: ['setting.page.scss'],
})
export class SettingPage {

  constructor(private navCtrl: NavController) {
  }

  back() {
    this.navCtrl.navigateForward('/calculator');
  }

  phone() {

  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Language() {
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Date() {
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Night() {
  }

  navigator() {
  }

  rules() {
  }

  logout() {
    this.navCtrl.navigateForward('/login');
  }
}
