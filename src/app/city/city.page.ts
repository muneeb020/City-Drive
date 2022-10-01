import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {AuthenticateService} from '../services/authentication.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  validations_form: FormGroup;
  errorMessage = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/naming-convention
  validation_messages = {
    email: [
      {type: 'required', message: 'Email is required.'},
      {type: 'pattern', message: 'Please enter a valid email.'}
    ],
    password: [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password must be at least 5 characters long.'}
    ],
  };


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.navCtrl.navigateForward('/calculator');
      }, err => {
        this.errorMessage = err.message;
      });
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

  forgetPassword() {

  }
}
