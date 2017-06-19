"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
    }
    AppComponent.prototype.onDeactivate = function () {
        document.body.scrollTop = 0;
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"w3-top\">\n      <ul class=\"w3-navbar w3-white w3-wide w3-padding-8 w3-card-2\">\n        <li><a routerLink=\"/\" class=\"w3-margin-left\" (click)=\"setTitle('\u041A\u043E\u043C\u0431\u0430\u0439\u043D \u0434\u043B\u044F \u0443\u0431\u043E\u0440\u043A\u0438 \u044F\u0433\u043E\u0434')\"><b>\u0421\u0424\u0413</b> \u0412\u043E\u043B\u044F</a></li>\n        <li class=\"w3-right w3-hide-small\">\n          <a routerLink=\"/\u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0430_\u044F\u0433\u043E\u0434_\u0444\u0440\u0443\u043A\u0442\u043E\u0432_\u043E\u0432\u043E\u0449\u0435\u0439\" class=\"w3-left\" (click)=\"setTitle('\u041F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u044F\u0433\u043E\u0434')\">\u042F\u0433\u043E\u0434\u044B</a>\n          <a routerLink=\"/\u043A\u043E\u043C\u0431\u0430\u0439\u043D\u044B_\u0434\u043B\u044F_\u0443\u0431\u043E\u0440\u043A\u0438_\u0431\u043E\u0431\u043E\u0432\u044B\u0445\" class=\"w3-left\" (click)=\"setTitle('\u0422\u0435\u0445\u043D\u0438\u043A\u0430 \u0434\u043B\u044F \u0443\u0431\u043E\u0440\u043A\u0438 \u0444\u0430\u0441\u043E\u043B\u0438')\">\u0424\u0430\u0441\u043E\u043B\u044C</a>\n          <a routerLink=\"/\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B\" class=\"w3-left w3-margin-right\" (click)=\"setTitle('\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B')\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>\n        </li>\n      </ul>\n    </div>\n    <router-outlet (deactivate)=\"onDeactivate()\"></router-outlet>\n    <footer class=\"w3-center w3-black w3-padding\" id=contact>\n    <p>\n      <span class=\"w3-show-inline-block\">\u041A\u0424\u0425 \u201E\u0412\u043E\u043B\u044F\u201D, 08436, \u0423\u043A\u0440\u0430\u0438\u043D\u0430, \u041A\u0438\u0435\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u041F\u0435\u0440\u0435\u044F\u0441\u043B\u0430\u0432-\u0425\u043C\u0435\u043B\u044C\u043D\u0438\u0446\u043A\u0438\u0439 \u0440-\u043D,</span>\n      <span class=\"w3-show-inline-block\">\u0421\u0442\u043E\u0432\u043F\u044C\u044F\u0437\u043A\u0438\u0439 \u0441\u0435\u043B\u044C\u0441\u043E\u0432\u0435\u0442, \u0443\u0440\u043E\u0447\u0438\u0449\u0435 \u0427\u0430\u043F\u043B\u0438\u043D, \u0443\u043B. \u041E\u0437\u0435\u0440\u043D\u0430\u044F, \u0434\u043E\u043C.1,</span>\n      <br>\n      <span class=\"w3-show-inline-block\">\u041A\u043E\u0434 20597514, \u0420/\u0440 26004000051182, \u041C\u0424\u041E 300023, \u041F\u0410\u0422 \u00AB\u0423\u043A\u0440\u0441\u043E\u0446\u0431\u0430\u043D\u043A\u00BB,</span>\n      <span class=\"w3-show-inline-block\">\u0422\u0435\u043B/\u0444\u0430\u043A\u0441 (04567) 5-84-14, 5-35-10, e-mail: <u>{{ 'sfgvolia'+'@'+'ukr.net' }}</u></span>\n    </p>\n    </footer>\n    <div id=\"modalKokan\" class=\"w3-modal w3-center\" onclick=\"this.style.display='none'\">\n      <span class=\"w3-padding w3-hover-red w3-display-topright\" style=\"cursor:pointer\">&times;</span>\n      <img id=\"kokanImg\" src='' class=\"w3-animate-zoom w3-image\">\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map