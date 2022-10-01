import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  profile: string;
  firstName: string;
  lastName: string;
  eventName: string;

  constructor(private navCtrl: NavController) {
  }

  back() {
    this.navCtrl.navigateForward('/calculator');
  }

  onFileSelected($event: Event) {

  }

  avatar() {

  }

  save() {

  }
}
