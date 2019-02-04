import { Component } from '@angular/core';

import { AppareilsPage } from '../appareils/appareils';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  appareilsPage = AppareilsPage;

  constructor(
    private menuCtrl: MenuController) {}



  onToggleMenu() {
    this.menuCtrl.open();
  }


}
