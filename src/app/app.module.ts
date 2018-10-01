import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ContactPage } from '../pages/contact/contact';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { ContactPageModule } from '../pages/contact/contact.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ContactPage
  ],
  imports: [
    BrowserModule,
    ContactPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage
  ],

  providers: [
    StatusBar,
    NativePageTransitions,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
