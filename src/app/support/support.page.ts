import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'support.page.html',
  styleUrls: ['support.page.scss'],
})
export class SupportPage {

  constructor(private navCtrl: NavController) {
  }

  back() {
    this.navCtrl.navigateForward('/calculator');
  }
}
