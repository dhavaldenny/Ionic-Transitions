import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, private nativePageTransitioons : NativePageTransitions) {
  }

  slidePage(){
    let options : NativeTransitionOptions = {
      direction:'left',
      duration:400,
      slowdownfactor:-1,
      iosdelay : 50
    };
      this.nativePageTransitioons.slide(options);
      this.navCtrl.push('ContactPage');
  }

  fadePage(){
    
      this.nativePageTransitioons.fade(null);
      this.navCtrl.setRoot('ContactPage');
  }

  flipPage(){
    let options : NativeTransitionOptions = {
      direction:'up',
      duration:600,
     
    };
      this.nativePageTransitioons.flip(options);
      ///this.navCtrl.setRoot('ContactPage');
      this.navCtrl.push('ContactPage');
  }

  curlPage(){
    let options : NativeTransitionOptions = {
      direction:'up',
      duration:600,
    };
      this.nativePageTransitioons.curl(options);
      this.navCtrl.setRoot('ContactPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
