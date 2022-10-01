import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
})
export class HistoryPage {

  constructor(private navCtrl: NavController) {
  }

  back() {
    this.navCtrl.navigateForward('/calculator');
  }
}
