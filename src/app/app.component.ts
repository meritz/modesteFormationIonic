import { OptionsPage } from './../pages/options/options';
import { TabsPage } from './../pages/tabs/tabs';

import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 
import * as firebase from 'firebase';
import { AuthPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  authPage: any = AuthPage;

  @ViewChild('content') content: NavController;

  isAuth: boolean;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // 
      let config = {
        apiKey: "AIzaSyDMNLS3FQVHi0zmFbQykMC3L5UJRpP4Bsk",
        authDomain: "agbakoufood.firebaseapp.com",
        databaseURL: "https://agbakoufood.firebaseio.com",
        projectId: "agbakoufood",
        storageBucket: "agbakoufood.appspot.com",
        messagingSenderId: "913924381041"
      };
      firebase.initializeApp(config);
      // 
      firebase.auth().onAuthStateChanged(
        (user)=> {
          if(user){
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else{
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode:'connect'});
          }
        }
      );
      // 
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data: null);
    this.menuCtrl.close();
  }

  // onDisconnect() {
  //   firebase.auth().signOut();
  //   this.menuCtrl.close();
  // }
}

