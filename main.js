(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_hero_page_hero_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/hero-page/hero-page.component */ "./src/app/views/hero-page/hero-page.component.ts");
/* harmony import */ var _views_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/projects-page/projects-page.component */ "./src/app/views/projects-page/projects-page.component.ts");
/* harmony import */ var _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/resume-page/resume-page.component */ "./src/app/views/resume-page/resume-page.component.ts");
/* harmony import */ var _views_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/contact-page/contact-page.component */ "./src/app/views/contact-page/contact-page.component.ts");





// import { SkillsComponent } from './views/skills/skills.component';


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule_1 = AppRoutingModule;
    AppRoutingModule.AppRoutes = function () {
        return AppRoutingModule_1.routes;
    };
    var AppRoutingModule_1;
    AppRoutingModule.routes = [
        { path: '', component: _views_hero_page_hero_page_component__WEBPACK_IMPORTED_MODULE_3__["HeroPage"] },
        // { path: 'skills', component: SkillsComponent },
        { path: 'projects', component: _views_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsPage"] },
        { path: 'resume', component: _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_5__["ResumePage"] },
        { path: 'contact', component: _views_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPage"] }
    ];
    AppRoutingModule = AppRoutingModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"router-outlet-container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-main-header {\n  flex-basis: 5%; }\n\n.router-outlet-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 0; }\n\n.router-outlet-container > * {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n  margin-bottom: auto; }\n\napp-main-footer {\n  flex-basis: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXERvY3VtZW50b3NcXFBIUFxcY29kZVxccG9ydGZvbGlvLTIwMjJcXGFuZ3VsYXItcG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBRUksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuc2Nyb2xsLXdyYXBwZXIge1xyXG4vLyAgICAgZmxleC1ncm93OiAyO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLnNjcm9sbGFibGUge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IC0xMDBweDtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4vLyB9XHJcblxyXG5hcHAtbWFpbi1oZWFkZXIge1xyXG4gICAgZmxleC1iYXNpczogNSU7XHJcbn1cclxuXHJcbi5yb3V0ZXItb3V0bGV0LWNvbnRhaW5lciB7XHJcbiAgICAvLyBoZWlnaHQ6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxufVxyXG5cclxuLnJvdXRlci1vdXRsZXQtY29udGFpbmVyID4gKiB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuYXBwLW1haW4tZm9vdGVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/utils */ "./src/app/shared/utils.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-portfolio';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!_shared_utils__WEBPACK_IMPORTED_MODULE_2__["BTBrowserDetector"].browserIsSupported()) {
            alert("Para a utiliza\u00E7\u00E3o de todas as funcionalidades deste site, recomenda-se o uso de um nos navegadores a seguir: Chrome, Firefox ou Opera.");
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _views_hero_page_hero_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/hero-page/hero-page.component */ "./src/app/views/hero-page/hero-page.component.ts");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/footer/footer.component */ "./src/app/views/footer/footer.component.ts");
/* harmony import */ var _views_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/contact-page/contact-page.component */ "./src/app/views/contact-page/contact-page.component.ts");
/* harmony import */ var _views_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/projects-page/projects-page.component */ "./src/app/views/projects-page/projects-page.component.ts");
/* harmony import */ var _views_projects_page_featured_project_featured_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/projects-page/featured-project/featured-project.component */ "./src/app/views/projects-page/featured-project/featured-project.component.ts");
/* harmony import */ var _views_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/loading-spinner/loading-spinner.component */ "./src/app/views/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _views_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/skills/skills.component */ "./src/app/views/skills/skills.component.ts");
/* harmony import */ var _views_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/progress-bar/progress-bar.component */ "./src/app/views/progress-bar/progress-bar.component.ts");
/* harmony import */ var _views_skills_progress_bar_filled_filled_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/skills/progress-bar/filled/filled.component */ "./src/app/views/skills/progress-bar/filled/filled.component.ts");
/* harmony import */ var _views_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/modal/modal.component */ "./src/app/views/modal/modal.component.ts");
/* harmony import */ var _views_projects_page_minor_projects_minor_projects_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/projects-page/minor-projects/minor-projects.component */ "./src/app/views/projects-page/minor-projects/minor-projects.component.ts");
/* harmony import */ var _views_projects_page_featured_project_project_description_project_description_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/projects-page/featured-project/project-description/project-description.component */ "./src/app/views/projects-page/featured-project/project-description/project-description.component.ts");
/* harmony import */ var _views_projects_page_minor_projects_minor_project_minor_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/projects-page/minor-projects/minor-project/minor-project.component */ "./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.ts");
/* harmony import */ var _views_header_logo_logo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/header/logo/logo.component */ "./src/app/views/header/logo/logo.component.ts");
/* harmony import */ var _views_projects_page_featured_project_project_images_project_images_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/projects-page/featured-project/project-images/project-images.component */ "./src/app/views/projects-page/featured-project/project-images/project-images.component.ts");
/* harmony import */ var _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/resume-page/resume-page.component */ "./src/app/views/resume-page/resume-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_projects_page_company_projects_company_projects_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/projects-page/company-projects/company-projects.component */ "./src/app/views/projects-page/company-projects/company-projects.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _views_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _views_hero_page_hero_page_component__WEBPACK_IMPORTED_MODULE_8__["HeroPage"],
                _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _views_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsPage"],
                _views_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPage"],
                _views_projects_page_featured_project_featured_project_component__WEBPACK_IMPORTED_MODULE_12__["FeaturedProjectComponent"],
                _views_skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"],
                _views_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_15__["ProgressBarComponent"],
                _views_skills_progress_bar_filled_filled_component__WEBPACK_IMPORTED_MODULE_16__["FilledComponent"],
                _views_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_13__["LoadingSpinnerComponent"],
                _views_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"],
                _views_projects_page_minor_projects_minor_projects_component__WEBPACK_IMPORTED_MODULE_18__["MinorProjectsComponent"],
                _views_projects_page_featured_project_project_description_project_description_component__WEBPACK_IMPORTED_MODULE_19__["ProjectDescriptionComponent"],
                _views_projects_page_minor_projects_minor_project_minor_project_component__WEBPACK_IMPORTED_MODULE_20__["MinorProjectComponent"],
                _views_header_logo_logo_component__WEBPACK_IMPORTED_MODULE_21__["LogoComponent"],
                _views_projects_page_featured_project_project_images_project_images_component__WEBPACK_IMPORTED_MODULE_22__["ProjectImagesComponent"],
                _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_23__["ResumePage"],
                _views_projects_page_company_projects_company_projects_component__WEBPACK_IMPORTED_MODULE_25__["CompanyProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"].AppRoutes())
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.sendContactRequest = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/api/contact/", data, { observe: 'response' }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.ok];
                }
            });
        });
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.featuredMocks = [
            {
                "projectId": 1,
                "titulo": "MFA App",
                "techUsed": [
                    "NodeJS",
                    "ReactJS",
                    "Typescript",
                    "Kafka",
                    "MongoDB",
                    "Jest",
                    "React Testing Library",
                    "Redis",
                    "MySQL",
                    "Docker",
                ],
                "gitUrl": "https://github.com/batistaTiago/typescript-kafka-clean-api",
                "imageUrls": [
                    "/assets/images/mfa-app/home.jpeg",
                    "/assets/images/mfa-app/signup.jpeg",
                    "/assets/images/mfa-app/login.jpeg",
                    "/assets/images/mfa-app/notfound.jpeg",
                ],
                "colabs": [
                    {
                        nome: 'Nicholas Tavares',
                        gitUrlProfile: 'https://github.com/NicholasTavares'
                    }
                ],
                "status": "Under construction",
                "percentageComplete": 65,
                "realProject": true,
                "description": "Multi-factor Authentication (MFA) is an authentication method that requires the user to provide two or more verification factors to gain access to a resource. This app can be used to serve as a MFA provider.",
                "deployUrl": null
            },
        ];
        this.minorMocks = [
            {
                "projectId": 1,
                "titulo": "Pássaro Urbano",
                "techUsed": [
                    "HTML",
                    "CSS",
                    "TypeScript",
                    "Bootstrap",
                    "jQuery",
                    "Angular",
                    "Firebase"
                ],
                "gitUrl": "https://github.com/batistatiago/passaro-urbano",
                "imageUrls": ["/assets/images/passaro-urbano/passaro-urbano1.png"],
            },
            {
                "projectId": 2,
                "titulo": "Natal Empregos",
                "techUsed": [
                    "Laravel",
                    "MySQL",
                    "jQuery",
                    "Docker"
                ],
                "gitUrl": "https://github.com/batistatiago/natal-empregos-containerized",
                "imageUrls": ["/assets/images/natal-empregos/NE-1.png"],
            },
            {
                "projectId": 3,
                "titulo": "Spotify Clone",
                "techUsed": [
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "jQuery"
                ],
                "gitUrl": "https://github.com/batistaTiago/web-module-1/tree/master/spotify-clone",
                "imageUrls": ["/assets/images/minor-projects/spotify-clone/1.png"],
            },
            {
                "projectId": 4,
                "titulo": "Mountain Travel",
                "techUsed": [
                    "HTML",
                    "CSS"
                ],
                "gitUrl": "https://github.com/batistaTiago/web-module-4/tree/master/mountains-project",
                "imageUrls": ["/assets/images/minor-projects/mountain-travel/1.png"],
            }
        ];
        // @@TODO: colocar varios paragrafos dinamicamente para cada linha do campo description
        this.companyMocks = [
            {
                "projectId": 1,
                "titulo": "TMS Olist Pax",
                "techUsed": [
                    "Laravel",
                    "MySQL",
                    "Kafka",
                    "Redis",
                    "Docker",
                    "Kubernetes",
                    "Gitlab CI",
                    "AWS",
                ],
                "description": "\n                Nation-wide TMS (Transportation Management System). Serves as a logistics gate for many e-commerce and marketplaces, such as Amazon, Shopee, Carrefour, VTEX, among others. The system is responsible for all the logistics management, from driver onboarding and payment to the PnD (Pickup and Delivery) operation itself.\n                The operations run at around 50 thousand packages a day, working 24 hours a day and 7 days a week.\n            ",
                "deployUrl": "https://olistpax.com",
                "companyName": "Olist Serviços Digitais"
            },
            {
                "projectId": 2,
                "titulo": "LessClick Ticketing",
                "techUsed": [
                    "Laravel",
                    "MySQL",
                    "jQuery",
                    "SASS",
                    "Redis",
                    "Firebase",
                    "Google Pay",
                ],
                "description": "\n                Ticketing system responsible for selling events at Arena das Dunas (Natal/RN), Arena Fonte Nova (Salvador/BA) and Arena Portoalegrense (Porto Alegre/RS) stadiums, in addition to other independent C2C event producers. The system has around 400 thousand users, adding up to the general audience of the 3 stadiums, but a typical soccer match sells around 50 thousand tickets.\n                In this project, I was mainly responsible for all of the architecture and back-end development of of the system, including as database modeling, REST API development, integrations with third-party services (PayPal, GooglePay, GoogleMaps, GetNet, ClearSale, Firebase, and others), authentication (and authorization).\n                I was also responsible for most of the front-end development of the management module, which has reports, dashboards, event and  tickets settings as well as for managing the staging infrastructure (AWS) used.\n            ",
                "deployUrl": "https://web.lessclick.com.br",
                "companyName": "LessClick"
            }
        ];
    }
    ProjectService.prototype.getFeaturedProjects = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.featuredMocks];
            });
        });
    };
    ProjectService.prototype.getMinorProjects = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.minorMocks];
            });
        });
    };
    ProjectService.prototype.getCompanyProjects = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.companyMocks];
            });
        });
    };
    ProjectService.prototype.getProjects = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var featuredProjects, minorProjects, companyProjects;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFeaturedProjects()];
                    case 1:
                        featuredProjects = _a.sent();
                        return [4 /*yield*/, this.getMinorProjects()];
                    case 2:
                        minorProjects = _a.sent();
                        return [4 /*yield*/, this.getCompanyProjects()];
                    case 3:
                        companyProjects = _a.sent();
                        return [2 /*return*/, [featuredProjects, minorProjects, companyProjects]];
                }
            });
        });
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/shared/animation-manager.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/animation-manager.ts ***!
  \*********************************************/
/*! exports provided: BTAnimationManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTAnimationManager", function() { return BTAnimationManager; });
var BTAnimationManager = /** @class */ (function () {
    function BTAnimationManager() {
    }
    BTAnimationManager.getInstance = function () {
        if (BTAnimationManager.instance === undefined) {
            BTAnimationManager.instance = new BTAnimationManager();
        }
        return BTAnimationManager.instance;
    };
    BTAnimationManager.prototype.shouldAnimateHeader = function () {
        return !BTAnimationManager.headerHasBeenAnimated;
    };
    BTAnimationManager.prototype.shouldAnimateHeroPage = function () {
        return !BTAnimationManager.heroPageHasBeenAnimated;
    };
    BTAnimationManager.prototype.shouldAnimateContactPage = function () {
        return !BTAnimationManager.contactPageHasBeenAnimated;
    };
    BTAnimationManager.prototype.animationDidFinish = function (event) {
        var target = event.target;
        if (target.classList.contains('titles-container-animation')) {
            BTAnimationManager.heroPageHasBeenAnimated = true;
        }
        else if (target.classList.contains('form-animation')) {
            BTAnimationManager.contactPageHasBeenAnimated = true;
        }
    };
    BTAnimationManager.heroPageHasBeenAnimated = false;
    BTAnimationManager.headerHasBeenAnimated = false;
    BTAnimationManager.contactPageHasBeenAnimated = false;
    return BTAnimationManager;
}());



/***/ }),

/***/ "./src/app/shared/contact-form-validator.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/contact-form-validator.ts ***!
  \**************************************************/
/*! exports provided: ContactFormValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormValidator", function() { return ContactFormValidator; });
/* harmony import */ var _form_validation_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validation-errors */ "./src/app/shared/form-validation-errors.ts");

var ContactFormValidator = /** @class */ (function () {
    function ContactFormValidator(name, email, phoneNumber, subject, messageBody) {
        if (name === void 0) { name = ''; }
        if (email === void 0) { email = ''; }
        if (phoneNumber === void 0) { phoneNumber = ''; }
        if (subject === void 0) { subject = ''; }
        if (messageBody === void 0) { messageBody = ''; }
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.subject = subject;
        this.messageBody = messageBody;
    }
    ContactFormValidator.prototype.setFields = function (name, email, phoneNumber, subject, messageBody) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber.replace(' ', '').replace('-', '');
        this.subject = subject;
        this.messageBody = messageBody;
    };
    ContactFormValidator.prototype.formHasErrors = function () {
        if (!this.nameIsValid()) {
            return _form_validation_errors__WEBPACK_IMPORTED_MODULE_0__["default"].Name;
        }
        else if (!this.emailIsValid()) {
            return _form_validation_errors__WEBPACK_IMPORTED_MODULE_0__["default"].Email;
        }
        else if (!this.phoneNumberIsValid()) {
            return _form_validation_errors__WEBPACK_IMPORTED_MODULE_0__["default"].PhoneNumber;
        }
        else if (!this.subjectIsValid()) {
            return _form_validation_errors__WEBPACK_IMPORTED_MODULE_0__["default"].Subject;
        }
        else if (!this.messageBodyIsValid()) {
            return _form_validation_errors__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBody;
        }
        return null;
    };
    ContactFormValidator.prototype.nameIsValid = function () {
        return Boolean(this.name) && this.name.length >= 3;
    };
    ContactFormValidator.prototype.emailIsValid = function () {
        return Boolean(this.email) && this.validateEmail();
    };
    ContactFormValidator.prototype.phoneNumberIsValid = function () {
        var isNumber = Boolean(parseInt(this.phoneNumber));
        return (this.phoneNumber.length >= 8) && (this.phoneNumber.length <= 13) && isNumber;
    };
    ContactFormValidator.prototype.subjectIsValid = function () {
        return Boolean(this.subject) && this.subject.length >= 3;
    };
    ContactFormValidator.prototype.messageBodyIsValid = function () {
        return Boolean(this.messageBody) && this.messageBody.length >= 3;
    };
    ContactFormValidator.prototype.validateEmail = function () {
        var regEx = /\S+@\S+\.\S+/;
        return regEx.test(this.email);
    };
    return ContactFormValidator;
}());



/***/ }),

/***/ "./src/app/shared/form-validation-errors.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/form-validation-errors.ts ***!
  \**************************************************/
/*! exports provided: FormErrors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrors", function() { return FormErrors; });
var FormErrors;
(function (FormErrors) {
    FormErrors["Name"] = "Name";
    FormErrors["Email"] = "Email";
    FormErrors["PhoneNumber"] = "PhoneNumber";
    FormErrors["Subject"] = "Subject";
    FormErrors["MessageBody"] = "MessageBody";
})(FormErrors || (FormErrors = {}));
/* harmony default export */ __webpack_exports__["default"] = (FormErrors);


/***/ }),

/***/ "./src/app/shared/i18n/language.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/i18n/language.ts ***!
  \*****************************************/
/*! exports provided: currentLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentLanguage", function() { return currentLanguage; });
var localStorageLanguage = localStorage.getItem('app-language');
var currentLanguage = (localStorageLanguage ? localStorageLanguage : 'english');


/***/ }),

/***/ "./src/app/shared/models/course.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/course.model.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    Course.createCourse = function (_a) {
        var courseTitle = _a.courseTitle, linkTitle = _a.linkTitle, url = _a.url;
        return { courseTitle: courseTitle, linkTitle: linkTitle, url: url };
    };
    Course.createCourses = function (data) {
        return data.map(Course.createCourse);
    };
    return Course;
}());



/***/ }),

/***/ "./src/app/shared/models/general-qualification.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/models/general-qualification.model.ts ***!
  \**************************************************************/
/*! exports provided: GeneralQualification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralQualification", function() { return GeneralQualification; });
var GeneralQualification = /** @class */ (function () {
    function GeneralQualification() {
    }
    GeneralQualification.createGeneralQualification = function (_a) {
        var name = _a.name, yearsExperience = _a.yearsExperience;
        return { name: name, yearsExperience: yearsExperience };
    };
    GeneralQualification.createGeneralQualifications = function (data) {
        return data.map(GeneralQualification.createGeneralQualification);
    };
    return GeneralQualification;
}());



/***/ }),

/***/ "./src/app/shared/models/social-media.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/social-media.model.ts ***!
  \*****************************************************/
/*! exports provided: SocialMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMedia", function() { return SocialMedia; });
var SocialMedia = /** @class */ (function () {
    function SocialMedia() {
    }
    SocialMedia.createSocialMedia = function (_a) {
        var iconClass = _a.iconClass, linkTitle = _a.linkTitle, url = _a.url;
        return { iconClass: iconClass, linkTitle: linkTitle, url: url };
    };
    SocialMedia.createSocialMedias = function (data) {
        return data.map(SocialMedia.createSocialMedia);
    };
    return SocialMedia;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: BTMobileDetector, BTBrowserDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTMobileDetector", function() { return BTMobileDetector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BTBrowserDetector", function() { return BTBrowserDetector; });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);

var BTMobileDetector = /** @class */ (function () {
    function BTMobileDetector() {
    }
    BTMobileDetector.isAndroid = function () {
        return navigator.userAgent.match(/Android/i);
    };
    BTMobileDetector.isBlackBerry = function () {
        return navigator.userAgent.match(/BlackBerry/i);
    };
    BTMobileDetector.isIOS = function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    };
    BTMobileDetector.isOpera = function () {
        return navigator.userAgent.match(/Opera Mini/i);
    };
    BTMobileDetector.isWindowsPhone = function () {
        return navigator.userAgent.match(/IEMobile/i);
    };
    BTMobileDetector.isMobile = function () {
        return (BTMobileDetector.isAndroid() || BTMobileDetector.isBlackBerry() || BTMobileDetector.isIOS() || BTMobileDetector.isOpera() || BTMobileDetector.isWindowsPhone());
    };
    BTMobileDetector.isDesktop = function () {
        return !this.isMobile();
    };
    return BTMobileDetector;
}());

var BTBrowserDetector = /** @class */ (function () {
    function BTBrowserDetector() {
    }
    BTBrowserDetector.browserIsSupported = function () {
        var browserName = BTBrowserDetector.parser.getBrowserName().toLowerCase();
        return BTBrowserDetector.supportedBrowsers.includes(browserName);
    };
    BTBrowserDetector.supportedBrowsers = ['chrome', 'firefox', 'opera'];
    BTBrowserDetector.parser = bowser__WEBPACK_IMPORTED_MODULE_0__["getParser"](window.navigator.userAgent);
    return BTBrowserDetector;
}());



/***/ }),

/***/ "./src/app/views/contact-page/contact-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/contact-page/contact-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"centered-flex-container\">\r\n    <form #contactForm (submit)=\"validateAndSubmit($event)\" class=\"{{ animateForm() ? 'form-animation' : '' }} {{ awaitingResponse ? 'blurred' : '' }}\" (animationend)=\"animationDidFinish($event)\">\r\n\r\n        <h1>{{ heading }}</h1>\r\n\r\n        <input type=\"text\" placeholder=\"{{ namePlaceholderText}}\" (input)=\"updateFormValue($event, 'name')\" #name />\r\n\r\n        <input type=\"text\" placeholder=\"{{ emailPlaceholderText }}\" (input)=\"updateFormValue($event, 'email')\" #email />\r\n\r\n        <input type=\"tel\" placeholder=\"{{ phonePlaceholderText }}\" (input)=\"updateFormValue($event, 'phoneNumber')\" #phoneNumber />\r\n\r\n        <input type=\"text\" placeholder=\"{{ subjectPlaceholderText }}\" (input)=\"updateFormValue($event, 'subject')\" #subject />\r\n\r\n        <textarea placeholder=\"{{ messagePlaceholderText }}\" (input)=\"updateFormValue($event, 'messageBody')\" #messageBody></textarea>\r\n\r\n        <hr>\r\n\r\n        <button type=\"submit\" class=\"bt-button\">{{ submitButton }}<i class=\"fas fa-paper-plane\"></i></button>\r\n\r\n    </form>\r\n\r\n    <app-loading-spinner style=\"position: absolute;\" *ngIf=\"awaitingResponse\"></app-loading-spinner>\r\n\r\n    <div *ngIf=\"modalIsShowing()\">\r\n        <app-modal [modalData]=\"modalData\" modalType=\"text\" (closeModalEvent)=\"closeModal()\"></app-modal>\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/contact-page/contact-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/contact-page/contact-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n\n@keyframes resetTransform {\n  100% {\n    transform: unset; } }\n\n@keyframes shakeAnimation {\n  0% {\n    transform: translate(0); }\n  10% {\n    transform: translate(7px); }\n  20% {\n    transform: translate(-14px); }\n  30% {\n    transform: translate(21px); }\n  40% {\n    transform: translate(-28px); }\n  50% {\n    transform: translate(0); }\n  60% {\n    transform: translate(28px); }\n  70% {\n    transform: translate(-21px); }\n  80% {\n    transform: translate(14px); }\n  90% {\n    transform: translate(-7px); }\n  100% {\n    transform: translate(0); } }\n\nform {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  padding: 10px 5px;\n  border: 1px solid #ddd;\n  position: relative;\n  background-color: rgba(47, 79, 79, 0.2);\n  box-shadow: 0px 0px 10px #528a8a; }\n\nform h1 {\n    margin-bottom: 20px;\n    text-align: center;\n    font-size: 2.5em;\n    color: #ddd; }\n\nform input, form textarea, form button {\n    font-size: 1.5em;\n    margin-bottom: 10px;\n    outline: none; }\n\nform input, form textarea {\n    background-color: transparent;\n    padding: 5px;\n    color: white;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto; }\n\nform input::-moz-placeholder, form textarea::-moz-placeholder {\n    color: #ddd;\n    opacity: 0.6; }\n\nform input::placeholder, form textarea::placeholder {\n    color: #ddd;\n    opacity: 0.6; }\n\nform input {\n    padding: 10px 10px;\n    border: none;\n    border-bottom: 1px solid #ddd;\n    border-radius: 0; }\n\nform textarea {\n    height: 100px;\n    resize: none;\n    padding: 10px;\n    margin-bottom: 15px; }\n\nform hr {\n    display: none;\n    background-color: #ddd; }\n\nform button {\n    color: #ddd;\n    margin-left: auto;\n    margin-right: auto;\n    border: 2px solid #528a8a;\n    font-weight: bold;\n    box-shadow: 0px 0px 5px #528a8a;\n    background-color: #2F2F2F; }\n\nform button i {\n      margin-left: 15px; }\n\nform input, form textarea, form button {\n    transition-property: transform, box-shadow;\n    transition-duration: 0.25s;\n    transition-timing-function: cubic-bezier(0.77, 0.2, 0.05, 0.5); }\n\nform input:focus, form textarea:focus, form button:hover {\n    transform: scale(1.015, 1.035); }\n\nform .shake-animation {\n    animation: shakeAnimation 0.5s linear 1 forwards; }\n\n.form-animation {\n  opacity: 0;\n  animation: fadeIn 0.7s 0.1s cubic-bezier(0.77, 0.2, 0.05, 0.5) 1 forwards; }\n\nform.blurred {\n  transition: opacity 0.25s linear;\n  opacity: 0.4;\n  filter: brightness(0.35); }\n\n@media (min-width: 768px) {\n  form {\n    width: 60%;\n    padding: 25px;\n    border-radius: 35px; }\n    form h1 {\n      margin-bottom: 35px; }\n    form hr {\n      display: block;\n      margin-bottom: 15px; }\n    form input, form textarea, form button {\n      font-size: 1.5em;\n      margin-bottom: 20px; } }\n\n@media (min-width: 992px) {\n  form textarea {\n    height: 125px; } }\n\n@media (min-width: 1200px) {\n  form {\n    width: unset; }\n    form input, form textarea, form button {\n      font-size: 1em; }\n    form textarea {\n      min-width: 420px;\n      height: 175px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29udGFjdC1wYWdlL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvY29udGFjdC1wYWdlL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFxhbmltYXRpb25zLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NvbnRhY3QtcGFnZS9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxjb250YWN0LXBhZ2VcXGNvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUMvQnBCO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQUE7O0FBSXhCO0VBSUk7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLHlCQUF3QyxFQUFBO0VBRzVDO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksMEJBQTRDLEVBQUE7RUFHaEQ7SUFDSSwwQkFBNkMsRUFBQTtFQUdqRDtJQUNJLHVCQUF1QixFQUFBLEVBQUE7O0FDdEQvQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFFdEIsVUFBVTtFQUVWLGlCQUFpQjtFQUVqQixzQkZYYTtFRWFiLGtCQUFrQjtFQUVsQix1Q0ZKeUM7RUVNekMsZ0NGaEIrQixFQUFBOztBRUVuQztJQWtCUSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXRnhCUyxFQUFBOztBRUdqQjtJQXlCUSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWEsRUFBQTs7QUEzQnJCO0lBK0JRLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUVaLHNCRnRDUztJRXVDVCxrQkFBa0I7SUFFbEIsVUFBVTtJQUVWLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUF6QzFCO0lBNkNRLFdGaERTO0lFaURULFlBQVksRUFBQTs7QUE5Q3BCO0lBNkNRLFdGaERTO0lFaURULFlBQVksRUFBQTs7QUE5Q3BCO0lBa0RRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNkJGdkRTO0lFd0RULGdCQUFnQixFQUFBOztBQXJEeEI7SUF5RFEsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBNUQzQjtJQWlFUSxhQUFhO0lBQ2Isc0JGckVTLEVBQUE7O0FFR2pCO0lBc0VRLFdGekVTO0lFMEVULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFFbEIseUJGNUUyQjtJRTZFM0IsaUJBQWlCO0lBQ2pCLCtCRjlFMkI7SUUrRTNCLHlCRjlFZ0IsRUFBQTs7QUVDeEI7TUFnRlksaUJBQWlCLEVBQUE7O0FBaEY3QjtJQXNGUSwwQ0FBMEM7SUFDMUMsMEJGMUVlO0lFMkVmLDhERjVFbUQsRUFBQTs7QUVaM0Q7SUE0RlEsOEJBQThCLEVBQUE7O0FBNUZ0QztJQW9HUSxnREFBZ0QsRUFBQTs7QUFJeEQ7RUFDSSxVQUFVO0VBQ1YseUVBQStELEVBQUE7O0FBR25FO0VBQ0ksZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSTtJQUNJLFVBQVU7SUFFVixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7SUFKdkI7TUFPUSxtQkFBbUIsRUFBQTtJQVAzQjtNQVdRLGNBQWM7TUFDZCxtQkFBbUIsRUFBQTtJQVozQjtNQWdCUSxnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUEsRUFDdEI7O0FBS1Q7RUFDSTtJQUdRLGFBQWEsRUFBQSxFQUNoQjs7QUFLVDtFQUNJO0lBQ0ksWUFBWSxFQUFBO0lBRGhCO01BSVEsY0FBYyxFQUFBO0lBSnRCO01BUVEsZ0JBQWdCO01BQ2hCLGFBQWEsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbi1jb2xvcjogI2RkZDtcclxuJHNlY29uZGFyeS1jb2xvcjogcmdiKDgyLCAxMzgsIDEzOCk7XHJcbiR0ZXJ0aWFyeS1jb2xvcjogIzJGMkYyRjtcclxuXHJcbiRtYWluLWdyYXktY29sb3I6ICNhYWE7XHJcblxyXG4kb3V0ZXItZ3JhZGllbnQtY29sb3I6ICMwMDA7XHJcbiRpbm5lci1ncmFkaWVudC1jb2xvcjogIzMzMztcclxuXHJcbiRoZXJvLWJhY2tncm91bmQtY29sb3I6IHJhZGlhbC1ncmFkaWVudCgkaW5uZXItZ3JhZGllbnQtY29sb3IsICRvdXRlci1ncmFkaWVudC1jb2xvcik7XHJcblxyXG4kY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuMik7XHJcblxyXG4kcHJvZ3Jlc3MtYmFyLWhlaWdodDogMzVweDtcclxuXHJcbiRkZWZhdWx0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgLjUpO1xyXG4kdHJhbnNpdGlvbi1mYXN0OiAwLjI1cztcclxuXHJcbiRoZWFkZXItbG9nby1hbmltYXRpb24tcGFyYW1zOiAzcyBjdWJpYy1iZXppZXIoLjUyLC0wLjIyLC4zMywxLjI4KSAxIGZvcndhcmRzO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW1lbHlhXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0FtZWx5YS53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJIaWxsYW5kXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0hpbGxhbmQud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufSIsIkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmVzZXRUcmFuc2Zvcm0ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB1bnNldDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFrZUFuaW1hdGlvbiB7XHJcblxyXG4gICAgJGJhc2Utc2hha2Utb2Zmc2V0OiA3cHg7XHJcblxyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApXHJcbiAgICB9XHJcblxyXG4gICAgMTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgMjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMiAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICAzMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApXHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0ICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDcwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgODAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcclxuICAgIH1cclxufSIsIkBpbXBvcnQgJy4uLy4uL2dsb2JhbC1zdHlsZXNoZWV0cy92YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uL2dsb2JhbC1zdHlsZXNoZWV0cy9hbmltYXRpb25zLnNjc3MnO1xyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIFxyXG4gICAgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtYWluLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRtYWluLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcclxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHRyYW5zaXRpb24tZmFzdDtcclxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxNSwgMS4wMzUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAvLyAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggJG1haW4tY29sb3I7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC5zaGFrZS1hbmltYXRpb24ge1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2hha2VBbmltYXRpb24gMC41cyBsaW5lYXIgMSBmb3J3YXJkcztcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tYW5pbWF0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjdzIDAuMXMgJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uIDEgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmZvcm0uYmx1cnJlZCB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGxpbmVhcjtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjM1KTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIGZvcm0ge1xyXG5cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG5cclxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/contact-page/contact-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_contact_form_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/contact-form-validator */ "./src/app/shared/contact-form-validator.ts");
/* harmony import */ var _shared_animation_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/animation-manager */ "./src/app/shared/animation-manager.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _contact_page_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-page.i18n */ "./src/app/views/contact-page/contact-page.i18n.ts");
/* harmony import */ var src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/i18n/language */ "./src/app/shared/i18n/language.ts");







var ContactPage = /** @class */ (function () {
    function ContactPage(contactService) {
        this.contactService = contactService;
        this.validator = new _shared_contact_form_validator__WEBPACK_IMPORTED_MODULE_2__["ContactFormValidator"]();
        this.name = '';
        this.email = '';
        this.subject = '';
        this.phoneNumber = '';
        this.messageBody = '';
        this.showModal = false;
        this.modalTimeoutId = null;
        this.awaitingResponse = false;
        this.language = src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_6__["currentLanguage"];
        this.modalType = 'text';
        this.modalData = {
            "titulo": "Sucesso",
            "corpo": "Sua mensagem foi enviada com sucesso. A resposta será enviada para o email fornecido."
        };
    }
    ContactPage.prototype.ngOnInit = function () {
        this.heading = _contact_page_i18n__WEBPACK_IMPORTED_MODULE_5__["default"][this.language].heading;
        this.namePlaceholderText = _contact_page_i18n__WEBPACK_IMPORTED_MODULE_5__["default"][this.language].namePlaceholderText;
        this.emailPlaceholderText = _contact_page_i18n__WEBPACK_IMPORTED_MODULE_5__["default"][this.language].emailPlaceholderText;
        this.phonePlaceholderText = _contact_page_i18n__WEBPACK_IMPORTED_MODULE_5__["default"][this.language].phonePlaceholderText;
        this.subjectPlaceholderText = _contact_page_i18n__WEBPACK_IMPORTED_MODULE_5__["default"][this.language].subjectPlaceholderText;
        this.messagePlaceholderText = _contact_page_i18n__WEBPACK_IMPORTED_MODULE_5__["default"][this.language].messagePlaceholderText;
        this.submitButton = _contact_page_i18n__WEBPACK_IMPORTED_MODULE_5__["default"][this.language].submitButton;
    };
    ContactPage.prototype.modalIsShowing = function () {
        return this.showModal;
    };
    ContactPage.prototype.shakeElement = function (element) {
        element.nativeElement.classList.add('shake-animation');
        setTimeout(function () {
            element.nativeElement.classList.remove('shake-animation');
            element.nativeElement.focus();
        }, 600);
    };
    ContactPage.prototype.updateFormValue = function (e, property) {
        this[property] = e.target.value;
    };
    ContactPage.prototype.validateAndSubmit = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error, contactData, response, e_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        this.validator.setFields(this.name, this.email, this.phoneNumber, this.subject, this.messageBody);
                        error = this.validator.formHasErrors();
                        if (!error) return [3 /*break*/, 1];
                        this.shakeElement(this[error.toLowerCase() + 'Input']);
                        return [3 /*break*/, 6];
                    case 1:
                        contactData = {
                            name: this.name,
                            email: this.email,
                            phoneNumber: this.phoneNumber,
                            subject: this.subject,
                            messageBody: this.messageBody
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        this.awaitingResponse = true;
                        return [4 /*yield*/, this.contactService.sendContactRequest(contactData)];
                    case 3:
                        response = _a.sent();
                        if (response) {
                            this.awaitingResponse = false;
                            this.showModal = true;
                            this.clearForm();
                            this.modalTimeoutId = Number(setTimeout(function () {
                                _this.showModal = false;
                            }, 7000));
                        }
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _a.sent();
                        alert('Algum erro desconhecido ocorreu, tente novamente. Se o problema persistir, tente novamente mais tarde.');
                        return [3 /*break*/, 6];
                    case 5:
                        this.awaitingResponse = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ContactPage.prototype.closeModal = function () {
        if (this.modalTimeoutId) {
            clearTimeout(this.modalTimeoutId);
        }
        this.showModal = false;
    };
    ContactPage.prototype.clearForm = function () {
        this.nameInput.nativeElement.value = '';
        this.emailInput.nativeElement.value = '';
        this.subjectInput.nativeElement.value = '';
        this.phoneNumberInput.nativeElement.value = '';
        this.messageBodyInput.nativeElement.value = '';
        this.name = '';
        this.email = '';
        this.subject = '';
        this.phoneNumber = '';
        this.messageBody = '';
    };
    ContactPage.prototype.animateForm = function () {
        return _shared_animation_manager__WEBPACK_IMPORTED_MODULE_3__["BTAnimationManager"].getInstance().shouldAnimateContactPage();
    };
    ContactPage.prototype.animationDidFinish = function (event) {
        _shared_animation_manager__WEBPACK_IMPORTED_MODULE_3__["BTAnimationManager"].getInstance().animationDidFinish(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContactPage.prototype, "nameInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContactPage.prototype, "emailInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subject'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContactPage.prototype, "subjectInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phoneNumber'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContactPage.prototype, "phoneNumberInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageBody'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ContactPage.prototype, "messageBodyInput", void 0);
    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/views/contact-page/contact-page.component.html"),
            providers: [_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]],
            styles: [__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/views/contact-page/contact-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ }),

/***/ "./src/app/views/contact-page/contact-page.i18n.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/contact-page/contact-page.i18n.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    english: {
        heading: "Contact me",
        namePlaceholderText: "Your name",
        emailPlaceholderText: "Your email",
        phonePlaceholderText: "Your phone",
        subjectPlaceholderText: "Subject",
        messagePlaceholderText: "Your message",
        submitButton: "Send",
    },
    portuguese: {
        heading: "Contato",
        namePlaceholderText: "Seu nome",
        emailPlaceholderText: "Seu email",
        phonePlaceholderText: "Seu telefone",
        subjectPlaceholderText: "Assunto",
        messagePlaceholderText: "Sua mensagem",
        submitButton: "Enviar",
    }
});


/***/ }),

/***/ "./src/app/views/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"social-media-links\">\r\n        <a *ngFor=\"let media of socialMedia\" href=\"{{ media.url }}\" class=\"{{ media.iconClass }}\" title=\"{{ media.linkTitle }}\"></a>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/views/footer/footer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/footer/footer.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n\n@keyframes resetTransform {\n  100% {\n    transform: unset; } }\n\n@keyframes shakeAnimation {\n  0% {\n    transform: translate(0); }\n  10% {\n    transform: translate(7px); }\n  20% {\n    transform: translate(-14px); }\n  30% {\n    transform: translate(21px); }\n  40% {\n    transform: translate(-28px); }\n  50% {\n    transform: translate(0); }\n  60% {\n    transform: translate(28px); }\n  70% {\n    transform: translate(-21px); }\n  80% {\n    transform: translate(14px); }\n  90% {\n    transform: translate(-7px); }\n  100% {\n    transform: translate(0); } }\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  opacity: 0;\n  animation-name: fadeIn;\n  animation-duration: 0.5s;\n  animation-delay: 1.5s;\n  animation-timing-function: cubic-bezier(0.77, 0.2, 0.05, 0.5);\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards; }\n\nfooter .social-media-links a {\n    font-size: 3em;\n    text-decoration: none;\n    transition: color 0.25s cubic-bezier(0.77, 0.2, 0.05, 0.5);\n    color: #ddd; }\n\nfooter .social-media-links a:not(:last-child) {\n    margin-right: 30px; }\n\nfooter .social-media-links a:hover {\n    color: #528a8a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZm9vdGVyL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvZm9vdGVyL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFxhbmltYXRpb25zLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2Zvb3Rlci9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUMvQnBCO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQUE7O0FBSXhCO0VBSUk7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLHlCQUF3QyxFQUFBO0VBRzVDO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksMEJBQTRDLEVBQUE7RUFHaEQ7SUFDSSwwQkFBNkMsRUFBQTtFQUdqRDtJQUNJLHVCQUF1QixFQUFBLEVBQUE7O0FDdkQvQjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQiw2REZFdUQ7RUVEdkQsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQWJqQztJQW1CWSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDBERlIrQztJRVMvQyxXRnhCSyxFQUFBOztBRUVqQjtJQXlCWSxrQkFBa0IsRUFBQTs7QUF6QjlCO0lBNEJZLGNGN0J1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluLWNvbG9yOiAjZGRkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiByZ2IoODIsIDEzOCwgMTM4KTtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjMkYyRjJGO1xyXG5cclxuJG1haW4tZ3JheS1jb2xvcjogI2FhYTtcclxuXHJcbiRvdXRlci1ncmFkaWVudC1jb2xvcjogIzAwMDtcclxuJGlubmVyLWdyYWRpZW50LWNvbG9yOiAjMzMzO1xyXG5cclxuJGhlcm8tYmFja2dyb3VuZC1jb2xvcjogcmFkaWFsLWdyYWRpZW50KCRpbm5lci1ncmFkaWVudC1jb2xvciwgJG91dGVyLWdyYWRpZW50LWNvbG9yKTtcclxuXHJcbiRjYXJkLWJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC4yKTtcclxuXHJcbiRwcm9ncmVzcy1iYXItaGVpZ2h0OiAzNXB4O1xyXG5cclxuJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAuNSk7XHJcbiR0cmFuc2l0aW9uLWZhc3Q6IDAuMjVzO1xyXG5cclxuJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM6IDNzIGN1YmljLWJlemllciguNTIsLTAuMjIsLjMzLDEuMjgpIDEgZm9yd2FyZHM7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJBbWVseWFcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQW1lbHlhLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbGxhbmRcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvSGlsbGFuZC53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59IiwiQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByZXNldFRyYW5zZm9ybSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHVuc2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlQW5pbWF0aW9uIHtcclxuXHJcbiAgICAkYmFzZS1zaGFrZS1vZmZzZXQ6IDdweDtcclxuXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcclxuICAgIH1cclxuXHJcbiAgICAxMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICAyMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDMwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMyAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA0MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00ICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgNzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMyAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA4MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMSAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL2FuaW1hdGlvbnMuc2Nzcyc7XHJcbmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgLnNvY2lhbC1tZWRpYS1saW5rcyB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAkdHJhbnNpdGlvbi1mYXN0ICRkZWZhdWx0LXRpbWluZy1mdW5jdGlvbjtcclxuICAgICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_social_media_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/social-media.model */ "./src/app/shared/models/social-media.model.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.socialMedia = src_app_shared_models_social_media_model__WEBPACK_IMPORTED_MODULE_2__["SocialMedia"].createSocialMedias([
            {
                linkTitle: 'GitHub',
                iconClass: 'fab fa-github',
                url: 'https://www.github.com/batistaTiago'
            },
            {
                linkTitle: 'LinkedIn',
                iconClass: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/batistaTiago'
            },
            {
                iconClass: 'fas fa-code',
                linkTitle: 'CodersRank',
                url: 'https://profile.codersrank.io/user/batistatiago'
            }
        ]);
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/views/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/views/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/views/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n\r\n    <app-logo></app-logo>\r\n\r\n    <label for=\"navbar-toggler\" class=\"navbar-toggler-button {{ menuOpen ? 'menu-open' : '' }}\" (click)=\"menuTogglerButtonClick()\">\r\n        <div class=\"menu-bar\"></div>\r\n        <div class=\"menu-bar\"></div>\r\n        <div class=\"menu-bar\"></div>\r\n    </label>\r\n\r\n    <div class=\"navbar-container\">\r\n        <input type=\"checkbox\" id=\"navbar-toggler\" />\r\n        <nav class='navbar'>\r\n            <ul>\r\n                <li *ngFor=\"let section of sections\">\r\n                    <a routerLink=\"{{section.link }}\" class=\" {{ (router.url=== section.link) ? 'current-route ' : ' ' }} \">\r\n                        {{ section.displayName }}\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n\r\n\r\n</header>"

/***/ }),

/***/ "./src/app/views/header/header.component.i18n.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/header/header.component.i18n.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    english: {
        sections: {
            home: { displayName: 'Home' },
            resume: { displayName: 'Resume' },
            projects: { displayName: 'Projects' },
            contact: { displayName: 'Contact' },
        }
    },
    portuguese: {
        sections: {
            home: { displayName: 'Apresentação' },
            resume: { displayName: 'Currículo' },
            projects: { displayName: 'Projetos' },
            contact: { displayName: 'Contato' },
        }
    }
});


/***/ }),

/***/ "./src/app/views/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n\n@keyframes resetTransform {\n  100% {\n    transform: unset; } }\n\n@keyframes shakeAnimation {\n  0% {\n    transform: translate(0); }\n  10% {\n    transform: translate(7px); }\n  20% {\n    transform: translate(-14px); }\n  30% {\n    transform: translate(21px); }\n  40% {\n    transform: translate(-28px); }\n  50% {\n    transform: translate(0); }\n  60% {\n    transform: translate(28px); }\n  70% {\n    transform: translate(-21px); }\n  80% {\n    transform: translate(14px); }\n  90% {\n    transform: translate(-7px); }\n  100% {\n    transform: translate(0); } }\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  color: white;\n  padding: 20px 5px;\n  background-color: transparent;\n  opacity: 0;\n  animation-name: fadeIn;\n  animation-duration: 0.5s;\n  animation-delay: 1.5s;\n  animation-timing-function: cubic-bezier(0.77, 0.2, 0.05, 0.5);\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards; }\n\napp-logo {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  cursor: pointer; }\n\n.navbar-toggler-button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  border-style: solid;\n  background-color: transparent;\n  font-size: 1.5em;\n  padding: 10px;\n  border-radius: 5px;\n  border-color: #ddd;\n  box-shadow: 0px 0px 10px #ddd;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.navbar-toggler-button div.menu-bar {\n    width: 33px;\n    height: 4px;\n    margin-bottom: 5px;\n    background: #ddd;\n    border-radius: 3px;\n    transition-property: transform, opacity;\n    transition: 0.25s cubic-bezier(0.77, 0.2, 0.05, 0.5);\n    transform-origin: center right; }\n\n.navbar-toggler-button div.menu-bar:last-child {\n    margin-bottom: 0; }\n\n.navbar-toggler-button.menu-open {\n  cursor: pointer;\n  padding-right: 13px;\n  padding-left: 7px; }\n\n.navbar-toggler-button.menu-open div.menu-bar:first-child {\n    transform: rotate(-45deg) translate(1px, -3px); }\n\n.navbar-toggler-button.menu-open div.menu-bar:nth-child(2) {\n    transform: scaleX(0.2);\n    opacity: 0; }\n\n.navbar-toggler-button.menu-open div.menu-bar:last-child {\n    transform: rotate(45deg) translate(1px, 3px); }\n\n#navbar-toggler {\n  display: none; }\n\n.navbar-container {\n  flex-basis: 100%;\n  margin-top: 25px; }\n\n.navbar {\n  display: none;\n  box-shadow: 0px 0px 10px #ddd;\n  border: 2px solid #ddd; }\n\n.navbar ul {\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    justify-content: space-around; }\n\n.navbar ul li {\n      margin: 5px auto; }\n\n.navbar ul li a {\n        text-decoration: none;\n        padding: 20px;\n        font-size: 2em;\n        color: #ddd;\n        transition: 0.25s cubic-bezier(0.77, 0.2, 0.05, 0.5);\n        transition-property: color, text-shadow, box-shadow, background-color;\n        display: flex;\n        flex-direction: column; }\n\n.navbar ul li a::after {\n        content: \"\";\n        width: 100%;\n        margin-left: auto;\n        margin-right: auto;\n        background-color: #528a8a;\n        height: 2px;\n        transition: transform 0.25s cubic-bezier(0.77, 0.2, 0.05, 0.5);\n        transform: scaleX(0);\n        border-radius: 2px; }\n\n.navbar ul li a.current-route {\n        color: #528a8a;\n        text-shadow: 0px 0px 5px #528a8a;\n        cursor: default; }\n\n.navbar ul li a.current-route::after, .navbar ul li a:hover::after {\n        transform: scaleY(1); }\n\n.navbar ul li a:active, .navbar ul li a:focus, .navbar ul li a:visited {\n        background-color: transparent; }\n\n.navbar ul li:hover a {\n      color: #528a8a; }\n\n#navbar-toggler:checked + .navbar {\n  display: block; }\n\n@media (min-width: 768px) {\n  .navbar {\n    box-shadow: 0px 0px 10px #ddd; }\n    .navbar ul {\n      flex-direction: row;\n      padding: 5px; }\n      .navbar ul li {\n        margin-left: unset;\n        margin-right: unset; } }\n\n@media (min-width: 992px) {\n  #navbar-toggler:checked + .navbar {\n    transform: scaleY(1);\n    max-height: 400px; }\n  .navbar-toggler-button {\n    display: none; }\n  .navbar-container {\n    align-self: center;\n    flex-basis: unset;\n    margin-top: unset; }\n  .navbar {\n    display: block;\n    box-shadow: none;\n    border: none; }\n    .navbar ul {\n      flex-direction: row; }\n      .navbar ul li {\n        margin-left: 10px; }\n        .navbar ul li a {\n          padding: 5px 10px; }\n        .navbar ul li a.current-route {\n          box-shadow: 0px 0px 5px #528a8a;\n          background-color: rgba(47, 79, 79, 0.2); } }\n\n@media (min-width: 1200px) {\n  .navbar ul li {\n    margin-left: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGVhZGVyL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvaGVhZGVyL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFxhbmltYXRpb25zLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2hlYWRlci9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUMvQnBCO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQUE7O0FBSXhCO0VBSUk7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLHlCQUF3QyxFQUFBO0VBRzVDO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksMEJBQTRDLEVBQUE7RUFHaEQ7SUFDSSwwQkFBNkMsRUFBQTtFQUdqRDtJQUNJLHVCQUF1QixFQUFBLEVBQUE7O0FDdEQvQjtFQUVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBRWpCLDZCQUE2QjtFQUM3QixVQUFVO0VBSVYsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsNkRGTHVEO0VFTXZELDRCQUE0QjtFQUM1Qiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JGeENhO0VFeUNiLDZCRnpDYTtFRTJDYixlQUFlO0VBRWYsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBaEJ2QjtJQW1CUSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUdsQixnQkZ4RFM7SUV5RFQsa0JBQWtCO0lBRWxCLHVDQUF1QztJQUN2QyxvREY3Q21EO0lFOENuRCw4QkFBOEIsRUFBQTs7QUE3QnRDO0lBaUNRLGdCQUFnQixFQUFBOztBQU14QjtFQUVJLGVBQWU7RUFFZixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBTHJCO0lBUVEsOENBQThDLEVBQUE7O0FBUnREO0lBWVEsc0JBQXNCO0lBQ3RCLFVBQVUsRUFBQTs7QUFibEI7SUFpQlEsNENBQTRDLEVBQUE7O0FBSXBEO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFJSSxhQUFhO0VBRWIsNkJGM0dhO0VFNEdiLHNCRjVHYSxFQUFBOztBRXFHakI7SUFjUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiw2QkFBNkIsRUFBQTs7QUFqQnJDO01Bb0JZLGdCQUFnQixFQUFBOztBQXBCNUI7UUFzQmdCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsY0FBYztRQUNkLFdGOUhDO1FFK0hELG9ERmhIMkM7UUVpSDNDLHFFQUFxRTtRQUNyRSxhQUFhO1FBQ2Isc0JBQXNCLEVBQUE7O0FBN0J0QztRQWlDZ0IsV0FBVztRQUNYLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHlCRnpJbUI7UUUwSW5CLFdBQVc7UUFDWCw4REY3SDJDO1FFOEgzQyxvQkFBb0I7UUFDcEIsa0JBQWtCLEVBQUE7O0FBekNsQztRQTZDZ0IsY0ZqSm1CO1FFa0puQixnQ0ZsSm1CO1FFbUpuQixlQUFlLEVBQUE7O0FBL0MvQjtRQW1EZ0Isb0JBQW9CLEVBQUE7O0FBbkRwQztRQXVEZ0IsNkJBQTZCLEVBQUE7O0FBdkQ3QztNQThEZ0IsY0ZsS21CLEVBQUE7O0FFd0tuQztFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFFSTtJQUNJLDZCRmhMUyxFQUFBO0lFK0tiO01BR1EsbUJBQW1CO01BQ25CLFlBQVksRUFBQTtNQUpwQjtRQU1ZLGtCQUFrQjtRQUNsQixtQkFBbUIsRUFBQSxFQUN0Qjs7QUFLYjtFQUVJO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQixFQUFBO0VBSXJCO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQUdyQjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBO0lBSGhCO01BTVEsbUJBQW1CLEVBQUE7TUFOM0I7UUFRWSxpQkFBaUIsRUFBQTtRQVI3QjtVQVVnQixpQkFBaUIsRUFBQTtRQVZqQztVQWNnQiwrQkYzTmU7VUU0TmYsdUNGbE55QixFQUFBLEVFbU41Qjs7QUFNakI7RUFFSTtJQUdZLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluLWNvbG9yOiAjZGRkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiByZ2IoODIsIDEzOCwgMTM4KTtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjMkYyRjJGO1xyXG5cclxuJG1haW4tZ3JheS1jb2xvcjogI2FhYTtcclxuXHJcbiRvdXRlci1ncmFkaWVudC1jb2xvcjogIzAwMDtcclxuJGlubmVyLWdyYWRpZW50LWNvbG9yOiAjMzMzO1xyXG5cclxuJGhlcm8tYmFja2dyb3VuZC1jb2xvcjogcmFkaWFsLWdyYWRpZW50KCRpbm5lci1ncmFkaWVudC1jb2xvciwgJG91dGVyLWdyYWRpZW50LWNvbG9yKTtcclxuXHJcbiRjYXJkLWJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC4yKTtcclxuXHJcbiRwcm9ncmVzcy1iYXItaGVpZ2h0OiAzNXB4O1xyXG5cclxuJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAuNSk7XHJcbiR0cmFuc2l0aW9uLWZhc3Q6IDAuMjVzO1xyXG5cclxuJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM6IDNzIGN1YmljLWJlemllciguNTIsLTAuMjIsLjMzLDEuMjgpIDEgZm9yd2FyZHM7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJBbWVseWFcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQW1lbHlhLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbGxhbmRcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvSGlsbGFuZC53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59IiwiQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByZXNldFRyYW5zZm9ybSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHVuc2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlQW5pbWF0aW9uIHtcclxuXHJcbiAgICAkYmFzZS1zaGFrZS1vZmZzZXQ6IDdweDtcclxuXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcclxuICAgIH1cclxuXHJcbiAgICAxMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICAyMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDMwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMyAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA0MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00ICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgNzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMyAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA4MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMSAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL2FuaW1hdGlvbnMuc2Nzcyc7XHJcblxyXG5oZWFkZXIge1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgXHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5hcHAtbG9nbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyLWJ1dHRvbiB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkbWFpbi1jb2xvcjtcclxuICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBkaXYubWVudS1iYXIge1xyXG4gICAgICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogJG1haW4tY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1mYXN0ICRkZWZhdWx0LXRpbWluZy1mdW5jdGlvbjtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2Lm1lbnUtYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyLWJ1dHRvbi5tZW51LW9wZW4ge1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcblxyXG4gICAgZGl2Lm1lbnUtYmFyOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgxcHgsIC0zcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5tZW51LWJhcjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuMik7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYubWVudS1iYXI6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgxcHgsIDNweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNuYXZiYXItdG9nZ2xlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICAvLyB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJG1haW4tY29sb3I7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbi1jb2xvcjtcclxuICAgIFxyXG4gICAgLy8gdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBtYXgtaGVpZ2h0O1xyXG4gICAgLy8gdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZmFzdCAkZGVmYXVsdC10aW1pbmctZnVuY3Rpb247XHJcbiAgICBcclxuICAgIHVsIHtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWZhc3QgJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIHRleHQtc2hhZG93LCBib3gtc2hhZG93LCBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGE6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uLWZhc3QgJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEuY3VycmVudC1yb3V0ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYS5jdXJyZW50LXJvdXRlOjphZnRlciwgYTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGE6YWN0aXZlLCBhOmZvY3VzLCBhOnZpc2l0ZWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI25hdmJhci10b2dnbGVyOmNoZWNrZWQgKyAubmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggJG1haW4tY29sb3I7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgXHJcbiAgICAjbmF2YmFyLXRvZ2dsZXI6Y2hlY2tlZCArIC5uYXZiYXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubmF2YmFyLXRvZ2dsZXItYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYS5jdXJyZW50LXJvdXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_component_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component.i18n */ "./src/app/views/header/header.component.i18n.ts");
/* harmony import */ var src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/i18n/language */ "./src/app/shared/i18n/language.ts");





;
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.language = src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_4__["currentLanguage"];
        this.menuOpen = false;
        this.sections = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var sectionLinks = {
            home: '/',
            resume: '/resume',
            projects: '/projects',
            contact: '/contact',
        };
        for (var prop in sectionLinks) {
            this.sections.push({
                link: sectionLinks[prop],
                displayName: _header_component_i18n__WEBPACK_IMPORTED_MODULE_3__["default"][this.language].sections[prop].displayName
            });
        }
    };
    HeaderComponent.prototype.menuTogglerButtonClick = function () {
        this.menuOpen = !this.menuOpen;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/views/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/header/logo/logo.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/header/logo/logo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-root\" #logoRoot (mouseenter)=\"onLogoHover()\" (mouseleave)=\"onLogoExit()\" (animationiteration)=\"removeAnimatedClass($event)\">\r\n  <div class=\"shadow-animation bottom\"></div>\r\n  <div class=\"logo-rectangle bottom\"></div>\r\n  <div class=\"logo-rectangle top\"></div>\r\n  <div class=\"shadow-animation top\"></div>\r\n  <div class=\"logo-text\">BT</div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/header/logo/logo.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/views/header/logo/logo.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes logoRootAnimation {\n  10% {\n    transform: scale(1); }\n  50% {\n    transform: scale(1.2); }\n  90% {\n    transform: scale(1); } }\n\n@keyframes logoBottomAnimation {\n  100% {\n    transform: rotate(30deg);\n    box-shadow: none; } }\n\n@keyframes logoTopAnimation {\n  100% {\n    transform: rotate(60deg); } }\n\n@keyframes fadeInOut {\n  10% {\n    opacity: 0; }\n  50% {\n    opacity: 0.85; }\n  90% {\n    opacity: 0; } }\n\n.logo-root {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  animation: logoRootAnimation 3s cubic-bezier(0.52, -0.22, 0.33, 1.28) 1 forwards;\n  animation-timing-function: ease-in-out; }\n\n.logo-root .logo-rectangle {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 25%;\n    box-sizing: border-box; }\n\n.logo-root .logo-rectangle.bottom {\n    transform: rotate(30deg);\n    background-color: #2F2F2F;\n    box-shadow: 0px 0px 30px 5px black; }\n\n.logo-root .logo-rectangle.top {\n    transform: rotate(60deg);\n    background-color: #21B5A8;\n    box-shadow: 0px 0px 30px 5px #ddd;\n    opacity: 0.35; }\n\n.logo-root .logo-text {\n    position: absolute;\n    top: 52%;\n    left: 44%;\n    transform: translate(-50%, -50%);\n    font-size: 2.5em;\n    font-family: 'Hilland';\n    font-weight: bold; }\n\n.logo-root .shadow-animation {\n    content: '';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    top: 50%;\n    left: 50%;\n    opacity: 0; }\n\n.logo-root .shadow-animation.top {\n    box-shadow: 0px 0px 25px 25px black; }\n\n.logo-root .shadow-animation.bottom {\n    box-shadow: 0px 0px 25px 5px white; }\n\n.logo-root.animated .shadow-animation {\n  animation: fadeInOut 2s 0s infinite forwards; }\n\n.logo-root.animated .logo-rectangle.bottom {\n  transform: rotate(-1770deg);\n  animation: logoBottomAnimation 2s 0s infinite forwards; }\n\n.logo-root.animated .logo-rectangle.top {\n  transform: rotate(1860deg);\n  animation: logoTopAnimation 2s 0s infinite forwards; }\n\n.logo-root.animated .logo-text {\n  text-shadow: 0px 0px 55px 55px red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGVhZGVyL2xvZ28vRzpcXERvY3VtZW50b3NcXFBIUFxcY29kZVxccG9ydGZvbGlvLTIwMjJcXGFuZ3VsYXItcG9ydGZvbGlvL3NyY1xcYXBwXFxnbG9iYWwtc3R5bGVzaGVldHNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC92aWV3cy9oZWFkZXIvbG9nby9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxoZWFkZXJcXGxvZ29cXGxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FDNUJwQjtFQUNJO0lBQ0ksbUJBQW1CLEVBQUE7RUFHdkI7SUFDSSxxQkFBcUIsRUFBQTtFQUd6QjtJQUNJLG1CQUFtQixFQUFBLEVBQUE7O0FBSTNCO0VBQ0k7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCLEVBQUEsRUFBQTs7QUFLeEI7RUFDSTtJQUNJLHdCQUF3QixFQUFBLEVBQUE7O0FBSWhDO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLFVBQVUsRUFBQSxFQUFBOztBQUtsQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0ZEaEN5RTtFQ2lDekUsc0NBQXNDLEVBQUE7O0FBUDFDO0lBVVEsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUE7O0FBaEI5QjtJQW9CUSx3QkFBd0I7SUFDeEIseUJEL0RnQjtJQ2lFaEIsa0NBQWtDLEVBQUE7O0FBdkIxQztJQTRCUSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBR3pCLGlDRDVFUztJQzhFVCxhQUFhLEVBQUE7O0FBbENyQjtJQXNDUSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUIsRUFBQTs7QUE1Q3pCO0lBZ0RRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVUsRUFBQTs7QUF0RGxCO0lBMERRLG1DQUEwQyxFQUFBOztBQTFEbEQ7SUE4RFEsa0NBQWtDLEVBQUE7O0FBSTFDO0VBS1EsNENBSGtELEVBQUE7O0FBRjFEO0VBU1EsMkJBQWdDO0VBQ2hDLHNEQVJrRCxFQUFBOztBQUYxRDtFQWNRLDBCQUErQjtFQUMvQixtREFia0QsRUFBQTs7QUFGMUQ7RUFtQlEsa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9oZWFkZXIvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW4tY29sb3I6ICNkZGQ7XHJcbiRzZWNvbmRhcnktY29sb3I6IHJnYig4MiwgMTM4LCAxMzgpO1xyXG4kdGVydGlhcnktY29sb3I6ICMyRjJGMkY7XHJcblxyXG4kbWFpbi1ncmF5LWNvbG9yOiAjYWFhO1xyXG5cclxuJG91dGVyLWdyYWRpZW50LWNvbG9yOiAjMDAwO1xyXG4kaW5uZXItZ3JhZGllbnQtY29sb3I6ICMzMzM7XHJcblxyXG4kaGVyby1iYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwtZ3JhZGllbnQoJGlubmVyLWdyYWRpZW50LWNvbG9yLCAkb3V0ZXItZ3JhZGllbnQtY29sb3IpO1xyXG5cclxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjIpO1xyXG5cclxuJHByb2dyZXNzLWJhci1oZWlnaHQ6IDM1cHg7XHJcblxyXG4kZGVmYXVsdC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIC41KTtcclxuJHRyYW5zaXRpb24tZmFzdDogMC4yNXM7XHJcblxyXG4kaGVhZGVyLWxvZ28tYW5pbWF0aW9uLXBhcmFtczogM3MgY3ViaWMtYmV6aWVyKC41MiwtMC4yMiwuMzMsMS4yOCkgMSBmb3J3YXJkcztcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFtZWx5YVwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9BbWVseWEud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGlsbGFuZFwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9IaWxsYW5kLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWwtc3R5bGVzaGVldHMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuXHJcbkBrZXlmcmFtZXMgbG9nb1Jvb3RBbmltYXRpb24ge1xyXG4gICAgMTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2dvQm90dG9tQW5pbWF0aW9uIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBsb2dvVG9wQW5pbWF0aW9uIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5PdXQge1xyXG4gICAgMTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgfVxyXG4gICAgOTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmxvZ28tcm9vdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbmltYXRpb246IGxvZ29Sb290QW5pbWF0aW9uICRoZWFkZXItbG9nby1hbmltYXRpb24tcGFyYW1zO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBcclxuICAgIC5sb2dvLXJlY3RhbmdsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1yZWN0YW5nbGUuYm90dG9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCA1cHggYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAubG9nby1yZWN0YW5nbGUudG9wIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxQjVBODtcclxuXHJcbiAgICAgICAgLy8gYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDVweCAkbWFpbi1jb2xvcjtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMC4zNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTIlO1xyXG4gICAgICAgIGxlZnQ6IDQ0JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGlsbGFuZCc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNoYWRvdy1hbmltYXRpb24ge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaGFkb3ctYW5pbWF0aW9uLnRvcCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDI1cHggcmdiKDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaGFkb3ctYW5pbWF0aW9uLmJvdHRvbSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDVweCB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ28tcm9vdC5hbmltYXRlZCB7XHJcblxyXG4gICAgJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM6IDJzIDBzIGluZmluaXRlIGZvcndhcmRzO1xyXG5cclxuICAgIC5zaGFkb3ctYW5pbWF0aW9uIHtcclxuICAgICAgICBhbmltYXRpb246IGZhZGVJbk91dCAkaGVhZGVyLWxvZ28tYW5pbWF0aW9uLXBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1yZWN0YW5nbGUuYm90dG9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwMGRlZyArIDMwKTtcclxuICAgICAgICBhbmltYXRpb246IGxvZ29Cb3R0b21BbmltYXRpb24gJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28tcmVjdGFuZ2xlLnRvcCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwMGRlZyArIDYwKTtcclxuICAgICAgICBhbmltYXRpb246IGxvZ29Ub3BBbmltYXRpb24gJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNTVweCA1NXB4IHJlZDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/header/logo/logo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/header/logo/logo.component.ts ***!
  \*****************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.animateLogo = false;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent.prototype.removeAnimatedClass = function (event) {
        if (event.animationName === 'logoTopAnimation') {
            if (!this.animateLogo) {
                this.logo.nativeElement.classList.remove('animated');
            }
        }
    };
    LogoComponent.prototype.onLogoHover = function () {
        this.animateLogo = true;
        this.logo.nativeElement.classList.add('animated');
    };
    LogoComponent.prototype.onLogoExit = function () {
        this.animateLogo = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoRoot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LogoComponent.prototype, "logo", void 0);
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/views/header/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/views/header/logo/logo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/views/hero-page/hero-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/hero-page/hero-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class='hero'>\r\n    <div class='hero-container {{ shouldAnimate() ? \"hero-container-animation\" : \"\" }}'>\r\n        <div class='hero-image-container {{ shouldAnimate() ? \"hero-image-container-animation\" : \"\" }}'>\r\n            <img src='/assets/images/main.jpg' class='hero-image' alt='profile-photo' />\r\n        </div>\r\n        <div class='titles-container {{ shouldAnimate() ? \"titles-container-animation\" : \"\" }}' (animationend)=\"animationDidFinish($event)\">\r\n            <h1 class='hero-title'>Batista Tiago</h1>\r\n            <h3 class='hero-subtitle' *ngFor=\"let title of titles\">{{ title }}</h3>\r\n        </div>\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/hero-page/hero-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/hero-page/hero-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n\n@keyframes resetTransform {\n  100% {\n    transform: unset; } }\n\n@keyframes shakeAnimation {\n  0% {\n    transform: translate(0); }\n  10% {\n    transform: translate(7px); }\n  20% {\n    transform: translate(-14px); }\n  30% {\n    transform: translate(21px); }\n  40% {\n    transform: translate(-28px); }\n  50% {\n    transform: translate(0); }\n  60% {\n    transform: translate(28px); }\n  70% {\n    transform: translate(-21px); }\n  80% {\n    transform: translate(14px); }\n  90% {\n    transform: translate(-7px); }\n  100% {\n    transform: translate(0); } }\n\n.hero {\n  display: flex;\n  justify-content: center; }\n\n.hero-container {\n  padding: 10px;\n  background-color: rgba(47, 79, 79, 0.2);\n  border: 3px solid #528a8a;\n  border-radius: 25px;\n  box-shadow: 0px 0px 10px 2px #528a8a;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-self: center; }\n\n.hero-container-animation {\n  opacity: 0;\n  animation: fadeIn 1s cubic-bezier(0.77, 0.2, 0.05, 0.5) 1 forwards; }\n\n.hero-image-container {\n  border-radius: 50%;\n  border: 3px solid #ccc;\n  max-width: 250px;\n  max-height: 250px;\n  display: flex;\n  justify-content: center;\n  overflow: hidden; }\n\n.hero-image-container-animation {\n  animation: resetTransform 0.5s 0.5s cubic-bezier(0.77, 0.2, 0.05, 0.5) 1 forwards;\n  transform: scale(0) rotateZ(-720deg); }\n\n.hero-image {\n  align-self: center;\n  position: relative;\n  max-width: 100%; }\n\n.titles-container {\n  margin-top: 25px; }\n\n.titles-container-animation {\n  opacity: 0;\n  transform: scale(0);\n  animation: 0.5s 1s cubic-bezier(0.77, 0.2, 0.05, 0.5) 1 forwards;\n  animation-name: fadeIn, resetTransform; }\n\n.hero-title {\n  color: #ddd;\n  margin-bottom: 10px;\n  text-align: center; }\n\n.hero-subtitle {\n  margin-top: 5px;\n  color: #ddd;\n  text-align: center; }\n\n@media (min-width: 992px) {\n  .hero-container {\n    padding: 35px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGVyby1wYWdlL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvaGVyby1wYWdlL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFxhbmltYXRpb25zLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2hlcm8tcGFnZS9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxoZXJvLXBhZ2VcXGhlcm8tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUMvQnBCO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQUE7O0FBSXhCO0VBSUk7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLHlCQUF3QyxFQUFBO0VBRzVDO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksMEJBQTRDLEVBQUE7RUFHaEQ7SUFDSSwwQkFBNkMsRUFBQTtFQUdqRDtJQUNJLHVCQUF1QixFQUFBLEVBQUE7O0FDdEQvQjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxhQUFhO0VBQ2IsdUNGQ3lDO0VFQXpDLHlCRlYrQjtFRVcvQixtQkFBbUI7RUFDbkIsb0NGWitCO0VFYy9CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxVQUFVO0VBQ1Ysa0VBQXdELEVBQUE7O0FBRzVEO0VBQ0ksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUZBQXVFO0VBQ3ZFLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVU7RUFDVixtQkFBbUI7RUFFbkIsZ0VBQXNEO0VBQ3RELHNDQUFzQyxFQUFBOztBQUcxQztFQUNJLFdGOURhO0VFK0RiLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsV0ZyRWE7RUVzRWIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9oZXJvLXBhZ2UvaGVyby1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW4tY29sb3I6ICNkZGQ7XHJcbiRzZWNvbmRhcnktY29sb3I6IHJnYig4MiwgMTM4LCAxMzgpO1xyXG4kdGVydGlhcnktY29sb3I6ICMyRjJGMkY7XHJcblxyXG4kbWFpbi1ncmF5LWNvbG9yOiAjYWFhO1xyXG5cclxuJG91dGVyLWdyYWRpZW50LWNvbG9yOiAjMDAwO1xyXG4kaW5uZXItZ3JhZGllbnQtY29sb3I6ICMzMzM7XHJcblxyXG4kaGVyby1iYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwtZ3JhZGllbnQoJGlubmVyLWdyYWRpZW50LWNvbG9yLCAkb3V0ZXItZ3JhZGllbnQtY29sb3IpO1xyXG5cclxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjIpO1xyXG5cclxuJHByb2dyZXNzLWJhci1oZWlnaHQ6IDM1cHg7XHJcblxyXG4kZGVmYXVsdC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIC41KTtcclxuJHRyYW5zaXRpb24tZmFzdDogMC4yNXM7XHJcblxyXG4kaGVhZGVyLWxvZ28tYW5pbWF0aW9uLXBhcmFtczogM3MgY3ViaWMtYmV6aWVyKC41MiwtMC4yMiwuMzMsMS4yOCkgMSBmb3J3YXJkcztcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFtZWx5YVwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9BbWVseWEud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGlsbGFuZFwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9IaWxsYW5kLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0iLCJAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlc2V0VHJhbnNmb3JtIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdW5zZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2VBbmltYXRpb24ge1xyXG5cclxuICAgICRiYXNlLXNoYWtlLW9mZnNldDogN3B4O1xyXG5cclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxyXG4gICAgfVxyXG5cclxuICAgIDEwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDIwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgMzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDQwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxyXG4gICAgfVxyXG5cclxuICAgIDYwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNCAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA3MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDgwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMiAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA5MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApXHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi9nbG9iYWwtc3R5bGVzaGVldHMvdmFyaWFibGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi9nbG9iYWwtc3R5bGVzaGVldHMvYW5pbWF0aW9ucy5zY3NzJztcclxuXHJcbi5oZXJvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmhlcm8tY29udGFpbmVyLWFuaW1hdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uIDEgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5oZXJvLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8taW1hZ2UtY29udGFpbmVyLWFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRpb246IHJlc2V0VHJhbnNmb3JtIDAuNXMgMC41cyAkZGVmYXVsdC10aW1pbmctZnVuY3Rpb24gMSBmb3J3YXJkcztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlWigtNzIwZGVnKTtcclxufVxyXG5cclxuLmhlcm8taW1hZ2Uge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGVzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udGl0bGVzLWNvbnRhaW5lci1hbmltYXRpb24ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBcclxuICAgIGFuaW1hdGlvbjogMC41cyAxcyAkZGVmYXVsdC10aW1pbmctZnVuY3Rpb24gMSBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW4sIHJlc2V0VHJhbnNmb3JtO1xyXG59XHJcblxyXG4uaGVyby10aXRsZSB7ICAgIFxyXG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8tc3VidGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5oZXJvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMzVweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/hero-page/hero-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/hero-page/hero-page.component.ts ***!
  \********************************************************/
/*! exports provided: HeroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroPage", function() { return HeroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_views_hero_page_hero_page_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/hero-page/hero-page.i18n */ "./src/app/views/hero-page/hero-page.i18n.ts");
/* harmony import */ var src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/i18n/language */ "./src/app/shared/i18n/language.ts");
/* harmony import */ var _shared_animation_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/animation-manager */ "./src/app/shared/animation-manager.ts");





var HeroPage = /** @class */ (function () {
    function HeroPage() {
    }
    HeroPage.prototype.ngOnInit = function () {
        this.language = src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_3__["currentLanguage"];
        this.titles = src_app_views_hero_page_hero_page_i18n__WEBPACK_IMPORTED_MODULE_2__["default"][this.language].titles;
    };
    HeroPage.prototype.shouldAnimate = function () {
        return _shared_animation_manager__WEBPACK_IMPORTED_MODULE_4__["BTAnimationManager"].getInstance().shouldAnimateHeroPage();
    };
    HeroPage.prototype.animationDidFinish = function (event) {
        _shared_animation_manager__WEBPACK_IMPORTED_MODULE_4__["BTAnimationManager"].getInstance().animationDidFinish(event);
    };
    HeroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-page',
            template: __webpack_require__(/*! ./hero-page.component.html */ "./src/app/views/hero-page/hero-page.component.html"),
            styles: [__webpack_require__(/*! ./hero-page.component.scss */ "./src/app/views/hero-page/hero-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroPage);
    return HeroPage;
}());



/***/ }),

/***/ "./src/app/views/hero-page/hero-page.i18n.ts":
/*!***************************************************!*\
  !*** ./src/app/views/hero-page/hero-page.i18n.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    english: {
        titles: [
            'Fullstack software engineer',
            'Bachelor in Science and Technology',
            'Mechatronics and Robotics engineer',
        ],
    },
    portuguese: {
        titles: [
            'Desenvolvedor Web Full Stack',
            'Bacharel em Ciências e Tecnologia',
            'Engenheiro Mecatrônico',
        ],
    }
});


/***/ }),

/***/ "./src/app/views/loading-spinner/loading-spinner.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/loading-spinner/loading-spinner.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-container\">\r\n  <div class=\"main-loading-spinner\"></div>\r\n\r\n  <div class=\"main-loading-spinner-descriptor\">Loading</div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/loading-spinner/loading-spinner.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/loading-spinner/loading-spinner.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n\n@keyframes resetTransform {\n  100% {\n    transform: unset; } }\n\n@keyframes shakeAnimation {\n  0% {\n    transform: translate(0); }\n  10% {\n    transform: translate(7px); }\n  20% {\n    transform: translate(-14px); }\n  30% {\n    transform: translate(21px); }\n  40% {\n    transform: translate(-28px); }\n  50% {\n    transform: translate(0); }\n  60% {\n    transform: translate(28px); }\n  70% {\n    transform: translate(-21px); }\n  80% {\n    transform: translate(14px); }\n  90% {\n    transform: translate(-7px); }\n  100% {\n    transform: translate(0); } }\n\n@keyframes spinnerAnimation {\n  0% {\n    transform: rotate(-360deg) scale(1); }\n  50% {\n    transform: rotate(-180deg) scale(1.2); }\n  100% {\n    transform: rotate(0deg) scale(1); } }\n\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px; }\n\n.main-loading-spinner {\n  width: 80px;\n  height: 80px;\n  background-color: transparent;\n  border-radius: 50%;\n  border: 8px solid;\n  border-color: #528a8a #ddd;\n  opacity: 1;\n  animation: spinnerAnimation 1.5s infinite forwards;\n  animation-timing-function: linear;\n  box-shadow: 0px 0px 15px #ddd; }\n\n.main-loading-spinner-descriptor {\n  text-align: center;\n  font-size: 1.2em;\n  color: #528a8a;\n  margin-top: 20px;\n  font-weight: bold;\n  width: 80px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9hZGluZy1zcGlubmVyL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvbG9hZGluZy1zcGlubmVyL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFxhbmltYXRpb25zLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xvYWRpbmctc3Bpbm5lci9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxsb2FkaW5nLXNwaW5uZXJcXGxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUMvQnBCO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQUE7O0FBSXhCO0VBSUk7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLHlCQUF3QyxFQUFBO0VBRzVDO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksdUJBQXVCLEVBQUE7RUFHM0I7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDJCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksMEJBQTRDLEVBQUE7RUFHaEQ7SUFDSSwwQkFBNkMsRUFBQTtFQUdqRDtJQUNJLHVCQUF1QixFQUFBLEVBQUE7O0FDdEQvQjtFQUNJO0lBQ0ksbUNBQW1DLEVBQUE7RUFHdkM7SUFDSSxxQ0FBcUMsRUFBQTtFQUd6QztJQUNJLGdDQUFnQyxFQUFBLEVBQUE7O0FBSXhDO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJGL0JhO0VFZ0NiLFVBQVU7RUFFVixrREFBa0Q7RUFDbEQsaUNBQWlDO0VBV2pDLDZCRjlDYSxFQUFBOztBRWlEakI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNGbkQrQjtFRW9EL0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluLWNvbG9yOiAjZGRkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiByZ2IoODIsIDEzOCwgMTM4KTtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjMkYyRjJGO1xyXG5cclxuJG1haW4tZ3JheS1jb2xvcjogI2FhYTtcclxuXHJcbiRvdXRlci1ncmFkaWVudC1jb2xvcjogIzAwMDtcclxuJGlubmVyLWdyYWRpZW50LWNvbG9yOiAjMzMzO1xyXG5cclxuJGhlcm8tYmFja2dyb3VuZC1jb2xvcjogcmFkaWFsLWdyYWRpZW50KCRpbm5lci1ncmFkaWVudC1jb2xvciwgJG91dGVyLWdyYWRpZW50LWNvbG9yKTtcclxuXHJcbiRjYXJkLWJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC4yKTtcclxuXHJcbiRwcm9ncmVzcy1iYXItaGVpZ2h0OiAzNXB4O1xyXG5cclxuJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAuNSk7XHJcbiR0cmFuc2l0aW9uLWZhc3Q6IDAuMjVzO1xyXG5cclxuJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM6IDNzIGN1YmljLWJlemllciguNTIsLTAuMjIsLjMzLDEuMjgpIDEgZm9yd2FyZHM7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJBbWVseWFcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQW1lbHlhLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbGxhbmRcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvSGlsbGFuZC53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59IiwiQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByZXNldFRyYW5zZm9ybSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHVuc2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlQW5pbWF0aW9uIHtcclxuXHJcbiAgICAkYmFzZS1zaGFrZS1vZmZzZXQ6IDdweDtcclxuXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcclxuICAgIH1cclxuXHJcbiAgICAxMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICAyMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDMwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMyAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA0MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00ICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgNzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMyAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA4MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMSAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL2FuaW1hdGlvbnMuc2Nzcyc7XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXJBbmltYXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZykgc2NhbGUoMS4yKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5tYWluLWxvYWRpbmctc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogODBweDsgXHJcbiAgICBoZWlnaHQ6IDgwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIGJvcmRlcjogOHB4IHNvbGlkOyBcclxuICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAkbWFpbi1jb2xvcjtcclxuICAgIG9wYWNpdHk6IDE7IFxyXG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoLTcyMGRlZyk7XHJcbiAgICBhbmltYXRpb246IHNwaW5uZXJBbmltYXRpb24gMS41cyBpbmZpbml0ZSBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIC8vIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcblxyXG4gICAgLy8gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xyXG4gICAgLy8gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIwLCAxKTtcclxuICAgIC8vIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKTtcclxuICAgIC8vIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxuICAgIC8vIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gICAgLy8gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgLy8gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggJG1haW4tY29sb3I7XHJcbn1cclxuXHJcbi5tYWluLWxvYWRpbmctc3Bpbm5lci1kZXNjcmlwdG9yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBmb250LXNpemU6IDEuMmVtOyBcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/loading-spinner/loading-spinner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/views/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/views/loading-spinner/loading-spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/views/modal/modal.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/modal/modal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\" (click)=\"closeModal()\" [@modal-container-fade-animations]=\"modalContainerState\" (@modal-container-fade-animations.done)=\"dismissModal($event)\">\r\n  <div class=\"modal\" style=\"color: green\" (click)=\"stopPropagation($event)\">\r\n    <div class=\"modal-header\" *ngIf=\"modalData.titulo\">\r\n      <h2>{{ modalData.titulo }}</h2>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      \r\n      <div *ngIf=\"modalType == 'images' && modalData.images;\" class=\"modal-image-container\">\r\n        <app-project-images [images]=\"modalData.images\"></app-project-images>\r\n      </div>\r\n      \r\n      <div *ngIf=\"modalType == 'image' && modalData.image\" class=\"modal-image-container\">\r\n        <img [src]=\"modalData.image\" />\r\n      </div>\r\n      \r\n      <div *ngIf=\"modalType == 'text'\">\r\n        <div *ngIf='modalData.corpo; else modalError'>\r\n          {{ modalData.corpo }}\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n    </div>\r\n    \r\n    <ng-template #modalError>\r\n      <h1 style=\"color: red\">Erro na configuração do Modal</h1>\r\n      \r\n      {{ modalData.image }}\r\n      {{ modalType }}\r\n    </ng-template>\r\n    <div class=\"modal-footer\">\r\n      <button (click)=\"closeModal()\">{{ isMobile() ? 'X' : 'fechar' }}</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/modal/modal.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/modal/modal.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.modal-container {\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 1; }\n\n.modal-container .modal {\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border: 2px solid #528a8a;\n    box-shadow: 0px 0px 15px #528a8a;\n    border-radius: 25px;\n    background: radial-gradient(#262626, #000);\n    color: #ddd;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 5px;\n    max-width: 85%;\n    height: auto; }\n\n.modal-container .modal .modal-header {\n      flex-basis: 5%;\n      flex-shrink: 0;\n      padding: 0px 25px;\n      margin-bottom: 15px;\n      margin-top: 10px;\n      font-size: 17px; }\n\n.modal-container .modal .modal-header h2 {\n        font-size: 2em; }\n\n.modal-container .modal .modal-body {\n      padding: 5px 25px;\n      text-align: justify;\n      flex-basis: 90%;\n      flex-grow: 2;\n      flex-shrink: 2;\n      display: flex;\n      justify-content: center;\n      margin-bottom: 15px;\n      font-size: 1.15em; }\n\n.modal-container .modal .modal-body .modal-image-container {\n        position: relative;\n        width: 70vw;\n        height: 55vh;\n        display: flex;\n        justify-content: center;\n        align-items: stretch;\n        padding-right: 25px; }\n\n.modal-container .modal .modal-body .modal-image-container img {\n          position: absolute;\n          width: auto;\n          height: 100%; }\n\n.modal-container .modal .modal-footer {\n      display: flex;\n      align-content: center;\n      justify-content: flex-end;\n      margin-bottom: 10px;\n      margin-right: 10px;\n      flex-basis: 5%;\n      flex-shrink: 0;\n      margin-bottom: 10px; }\n\n.modal-container .modal .modal-footer button {\n        border-radius: 5%;\n        border: 1px solid #ddd;\n        padding: 5px 10px;\n        outline: none;\n        background-color: transparent;\n        transition-property: transform, background-color;\n        transition: 0.25s cubic-bezier(0.77, 0.2, 0.05, 0.5);\n        cursor: pointer; }\n\n.modal-container .modal .modal-footer button:hover {\n        transform: scale(1.05);\n        background-color: black;\n        color: white; }\n\n@media (min-width: 992px) {\n  .modal-container .modal {\n    padding: 25px;\n    transform: translate(-50%, -50%);\n    font-size: 1.25em; }\n    .modal-container .modal .modal-body {\n      padding: 5px 25px; }\n      .modal-container .modal .modal-body .modal-image-container {\n        width: 70vw;\n        height: 70vh; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW9kYWwvRzpcXERvY3VtZW50b3NcXFBIUFxcY29kZVxccG9ydGZvbGlvLTIwMjJcXGFuZ3VsYXItcG9ydGZvbGlvL3NyY1xcYXBwXFxnbG9iYWwtc3R5bGVzaGVldHNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC92aWV3cy9tb2RhbC9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxtb2RhbFxcbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FDNUJwQjtFQUNJLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBRXJDLFVBQVUsRUFBQTs7QUFSZDtJQVdRLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyx5QkRqQjJCO0lDa0IzQixnQ0RsQjJCO0lDbUIzQixtQkFBbUI7SUFDbkIsMENBQXFGO0lBQ3JGLFdEdEJTO0lDd0JULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBRTlCLFlBQVk7SUFFWixjQUFjO0lBRWQsWUFBWSxFQUFBOztBQTdCcEI7TUFpQ1ksY0FBYztNQUNkLGNBQWM7TUFFZCxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUVoQixlQUFlLEVBQUE7O0FBeEMzQjtRQTRDZ0IsY0FBYyxFQUFBOztBQTVDOUI7TUFrRFksaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsWUFBWTtNQUNaLGNBQWM7TUFDZCxhQUFhO01BQ2IsdUJBQXVCO01BRXZCLG1CQUFtQjtNQUVuQixpQkFBaUIsRUFBQTs7QUE1RDdCO1FBK0RnQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixtQkFBbUIsRUFBQTs7QUFyRW5DO1VBd0VvQixrQkFBa0I7VUFDbEIsV0FBVztVQUNYLFlBQVksRUFBQTs7QUExRWhDO01BaUZZLGFBQWE7TUFDYixxQkFBcUI7TUFDckIseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFFbEIsY0FBYztNQUNkLGNBQWM7TUFDZCxtQkFBbUIsRUFBQTs7QUF6Ri9CO1FBNEZnQixpQkFBaUI7UUFDakIsc0JEaEdDO1FDaUdELGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLGdEQUFnRDtRQUNoRCxvRER0RjJDO1FDdUYzQyxlQUFlLEVBQUE7O0FBbkcvQjtRQXVHZ0Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixZQUFZLEVBQUE7O0FBZTVCO0VBQ0k7SUFFUSxhQUFhO0lBQ2IsZ0NBQWdDO0lBRWhDLGlCQUFpQixFQUFBO0lBTHpCO01BT1ksaUJBQWlCLEVBQUE7TUFQN0I7UUFVZ0IsV0FBVztRQUNYLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbi1jb2xvcjogI2RkZDtcclxuJHNlY29uZGFyeS1jb2xvcjogcmdiKDgyLCAxMzgsIDEzOCk7XHJcbiR0ZXJ0aWFyeS1jb2xvcjogIzJGMkYyRjtcclxuXHJcbiRtYWluLWdyYXktY29sb3I6ICNhYWE7XHJcblxyXG4kb3V0ZXItZ3JhZGllbnQtY29sb3I6ICMwMDA7XHJcbiRpbm5lci1ncmFkaWVudC1jb2xvcjogIzMzMztcclxuXHJcbiRoZXJvLWJhY2tncm91bmQtY29sb3I6IHJhZGlhbC1ncmFkaWVudCgkaW5uZXItZ3JhZGllbnQtY29sb3IsICRvdXRlci1ncmFkaWVudC1jb2xvcik7XHJcblxyXG4kY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuMik7XHJcblxyXG4kcHJvZ3Jlc3MtYmFyLWhlaWdodDogMzVweDtcclxuXHJcbiRkZWZhdWx0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgLjUpO1xyXG4kdHJhbnNpdGlvbi1mYXN0OiAwLjI1cztcclxuXHJcbiRoZWFkZXItbG9nby1hbmltYXRpb24tcGFyYW1zOiAzcyBjdWJpYy1iZXppZXIoLjUyLC0wLjIyLC4zMywxLjI4KSAxIGZvcndhcmRzO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW1lbHlhXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0FtZWx5YS53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJIaWxsYW5kXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0hpbGxhbmQud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufSIsIkBpbXBvcnQgJy4uLy4uL2dsb2JhbC1zdHlsZXNoZWV0cy92YXJpYWJsZXMuc2Nzcyc7XHJcbi8vIEBpbXBvcnQgJy4uLy4uL2dsb2JhbC1zdHlsZXNoZWV0cy9hbmltYXRpb25zLnNjc3MnO1xyXG5cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XHJcblxyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChkYXJrZW4oJGlubmVyLWdyYWRpZW50LWNvbG9yLCA1JSksICRvdXRlci1ncmFkaWVudC1jb2xvcik7XHJcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUlO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogOTAlO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcclxuXHJcbiAgICAgICAgICAgIC5tb2RhbC1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHZ3OyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTV2aDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgZmxleC1iYXNpczogNSU7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWZhc3QgJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgIC8vIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubW9kYWwtY29udGFpbmVyIHtcclxuICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICAgICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbC1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils */ "./src/app/shared/utils.ts");




var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.modalType = null;
        this.closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalContainerState = 'criado';
    }
    ModalComponent.prototype.ngAfterViewInit = function () { };
    ModalComponent.prototype.closeModal = function () {
        this.modalContainerState = 'removido';
    };
    ModalComponent.prototype.dismissModal = function (event) {
        if (event.toState === 'removido') {
            this.closeModalEvent.emit();
        }
    };
    ModalComponent.prototype.isMobile = function () {
        return _shared_utils__WEBPACK_IMPORTED_MODULE_3__["BTMobileDetector"].isMobile();
    };
    ModalComponent.prototype.stopPropagation = function (event) {
        event.stopImmediatePropagation();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "modalData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "modalType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "closeModalEvent", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/views/modal/modal.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('modal-container-fade-animations', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('criado', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => criado', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('removido', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('criado => removido', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out')])
                ]),
            ],
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/views/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/views/progress-bar/progress-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/progress-bar/progress-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-bar\">\r\n  <div class=\"progress-bar-filled\" #filled></div>\r\n  <div class=\"progress-bar-unfilled\" #unfilled></div>\r\n  <span #percentComplete>{{ percentageComplete }}%</span>\r\n</div>"

/***/ }),

/***/ "./src/app/views/progress-bar/progress-bar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/progress-bar/progress-bar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.progress-bar {\n  position: relative;\n  background-color: #ddd;\n  border: 2px solid #aaa;\n  border-radius: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 30px; }\n\n.progress-bar span {\n    position: absolute;\n    align-self: center;\n    color: #2F2F2F;\n    font-size: 22px;\n    font-weight: 900; }\n\n.progress-bar-filled {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  bottom: 0;\n  border-radius: 2px;\n  transform-origin: center left;\n  transition: transform 0.2s ease-in-out;\n  background: linear-gradient(to right, #192a2a, #79afaf); }\n\n.progress-bar-unfilled {\n  background-color: #ddd;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  transform-origin: center right; }\n\n@media (min-width: 992px) {\n  .progress-bar {\n    margin-left: 25px;\n    margin-right: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZ3Jlc3MtYmFyL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJvZ3Jlc3MtYmFyL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcdmlld3NcXHByb2dyZXNzLWJhclxccHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQzNCcEI7RUFDSSxrQkFBa0I7RUFDbEIsc0JETmE7RUNRYixzQkRKa0I7RUNLbEIsa0JBQWtCO0VBRWxCLGdCQUFnQjtFQUVoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUV2QixZQUFZLEVBQUE7O0FBYmhCO0lBZ0JRLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0RwQmdCO0lDcUJoQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHNDQUFzQztFQUN0Qyx1REFBb0csRUFBQTs7QUFHeEc7RUFDSSxzQkR6Q2E7RUMwQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbi1jb2xvcjogI2RkZDtcclxuJHNlY29uZGFyeS1jb2xvcjogcmdiKDgyLCAxMzgsIDEzOCk7XHJcbiR0ZXJ0aWFyeS1jb2xvcjogIzJGMkYyRjtcclxuXHJcbiRtYWluLWdyYXktY29sb3I6ICNhYWE7XHJcblxyXG4kb3V0ZXItZ3JhZGllbnQtY29sb3I6ICMwMDA7XHJcbiRpbm5lci1ncmFkaWVudC1jb2xvcjogIzMzMztcclxuXHJcbiRoZXJvLWJhY2tncm91bmQtY29sb3I6IHJhZGlhbC1ncmFkaWVudCgkaW5uZXItZ3JhZGllbnQtY29sb3IsICRvdXRlci1ncmFkaWVudC1jb2xvcik7XHJcblxyXG4kY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuMik7XHJcblxyXG4kcHJvZ3Jlc3MtYmFyLWhlaWdodDogMzVweDtcclxuXHJcbiRkZWZhdWx0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgLjUpO1xyXG4kdHJhbnNpdGlvbi1mYXN0OiAwLjI1cztcclxuXHJcbiRoZWFkZXItbG9nby1hbmltYXRpb24tcGFyYW1zOiAzcyBjdWJpYy1iZXppZXIoLjUyLC0wLjIyLC4zMywxLjI4KSAxIGZvcndhcmRzO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW1lbHlhXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0FtZWx5YS53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJIaWxsYW5kXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0hpbGxhbmQud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufSIsIkBpbXBvcnQgJy4uLy4uL2dsb2JhbC1zdHlsZXNoZWV0cy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4kcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLWdyYXktY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyZXNzLWJhci1maWxsZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZGFya2VuKCRzZWNvbmRhcnktY29sb3IsIDMwJSksIGxpZ2h0ZW4oJHNlY29uZGFyeS1jb2xvciwgMTUlKSk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItdW5maWxsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/progress-bar/progress-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/progress-bar/progress-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        // this.percentUnfilledComponent.nativeElement.style.backgroundColor = 'red';
        this.percentUnfilledComponent.nativeElement.style.transform = "translateX(" + this.percentageComplete + "%)";
        this.percentCompleteComponent.nativeElement.style.color = (this.percentageComplete >= 60) ? '#ddd' : '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProgressBarComponent.prototype, "percentFilledComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unfilled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProgressBarComponent.prototype, "percentUnfilledComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('percentComplete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProgressBarComponent.prototype, "percentCompleteComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressBarComponent.prototype, "percentageComplete", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/views/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/views/progress-bar/progress-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/views/projects-page/company-projects/company-projects.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/projects-page/company-projects/company-projects.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"hideable-content-toggler\">\r\n        <label for=\"expand-icon\">{{ companyProjectsHeading }}</label>\r\n        <button id=\"expand-icon\" class=\"{{ showMenu ? 'toggled' : '' }}\" (click)=\"toggleMenu()\">\r\n    <div class=\"vertical\"></div>\r\n    <div class=\"horizontal\"></div>\r\n  </button>\r\n    </div>\r\n    <div class=\"company-projects-list-container hideable-content {{ showMenu ? 'visible' : '' }}\">\r\n        <ul class=\"company-projects\">\r\n            <li *ngFor=\"let project of projects\">\r\n                <h2>\r\n                    <a href=\"{{ project.deployUrl }}\" target=\"_blank\" title=\"{{ project.titulo }}\">{{ project.titulo }}</a>\r\n                </h2>\r\n                <p *ngFor=\"let paragraph of project.paragraphs\">{{ paragraph }}</p>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/projects-page/company-projects/company-projects.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/projects-page/company-projects/company-projects.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.company-projects p {\n  text-align: justify;\n  margin-top: 15px; }\n\n.company-projects p:last-child {\n  margin-bottom: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9jb21wYW55LXByb2plY3RzL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9jb21wYW55LXByb2plY3RzL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcdmlld3NcXHByb2plY3RzLXBhZ2VcXGNvbXBhbnktcHJvamVjdHNcXGNvbXBhbnktcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FDOUJwQjtFQUVRLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFIeEI7RUFNUSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2plY3RzLXBhZ2UvY29tcGFueS1wcm9qZWN0cy9jb21wYW55LXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW4tY29sb3I6ICNkZGQ7XHJcbiRzZWNvbmRhcnktY29sb3I6IHJnYig4MiwgMTM4LCAxMzgpO1xyXG4kdGVydGlhcnktY29sb3I6ICMyRjJGMkY7XHJcblxyXG4kbWFpbi1ncmF5LWNvbG9yOiAjYWFhO1xyXG5cclxuJG91dGVyLWdyYWRpZW50LWNvbG9yOiAjMDAwO1xyXG4kaW5uZXItZ3JhZGllbnQtY29sb3I6ICMzMzM7XHJcblxyXG4kaGVyby1iYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwtZ3JhZGllbnQoJGlubmVyLWdyYWRpZW50LWNvbG9yLCAkb3V0ZXItZ3JhZGllbnQtY29sb3IpO1xyXG5cclxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjIpO1xyXG5cclxuJHByb2dyZXNzLWJhci1oZWlnaHQ6IDM1cHg7XHJcblxyXG4kZGVmYXVsdC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIC41KTtcclxuJHRyYW5zaXRpb24tZmFzdDogMC4yNXM7XHJcblxyXG4kaGVhZGVyLWxvZ28tYW5pbWF0aW9uLXBhcmFtczogM3MgY3ViaWMtYmV6aWVyKC41MiwtMC4yMiwuMzMsMS4yOCkgMSBmb3J3YXJkcztcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFtZWx5YVwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9BbWVseWEud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGlsbGFuZFwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9IaWxsYW5kLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWwtc3R5bGVzaGVldHMvdmFyaWFibGVzLnNjc3MnO1xyXG4uY29tcGFueS1wcm9qZWN0cyB7XHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBwOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/projects-page/company-projects/company-projects.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/projects-page/company-projects/company-projects.component.ts ***!
  \************************************************************************************/
/*! exports provided: CompanyProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProjectsComponent", function() { return CompanyProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/i18n/language */ "./src/app/shared/i18n/language.ts");
/* harmony import */ var _projects_page_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-page.i18n */ "./src/app/views/projects-page/projects-page.i18n.ts");




var CompanyProjectsComponent = /** @class */ (function () {
    function CompanyProjectsComponent() {
        this.showMenu = true;
    }
    CompanyProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projects.map(function (project) {
            project.paragraphs = project.description.trim().split('\n');
            return project;
        });
        this.companyProjectsHeading = _projects_page_i18n__WEBPACK_IMPORTED_MODULE_3__["default"][src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_2__["currentLanguage"]].companyProjectsHeading;
        console.log(this.projects);
    };
    CompanyProjectsComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CompanyProjectsComponent.prototype, "projects", void 0);
    CompanyProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-projects',
            template: __webpack_require__(/*! ./company-projects.component.html */ "./src/app/views/projects-page/company-projects/company-projects.component.html"),
            styles: [__webpack_require__(/*! ./company-projects.component.scss */ "./src/app/views/projects-page/company-projects/company-projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompanyProjectsComponent);
    return CompanyProjectsComponent;
}());



/***/ }),

/***/ "./src/app/views/projects-page/featured-project/featured-project.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/featured-project.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n    <div style=\"display: flex\">\r\n        <div class='header-featured-project'>\r\n            <span>\r\n        {{ projectData.titulo }}\r\n      </span>\r\n            <i class=\"far fa-question-circle {{ showDescription ? 'toggled' : '' }}\" (click)=\"toggleDescription()\"></i>\r\n            <app-project-description [data]=\"{ \r\n          titulo: projectData.titulo,\r\n          realProject: projectData.realProject, \r\n          description: projectData.description, \r\n          techUsed: projectData.techUsed,\r\n          colabs: projectData.colabs,\r\n          status: projectData.status,\r\n          percentageComplete: projectData.percentageComplete\r\n        }\">\r\n\r\n            </app-project-description>\r\n        </div>\r\n    </div>\r\n\r\n    <app-project-images [images]=\"projectData.imageUrls\" (imageClickedEvent)=\"propagate($event)\"></app-project-images>\r\n\r\n    <div class=\"links-projeto\">\r\n        <a [href]='projectData.gitUrl' target=\"blank\">Git</a>\r\n        <a [href]=\"projectData.deployUrl\" class=\"{{ !!projectData.deployUrl ? '' : 'unavailable' }}\" target=\"blank\" (click)=\"!projectData.deployUrl ? $event.preventDefault() : ''\">Live Version</a>\r\n    </div>\r\n</li>"

/***/ }),

/***/ "./src/app/views/projects-page/featured-project/featured-project.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/featured-project.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.header-featured-project {\n  margin: 15px auto;\n  font-size: 2em;\n  text-align: center;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.header-featured-project span {\n    margin-right: 10px; }\n\n.header-featured-project i {\n    cursor: pointer;\n    color: #aaa; }\n\n.header-featured-project i.toggled + app-project-description {\n    display: block; }\n\napp-project-description {\n  display: none;\n  padding: 15px;\n  margin-top: 10px;\n  z-index: 1; }\n\napp-project-images {\n  height: 250px; }\n\n@media (min-width: 768px) {\n  app-project-images {\n    height: 290px; } }\n\n@media (min-width: 992px) {\n  app-project-images {\n    height: 330px; } }\n\n@media (min-width: 1200px) {\n  app-project-images {\n    min-height: 380px; } }\n\nhr {\n  background-color: #ddd;\n  border: none;\n  height: 2px;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.descricao-projeto {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 1em;\n  text-align: justify; }\n\n.links-projeto {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px; }\n\n.links-projeto a {\n    border: 2px solid #528a8a;\n    background-color: #2F2F2F;\n    color: #ddd;\n    padding: 5px 20px;\n    text-decoration: none;\n    transition-property: transform, background-color;\n    transition: 0.15s ease-in-out;\n    box-shadow: 0px 0px 3px #528a8a; }\n\n.links-projeto a:hover:not(.unavailable) {\n    transform: scale(1.05); }\n\n.links-projeto a.unavailable {\n    color: gray;\n    opacity: 0.8;\n    box-shadow: none; }\n\n.links-projeto a.unavailable:hover {\n    cursor: not-allowed; }\n\n@media (min-width: 992px) {\n  app-project-description {\n    background-color: #2F2F2F;\n    box-shadow: 0px 0px 5px #ddd;\n    border: 2px solid #ddd;\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    margin-left: 20px;\n    margin-top: unset;\n    min-width: 450px;\n    max-width: 550px;\n    transform: translateY(-20px) scaleX(0);\n    transform-origin: left;\n    transition: transform 0.25s ease-in-out; }\n  i.toggled + app-project-description,\n  app-project-description:hover {\n    transform: translateY(-20px) scaleX(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9mZWF0dXJlZC1wcm9qZWN0L0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9mZWF0dXJlZC1wcm9qZWN0L0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcdmlld3NcXHByb2plY3RzLXBhZ2VcXGZlYXR1cmVkLXByb2plY3RcXGZlYXR1cmVkLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FDOUJwQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFSdkI7SUFVUSxrQkFBa0IsRUFBQTs7QUFWMUI7SUFhUSxlQUFlO0lBQ2YsV0RYYyxFQUFBOztBQ0h0QjtJQWlCUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUdMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEI7O0FBR0w7RUFDSTtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCOztBQUdMO0VBQ0ksc0JEcERhO0VDcURiLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQixFQUFBOztBQUh0QjtJQUtRLHlCRHZFMkI7SUN3RTNCLHlCRHZFZ0I7SUN3RWhCLFdEMUVTO0lDMkVULGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0RBQWdEO0lBQ2hELDZCQUE2QjtJQUM3QiwrQkQ5RTJCLEVBQUE7O0FDa0VuQztJQWVRLHNCQUFzQixFQUFBOztBQWY5QjtJQWtCUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQXBCeEI7SUF1QlEsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0k7SUFDSSx5QkQ5RmdCO0lDK0ZoQiw0QkRqR1M7SUNrR1Qsc0JEbEdTO0lDbUdULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0Qix1Q0FBdUMsRUFBQTtFQUUzQzs7SUFFSSxzQ0FBc0MsRUFBQSxFQUN6QyIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2plY3RzLXBhZ2UvZmVhdHVyZWQtcHJvamVjdC9mZWF0dXJlZC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW4tY29sb3I6ICNkZGQ7XHJcbiRzZWNvbmRhcnktY29sb3I6IHJnYig4MiwgMTM4LCAxMzgpO1xyXG4kdGVydGlhcnktY29sb3I6ICMyRjJGMkY7XHJcblxyXG4kbWFpbi1ncmF5LWNvbG9yOiAjYWFhO1xyXG5cclxuJG91dGVyLWdyYWRpZW50LWNvbG9yOiAjMDAwO1xyXG4kaW5uZXItZ3JhZGllbnQtY29sb3I6ICMzMzM7XHJcblxyXG4kaGVyby1iYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwtZ3JhZGllbnQoJGlubmVyLWdyYWRpZW50LWNvbG9yLCAkb3V0ZXItZ3JhZGllbnQtY29sb3IpO1xyXG5cclxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjIpO1xyXG5cclxuJHByb2dyZXNzLWJhci1oZWlnaHQ6IDM1cHg7XHJcblxyXG4kZGVmYXVsdC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIC41KTtcclxuJHRyYW5zaXRpb24tZmFzdDogMC4yNXM7XHJcblxyXG4kaGVhZGVyLWxvZ28tYW5pbWF0aW9uLXBhcmFtczogM3MgY3ViaWMtYmV6aWVyKC41MiwtMC4yMiwuMzMsMS4yOCkgMSBmb3J3YXJkcztcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFtZWx5YVwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9BbWVseWEud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGlsbGFuZFwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9IaWxsYW5kLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWwtc3R5bGVzaGVldHMvdmFyaWFibGVzLnNjc3MnO1xyXG4uaGVhZGVyLWZlYXR1cmVkLXByb2plY3Qge1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICRtYWluLWdyYXktY29sb3I7XHJcbiAgICB9XHJcbiAgICBpLnRvZ2dsZWQrYXBwLXByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5hcHAtcHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxOyAvL25lY2Vzc2FyaW9cclxufVxyXG5cclxuYXBwLXByb2plY3QtaW1hZ2VzIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgYXBwLXByb2plY3QtaW1hZ2VzIHtcclxuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIGFwcC1wcm9qZWN0LWltYWdlcyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgYXBwLXByb2plY3QtaW1hZ2VzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzODBweDtcclxuICAgIH1cclxufVxyXG5cclxuaHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZGVzY3JpY2FvLXByb2pldG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5saW5rcy1wcm9qZXRvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBhIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgYTpob3Zlcjpub3QoLnVuYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIH1cclxuICAgIGEudW5hdmFpbGFibGUge1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgYS51bmF2YWlsYWJsZTpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBhcHAtcHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICRtYWluLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLWNvbG9yO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHVuc2V0O1xyXG4gICAgICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpIHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIGkudG9nZ2xlZCthcHAtcHJvamVjdC1kZXNjcmlwdGlvbixcclxuICAgIGFwcC1wcm9qZWN0LWRlc2NyaXB0aW9uOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpIHNjYWxlWCgxKTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/projects-page/featured-project/featured-project.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/featured-project.component.ts ***!
  \************************************************************************************/
/*! exports provided: FeaturedProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProjectComponent", function() { return FeaturedProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturedProjectComponent = /** @class */ (function () {
    function FeaturedProjectComponent() {
        this.imageClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showDescription = false;
        this.projectData = null;
    }
    FeaturedProjectComponent.prototype.ngOnInit = function () {
    };
    FeaturedProjectComponent.prototype.featuredImageClicked = function (imageUrls) {
        this.imageClickedEvent.emit(imageUrls);
    };
    FeaturedProjectComponent.prototype.toggleDescription = function () {
        this.showDescription = !this.showDescription;
    };
    FeaturedProjectComponent.prototype.propagate = function (eventData) {
        this.imageClickedEvent.emit(eventData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FeaturedProjectComponent.prototype, "imageClickedEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeaturedProjectComponent.prototype, "projectData", void 0);
    FeaturedProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-featured-project',
            template: __webpack_require__(/*! ./featured-project.component.html */ "./src/app/views/projects-page/featured-project/featured-project.component.html"),
            styles: [__webpack_require__(/*! ./featured-project.component.scss */ "./src/app/views/projects-page/featured-project/featured-project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturedProjectComponent);
    return FeaturedProjectComponent;
}());



/***/ }),

/***/ "./src/app/views/projects-page/featured-project/project-description/project-description.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/project-description/project-description.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ data.titulo }}</h3>\r\n<p class=\"project-description\">{{ data.description }}</p>\r\n<h4>Tecnologias</h4>\r\n<ul>\r\n    <li *ngFor=\"let tech of data.techUsed\" class=\"html\">\r\n        {{ tech }}\r\n    </li>\r\n</ul>\r\n\r\n<hr>\r\n\r\n<div class=\"labels\">\r\n\r\n    <div class=\"\r\n        project-label\r\n        project-status\r\n        {{ data.status == 'Em desenvolvimento' ? 'em-desenvolvimento' : '' }}\r\n        {{ data.status == 'Concluído' ? 'concluido' : '' }}\r\n        \">\r\n        Status: {{ data.status }}\r\n    </div>\r\n\r\n    <div class=\"project-label\">Tipo: {{ data.realProject ? 'Projeto real' : 'Projeto de estudos' }}</div>\r\n</div>\r\n\r\n<app-progress-bar [percentageComplete]=\"data.percentageComplete\"></app-progress-bar>\r\n\r\n<div *ngIf=\"data.colabs.length > 0\" style=\"margin-top: 15px; margin-bottom: 5px;\">\r\n    <hr>\r\n    <div class=\"project-label\">Colaboradores</div>\r\n    <ul>\r\n        <li *ngFor=\"let colab of data.colabs\">\r\n            <a href=\"{{ colab.gitUrlProfile }}\" target=\"_blank\">\r\n                {{ colab.nome }}\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/views/projects-page/featured-project/project-description/project-description.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/project-description/project-description.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nh3 {\n  display: none;\n  font-size: 1.3em; }\n\n.project-description {\n  font-size: 16px;\n  line-height: 20px;\n  text-align: justify; }\n\nh4 {\n  margin-top: 15px; }\n\nul {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 25px;\n  padding-bottom: 5px; }\n\nul li {\n    padding: 5px 10px;\n    border-radius: 10px;\n    border: 1px solid white;\n    color: #ddd;\n    margin-bottom: 10px;\n    font-size: 0.6em;\n    font-weight: lighter;\n    background-color: #528a8a;\n    transition: background-color 0.2s ease-in-out;\n    cursor: default; }\n\nul li:hover {\n    font-weight: normal; }\n\nul li.html:hover {\n    background-color: #DE4B25; }\n\nul li.css:hover {\n    background-color: #016FBA; }\n\nul li.typescript:hover {\n    background-color: #007ACC; }\n\nul li.bootstrap:hover {\n    background-color: #563D7C; }\n\nul li.jquery:hover {\n    background-color: #1168AE; }\n\nul li.angular:hover {\n    background-color: #D7032F; }\n\nul li.firebase:hover {\n    background-color: #F5830F; }\n\nhr {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.project-label {\n  font-size: 0.55em;\n  margin-top: 10px;\n  font-weight: bold; }\n\n.project-label:last-child {\n  margin-bottom: 25px; }\n\n.project-status.concluido {\n  color: green; }\n\n.project-status.em-desenvolvimento {\n  color: yellow; }\n\n@media (min-width: 992px) {\n  h3 {\n    display: block; }\n  .project-description {\n    margin-top: 10px; }\n  hr:last-child {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9mZWF0dXJlZC1wcm9qZWN0L3Byb2plY3QtZGVzY3JpcHRpb24vRzpcXERvY3VtZW50b3NcXFBIUFxcY29kZVxccG9ydGZvbGlvLTIwMjJcXGFuZ3VsYXItcG9ydGZvbGlvL3NyY1xcYXBwXFxnbG9iYWwtc3R5bGVzaGVldHNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC92aWV3cy9wcm9qZWN0cy1wYWdlL2ZlYXR1cmVkLXByb2plY3QvcHJvamVjdC1kZXNjcmlwdGlvbi9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxwcm9qZWN0cy1wYWdlXFxmZWF0dXJlZC1wcm9qZWN0XFxwcm9qZWN0LWRlc2NyaXB0aW9uXFxwcm9qZWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQzlCcEI7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQU52QjtJQVFRLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdEM0JTO0lDNEJULG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHlCRDlCMkI7SUMrQjNCLDZDQUE2QztJQUM3QyxlQUFlLEVBQUE7O0FBakJ2QjtJQW9CUSxtQkFBbUIsRUFBQTs7QUFwQjNCO0lBdUJRLHlCQUF5QixFQUFBOztBQXZCakM7SUEwQlEseUJBQXlCLEVBQUE7O0FBMUJqQztJQTZCUSx5QkFBeUIsRUFBQTs7QUE3QmpDO0lBZ0NRLHlCQUF5QixFQUFBOztBQWhDakM7SUFtQ1EseUJBQ0osRUFBQTs7QUFwQ0o7SUFzQ1EseUJBQXlCLEVBQUE7O0FBdENqQztJQXlDUSx5QkFBeUIsRUFBQTs7QUFJakM7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSTtJQUNJLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGdCQUFnQixFQUFBO0VBRXBCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9mZWF0dXJlZC1wcm9qZWN0L3Byb2plY3QtZGVzY3JpcHRpb24vcHJvamVjdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluLWNvbG9yOiAjZGRkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiByZ2IoODIsIDEzOCwgMTM4KTtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjMkYyRjJGO1xyXG5cclxuJG1haW4tZ3JheS1jb2xvcjogI2FhYTtcclxuXHJcbiRvdXRlci1ncmFkaWVudC1jb2xvcjogIzAwMDtcclxuJGlubmVyLWdyYWRpZW50LWNvbG9yOiAjMzMzO1xyXG5cclxuJGhlcm8tYmFja2dyb3VuZC1jb2xvcjogcmFkaWFsLWdyYWRpZW50KCRpbm5lci1ncmFkaWVudC1jb2xvciwgJG91dGVyLWdyYWRpZW50LWNvbG9yKTtcclxuXHJcbiRjYXJkLWJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC4yKTtcclxuXHJcbiRwcm9ncmVzcy1iYXItaGVpZ2h0OiAzNXB4O1xyXG5cclxuJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAuNSk7XHJcbiR0cmFuc2l0aW9uLWZhc3Q6IDAuMjVzO1xyXG5cclxuJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM6IDNzIGN1YmljLWJlemllciguNTIsLTAuMjIsLjMzLDEuMjgpIDEgZm9yd2FyZHM7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJBbWVseWFcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQW1lbHlhLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbGxhbmRcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvSGlsbGFuZC53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL3ZhcmlhYmxlcy5zY3NzJztcclxuaDMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxudWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIGxpLmh0bWw6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNERTRCMjU7XHJcbiAgICB9XHJcbiAgICBsaS5jc3M6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTZGQkE7XHJcbiAgICB9XHJcbiAgICBsaS50eXBlc2NyaXB0OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUNDO1xyXG4gICAgfVxyXG4gICAgbGkuYm9vdHN0cmFwOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYzRDdDO1xyXG4gICAgfVxyXG4gICAgbGkuanF1ZXJ5OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE2OEFFXHJcbiAgICB9XHJcbiAgICBsaS5hbmd1bGFyOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDcwMzJGO1xyXG4gICAgfVxyXG4gICAgbGkuZmlyZWJhc2U6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNTgzMEY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnByb2plY3QtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjU1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxhYmVsOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnByb2plY3Qtc3RhdHVzLmNvbmNsdWlkbyB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN0YXR1cy5lbS1kZXNlbnZvbHZpbWVudG8ge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIGhyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/projects-page/featured-project/project-description/project-description.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/project-description/project-description.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProjectDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDescriptionComponent", function() { return ProjectDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectDescriptionComponent = /** @class */ (function () {
    function ProjectDescriptionComponent() {
        this.data = null;
    }
    ProjectDescriptionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectDescriptionComponent.prototype, "data", void 0);
    ProjectDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-description',
            template: __webpack_require__(/*! ./project-description.component.html */ "./src/app/views/projects-page/featured-project/project-description/project-description.component.html"),
            styles: [__webpack_require__(/*! ./project-description.component.scss */ "./src/app/views/projects-page/featured-project/project-description/project-description.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectDescriptionComponent);
    return ProjectDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/views/projects-page/featured-project/project-images/project-images.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/project-images/project-images.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='imagens-projeto'>\r\n\r\n\r\n    <div class='featured-image-container' (click)=\"featuredImageClicked()\">\r\n        <!-- <div class=\"featured-image\" *ngFor='let image of images; let i = index'>\r\n          <img [src]='image' class=\"{{ i === selectedImageIndex ? 'opaque' : '' }}\" />\r\n        </div> -->\r\n        <img *ngFor='let image of images; let i = index' [src]='image' class=\"featured-image {{ i === selectedImageIndex ? 'opaque' : '' }}\" />\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <ul class='lista-imagens-projeto'>\r\n        <li *ngFor='let image of images; let i = index'>\r\n            <img [src]='image' [class]=\"i === selectedImageIndex ? 'current' : ''\" (click)=\"imageClicked(i)\" />\r\n        </li>\r\n    </ul>\r\n\r\n\r\n    <!-- <hr> -->\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/views/projects-page/featured-project/project-images/project-images.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/project-images/project-images.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.imagens-projeto {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  flex-grow: 1;\n  width: 100%; }\n\n.imagens-projeto hr {\n    margin: 10px; }\n\n.imagens-projeto .featured-image-container {\n    position: relative;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n    flex-basis: 75%;\n    flex-grow: 1;\n    cursor: zoom-in; }\n\n.imagens-projeto .featured-image-container .featured-image {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 80%;\n      height: 80%;\n      transform: translate(-50%, -50%);\n      transition: opacity 1s ease-in-out; }\n\n.imagens-projeto .featured-image-container .featured-image:not(.opaque) {\n      opacity: 0;\n      filter: alpha(opacity=0); }\n\n.imagens-projeto .lista-imagens-projeto {\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    margin-left: 5%;\n    margin-right: 5%;\n    flex-basis: 20%;\n    flex-shrink: 0; }\n\n.imagens-projeto .lista-imagens-projeto li {\n      position: relative;\n      flex-basis: 20%;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n\n.imagens-projeto .lista-imagens-projeto li img {\n        position: absolute;\n        width: 100%;\n        height: auto;\n        cursor: pointer;\n        transition: box-shadow 0.35s ease-in-out, transform 0.15s ease-in-out;\n        border-radius: 15px;\n        border: 2px solid #ddd; }\n\n.imagens-projeto .lista-imagens-projeto li img:hover {\n        transform: scale(1.0125); }\n\n.imagens-projeto .lista-imagens-projeto li img.current {\n        box-shadow: 0 0 5px #ddd;\n        transform: scale(1.025);\n        cursor: pointer; }\n\n@media (min-width: 992px) {\n  .imagens-projeto .featured-image-container .featured-image img {\n    width: auto;\n    height: 100%; }\n  .imagens-projeto .lista-imagens-projeto {\n    flex-basis: 15%;\n    max-height: 90px; }\n    .imagens-projeto .lista-imagens-projeto li img {\n      position: absolute;\n      width: auto;\n      height: 80%; } }\n\n@media (min-width: 1200px) {\n  .imagens-projeto .lista-imagens-projeto {\n    flex-basis: 15%;\n    max-height: 60px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9mZWF0dXJlZC1wcm9qZWN0L3Byb2plY3QtaW1hZ2VzL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9mZWF0dXJlZC1wcm9qZWN0L3Byb2plY3QtaW1hZ2VzL0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcdmlld3NcXHByb2plY3RzLXBhZ2VcXGZlYXR1cmVkLXByb2plY3RcXHByb2plY3QtaW1hZ2VzXFxwcm9qZWN0LWltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUM5QnBCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFMZjtJQU9RLFlBQVksRUFBQTs7QUFQcEI7SUFVUSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQVNmLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBeEJ2QjtNQTBCWSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVM7TUFDVCxVQUFVO01BQ1YsV0FBVztNQUNYLGdDQUFnQztNQUNoQyxrQ0FBa0MsRUFBQTs7QUFoQzlDO01BbUNZLFVBQVU7TUFDVix3QkFBd0IsRUFBQTs7QUFwQ3BDO0lBd0NRLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBRWhCLGVBQWU7SUFDZixjQUFjLEVBQUE7O0FBaER0QjtNQWtEWSxrQkFBa0I7TUFDbEIsZUFBZTtNQUdmLGFBQWE7TUFFYix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7O0FBekQvQjtRQTJEZ0Isa0JBQWtCO1FBR2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLHFFQUFxRTtRQUNyRSxtQkFBbUI7UUFDbkIsc0JEcEVDLEVBQUE7O0FDQ2pCO1FBd0VnQix3QkFBd0IsRUFBQTs7QUF4RXhDO1FBMkVnQix3QkQ1RUM7UUM4RUQsdUJBQXVCO1FBQ3ZCLGVBQWUsRUFBQTs7QUFNL0I7RUFDSTtJQUlnQixXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBTDVCO0lBVVEsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0lBWHhCO01BY2dCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVyxFQUFBLEVBQ2Q7O0FBTWpCO0VBQ0k7SUFFUSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUEsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9qZWN0cy1wYWdlL2ZlYXR1cmVkLXByb2plY3QvcHJvamVjdC1pbWFnZXMvcHJvamVjdC1pbWFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbi1jb2xvcjogI2RkZDtcclxuJHNlY29uZGFyeS1jb2xvcjogcmdiKDgyLCAxMzgsIDEzOCk7XHJcbiR0ZXJ0aWFyeS1jb2xvcjogIzJGMkYyRjtcclxuXHJcbiRtYWluLWdyYXktY29sb3I6ICNhYWE7XHJcblxyXG4kb3V0ZXItZ3JhZGllbnQtY29sb3I6ICMwMDA7XHJcbiRpbm5lci1ncmFkaWVudC1jb2xvcjogIzMzMztcclxuXHJcbiRoZXJvLWJhY2tncm91bmQtY29sb3I6IHJhZGlhbC1ncmFkaWVudCgkaW5uZXItZ3JhZGllbnQtY29sb3IsICRvdXRlci1ncmFkaWVudC1jb2xvcik7XHJcblxyXG4kY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuMik7XHJcblxyXG4kcHJvZ3Jlc3MtYmFyLWhlaWdodDogMzVweDtcclxuXHJcbiRkZWZhdWx0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgLjUpO1xyXG4kdHJhbnNpdGlvbi1mYXN0OiAwLjI1cztcclxuXHJcbiRoZWFkZXItbG9nby1hbmltYXRpb24tcGFyYW1zOiAzcyBjdWJpYy1iZXppZXIoLjUyLC0wLjIyLC4zMywxLjI4KSAxIGZvcndhcmRzO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW1lbHlhXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0FtZWx5YS53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJIaWxsYW5kXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0hpbGxhbmQud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2dsb2JhbC1zdHlsZXNoZWV0cy92YXJpYWJsZXMuc2Nzcyc7XHJcbi5pbWFnZW5zLXByb2pldG8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBociB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVkLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLy8gZmxleC1ncm93OiAxO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRtYWluLWNvbG9yO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMCAwIDVweCAkbWFpbi1jb2xvcjtcclxuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBjdXJzb3I6IHpvb20taW47XHJcbiAgICAgICAgLmZlYXR1cmVkLWltYWdlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWF0dXJlZC1pbWFnZTpub3QoLm9wYXF1ZSkge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpc3RhLWltYWdlbnMtcHJvamV0byB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBhcXVhO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDIwJTtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gdG9wOiA1MCU7IGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMzVzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWc6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4wMjUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxMjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy5jdXJyZW50IHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5pbWFnZW5zLXByb2pldG8ge1xyXG4gICAgICAgIC5mZWF0dXJlZC1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAuZmVhdHVyZWQtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3RhLWltYWdlbnMtcHJvamV0byB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDE1JTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5pbWFnZW5zLXByb2pldG8ge1xyXG4gICAgICAgIC5saXN0YS1pbWFnZW5zLXByb2pldG8ge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxNSU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/views/projects-page/featured-project/project-images/project-images.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/projects-page/featured-project/project-images/project-images.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProjectImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectImagesComponent", function() { return ProjectImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/utils */ "./src/app/shared/utils.ts");



var ProjectImagesComponent = /** @class */ (function () {
    function ProjectImagesComponent() {
        this.imageClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.images = [];
        this.selectedImageIndex = 0;
    }
    ProjectImagesComponent.prototype.ngOnInit = function () {
    };
    ProjectImagesComponent.prototype.featuredImageClicked = function () {
        if (_shared_utils__WEBPACK_IMPORTED_MODULE_2__["BTMobileDetector"].isDesktop()) {
            this.imageClickedEvent.emit(this.images);
        }
    };
    ProjectImagesComponent.prototype.imageClicked = function (i) {
        this.selectedImageIndex = i;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProjectImagesComponent.prototype, "imageClickedEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProjectImagesComponent.prototype, "images", void 0);
    ProjectImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-images',
            template: __webpack_require__(/*! ./project-images.component.html */ "./src/app/views/projects-page/featured-project/project-images/project-images.component.html"),
            styles: [__webpack_require__(/*! ./project-images.component.scss */ "./src/app/views/projects-page/featured-project/project-images/project-images.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectImagesComponent);
    return ProjectImagesComponent;
}());



/***/ }),

/***/ "./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titulo-projeto\">{{ data.titulo }}</div>\r\n<div class=\"techs-usadas\">{{ data.techUsed.join(', ') }}</div>\r\n<div class=\"icones-item\">\r\n    <a target=\"_blank\" [href]=\"data.gitUrl\"><i class=\"fab fa-github-square github\"></i></a>\r\n    <i class=\"fas fa-camera camera\" (click)=\"showMinorProjectImage()\"></i>\r\n</div>"

/***/ }),

/***/ "./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.titulo-projeto, .techs-usadas {\n  margin-bottom: 10px; }\n\n.titulo-projeto {\n  color: #528a8a;\n  font-size: 1.3em;\n  font-weight: 900;\n  text-shadow: 0px 0px 5px #528a8a; }\n\n.techs-usadas {\n  color: #ddd;\n  font-size: 1.15em;\n  font-weight: 700;\n  flex-basis: 100%;\n  text-align: center; }\n\n.icones-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  order: 1; }\n\ni:hover {\n  color: #528a8a; }\n\ni.github {\n  font-size: 2rem;\n  cursor: pointer;\n  margin-right: 15px; }\n\ni.camera {\n  font-size: 2rem;\n  cursor: pointer; }\n\n.titulo-projeto, i {\n  transition: color 0.2s ease-in-out; }\n\n@media (min-width: 992px) {\n  .titulo-projeto {\n    margin-bottom: unset; }\n  .techs-usadas {\n    flex-basis: unset;\n    margin-bottom: unset; }\n  .icones-item {\n    order: 0;\n    margin-bottom: unset; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9taW5vci1wcm9qZWN0cy9taW5vci1wcm9qZWN0L0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcZ2xvYmFsLXN0eWxlc2hlZXRzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9taW5vci1wcm9qZWN0cy9taW5vci1wcm9qZWN0L0c6XFxEb2N1bWVudG9zXFxQSFBcXGNvZGVcXHBvcnRmb2xpby0yMDIyXFxhbmd1bGFyLXBvcnRmb2xpby9zcmNcXGFwcFxcdmlld3NcXHByb2plY3RzLXBhZ2VcXG1pbm9yLXByb2plY3RzXFxtaW5vci1wcm9qZWN0XFxtaW5vci1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQzdCcEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjRE4rQjtFQ08vQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdDRFQrQixFQUFBOztBQ1luQztFQUNJLFdEZGE7RUNlYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixRQUFRLEVBQUE7O0FBR1o7RUFDSSxjRDVCK0IsRUFBQTs7QUMrQm5DO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtDQUFrQyxFQUFBOztBQUd0QztFQUVJO0lBQ0ksb0JBQW9CLEVBQUE7RUFHeEI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CLEVBQUE7RUFHeEI7SUFDSSxRQUFRO0lBQ1Isb0JBQW9CLEVBQUEsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9qZWN0cy1wYWdlL21pbm9yLXByb2plY3RzL21pbm9yLXByb2plY3QvbWlub3ItcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluLWNvbG9yOiAjZGRkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiByZ2IoODIsIDEzOCwgMTM4KTtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjMkYyRjJGO1xyXG5cclxuJG1haW4tZ3JheS1jb2xvcjogI2FhYTtcclxuXHJcbiRvdXRlci1ncmFkaWVudC1jb2xvcjogIzAwMDtcclxuJGlubmVyLWdyYWRpZW50LWNvbG9yOiAjMzMzO1xyXG5cclxuJGhlcm8tYmFja2dyb3VuZC1jb2xvcjogcmFkaWFsLWdyYWRpZW50KCRpbm5lci1ncmFkaWVudC1jb2xvciwgJG91dGVyLWdyYWRpZW50LWNvbG9yKTtcclxuXHJcbiRjYXJkLWJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC4yKTtcclxuXHJcbiRwcm9ncmVzcy1iYXItaGVpZ2h0OiAzNXB4O1xyXG5cclxuJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAuNSk7XHJcbiR0cmFuc2l0aW9uLWZhc3Q6IDAuMjVzO1xyXG5cclxuJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM6IDNzIGN1YmljLWJlemllciguNTIsLTAuMjIsLjMzLDEuMjgpIDEgZm9yd2FyZHM7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJBbWVseWFcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQW1lbHlhLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbGxhbmRcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvSGlsbGFuZC53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi50aXR1bG8tcHJvamV0bywgLnRlY2hzLXVzYWRhcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGl0dWxvLXByb2pldG8ge1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4udGVjaHMtdXNhZGFzIHtcclxuICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uZXMtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgb3JkZXI6IDE7XHJcbn1cclxuXHJcbmk6aG92ZXIge1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuXHJcbmkuZ2l0aHViIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaS5jYW1lcmEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGl0dWxvLXByb2pldG8sIGkge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gICAgLnRpdHVsby1wcm9qZXRvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgIH1cclxuXHJcbiAgICAudGVjaHMtdXNhZGFzIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiB1bnNldDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmljb25lcy1pdGVtIHtcclxuICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MinorProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinorProjectComponent", function() { return MinorProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MinorProjectComponent = /** @class */ (function () {
    function MinorProjectComponent() {
        this.data = null;
        this.minorProjectImageClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MinorProjectComponent.prototype.ngOnInit = function () { };
    MinorProjectComponent.prototype.showMinorProjectImage = function () {
        this.minorProjectImageClickedEvent.emit(this.data.imageUrls[0]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MinorProjectComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MinorProjectComponent.prototype, "minorProjectImageClickedEvent", void 0);
    MinorProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-minor-project',
            template: __webpack_require__(/*! ./minor-project.component.html */ "./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.html"),
            styles: [__webpack_require__(/*! ./minor-project.component.scss */ "./src/app/views/projects-page/minor-projects/minor-project/minor-project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MinorProjectComponent);
    return MinorProjectComponent;
}());



/***/ }),

/***/ "./src/app/views/projects-page/minor-projects/minor-projects.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/projects-page/minor-projects/minor-projects.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"hideable-content-toggler\">\r\n        <label for=\"expand-icon\">{{ minorProjectsHeading }}</label>\r\n        <button id=\"expand-icon\" class=\"{{ showMenu ? 'toggled' : '' }}\" (click)=\"toggleMenu()\">\r\n      <div class=\"vertical\"></div>\r\n      <div class=\"horizontal\"></div>\r\n    </button>\r\n    </div>\r\n    <div class=\"minor-projects-list-container hideable-content {{ showMenu ? 'visible' : '' }}\">\r\n        <ul class=\"minor-projects-list\">\r\n            <li *ngFor=\"let project of projects\">\r\n                <app-minor-project [data]=\"project\" (minorProjectImageClickedEvent)=\"propagate($event)\"></app-minor-project>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/views/projects-page/minor-projects/minor-projects.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/views/projects-page/minor-projects/minor-projects.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\nsection {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 15px; }\n\nh3 {\n  margin-bottom: 25px;\n  text-align: center; }\n\n.minor-projects-list-container {\n  overflow-y: auto;\n  max-height: 400px; }\n\n.minor-projects-list {\n  padding: 5px 10px;\n  list-style: none;\n  display: flex;\n  flex-direction: column; }\n\n.minor-projects-list li {\n    padding: 15px 20px;\n    align-self: stretch;\n    border: none;\n    border-bottom: 2px solid #aaa8;\n    color: #528a8a;\n    transition: background-color 0.2s ease-in-out, color 0.15s ease-in-out; }\n\n.minor-projects-list li app-minor-project {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center; }\n\n.minor-projects-list li:first-child {\n    border-top: 2px solid #aaa8; }\n\n.minor-projects-list li:hover {\n    background-color: #ffffff10;\n    color: #2F2F2F; }\n\n@media (min-width: 992px) {\n  .minor-projects-list-container {\n    transition-property: transform, opacity;\n    transform-origin: top;\n    transition: 0.5s ease-in-out; }\n  .minor-projects-list {\n    padding: 20px 40px; }\n    .minor-projects-list li app-minor-project {\n      justify-content: space-between; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9taW5vci1wcm9qZWN0cy9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXGdsb2JhbC1zdHlsZXNoZWV0c1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3Byb2plY3RzLXBhZ2UvbWlub3ItcHJvamVjdHMvRzpcXERvY3VtZW50b3NcXFBIUFxcY29kZVxccG9ydGZvbGlvLTIwMjJcXGFuZ3VsYXItcG9ydGZvbGlvL3NyY1xcYXBwXFx2aWV3c1xccHJvamVjdHMtcGFnZVxcbWlub3ItcHJvamVjdHNcXG1pbm9yLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQzNCcEI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUV0QixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFFSSxpQkFBaUI7RUFFakIsZ0JBQWdCO0VBRWhCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFQMUI7SUFVUSxrQkFBa0I7SUFFbEIsbUJBQW1CO0lBRW5CLFlBQVk7SUFDWiw4QkFuQ2U7SUFxQ2YsY0R0QzJCO0lDd0MzQixzRUFBc0UsRUFBQTs7QUFuQjlFO01Bc0JZLGFBQWE7TUFDYixlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLG1CQUFtQixFQUFBOztBQXpCL0I7SUE4QlEsMkJBbERlLEVBQUE7O0FBb0J2QjtJQWtDUSwyQkFBMkI7SUFDM0IsY0R2RGdCLEVBQUE7O0FDNER4QjtFQUNJO0lBQ0ksdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQiw0QkFBNEIsRUFBQTtFQUdoQztJQUNJLGtCQUFrQixFQUFBO0lBRHRCO01BSVksOEJBQThCLEVBQUEsRUFDakMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9qZWN0cy1wYWdlL21pbm9yLXByb2plY3RzL21pbm9yLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW4tY29sb3I6ICNkZGQ7XHJcbiRzZWNvbmRhcnktY29sb3I6IHJnYig4MiwgMTM4LCAxMzgpO1xyXG4kdGVydGlhcnktY29sb3I6ICMyRjJGMkY7XHJcblxyXG4kbWFpbi1ncmF5LWNvbG9yOiAjYWFhO1xyXG5cclxuJG91dGVyLWdyYWRpZW50LWNvbG9yOiAjMDAwO1xyXG4kaW5uZXItZ3JhZGllbnQtY29sb3I6ICMzMzM7XHJcblxyXG4kaGVyby1iYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwtZ3JhZGllbnQoJGlubmVyLWdyYWRpZW50LWNvbG9yLCAkb3V0ZXItZ3JhZGllbnQtY29sb3IpO1xyXG5cclxuJGNhcmQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNzksIDc5LCAwLjIpO1xyXG5cclxuJHByb2dyZXNzLWJhci1oZWlnaHQ6IDM1cHg7XHJcblxyXG4kZGVmYXVsdC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc3LCAwLjIsIDAuMDUsIC41KTtcclxuJHRyYW5zaXRpb24tZmFzdDogMC4yNXM7XHJcblxyXG4kaGVhZGVyLWxvZ28tYW5pbWF0aW9uLXBhcmFtczogM3MgY3ViaWMtYmV6aWVyKC41MiwtMC4yMiwuMzMsMS4yOCkgMSBmb3J3YXJkcztcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFtZWx5YVwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9BbWVseWEud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGlsbGFuZFwiO1xyXG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9IaWxsYW5kLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9nbG9iYWwtc3R5bGVzaGVldHMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuJHNlcGFyYXRvci1jb2xvcjogI2FhYTg7O1xyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWlub3ItcHJvamVjdHMtbGlzdC1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4ubWlub3ItcHJvamVjdHMtbGlzdCB7XHJcblxyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2VwYXJhdG9yLWNvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dCwgY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgIGFwcC1taW5vci1wcm9qZWN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgJHNlcGFyYXRvci1jb2xvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxMDtcclxuICAgICAgICBjb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWlub3ItcHJvamVjdHMtbGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAubWlub3ItcHJvamVjdHMtbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgYXBwLW1pbm9yLXByb2plY3Qge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/views/projects-page/minor-projects/minor-projects.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/projects-page/minor-projects/minor-projects.component.ts ***!
  \********************************************************************************/
/*! exports provided: MinorProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinorProjectsComponent", function() { return MinorProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/i18n/language */ "./src/app/shared/i18n/language.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _projects_page_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects-page.i18n */ "./src/app/views/projects-page/projects-page.i18n.ts");





var MinorProjectsComponent = /** @class */ (function () {
    function MinorProjectsComponent() {
        this.projects = [];
        this.minorProjectImageClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showMenu = true;
    }
    MinorProjectsComponent.prototype.ngOnInit = function () {
        this.minorProjectsHeading = _projects_page_i18n__WEBPACK_IMPORTED_MODULE_4__["default"][src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_2__["currentLanguage"]].minorProjectsHeading;
    };
    MinorProjectsComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
    };
    MinorProjectsComponent.prototype.propagate = function (eventData) {
        this.minorProjectImageClickedEvent.emit(eventData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MinorProjectsComponent.prototype, "projects", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MinorProjectsComponent.prototype, "minorProjectImageClickedEvent", void 0);
    MinorProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-minor-projects',
            template: __webpack_require__(/*! ./minor-projects.component.html */ "./src/app/views/projects-page/minor-projects/minor-projects.component.html"),
            providers: [_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]],
            styles: [__webpack_require__(/*! ./minor-projects.component.scss */ "./src/app/views/projects-page/minor-projects/minor-projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MinorProjectsComponent);
    return MinorProjectsComponent;
}());



/***/ }),

/***/ "./src/app/views/projects-page/projects-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/projects-page/projects-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"projetos\" class=\"flex-columns\">\r\n\r\n    <div *ngIf=\"featuredProjects && featuredProjects.length; else loading\">\r\n        <div id=\"header-projetos\">\r\n            <h1>{{ headings.mainHeading }}</h1>\r\n            <h3>{{ headings.subHeading }}</h3>\r\n            <p>{{ headings.paragraph }}</p>\r\n        </div>\r\n        <hr />\r\n        <ol class=\"lista-projetos\">\r\n            <app-featured-project *ngFor=\"let featuredProject of featuredProjects\" class=\"projeto\" [projectData]='featuredProject' (imageClickedEvent)=\"showModal($event)\">\r\n            </app-featured-project>\r\n        </ol>\r\n\r\n        <hr>\r\n\r\n        <app-company-projects [projects]=\"companyProjects\">\r\n        </app-company-projects>\r\n\r\n        <hr>\r\n\r\n\r\n        <app-minor-projects [projects]=\"minorProjects\" (minorProjectImageClickedEvent)=\"showModal($event)\">\r\n        </app-minor-projects>\r\n    </div>\r\n\r\n    <ng-template #loading>\r\n        <app-loading-spinner>\r\n        </app-loading-spinner>\r\n    </ng-template>\r\n\r\n    <div *ngIf=\"modalIsShowing\">\r\n        <app-modal [modalData]=\"modalData\" [modalType]=\"modalType\" (closeModalEvent)=\"dismissModal()\"></app-modal>\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/projects-page/projects-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/projects-page/projects-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@keyframes fadeIn {\n  100% {\n    opacity: 1; } }\n\n@keyframes resetTransform {\n  100% {\n    transform: unset; } }\n\n@keyframes shakeAnimation {\n  0% {\n    transform: translate(0); }\n  10% {\n    transform: translate(7px); }\n  20% {\n    transform: translate(-14px); }\n  30% {\n    transform: translate(21px); }\n  40% {\n    transform: translate(-28px); }\n  50% {\n    transform: translate(0); }\n  60% {\n    transform: translate(28px); }\n  70% {\n    transform: translate(-21px); }\n  80% {\n    transform: translate(14px); }\n  90% {\n    transform: translate(-7px); }\n  100% {\n    transform: translate(0); } }\n\n#projetos hr {\n  margin: 25px auto; }\n\n#header-projetos {\n  color: #ddd;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n#header-projetos h3 {\n    font-size: 1.25em;\n    margin-top: 10px; }\n\n#header-projetos p {\n    font-size: 1em;\n    margin-top: 5px;\n    text-align: justify; }\n\n.lista-projetos {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin-top: 35px;\n  padding: 5px;\n  list-style-type: none; }\n\n.projeto {\n  border: 2px solid #ccc;\n  box-shadow: 0px 0px 5px 1px #ccc;\n  border-radius: 10%;\n  padding: 15px 25px;\n  margin: 20px auto;\n  flex-wrap: wrap;\n  flex-basis: 80%;\n  display: flex;\n  flex-direction: column;\n  min-height: 300px;\n  background-color: rgba(47, 79, 79, 0.2); }\n\n@media (min-width: 768px) {\n  .projeto {\n    flex-basis: 60%;\n    flex-grow: 0; } }\n\n@media (min-width: 992px) {\n  .projeto {\n    flex-basis: 40%;\n    flex-grow: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXGdsb2JhbC1zdHlsZXNoZWV0c1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3Byb2plY3RzLXBhZ2UvRzpcXERvY3VtZW50b3NcXFBIUFxcY29kZVxccG9ydGZvbGlvLTIwMjJcXGFuZ3VsYXItcG9ydGZvbGlvL3NyY1xcYXBwXFxnbG9iYWwtc3R5bGVzaGVldHNcXGFuaW1hdGlvbnMuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJvamVjdHMtcGFnZS9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxwcm9qZWN0cy1wYWdlXFxwcm9qZWN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNFLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQy9CcEI7RUFDSTtJQUNJLFVBQVUsRUFBQSxFQUFBOztBQUlsQjtFQUNJO0lBQ0ksZ0JBQWdCLEVBQUEsRUFBQTs7QUFJeEI7RUFJSTtJQUNJLHVCQUF1QixFQUFBO0VBRzNCO0lBQ0kseUJBQXdDLEVBQUE7RUFHNUM7SUFDSSwyQkFBNkMsRUFBQTtFQUdqRDtJQUNJLDBCQUE0QyxFQUFBO0VBR2hEO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSx1QkFBdUIsRUFBQTtFQUczQjtJQUNJLDBCQUE0QyxFQUFBO0VBR2hEO0lBQ0ksMkJBQTZDLEVBQUE7RUFHakQ7SUFDSSwwQkFBNEMsRUFBQTtFQUdoRDtJQUNJLDBCQUE2QyxFQUFBO0VBR2pEO0lBQ0ksdUJBQXVCLEVBQUEsRUFBQTs7QUNyRC9CO0VBRVEsaUJBQWlCLEVBQUE7O0FBS3pCO0VBQ0ksV0ZaYTtFRWFiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFOdkI7SUFVUSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBWHhCO0lBZVEsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFLM0I7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix1Q0YxQ3lDLEVBQUE7O0FFNkM3QztFQUNJO0lBQ0ksZUFBZTtJQUNmLFlBQVksRUFBQSxFQUNmOztBQUdMO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9qZWN0cy1wYWdlL3Byb2plY3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbi1jb2xvcjogI2RkZDtcclxuJHNlY29uZGFyeS1jb2xvcjogcmdiKDgyLCAxMzgsIDEzOCk7XHJcbiR0ZXJ0aWFyeS1jb2xvcjogIzJGMkYyRjtcclxuXHJcbiRtYWluLWdyYXktY29sb3I6ICNhYWE7XHJcblxyXG4kb3V0ZXItZ3JhZGllbnQtY29sb3I6ICMwMDA7XHJcbiRpbm5lci1ncmFkaWVudC1jb2xvcjogIzMzMztcclxuXHJcbiRoZXJvLWJhY2tncm91bmQtY29sb3I6IHJhZGlhbC1ncmFkaWVudCgkaW5uZXItZ3JhZGllbnQtY29sb3IsICRvdXRlci1ncmFkaWVudC1jb2xvcik7XHJcblxyXG4kY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA3OSwgNzksIDAuMik7XHJcblxyXG4kcHJvZ3Jlc3MtYmFyLWhlaWdodDogMzVweDtcclxuXHJcbiRkZWZhdWx0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzcsIDAuMiwgMC4wNSwgLjUpO1xyXG4kdHJhbnNpdGlvbi1mYXN0OiAwLjI1cztcclxuXHJcbiRoZWFkZXItbG9nby1hbmltYXRpb24tcGFyYW1zOiAzcyBjdWJpYy1iZXppZXIoLjUyLC0wLjIyLC4zMywxLjI4KSAxIGZvcndhcmRzO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW1lbHlhXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0FtZWx5YS53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJIaWxsYW5kXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL0hpbGxhbmQud29mZlwiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufSIsIkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmVzZXRUcmFuc2Zvcm0ge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB1bnNldDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFrZUFuaW1hdGlvbiB7XHJcblxyXG4gICAgJGJhc2Utc2hha2Utb2Zmc2V0OiA3cHg7XHJcblxyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApXHJcbiAgICB9XHJcblxyXG4gICAgMTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgMjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMiAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICAzMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCAqICRiYXNlLXNoYWtlLW9mZnNldClcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApXHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0ICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDcwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgODAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyICogJGJhc2Utc2hha2Utb2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEgKiAkYmFzZS1zaGFrZS1vZmZzZXQpXHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcclxuICAgIH1cclxufSIsIkBpbXBvcnQgJy4uLy4uL2dsb2JhbC1zdHlsZXNoZWV0cy92YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uL2dsb2JhbC1zdHlsZXNoZWV0cy9hbmltYXRpb25zLnNjc3MnO1xyXG5cclxuXHJcbiNwcm9qZXRvcyB7XHJcbiAgICBociB7XHJcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4jaGVhZGVyLXByb2pldG9zIHtcclxuICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIFxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5saXN0YS1wcm9qZXRvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZXRvIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1iYXNpczogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByb2pldG8ge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcclxuICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnByb2pldG8ge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcclxuICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/projects-page/projects-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/projects-page/projects-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var src_app_views_projects_page_projects_page_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/views/projects-page/projects-page.i18n */ "./src/app/views/projects-page/projects-page.i18n.ts");
/* harmony import */ var src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/i18n/language */ "./src/app/shared/i18n/language.ts");





var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(projectService) {
        this.projectService = projectService;
        this.language = src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_4__["currentLanguage"];
        this.featuredProjects = [];
        this.companyProjects = [];
        this.minorProjects = [];
        this.modalIsShowing = false;
        this.modalType = null;
        this.modalData = {
            "titulo": "",
            "corpo": ""
        };
    }
    ProjectsPage.prototype.ngAfterViewInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.projectService.getProjects()];
                    case 1:
                        _a = _b.sent(), this.featuredProjects = _a[0], this.minorProjects = _a[1], this.companyProjects = _a[2];
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectsPage.prototype.ngOnInit = function () {
        this.headings = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, src_app_views_projects_page_projects_page_i18n__WEBPACK_IMPORTED_MODULE_3__["default"][this.language]);
    };
    ProjectsPage.prototype.dismissModal = function () {
        this.modalIsShowing = false;
    };
    ProjectsPage.prototype.showModal = function (urls) {
        if (Array.isArray(urls)) {
            this.modalIsShowing = true;
            this.modalData.images = urls;
            this.modalType = 'images';
        }
        else if ((typeof (urls)).toLowerCase() === 'string') {
            this.modalIsShowing = true;
            this.modalData.image = urls;
            this.modalType = 'image';
        }
    };
    ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-page',
            template: __webpack_require__(/*! ./projects-page.component.html */ "./src/app/views/projects-page/projects-page.component.html"),
            providers: [_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]],
            styles: [__webpack_require__(/*! ./projects-page.component.scss */ "./src/app/views/projects-page/projects-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectsPage);
    return ProjectsPage;
}());



/***/ }),

/***/ "./src/app/views/projects-page/projects-page.i18n.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/projects-page/projects-page.i18n.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    english: {
        mainHeading: 'Projects',
        subHeading: 'Here are the main projects I\'ve build so far',
        paragraph: 'Every project in this list were entirely built by me, both the front and back ends (unless explicitly stated otherwise)',
        companyProjectsHeading: "Company Projects",
        minorProjectsHeading: "Other projects",
    },
    portuguese: {
        mainHeading: 'Projetos',
        subHeading: 'Aqui estão os principais projetos já realizados',
        paragraph: 'Todos os projetos desta lista foram construídos inteiramente por mim, ambas as partes de front-end e back-end (a menos que explicitado o contrário)',
        companyProjectsHeading: "Projetos de Empresas",
        minorProjectsHeading: "Outros projetos",
    },
});


/***/ }),

/***/ "./src/app/views/resume-page/resources/back-end-skills.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/resume-page/resources/back-end-skills.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    { name: 'NodeJS' },
    { name: 'TypeScript' },
    { name: 'Jest' },
    { name: 'PHP' },
    { name: 'PHPUnit' },
    { name: 'Laravel' },
    { name: 'MySQL' },
    { name: 'MongoDB' },
    { name: 'Kafka' },
    { name: 'Redis' },
]);


/***/ }),

/***/ "./src/app/views/resume-page/resources/courses.ts":
/*!********************************************************!*\
  !*** ./src/app/views/resume-page/resources/courses.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        courseTitle: 'Desenvolvedor web completo 2019',
        linkTitle: 'Desenvolvedor web completo 2019',
        url: 'https://www.udemy.com/web-completo'
    },
    {
        courseTitle: 'Desenvolvedor web com ES6, TypeScript e Angular',
        linkTitle: 'Desenvolvedor web com ES6, TypeScript e Angular',
        url: 'https://www.udemy.com/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/'
    },
    {
        courseTitle: 'The Advanced Web Developer Bootcamp',
        linkTitle: 'The Advanced Web Developer Bootcamp',
        url: 'https://www.udemy.com/the-advanced-web-developer-bootcamp/'
    },
    {
        courseTitle: 'Desenvolvedor NodeJS',
        linkTitle: 'Desenvolvedor NodeJS',
        url: 'https://www.udemy.com/curso-completo-do-desenvolvedor-nodejs/'
    },
    {
        courseTitle: 'The Complete Junior to Senior Web Developer Roadmap (2019)',
        linkTitle: 'The Complete Junior to Senior Web Developer Roadmap (2019)',
        url: 'https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/'
    },
    {
        courseTitle: 'Laravel 5.6 Completo - O mais poderoso Framework PHP',
        linkTitle: 'Laravel 5.6 Completo - O mais poderoso Framework PHP',
        url: 'https://www.udemy.com/laravelcompleto/'
    },
    {
        courseTitle: 'TypeScript, Node, ES6 e Postgres - CRIE PROJETOS DO ZERO',
        linkTitle: 'TypeScript, Node, ES6 e Postgres - CRIE PROJETOS DO ZERO',
        url: 'https://www.udemy.com/typescript-na-pratica-criando-aplicacoes-web-com-typescript'
    },
    {
        courseTitle: 'Firebase para Web e Apps híbridos',
        linkTitle: 'Firebase para Web e Apps híbridos',
        url: 'https://www.udemy.com/firebase-para-web-e-apps-hibridos'
    },
    {
        courseTitle: 'Mastering Data Structures & Algorithms using C and C++',
        linkTitle: 'Mastering Data Structures & Algorithms using C and C++',
        url: 'https://www.udemy.com/course/datastructurescncpp'
    },
    {
        courseTitle: 'Docker: Ferramenta essencial para Desenvolvedores',
        linkTitle: 'Docker: Ferramenta essencial para Desenvolvedores',
        url: 'https://www.udemy.com/course/curso-docker/'
    },
    {
        courseTitle: 'Bootcamp IGTI: DevOps',
        linkTitle: 'Bootcamp IGTI: DevOps',
        url: 'https://www.igti.com.br/'
    },
    {
        courseTitle: 'PHPUnit in 2020 - Unit & Selenium Testing For PHP Developers',
        linkTitle: 'PHPUnit in 2020 - Unit & Selenium Testing For PHP Developers',
        url: 'https://www.udemy.com/course/phpunit-unit-selenium-testing-for-php-developers/'
    },
    {
        courseTitle: 'Certificação AWS Desenvolvedor 2020',
        linkTitle: 'Certificação AWS Desenvolvedor 2020',
        url: 'https://www.udemy.com/course/aws-developer/'
    },
]);


/***/ }),

/***/ "./src/app/views/resume-page/resources/front-end-skills.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/resume-page/resources/front-end-skills.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    { name: 'HTML' },
    { name: 'CSS/SASS' },
    { name: 'Javascript' },
    { name: 'React' },
    { name: 'Angular' },
    { name: 'Bootstrap' },
    { name: 'jQuery' },
]);


/***/ }),

/***/ "./src/app/views/resume-page/resources/general-skills.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/resume-page/resources/general-skills.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    { name: 'Git' },
    { name: 'Docker' },
    { name: 'SSH/Bash' },
    { name: 'Load testing' },
    { name: 'AWS: EC2, S3, RDS, SNS, SQS, ELB' },
    { name: 'Firebase' },
]);


/***/ }),

/***/ "./src/app/views/resume-page/resources/programming-languages.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/resume-page/resources/programming-languages.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        name: 'PHP',
    },
    {
        name: 'JavaScript',
    },
    {
        name: 'TypeScript',
    },
    {
        name: 'Swift',
    },
    {
        name: 'Python',
    },
    {
        name: 'C',
    },
    {
        name: 'C++',
    },
    {
        name: 'C#',
    }
]);


/***/ }),

/***/ "./src/app/views/resume-page/resume-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/resume-page/resume-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"intro\">\r\n        <h1>Tiago Batista</h1>\r\n        <hr>\r\n        <div id=\"general-info\">\r\n            <a target=\"_blank\" href=\"https://linkedin.com/in/batistatiago\" class=\"centered-flex-container\">\r\n                <i class=\"fab fa-linkedin\"></i>\r\n                <span>/in/batistaTiago</span>\r\n            </a>\r\n            <a href=\"mailto:ekyidag@gmail.com\" class=\"centered-flex-container\">\r\n                <i class=\"fas fa-envelope\"></i>\r\n                <span>ekyidag@gmail.com</span>\r\n            </a>\r\n            <a target=\"_blank\" href=\"https://github.com/batistatiago\" class=\"centered-flex-container\">\r\n                <i class=\"fab fa-github\"></i>\r\n                <span>/batistaTiago</span>\r\n            </a>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div id=\"experience\">\r\n        <h2>{{ headings.professionalExperience }}</h2>\r\n        <ul class=\"lista-experience\">\r\n            <li>\r\n                <div>\r\n                    <span class=\"company-name\">Olist Serviços Digitais</span>\r\n                    <span class=\"job-location\">Remote</span>\r\n                </div>\r\n                <div>\r\n                    <span class=\"job-title\">Senior Backend Software Engineer</span>\r\n                    <span class=\"job-timeline\">May/2021 - Current</span>\r\n                </div>\r\n                <ul class=\"job-items\">\r\n                    <li>Worked on all stages of the development lifecycle, from the conception of new features to the shipment to production of a nation-wide TMS (Transportation Management System)</li>\r\n                    <li>Stack: PHP, TypeScript, Node, Laravel, Kafka, MySQL, MongoDB, Redis, Docker</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <div>\r\n                    <span class=\"company-name\">LessClick Systems LTDA</span>\r\n                    <span class=\"job-location\">Remote</span>\r\n                </div>\r\n                <div>\r\n                    <span class=\"job-title\">Mid-level Back End Software Engineer</span>\r\n                    <span class=\"job-timeline\">October/2018 - May/2021</span>\r\n                </div>\r\n                <ul class=\"job-items\">\r\n                    <li>Worked on all stages of the development lifecycle, from the conception of new features to the shipment to production of a ticketing system with 400k users</li>\r\n                    <li>Stack: PHP, Node, ReactJS, TypeScript, Laravel, MySQL, Redis, Docker, Firebase, Bootstrap, jQuery</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <div>\r\n                    <span class=\"company-name\">BraveCloud Tecnologia da Informação</span>\r\n                    <span class=\"job-location\">Natal - Brazil</span>\r\n                </div>\r\n                <div>\r\n                    <span class=\"job-title\">Junior Software Engineer</span>\r\n                    <span class=\"job-timeline\">March/2018 - October/2018</span>\r\n                </div>\r\n                <ul class=\"job-items\">\r\n                    <li>Worked on the development of a framework to process and edit images (macOS/iOS) and some commercial websites</li>\r\n                    <li>Linguagens: HTML, CSS, JavaScript, PHP, MySQL, Swift</li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <div>\r\n                    <span class=\"company-name\">BraveCloud Tecnologia da Informação</span>\r\n                    <span class=\"job-location\">Natal - Brazil</span>\r\n                </div>\r\n                <div>\r\n                    <span class=\"job-title\">Software Engineering Intern</span>\r\n                    <span class=\"job-timeline\">June/2017 - March/2018</span>\r\n                </div>\r\n                <ul class=\"job-items\">\r\n                    <li>Worked on the development of a framework to process and edit images (macOS/iOS) and some commercial websites</li>\r\n                    <li>Linguagens: HTML, CSS, JavaScript, PHP, MySQL, Swift</li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div id=\"education\">\r\n        <h2>{{ headings.education }}</h2>\r\n        <ul class=\"lista-formacoes\">\r\n            <li>\r\n                Bachelor in Science and Technology\r\n            </li>\r\n            <li>\r\n                Mechatronics and Robotics engineer\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div id=\"qualifications\">\r\n        <h2>{{ headings.qualifications }}</h2>\r\n        <div class=\"general-qualifications\">\r\n\r\n            <div class=\"general-qualification\">\r\n                <span>Front-end</span>\r\n                <ul class=\"specific-qualifications\">\r\n                    <li *ngFor=\"let qual of frontEndQualifications\">{{ qual.name }}</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <!-- <div class=\"separator\"></div> -->\r\n\r\n            <div class=\"general-qualification\">\r\n                <span>Back-end</span>\r\n                <ul class=\"specific-qualifications\">\r\n                    <li *ngFor=\"let qual of backEndQualifications\">{{ qual.name }}</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <div class=\"general-qualification\">\r\n                <span>{{ headings.otherQualifications }}</span>\r\n                <ul class=\"specific-qualifications\">\r\n                    <li *ngFor=\"let qual of otherQualifications\">{{ qual.name }}</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <!-- <div class=\"separator\"></div>\r\n        \r\n        <div class=\"general-qualification\">\r\n          <span>Mobile</span>\r\n          <ul class=\"specific-qualifications\">\r\n            <li>\r\n              Swift\r\n            </li>\r\n            <li>\r\n              Kotlin\r\n            </li>\r\n            <li>\r\n              Ionic\r\n            </li>\r\n          </ul>\r\n        </div> -->\r\n        </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <hr>\r\n    <!-- \r\n    <div>\r\n        <div class=\"hideable-content-toggler\">\r\n            <label for=\"expand-icon\">Informações adicionais</label>\r\n            <button id=\"expand-icon\" class=\"{{ showAdditionalInfo ? 'toggled' : '' }}\" (click)=\"toggleAdditionalInfo()\">\r\n        <div class=\"vertical\"></div>\r\n        <div class=\"horizontal\"></div>\r\n      </button>\r\n        </div>\r\n\r\n        <div class=\"hideable-content {{ showAdditionalInfo ? 'visible' : '' }}\">\r\n\r\n            <ul class=\"additional-info-list\">\r\n                <li>\r\n                    <h2>Cursos a distância</h2>\r\n                    <ul class=\"courses-list\">\r\n                        <li *ngFor=\"let course of courses\">\r\n                            <a target=\"_blank\" href=\"{{ course.url }}\" title=\"{{ course.linkTitle }}\">\r\n                                <i class=\"fas fa-link\"></i> {{ course.courseTitle }}\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li>\r\n                    <h2>Linguagens de programação</h2>\r\n                    <ul class=\"programming-languages-list\">\r\n                        <li *ngFor=\"let lang of programmingLanguages\">{{ lang.name }}</li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/views/resume-page/resume-page.component.i18n.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/resume-page/resume-page.component.i18n.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    english: {
        headings: {
            professionalExperience: 'Professional Experience',
            education: 'Education',
            qualifications: 'Skills',
            otherQualifications: 'Other',
        }
    },
    portuguese: {
        headings: {
            professionalExperience: 'Experiencia Profissional',
            education: 'Formação',
            qualifications: 'Skills',
            otherQualifications: 'Outros',
        }
    }
});


/***/ }),

/***/ "./src/app/views/resume-page/resume-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/resume-page/resume-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Amelya\";\n  src: url(\"/assets/fonts/Amelya.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Hilland\";\n  src: url(\"/assets/fonts/Hilland.woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n*:not(i) {\n  font-family: 'Open Sans', sans-serif; }\n\nsection {\n  padding: 0px;\n  padding-bottom: 15px; }\n\nsection hr {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n\nsection > div {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\ni {\n  color: pink; }\n\na.centered-flex-container {\n  text-decoration: none; }\n\na.centered-flex-container:hover span {\n  text-decoration: underline; }\n\n.intro h1 {\n  font-size: 2.5em;\n  text-shadow: 0px 0px 15px #528a8a;\n  text-align: right; }\n\n.intro * {\n  color: #ddd; }\n\n#general-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\n#general-info .centered-flex-container:not(:last-child) {\n    margin-bottom: 10px; }\n\n#general-info .centered-flex-container:not(:last-child) span {\n      font-weight: 100; }\n\n#general-info i {\n    margin-right: 5px; }\n\n#education h2,\n#qualifications h2,\n#experience h2 {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.65em; }\n\n.lista-experience {\n  margin-top: 20px; }\n\n.lista-experience li {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px; }\n\n.lista-experience li > div {\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 2px; }\n\n.lista-experience li > div .company-name {\n        font-size: 1.35em;\n        font-weight: bolder; }\n\n.lista-experience li > div .job-location {\n        font-style: italic;\n        font-size: 0.8em; }\n\n.lista-experience li > div .job-title {\n        font-size: 0.8em;\n        font-weight: bold; }\n\n.lista-experience li > div .job-timeline {\n        font-size: 0.8em; }\n\n.lista-experience li > ul.job-items {\n      margin-top: 10px;\n      margin-left: 15px;\n      list-style: circle;\n      font-size: 0.8em; }\n\n.lista-experience li > ul.job-items li {\n        margin-bottom: 5px;\n        text-align: justify; }\n\n.lista-formacoes {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5em;\n  font-weight: 100;\n  flex-wrap: wrap; }\n\n.lista-formacoes li {\n    text-shadow: 0px 0px 5px #528a8a;\n    flex-basis: 50%;\n    text-align: center;\n    font-size: 0.9em; }\n\n.lista-formacoes li:first-child {\n    margin-top: 25px;\n    margin-bottom: 25px; }\n\n.general-qualifications {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n.general-qualifications .general-qualification {\n    flex-basis: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px; }\n\n.general-qualifications .general-qualification span {\n      display: block;\n      font-size: 1.35em;\n      font-weight: bold;\n      text-align: center;\n      margin-bottom: 15px; }\n\n.general-qualifications .general-qualification ul {\n      display: flex;\n      flex-direction: column;\n      flex-wrap: wrap;\n      height: 200px;\n      border: 2px solid #ddd;\n      box-shadow: 0px 0px 10px #ddd;\n      padding-top: 5px;\n      padding-bottom: 5px; }\n\n.general-qualifications .general-qualification ul li {\n        font-size: 1em;\n        margin: auto; }\n\n.general-qualifications .general-qualification ul li:not(:last-child) {\n        margin-bottom: 5px; }\n\n.additional-info-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.additional-info-list li {\n    text-align: justify; }\n\n.additional-info-list ul {\n    padding: 0px 15px;\n    margin-top: 10px;\n    font-size: 1.1em; }\n\n.additional-info-list ul > li:not(:last-child) {\n    margin-bottom: 15px; }\n\n.additional-info-list > li:first-child {\n  margin-bottom: 25px; }\n\n.courses-list li {\n  display: flex;\n  align-items: center; }\n\n.courses-list li a {\n    text-decoration: none; }\n\n.courses-list li a i {\n      color: #528a8a; }\n\n@media (min-width: 992px) {\n  section {\n    margin-top: 15px;\n    padding: 15px; }\n  section > div:not(.intro):not(:last-child) {\n    padding: 15px 50px; }\n  #general-info {\n    flex-direction: row;\n    padding-left: 200px;\n    padding-right: 200px; }\n    #general-info .centered-flex-container:not(:last-child) {\n      margin-bottom: unset; }\n  .general-qualifications .general-qualification {\n    flex-basis: 25%; }\n  .additional-info-list {\n    flex-direction: row;\n    justify-content: space-around; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVzdW1lLXBhZ2UvRzpcXERvY3VtZW50b3NcXFBIUFxcY29kZVxccG9ydGZvbGlvLTIwMjJcXGFuZ3VsYXItcG9ydGZvbGlvL3NyY1xcYXBwXFxnbG9iYWwtc3R5bGVzaGVldHNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC92aWV3cy9yZXN1bWUtcGFnZS9HOlxcRG9jdW1lbnRvc1xcUEhQXFxjb2RlXFxwb3J0Zm9saW8tMjAyMlxcYW5ndWxhci1wb3J0Zm9saW8vc3JjXFxhcHBcXHZpZXdzXFxyZXN1bWUtcGFnZVxccmVzdW1lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBO0VBQ0UscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FDOUJwQjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLFlBQVk7RUFDWixvQkFBb0IsRUFBQTs7QUFGeEI7SUFJUSxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUVRLDBCQUEwQixFQUFBOztBQUlsQztFQUVRLGdCQUFnQjtFQUNoQixpQ0RuQzJCO0VDb0MzQixpQkFBaUIsRUFBQTs7QUFKekI7RUFPUSxXRHhDUyxFQUFBOztBQzRDakI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QixFQUFBOztBQUhqQztJQUtRLG1CQUFtQixFQUFBOztBQUwzQjtNQU9ZLGdCQUFnQixFQUFBOztBQVA1QjtJQVdRLGlCQUFpQixFQUFBOztBQUl6Qjs7O0VBSVEsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFEcEI7SUFHUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBOztBQUwzQjtNQU9ZLGFBQWE7TUFDYixXQUFXO01BQ1gsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixrQkFBa0IsRUFBQTs7QUFYOUI7UUFhZ0IsaUJBQWlCO1FBQ2pCLG1CQUFtQixFQUFBOztBQWRuQztRQWlCZ0Isa0JBQWtCO1FBQ2xCLGdCQUFnQixFQUFBOztBQWxCaEM7UUFxQmdCLGdCQUFnQjtRQUNoQixpQkFBaUIsRUFBQTs7QUF0QmpDO1FBeUJnQixnQkFBZ0IsRUFBQTs7QUF6QmhDO01BNkJZLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBOztBQWhDNUI7UUFrQ2dCLGtCQUFrQjtRQUNsQixtQkFBbUIsRUFBQTs7QUFNbkM7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUxuQjtJQU9RLGdDRHBIMkI7SUNxSDNCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FBVnhCO0lBYVEsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7O0FBSGpDO0lBS1EsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUE7O0FBUnhCO01BVVksY0FBYztNQUNkLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBOztBQWQvQjtNQWlCWSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixhQUFhO01BQ2Isc0JEckpLO01Dc0pMLDZCRHRKSztNQ3VKTCxnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7O0FBeEIvQjtRQTBCZ0IsY0FBYztRQUVkLFlBQVksRUFBQTs7QUE1QjVCO1FBK0JnQixrQkFBa0IsRUFBQTs7QUFNbEM7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QixFQUFBOztBQUhsQztJQUtRLG1CQUFtQixFQUFBOztBQUwzQjtJQVFRLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7O0FBVnhCO0lBYVEsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBRVEsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUgzQjtJQUtZLHFCQUFxQixFQUFBOztBQUxqQztNQU9nQixjRGhNbUIsRUFBQTs7QUNzTW5DO0VBQ0k7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0VBRWpCO0lBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQixFQUFBO0lBSHhCO01BS1Esb0JBQW9CLEVBQUE7RUFPNUI7SUFFUSxlQUFlLEVBQUE7RUFHdkI7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCLEVBQUEsRUFDaEMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXN1bWUtcGFnZS9yZXN1bWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluLWNvbG9yOiAjZGRkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiByZ2IoODIsIDEzOCwgMTM4KTtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjMkYyRjJGO1xyXG5cclxuJG1haW4tZ3JheS1jb2xvcjogI2FhYTtcclxuXHJcbiRvdXRlci1ncmFkaWVudC1jb2xvcjogIzAwMDtcclxuJGlubmVyLWdyYWRpZW50LWNvbG9yOiAjMzMzO1xyXG5cclxuJGhlcm8tYmFja2dyb3VuZC1jb2xvcjogcmFkaWFsLWdyYWRpZW50KCRpbm5lci1ncmFkaWVudC1jb2xvciwgJG91dGVyLWdyYWRpZW50LWNvbG9yKTtcclxuXHJcbiRjYXJkLWJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDc5LCA3OSwgMC4yKTtcclxuXHJcbiRwcm9ncmVzcy1iYXItaGVpZ2h0OiAzNXB4O1xyXG5cclxuJGRlZmF1bHQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAuNSk7XHJcbiR0cmFuc2l0aW9uLWZhc3Q6IDAuMjVzO1xyXG5cclxuJGhlYWRlci1sb2dvLWFuaW1hdGlvbi1wYXJhbXM6IDNzIGN1YmljLWJlemllciguNTIsLTAuMjIsLjMzLDEuMjgpIDEgZm9yd2FyZHM7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJBbWVseWFcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvQW1lbHlhLndvZmZcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhpbGxhbmRcIjtcclxuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvSGlsbGFuZC53b2ZmXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vZ2xvYmFsLXN0eWxlc2hlZXRzL3ZhcmlhYmxlcy5zY3NzJztcclxuKjpub3QoaSkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuc2VjdGlvbj5kaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbmEuY2VudGVyZWQtZmxleC1jb250YWluZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLmNlbnRlcmVkLWZsZXgtY29udGFpbmVyOmhvdmVyIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW50cm8ge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTVweCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgKiB7XHJcbiAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4jZ2VuZXJhbC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAuY2VudGVyZWQtZmxleC1jb250YWluZXI6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuI2VkdWNhdGlvbixcclxuI3F1YWxpZmljYXRpb25zLFxyXG4jZXhwZXJpZW5jZSB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjY1ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saXN0YS1leHBlcmllbmNlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgJj5kaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIC5jb21wYW55LW5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5qb2ItbG9jYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuam9iLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuam9iLXRpbWVsaW5lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJj51bC5qb2ItaXRlbXMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogY2lyY2xlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdGEtZm9ybWFjb2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgfVxyXG4gICAgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmdlbmVyYWwtcXVhbGlmaWNhdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLmdlbmVyYWwtcXVhbGlmaWNhdGlvbiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkbWFpbi1jb2xvcjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAvLyBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFkZGl0aW9uYWwtaW5mby1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbGkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgfVxyXG4gICAgdWw+bGk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZGl0aW9uYWwtaW5mby1saXN0PmxpOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jb3Vyc2VzLWxpc3Qge1xyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICAgIHNlY3Rpb24+ZGl2Om5vdCguaW50cm8pOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggNTBweDtcclxuICAgIH1cclxuICAgICNnZW5lcmFsLWluZm8ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcclxuICAgICAgICAuY2VudGVyZWQtZmxleC1jb250YWluZXI6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC5saXN0YS1mb3JtYWNvZXMge1xyXG4gICAgLy8gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAgIC8vIH1cclxuICAgIC5nZW5lcmFsLXF1YWxpZmljYXRpb25zIHtcclxuICAgICAgICAuZ2VuZXJhbC1xdWFsaWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGRpdGlvbmFsLWluZm8tbGlzdCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/resume-page/resume-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/resume-page/resume-page.component.ts ***!
  \************************************************************/
/*! exports provided: ResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePage", function() { return ResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/i18n/language */ "./src/app/shared/i18n/language.ts");
/* harmony import */ var src_app_shared_models_course_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/course.model */ "./src/app/shared/models/course.model.ts");
/* harmony import */ var src_app_shared_models_general_qualification_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/general-qualification.model */ "./src/app/shared/models/general-qualification.model.ts");
/* harmony import */ var _resources_back_end_skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/back-end-skills */ "./src/app/views/resume-page/resources/back-end-skills.ts");
/* harmony import */ var _resources_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/courses */ "./src/app/views/resume-page/resources/courses.ts");
/* harmony import */ var _resources_front_end_skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/front-end-skills */ "./src/app/views/resume-page/resources/front-end-skills.ts");
/* harmony import */ var _resources_general_skills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources/general-skills */ "./src/app/views/resume-page/resources/general-skills.ts");
/* harmony import */ var _resources_programming_languages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources/programming-languages */ "./src/app/views/resume-page/resources/programming-languages.ts");
/* harmony import */ var _resume_page_component_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resume-page.component.i18n */ "./src/app/views/resume-page/resume-page.component.i18n.ts");











var ResumePage = /** @class */ (function () {
    function ResumePage() {
        this.showAdditionalInfo = true;
        this.courses = src_app_shared_models_course_model__WEBPACK_IMPORTED_MODULE_3__["Course"].createCourses(_resources_courses__WEBPACK_IMPORTED_MODULE_6__["default"]);
        this.programmingLanguages = src_app_shared_models_general_qualification_model__WEBPACK_IMPORTED_MODULE_4__["GeneralQualification"].createGeneralQualifications(_resources_programming_languages__WEBPACK_IMPORTED_MODULE_9__["default"]);
        this.frontEndQualifications = src_app_shared_models_general_qualification_model__WEBPACK_IMPORTED_MODULE_4__["GeneralQualification"].createGeneralQualifications(_resources_front_end_skills__WEBPACK_IMPORTED_MODULE_7__["default"]);
        this.backEndQualifications = src_app_shared_models_general_qualification_model__WEBPACK_IMPORTED_MODULE_4__["GeneralQualification"].createGeneralQualifications(_resources_back_end_skills__WEBPACK_IMPORTED_MODULE_5__["default"]);
        this.otherQualifications = src_app_shared_models_general_qualification_model__WEBPACK_IMPORTED_MODULE_4__["GeneralQualification"].createGeneralQualifications(_resources_general_skills__WEBPACK_IMPORTED_MODULE_8__["default"]);
    }
    ResumePage.prototype.ngOnInit = function () {
        this.headings = _resume_page_component_i18n__WEBPACK_IMPORTED_MODULE_10__["default"][src_app_shared_i18n_language__WEBPACK_IMPORTED_MODULE_2__["currentLanguage"]].headings;
    };
    ResumePage.prototype.toggleAdditionalInfo = function () {
        this.showAdditionalInfo = !this.showAdditionalInfo;
    };
    ResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume-page',
            template: __webpack_require__(/*! ./resume-page.component.html */ "./src/app/views/resume-page/resume-page.component.html"),
            styles: [__webpack_require__(/*! ./resume-page.component.scss */ "./src/app/views/resume-page/resume-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumePage);
    return ResumePage;
}());



/***/ }),

/***/ "./src/app/views/skills/progress-bar/filled/filled.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/skills/progress-bar/filled/filled.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"filled\" #filled>\r\n  \r\n</div> -->"

/***/ }),

/***/ "./src/app/views/skills/progress-bar/filled/filled.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/skills/progress-bar/filled/filled.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NraWxscy9wcm9ncmVzcy1iYXIvZmlsbGVkL2ZpbGxlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/skills/progress-bar/filled/filled.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/skills/progress-bar/filled/filled.component.ts ***!
  \**********************************************************************/
/*! exports provided: FilledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilledComponent", function() { return FilledComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilledComponent = /** @class */ (function () {
    function FilledComponent() {
    }
    // constructor() { }
    // ngOnInit() {
    // }
    // @ViewChild('filled') componentReference: ElementRef;
    FilledComponent.prototype.ngAfterViewInit = function () {
        //     this.componentReference.nativeElement.style.width = `${this.filledWidth}%`
        //     this.componentReference.nativeElement.style.backgroundColor = this.fillColor
    };
    FilledComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filled',
            template: __webpack_require__(/*! ./filled.component.html */ "./src/app/views/skills/progress-bar/filled/filled.component.html"),
            styles: [__webpack_require__(/*! ./filled.component.scss */ "./src/app/views/skills/progress-bar/filled/filled.component.scss")]
        })
    ], FilledComponent);
    return FilledComponent;
}());



/***/ }),

/***/ "./src/app/views/skills/skills.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/skills/skills.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Nível de habilidade por tecnologia</h1>\r\n\r\n<div class=\"skills-container\">\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'HTML', skillLevel: '7.5', fillColor: 'rgb(227, 79, 38)', faClassName: 'fab fa-html5'}\">\r\n  </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'CSS', skillLevel: '8.2', fillColor: '#016FBA', faClassName: 'fab fa-css3-alt'}\">\r\n  </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'JavaScript', skillLevel: '8.2', fillColor: '#D4B830', faClassName: 'fab fa-js-square'}\">\r\n  </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'Angular', skillLevel: '6.5', fillColor: '#D7032F', faClassName: 'fab fa-angular'}\">\r\n  </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'React', skillLevel: '4.5', fillColor: '#61DAFB', faClassName: 'fab fa-react'}\">\r\n  </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'PHP', skillLevel: '6.5', fillColor: '#777BB3', faClassName: 'fab fa-php'}\">\r\n  </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'NodeJS', skillLevel: '3.5', fillColor: '#669F64', faClassName: 'fab fa-node-js'}\">\r\n  </app-progress-bar> -->\r\n\r\n  <!-- <app-progress-bar [data]=\"{technologyName: 'MySQL', skillLevel: '6.5', fillColor: '#DE8A00'}\">\r\n  </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'TypeScript', skillLevel: '7.5', fillColor: '#007ACC'}\">\r\n    </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'MongoDB', skillLevel: '2.5'}\">\r\n  </app-progress-bar>\r\n\r\n  <app-progress-bar [data]=\"{technologyName: 'Firebase', skillLevel: '7.5', fillColor: '#F5C43D'}\">\r\n  </app-progress-bar> -->\r\n\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/views/skills/skills.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/skills/skills.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/skills/skills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/skills/skills.component.ts ***!
  \**************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/views/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/views/skills/skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost:8000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Documentos\PHP\code\portfolio-2022\angular-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map