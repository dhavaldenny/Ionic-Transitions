import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitioons : NativePageTransitions) {
   }

   goBack(){

    let options : NativeTransitionOptions = {
      direction:'down',
      duration:500,
      slowdownfactor:-1,
      slidePixels : 20
    };
      this.nativePageTransitioons.slide(options);
      this.navCtrl.setRoot('HomePage');
     
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
