webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_appareil_single_appareil__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_appareils_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appareil_form_appareil_form__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppareilsPage = /** @class */ (function () {
    function AppareilsPage(modalCtrl, appareilsService, menuCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.appareilsService = appareilsService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
    }
    AppareilsPage.prototype.ionViewWillEnter = function () {
        this.appareilsList = this.appareilsService.appareilsList.slice();
    };
    AppareilsPage.prototype.onLoadAppareil = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__single_appareil_single_appareil__["a" /* SingleAppareilPage */], { index: index });
        modal.present();
    };
    AppareilsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    AppareilsPage.prototype.onNewAppareil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__appareil_form_appareil_form__["a" /* AppareilFormPage */]);
    };
    AppareilsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appareils',template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\pages\appareils\appareils.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Appareils</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list> -->\n\n    <!-- <button ion-item *ngFor="let appareil of appareilsList" (click)="onLoadAppareil(appareil.name)">\n\n      {{ appareil.name }}\n\n    </button> -->\n\n\n\n    <!-- <button ion-item *ngFor="let appareil of appareilsList" (click)="onLoadAppareil(appareil)">\n\n      {{ appareil.name }}\n\n</button>\n\n  </ion-list>\n\n</ion-content> -->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="onToggleMenu()">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n    <ion-title>Appareils</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item\n\n            icon-start\n\n            *ngFor="let appareil of appareilsList; let i = index"\n\n            (click)="onLoadAppareil(i)">\n\n      <ion-icon name="power" [color]="appareil.isOn ? \'secondary\' : \'danger\'"></ion-icon>\n\n      {{ appareil.name }}\n\n    </button>\n\n  </ion-list>\n\n  <button ion-button full (click)="onNewAppareil()">Nouvel appareil</button>\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n  <p>Bas de page</p>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\pages\appareils\appareils.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__services_appareils_service__["a" /* AppareilsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AppareilsPage);
    return AppareilsPage;
}());

//# sourceMappingURL=appareils.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsPage = /** @class */ (function () {
    function OptionsPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    OptionsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\pages\options\options.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="onToggleMenu()">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n    <ion-title>Options</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>Modifiez les options de l\'application ici !</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\pages\options\options.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appareils_appareils__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.appareilsPage = __WEBPACK_IMPORTED_MODULE_1__appareils_appareils__["a" /* AppareilsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="appareilsPage" tabTitle="Appareils" tabIcon="bulb"></ion-tab>\n\n  <ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\pages\tabs\tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleAppareilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_appareils_service__ = __webpack_require__(98);
// import { Component, OnInit } from '@angular/core';
// import { NavParams, ViewController } from 'ionic-angular';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'page-single-appareil',
//template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\pages\appareils\single-appareil\single-appareil.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n\n    </ion-buttons>\n\n    <ion-title>{{ appareil.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>{{ appareil.name }}</ion-card-header>\n\n    <ion-card-content>\n\n      <p *ngFor="let line of appareil.description">{{ line }}</p>\n\n    </ion-card-content>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button full color="danger">Eteindre</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button full color="secondary">Allumer</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content> -->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n\n    </ion-buttons>\n\n    <ion-title>{{ appareil.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card [ngClass]="{\'is-on\': appareil.isOn, \'is-off\': !appareil.isOn}">\n\n    <ion-card-header>{{ appareil.name }}</ion-card-header>\n\n    <ion-card-content>\n\n      <p *ngFor="let line of appareil.description">{{ line }}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button\n\n          ion-button\n\n          full\n\n          color="danger"\n\n          [disabled]="!appareil.isOn"\n\n          (click)="onToggleAppareil()">Eteindre</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button\n\n          ion-button\n\n          full\n\n          color="secondary"\n\n          [disabled]="appareil.isOn"\n\n          (click)="onToggleAppareil()">Allumer</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <form #f="ngForm" (ngSubmit)="functionName(f)">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>Heure d\'allumage</ion-label>\n\n        <ion-datetime displayFormat="HH:mm"\n\n             pickerFormat="" \n\n             name="startTime"\n\n             [(ngModel)]="appareil.startTime"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Heure d\'extinction</ion-label>\n\n        <ion-datetime displayFormat="HH:mm" \n\n                      pickerFormat="" \n\n                      name="endTime"  \n\n                      [(ngModel)]="appareil.endTime"></ion-datetime>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button type="button" full  color="danger" (click)="onDeleteHours()">Supprimer horaires</button>\n\n     <button ion-button  type="submit" full color="secondary" > Enregistre horaires</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\pages\appareils\single-appareil\single-appareil.html"*/,
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



var SingleAppareilPage = /** @class */ (function () {
    function SingleAppareilPage(navParams, viewCtrl, appareilsService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appareilsService = appareilsService;
    }
    SingleAppareilPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.appareil = this.appareilsService.appareilsList[this.index];
    };
    SingleAppareilPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    SingleAppareilPage.prototype.onToggleAppareil = function () {
        this.appareil.isOn = !this.appareil.isOn;
    };
    SingleAppareilPage.prototype.functionName = function (form) {
        console.log(form.value);
        this.dismissModal();
    };
    SingleAppareilPage.prototype.onDeleteHours = function () {
        this.appareil.startTime = '';
        this.appareil.endTime = '';
        this.dismissModal();
    };
    SingleAppareilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-appareil',template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\pages\appareils\single-appareil\single-appareil.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n\n    </ion-buttons>\n\n    <ion-title>{{ appareil.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>{{ appareil.name }}</ion-card-header>\n\n    <ion-card-content>\n\n      <p *ngFor="let line of appareil.description">{{ line }}</p>\n\n    </ion-card-content>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button full color="danger">Eteindre</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button full color="secondary">Allumer</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content> -->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n\n    </ion-buttons>\n\n    <ion-title>{{ appareil.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card [ngClass]="{\'is-on\': appareil.isOn, \'is-off\': !appareil.isOn}">\n\n    <ion-card-header>{{ appareil.name }}</ion-card-header>\n\n    <ion-card-content>\n\n      <p *ngFor="let line of appareil.description">{{ line }}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button\n\n          ion-button\n\n          full\n\n          color="danger"\n\n          [disabled]="!appareil.isOn"\n\n          (click)="onToggleAppareil()">Eteindre</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button\n\n          ion-button\n\n          full\n\n          color="secondary"\n\n          [disabled]="appareil.isOn"\n\n          (click)="onToggleAppareil()">Allumer</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <form #f="ngForm" (ngSubmit)="functionName(f)">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>Heure d\'allumage</ion-label>\n\n        <ion-datetime displayFormat="HH:mm"\n\n             pickerFormat="" \n\n             name="startTime"\n\n             [(ngModel)]="appareil.startTime"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Heure d\'extinction</ion-label>\n\n        <ion-datetime displayFormat="HH:mm" \n\n                      pickerFormat="" \n\n                      name="endTime"  \n\n                      [(ngModel)]="appareil.endTime"></ion-datetime>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button type="button" full  color="danger" (click)="onDeleteHours()">Supprimer horaires</button>\n\n     <button ion-button  type="submit" full color="secondary" > Enregistre horaires</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\pages\appareils\single-appareil\single-appareil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_appareils_service__["a" /* AppareilsService */]])
    ], SingleAppareilPage);
    return SingleAppareilPage;
}());

//# sourceMappingURL=single-appareil.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppareilFormPage = /** @class */ (function () {
    function AppareilFormPage(formBuilder) {
        this.formBuilder = formBuilder;
    }
    AppareilFormPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    AppareilFormPage.prototype.initForm = function () {
        this.appareilForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            description: this.formBuilder.array([]),
        });
    };
    AppareilFormPage.prototype.getDescriptionArray = function () {
        return this.appareilForm.get('description');
    };
    AppareilFormPage.prototype.onAddDescription = function () {
        var newControl = this.formBuilder.control('');
        this.getDescriptionArray().controls.push(newControl);
    };
    AppareilFormPage.prototype.onRemoveDescription = function (index) {
        this.getDescriptionArray().removeAt(index);
    };
    AppareilFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page_appareil-form',template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\pages\appareil-form\appareil-form.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Nouvel appareil</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="appareilForm">\n\n        <ion-list >\n\n            <ion-list-header>ionformation</ion-list-header>\n\n            <ion-item>\n\n                <ion-label>Nom</ion-label>\n\n                <ion-input type="text" placeholder="Appareil" formControlName="name"></ion-input>\n\n            </ion-item>\n\n            <ion-item-divider>Description</ion-item-divider>\n\n            <div formArrayName="description">\n\n                <ion-item *ngFor="let control of getDescriptionArray().controls; let i = index">\n\n                    <ion-icon item-start\n\n                    name="remove-circle"\n\n                    color="danger"\n\n                    (click)="onRemoveDescription(i)">\n\n                    </ion-icon>\n\n                    <ion-input [formControlName]="i" placeholder="{{ i+1 }}."></ion-input>\n\n                </ion-item>\n\n            </div>\n\n        </ion-list>\n\n        <button ion-button full (click)="onAddDescription()">Ajouter une ligne</button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\pages\appareil-form\appareil-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AppareilFormPage);
    return AppareilFormPage;
}());

//# sourceMappingURL=appareil-form.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(alertCtrl, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
    }
    SettingsPage.prototype.onToggleLights = function () {
        var alert = this.alertCtrl.create({
            title: 'Êtes-vous certain(e) de vouloir continuer ?',
            subTitle: 'Cette action allumera ou éteindra toutes les lumières de la maison !',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel'
                },
                {
                    text: 'Confirmer',
                    handler: function () { return console.log('Confirmé !'); }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="onToggleMenu()">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n    <ion-title>Réglages</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button icon-start (click)="onToggleLights()">\n\n    <ion-icon name="power"></ion-icon>\n\n    Lumières\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_options_options__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_appareils_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_appareils_appareils__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_appareils_single_appareil_single_appareil__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appareils_appareils__["a" /* AppareilsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_appareils_single_appareil_single_appareil__["a" /* SingleAppareilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__["a" /* AppareilFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appareils_appareils__["a" /* AppareilsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_appareils_single_appareil_single_appareil__["a" /* SingleAppareilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__["a" /* AppareilFormPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_1__services_appareils_service__["a" /* AppareilsService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_options_options__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__["a" /* TabsPage */];
        this.optionsPage = __WEBPACK_IMPORTED_MODULE_0__pages_options_options__["a" /* OptionsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page) {
        this.content.setRoot(page);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item icon-start (click)="onNavigate(tabsPage)">\n\n        <ion-icon name="power"></ion-icon>\n\n        Appareils\n\n      </button>\n\n      <button ion-item icon-start (click)="onNavigate(optionsPage)">\n\n        <ion-icon name="options"></ion-icon>\n\n        Options\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="tabsPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appareils_appareils__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.appareilsPage = __WEBPACK_IMPORTED_MODULE_1__appareils_appareils__["a" /* AppareilsPage */];
    }
    HomePage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic\modesteFormationIonic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="onToggleMenu()">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Page d\'accueil\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button [navPush]="appareilsPage">Appareils</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\modesteFormationIonic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilsService; });
var AppareilsService = /** @class */ (function () {
    function AppareilsService() {
        this.appareilsList = [
            {
                name: 'Machine à laver',
                description: [
                    'Volume: 6 litres',
                    'Temps de lavage: 2 heures',
                    'Consommation: 173 kWh/an'
                ],
                isOn: true,
                startTime: '',
                endTime: '',
            },
            {
                name: 'Télévision',
                description: [
                    'Dimensions: 40 pouces',
                    'Consommation: 22 kWh/an'
                ],
                isOn: true,
                startTime: '',
                endTime: '',
            },
            {
                name: 'Ordinateur',
                description: [
                    'Marque: fait maison',
                    'Consommation: 500 kWh/an'
                ],
                isOn: false,
                startTime: '',
                endTime: '',
            }
        ];
    }
    return AppareilsService;
}());

//# sourceMappingURL=appareils.service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map