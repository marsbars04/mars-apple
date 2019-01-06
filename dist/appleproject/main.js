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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var src_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/home/home.component */ "./src/pages/home/home.component.ts");
/* harmony import */ var src_pages_ipad_ipad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/ipad/ipad.component */ "./src/pages/ipad/ipad.component.ts");
/* harmony import */ var src_pages_iphone_iphone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/iphone/iphone.component */ "./src/pages/iphone/iphone.component.ts");
/* harmony import */ var src_pages_mac_mac_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/mac/mac.component */ "./src/pages/mac/mac.component.ts");
/* harmony import */ var src_pages_music_music_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/music/music.component */ "./src/pages/music/music.component.ts");
/* harmony import */ var src_pages_support_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pages/support/support.component */ "./src/pages/support/support.component.ts");
/* harmony import */ var src_pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pages/tv/tv.component */ "./src/pages/tv/tv.component.ts");
/* harmony import */ var src_pages_watch_watch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/pages/watch/watch.component */ "./src/pages/watch/watch.component.ts");
/* harmony import */ var src_pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/pages/search/search.component */ "./src/pages/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"])],
            declarations: [src_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], src_pages_ipad_ipad_component__WEBPACK_IMPORTED_MODULE_4__["IpadComponent"], src_pages_iphone_iphone_component__WEBPACK_IMPORTED_MODULE_5__["IphoneComponent"], src_pages_mac_mac_component__WEBPACK_IMPORTED_MODULE_6__["MacComponent"],
                src_pages_music_music_component__WEBPACK_IMPORTED_MODULE_7__["MusicComponent"], src_pages_support_support_component__WEBPACK_IMPORTED_MODULE_8__["SupportComponent"], src_pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_9__["TvComponent"], src_pages_watch_watch_component__WEBPACK_IMPORTED_MODULE_10__["WatchComponent"], src_pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<div class=\"wrapper\">\n  <div class=\"header\">\n    <ul class=\"navbar\">\n      <li routerLink=\"home\" style=\"top:1px\"><img src=\"./../../assets/apple-64.png\" alt=\"applelogo\" style=\"width:25px;height:auto;\"></li>\n      <li routerLink=\"mac\">Mac</li>\n      <li routerLink=\"ipad\">iPad</li>\n      <li routerLink=\"iphone\">iPhone</li>\n      <li routerLink=\"watch\">Watch</li>\n      <li routerLink=\"tv\">TV</li>\n      <li routerLink=\"music\">Music</li>\n      <li routerLink=\"support\">Support</li>\n      <li routerLink=\"search\" style=\"top:1px\"><img src=\"./../../assets/clipart742441.png\" alt=\"searchicon\" style=\"width:25px;height:auto;\"></li>\n    </ul>\n  </div>\n  <div class=\"body\"><router-outlet></router-outlet></div>\n  <div class=\"footer\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: 100vh;\n  width: 100vw;\n  overflow: none;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  background-color: #222222; }\n\n.header {\n  height: 60px;\n  width: 100%;\n  background-color: #313131;\n  position: fixed;\n  top: 0px;\n  left: 0px; }\n\n.navbar {\n  list-style: none;\n  display: inline-block; }\n\n.navbar li {\n  border: none;\n  color: white;\n  padding: 0px 47px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 18px;\n  font-family: 'Roboto-Light';\n  position: relative;\n  top: -4px; }\n\n.body {\n  padding-top: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2FndWlsYXIvRGVza3RvcC9hcHBsZXByb2plY3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFNBQVE7RUFDUiwwQkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLFNBQVE7RUFDUixVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZiw0QkFBMkI7RUFDM0IsbUJBQWtCO0VBQ2xCLFVBQVMsRUFDVjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMyMjIyMjI7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMTMxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbi5uYXZiYXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uYXZiYXIgbGkge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4IDQ3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTGlnaHQnO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbn1cblxuLmJvZHkge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'appleproject';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var src_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pages/home/home.component */ "./src/pages/home/home.component.ts");
/* harmony import */ var src_pages_ipad_ipad_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pages/ipad/ipad.component */ "./src/pages/ipad/ipad.component.ts");
/* harmony import */ var src_pages_mac_mac_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/mac/mac.component */ "./src/pages/mac/mac.component.ts");
/* harmony import */ var src_pages_iphone_iphone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/iphone/iphone.component */ "./src/pages/iphone/iphone.component.ts");
/* harmony import */ var src_pages_music_music_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/music/music.component */ "./src/pages/music/music.component.ts");
/* harmony import */ var src_pages_support_support_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/support/support.component */ "./src/pages/support/support.component.ts");
/* harmony import */ var src_pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/tv/tv.component */ "./src/pages/tv/tv.component.ts");
/* harmony import */ var src_pages_watch_watch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/watch/watch.component */ "./src/pages/watch/watch.component.ts");
/* harmony import */ var src_pages_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pages/search/search.component */ "./src/pages/search/search.component.ts");









var AppRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: src_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'ipad',
        component: src_pages_ipad_ipad_component__WEBPACK_IMPORTED_MODULE_1__["IpadComponent"]
    },
    {
        path: 'mac',
        component: src_pages_mac_mac_component__WEBPACK_IMPORTED_MODULE_2__["MacComponent"]
    },
    {
        path: 'iphone',
        component: src_pages_iphone_iphone_component__WEBPACK_IMPORTED_MODULE_3__["IphoneComponent"]
    },
    {
        path: 'music',
        component: src_pages_music_music_component__WEBPACK_IMPORTED_MODULE_4__["MusicComponent"]
    },
    {
        path: 'support',
        component: src_pages_support_support_component__WEBPACK_IMPORTED_MODULE_5__["SupportComponent"]
    },
    {
        path: 'tv',
        component: src_pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_6__["TvComponent"]
    },
    {
        path: 'watch',
        component: src_pages_watch_watch_component__WEBPACK_IMPORTED_MODULE_7__["WatchComponent"]
    },
    {
        path: 'search',
        component: src_pages_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"]
    },
];


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
    production: false
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

/***/ "./src/pages/home/home.component.html":
/*!********************************************!*\
  !*** ./src/pages/home/home.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-black\">\n  <h2 class=\"headline\">iPhone X</h2>\n  <h3 class=\"subhead\">\n    All-screen design. Longest battery life ever in an iPhone. <br />\n    Fastest performance. Studio-quality photos.\n  </h3>\n  <div class=\"cta-links\">\n    <a routerLink=\"iphone\">Learn more</a> <a routerLink=\"search\">Buy</a>\n  </div>\n  <img\n    class=\"iphone-xs\"\n    src=\"./../../assets/iphone-xs.jpeg\"\n    alt=\"appleproducts\"\n  />\n</section>\n\n<section class=\"section-black\">\n  <h2 class=\"headline\">iPad Pro</h2>\n  <h3 class=\"subhead\">\n    Like a computer. <br />\n    Unlike any computer.\n  </h3>\n  <div class=\"cta-links\">\n    <a routerLink=\"iphone\">Learn more</a> <a routerLink=\"search\">Buy</a>\n  </div>\n  <img class=\"iphone-xs\" src=\"./../../assets/ipadpro.jpg\" alt=\"appleproducts\" />\n</section>\n<!-- <picture>\n  <img src=\"./../../assets/appletech.jpg\" alt=\"appleproducts\" />\n  <img src=\"./../../assets/appleproductlineup.jpg\" alt=\"appleproducts\" />\n</picture> -->\n"

/***/ }),

/***/ "./src/pages/home/home.component.ts":
/*!******************************************!*\
  !*** ./src/pages/home/home.component.ts ***!
  \******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'appleproject';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.style.scss */ "./src/pages/home/home.style.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/pages/home/home.style.scss":
/*!****************************************!*\
  !*** ./src/pages/home/home.style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-black {\n  background-color: black;\n  margin-bottom: 20px;\n  padding-top: 3em;\n  padding-bottom: 3.1em; }\n  .section-black .headline {\n    font-size: 50px;\n    line-height: 1.09091;\n    font-weight: 600;\n    letter-spacing: -0.002em;\n    color: white;\n    text-align: center;\n    font-family: \"Roboto-Light\";\n    text-shadow: 1px 1px 1px #212121; }\n  .section-black .subhead {\n    color: white;\n    text-align: center;\n    font-family: \"Roboto-Light\";\n    font-size: 23px;\n    letter-spacing: 2px;\n    line-height: 30px; }\n  .section-black .cta-links {\n    text-align: center;\n    font-family: \"Roboto-Medium\"; }\n  .section-black .cta-links a {\n      font-size: 25px;\n      text-decoration: none;\n      color: #6bf;\n      margin-right: 15px; }\n  .section-black .iphone-xs {\n    width: 100%;\n    max-width: 750px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2FndWlsYXIvRGVza3RvcC9hcHBsZXByb2plY3Qvc3JjL3BhZ2VzL2hvbWUvaG9tZS5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBd0N0QjtFQTVDRDtJQU9JLGdCQUFlO0lBQ2YscUJBQW9CO0lBQ3BCLGlCQUFnQjtJQUNoQix5QkFBd0I7SUFDeEIsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQiw0QkFBMkI7SUFDM0IsaUNBQWdDLEVBQ2pDO0VBZkg7SUFpQkksYUFBWTtJQUNaLG1CQUFrQjtJQUNsQiw0QkFBMkI7SUFDM0IsZ0JBQWU7SUFDZixvQkFBbUI7SUFDbkIsa0JBQWlCLEVBQ2xCO0VBdkJIO0lBMEJJLG1CQUFrQjtJQUNsQiw2QkFBNEIsRUFRN0I7RUFuQ0g7TUE4Qk0sZ0JBQWU7TUFDZixzQkFBcUI7TUFDckIsWUFBVztNQUNYLG1CQUFrQixFQUNuQjtFQWxDTDtJQXNDSSxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9wYWdlcy9ob21lL2hvbWUuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzZW07XG4gIHBhZGRpbmctYm90dG9tOiAzLjFlbTtcblxuICAuaGVhZGxpbmUge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogMS4wOTA5MTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMjEyMTIxO1xuICB9XG4gIC5zdWJoZWFkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmN0YS1saW5rcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1NZWRpdW1cIjtcblxuICAgIGEge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICM2YmY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLmlwaG9uZS14cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/pages/ipad/ipad.component.html":
/*!********************************************!*\
  !*** ./src/pages/ipad/ipad.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<picture> <img src=\"./../../assets/ipad.jpeg\" alt=\"ipadpic\" /> </picture>\n"

/***/ }),

/***/ "./src/pages/ipad/ipad.component.ts":
/*!******************************************!*\
  !*** ./src/pages/ipad/ipad.component.ts ***!
  \******************************************/
/*! exports provided: IpadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpadComponent", function() { return IpadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IpadComponent = /** @class */ (function () {
    function IpadComponent() {
        this.title = 'appleproject';
    }
    IpadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ipad',
            template: __webpack_require__(/*! ./ipad.component.html */ "./src/pages/ipad/ipad.component.html"),
            styles: [__webpack_require__(/*! ./ipad.style.scss */ "./src/pages/ipad/ipad.style.scss")]
        })
    ], IpadComponent);
    return IpadComponent;
}());



/***/ }),

/***/ "./src/pages/ipad/ipad.style.scss":
/*!****************************************!*\
  !*** ./src/pages/ipad/ipad.style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvaXBhZC9pcGFkLnN0eWxlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/pages/iphone/iphone.component.html":
/*!************************************************!*\
  !*** ./src/pages/iphone/iphone.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<picture> <img src=\"./../../assets/iphonexr.jpg\" alt=\"iphonepic\" /> </picture>\n"

/***/ }),

/***/ "./src/pages/iphone/iphone.component.ts":
/*!**********************************************!*\
  !*** ./src/pages/iphone/iphone.component.ts ***!
  \**********************************************/
/*! exports provided: IphoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IphoneComponent", function() { return IphoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IphoneComponent = /** @class */ (function () {
    function IphoneComponent() {
        this.title = 'appleproject';
    }
    IphoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iphone',
            template: __webpack_require__(/*! ./iphone.component.html */ "./src/pages/iphone/iphone.component.html"),
            styles: [__webpack_require__(/*! ./iphone.style.scss */ "./src/pages/iphone/iphone.style.scss")]
        })
    ], IphoneComponent);
    return IphoneComponent;
}());



/***/ }),

/***/ "./src/pages/iphone/iphone.style.scss":
/*!********************************************!*\
  !*** ./src/pages/iphone/iphone.style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvaXBob25lL2lwaG9uZS5zdHlsZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/mac/mac.component.html":
/*!******************************************!*\
  !*** ./src/pages/mac/mac.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<picture>\n  <img src=\"./../../assets/macbookpro.jpg\" alt=\"macbookpic\">\n</picture>\n"

/***/ }),

/***/ "./src/pages/mac/mac.component.ts":
/*!****************************************!*\
  !*** ./src/pages/mac/mac.component.ts ***!
  \****************************************/
/*! exports provided: MacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacComponent", function() { return MacComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MacComponent = /** @class */ (function () {
    function MacComponent() {
        this.title = 'appleproject';
    }
    MacComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mac',
            template: __webpack_require__(/*! ./mac.component.html */ "./src/pages/mac/mac.component.html"),
            styles: [__webpack_require__(/*! ./mac.style.scss */ "./src/pages/mac/mac.style.scss")]
        })
    ], MacComponent);
    return MacComponent;
}());



/***/ }),

/***/ "./src/pages/mac/mac.style.scss":
/*!**************************************!*\
  !*** ./src/pages/mac/mac.style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvbWFjL21hYy5zdHlsZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/music/music.component.html":
/*!**********************************************!*\
  !*** ./src/pages/music/music.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<picture>\n  <img src=\"./../../assets/applemusic.jpg\" alt=\"applemusic\">\n</picture>\n"

/***/ }),

/***/ "./src/pages/music/music.component.ts":
/*!********************************************!*\
  !*** ./src/pages/music/music.component.ts ***!
  \********************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
        this.title = 'appleproject';
    }
    MusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/pages/music/music.component.html"),
            styles: [__webpack_require__(/*! ./music.style.scss */ "./src/pages/music/music.style.scss")]
        })
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/pages/music/music.style.scss":
/*!******************************************!*\
  !*** ./src/pages/music/music.style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvbXVzaWMvbXVzaWMuc3R5bGUuc2NzcyJ9 */"

/***/ }),

/***/ "./src/pages/search/search.component.html":
/*!************************************************!*\
  !*** ./src/pages/search/search.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<picture>\n  <img src=\"./../../assets/searchbar.png\" alt=\"searchbarpic\">\n</picture>\n"

/***/ }),

/***/ "./src/pages/search/search.component.ts":
/*!**********************************************!*\
  !*** ./src/pages/search/search.component.ts ***!
  \**********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.title = 'appleproject';
    }
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.style.scss */ "./src/pages/search/search.style.scss")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/pages/search/search.style.scss":
/*!********************************************!*\
  !*** ./src/pages/search/search.style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvc2VhcmNoL3NlYXJjaC5zdHlsZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/support/support.component.html":
/*!**************************************************!*\
  !*** ./src/pages/support/support.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<picture>\n  <img src=\"./../../assets/applesupport.jpg\" alt=\"applesupport\">\n</picture>\n"

/***/ }),

/***/ "./src/pages/support/support.component.ts":
/*!************************************************!*\
  !*** ./src/pages/support/support.component.ts ***!
  \************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
        this.title = 'appleproject';
    }
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/pages/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.style.scss */ "./src/pages/support/support.style.scss")]
        })
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/pages/support/support.style.scss":
/*!**********************************************!*\
  !*** ./src/pages/support/support.style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnN0eWxlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/pages/tv/tv.component.html":
/*!****************************************!*\
  !*** ./src/pages/tv/tv.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<picture>\n  <img src=\"./../../assets/appletv.jpg\" alt=\"appletv\">\n</picture>\n"

/***/ }),

/***/ "./src/pages/tv/tv.component.ts":
/*!**************************************!*\
  !*** ./src/pages/tv/tv.component.ts ***!
  \**************************************/
/*! exports provided: TvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvComponent", function() { return TvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TvComponent = /** @class */ (function () {
    function TvComponent() {
        this.title = 'appleproject';
    }
    TvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tv',
            template: __webpack_require__(/*! ./tv.component.html */ "./src/pages/tv/tv.component.html"),
            styles: [__webpack_require__(/*! ./tv.style.scss */ "./src/pages/tv/tv.style.scss")]
        })
    ], TvComponent);
    return TvComponent;
}());



/***/ }),

/***/ "./src/pages/tv/tv.style.scss":
/*!************************************!*\
  !*** ./src/pages/tv/tv.style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvdHYvdHYuc3R5bGUuc2NzcyJ9 */"

/***/ }),

/***/ "./src/pages/watch/watch.component.html":
/*!**********************************************!*\
  !*** ./src/pages/watch/watch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<picture>\n  <img src=\"./../../assets/applewatch.jpg\" alt=\"applewatch\">\n</picture>\n"

/***/ }),

/***/ "./src/pages/watch/watch.component.ts":
/*!********************************************!*\
  !*** ./src/pages/watch/watch.component.ts ***!
  \********************************************/
/*! exports provided: WatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchComponent", function() { return WatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WatchComponent = /** @class */ (function () {
    function WatchComponent() {
        this.title = 'appleproject';
    }
    WatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-watch',
            template: __webpack_require__(/*! ./watch.component.html */ "./src/pages/watch/watch.component.html"),
            styles: [__webpack_require__(/*! ./watch.style.scss */ "./src/pages/watch/watch.style.scss")]
        })
    ], WatchComponent);
    return WatchComponent;
}());



/***/ }),

/***/ "./src/pages/watch/watch.style.scss":
/*!******************************************!*\
  !*** ./src/pages/watch/watch.style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvd2F0Y2gvd2F0Y2guc3R5bGUuc2NzcyJ9 */"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marioaguilar/Desktop/appleproject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map