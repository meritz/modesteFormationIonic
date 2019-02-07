// import { Component, OnInit } from '@angular/core';
// import { NavParams, ViewController } from 'ionic-angular';

// @Component({
//   selector: 'page-single-appareil',
//   templateUrl: 'single-appareil.html',
// })
// export class SingleAppareilPage implements OnInit {

//   appareil: {
//     name: string,
//     description: string[]
//   };

//   // constructor(public navParams: NavParams) {
//   // }

//   // ngOnInit() {
//   //   this.name = this.navParams.get('appareilName');
//   // }

//   // ngOnInit() {
//   //   this.appareil = this.navParams.get('appareil');
//   // }

//   constructor(public navParams: NavParams, public viewCtrl: ViewController) {
//   }

//   ngOnInit() {
//     this.appareil = this.navParams.get('appareil');
//   }

//   dismissModal() {
//     this.viewCtrl.dismiss();
//   }

// }


import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Appareil } from '../../../models/Appareil';
import { AppareilsService } from '../../../services/appareils.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {

  index: number;
  appareil: Appareil;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public appareilsService: AppareilsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }

  functionName( form: NgForm) {
    console.log(form.value);
    this.dismissModal();
  }

  onDeleteHours(){
    this.appareil.startTime = '';
    this.appareil.endTime= '';
    this.dismissModal();
  }
  
}
