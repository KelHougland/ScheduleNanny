import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') pword;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Welcome!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser(){

    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.pword.value)
    .then(data =>{
      console.log('got data',this.fire.auth.currentUser)
    this.alert("Success! You're logged in!");
    })
    .catch(error => {
      console.log('got an error',error)
      this.alert("Please check your Username and Password!");

    });

  }

}
