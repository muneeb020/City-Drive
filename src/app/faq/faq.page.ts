import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'faq.page.html',
  styleUrls: ['faq.page.scss'],
})
export class FaqPage {

  constructor(private navCtrl: NavController) {
  }

  back() {
    this.navCtrl.navigateForward('/calculator');
  }
}
