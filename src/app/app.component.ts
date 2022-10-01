import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire/compat';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    AngularFireModule.initializeApp(environment.firebaseConfig);
  }

  initializeApp(firebase: any) {
    this.platform.ready().then(() => {
    });
  }
}
