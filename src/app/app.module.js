"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var _404_component_1 = require("./404.component");
var contact_component_1 = require("./contact.component");
var app_component_1 = require("./app.component");
var lines_component_1 = require("./lines.component");
var bean_component_1 = require("./bean.component");
var kokan_component_1 = require("./kokan.component");
var appRoutes = [
    { path: '', component: kokan_component_1.KokanComponent, data: { title: 'Heroes List' } },
    { path: 'контакты', component: contact_component_1.ContactComponent },
    { path: 'переработка_ягод_фруктов_овощей', component: lines_component_1.LinesComponent },
    { path: 'shnekovyi_konveer_pt-50', component: lines_component_1.LinesComponent },
    { path: 'rolang_rg-01', component: lines_component_1.LinesComponent },
    { path: 'rolang_rg-02', component: lines_component_1.LinesComponent },
    { path: 'rolang_rg-50', component: lines_component_1.LinesComponent },
    { path: 'vejalka_d-01', component: lines_component_1.LinesComponent },
    { path: 'vibratsionnyi_kalibrator_vg-08', component: lines_component_1.LinesComponent },
    { path: 'barbotazhnaja_moechnaja_mashyna_br-02', component: lines_component_1.LinesComponent },
    { path: 'valchatyi_kalibrator_sk-01', component: lines_component_1.LinesComponent },
    { path: 'vibrostol_v-2', component: lines_component_1.LinesComponent },
    { path: 'vertikalnyi_ekstraktor_vp-01', component: lines_component_1.LinesComponent },
    { path: 'mashina_udalenija_cherenkov_p-01', component: lines_component_1.LinesComponent },
    { path: 'mashina_gruboi_ochistki_b1-01', component: lines_component_1.LinesComponent },
    { path: 'mashina_tonkoi_ochistki_b2-01', component: lines_component_1.LinesComponent },
    { path: 'inspekcionnyi_transporter_it-01', component: lines_component_1.LinesComponent },
    { path: 'inspekcionnyi_transporter_it-03', component: lines_component_1.LinesComponent },
    { path: 'lentochnyi_transporter_tt-01', component: lines_component_1.LinesComponent },
    { path: 'lentochnyi_transporter_tt-33', component: lines_component_1.LinesComponent },
    { path: 'lentochnyi_transporter_tt-50', component: lines_component_1.LinesComponent },
    { path: 'lentochnyi_transporter_tt-83', component: lines_component_1.LinesComponent },
    { path: 'zapaischik_plenki_pvh', component: lines_component_1.LinesComponent },
    { path: 'nastil_dlia_ustanovki_linii', component: lines_component_1.LinesComponent },
    { path: 'комбайны_для_уборки_бобовых', component: bean_component_1.BeanComponent },
    { path: 'c200_peanut_digger', component: bean_component_1.BeanComponent },
    { path: 'manual_master', component: bean_component_1.BeanComponent },
    { path: 'double_master_iv', component: bean_component_1.BeanComponent },
    { path: 'double_master_ii', component: bean_component_1.BeanComponent },
    { path: 'sweere_bean_cutter', component: bean_component_1.BeanComponent },
    { path: 'ceiflex_bean_cutter', component: bean_component_1.BeanComponent },
    { path: '**', component: _404_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes), platform_browser_1.BrowserModule],
        declarations: [_404_component_1.PageNotFoundComponent, contact_component_1.ContactComponent, app_component_1.AppComponent, kokan_component_1.KokanComponent, lines_component_1.LinesComponent, bean_component_1.BeanComponent],
        providers: [platform_browser_1.Title],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map