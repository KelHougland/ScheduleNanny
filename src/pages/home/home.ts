import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('username') uname;
  @ViewChild('password') pword;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn() {

    if(this.uname.value=="admin" && this.pword.value =="admin"){
      let alert = this.alertCtrl.create({
        title: 'Login Successful',
        subTitle: 'You are Logged In.',
        buttons: ['OK']
      });
      alert.present();
    }

  }

}
