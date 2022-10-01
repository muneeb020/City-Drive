import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'intercity.page.html',
  styleUrls: ['intercity.page.scss'],
})
export class IntercityPage {

  constructor(private navCtrl: NavController) {
  }

  back() {
    this.navCtrl.navigateForward('/calculator');
  }
}
