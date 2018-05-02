import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') uname;
  @ViewChild('password') pword;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Hey, Listen!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value,this.pword.value)
    .then(data =>{
      console.log('got data',data)
      this.alert("Welcome to our community!");
    })
    .catch(error => {
      console.log('got an error',error)
      this.alert("Make sure your name is a valid email and your password is at least 6 characters long.")
    });

  }

}
