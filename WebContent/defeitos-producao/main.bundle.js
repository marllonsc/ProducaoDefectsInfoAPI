webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n       <!-- <footer-cmp></footer-cmp>-->\n    </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_rest_defects_service__ = __webpack_require__("../../../../../src/app/services/rest-defects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_table_defects_data_table_defects_component__ = __webpack_require__("../../../../../src/app/data-table-defects/data-table-defects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngui_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__ngui_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__text_area_table_text_area_table_component__ = __webpack_require__("../../../../../src/app/text-area-table/text-area-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_14__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_15__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_1__data_table_defects_data_table_defects_component__["a" /* DataTableDefectsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__text_area_table_text_area_table_component__["a" /* TextAreaTableComponent */],
            __WEBPACK_IMPORTED_MODULE_18__upgrade_upgrade_component__["a" /* UpgradeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_fixedplugin_fixedplugin_module__["a" /* FixedPluginModule */],
            __WEBPACK_IMPORTED_MODULE_11__ngui_map__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_rest_defects_service__["a" /* RestDefectsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_table_defects_data_table_defects_component__ = __webpack_require__("../../../../../src/app/data-table-defects/data-table-defects.component.ts");

var AppRoutes = [
    {
        path: '',
        redirectTo: 'defeitos',
        pathMatch: 'full',
    },
    {
        path: 'defeitos',
        component: __WEBPACK_IMPORTED_MODULE_0__data_table_defects_data_table_defects_component__["a" /* DataTableDefectsComponent */]
    },
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-warning text-center\">\n                                    <i class=\"ti-server\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Capacity</p>\n                                    105GB\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated now\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-success text-center\">\n                                    <i class=\"ti-wallet\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Revenue</p>\n                                    $1,345\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-calendar\"></i> Last day\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-danger text-center\">\n                                    <i class=\"ti-pulse\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Errors</p>\n                                    23\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-timer\"></i> In the last hour\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-info text-center\">\n                                    <i class=\"ti-twitter-alt\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Followers</p>\n                                    +45\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated now\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Users Behavior</h4>\n                        <p class=\"category\">24 Hours performance</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartHours\" class=\"ct-chart\"></div>\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Open\n                                <i class=\"fa fa-circle text-danger\"></i> Click\n                                <i class=\"fa fa-circle text-warning\"></i> Click Second Time\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated 3 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Email Statistics</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartPreferences\" class=\"ct-chart ct-perfect-fourth\"></div>\n\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Open\n                                <i class=\"fa fa-circle text-danger\"></i> Bounce\n                                <i class=\"fa fa-circle text-warning\"></i> Unsubscribe\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-timer\"></i> Campaign sent 2 days ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card \">\n                    <div class=\"header\">\n                        <h4 class=\"title\">2015 Sales</h4>\n                        <p class=\"category\">All products including Taxes</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartActivity\" class=\"ct-chart\"></div>\n\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Tesla Model S\n                                <i class=\"fa fa-circle text-warning\"></i> BMW 5 Series\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-check\"></i> Data information certified\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 562, 594, 626, 698, 895, 952],
                [67, 152, 193, 240, 387, 435, 535, 642, 744],
                [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };
        var optionsSales = {
            low: 0,
            high: 1000,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartHours', dataSales, optionsSales, responsiveSales);
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
        };
        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartActivity', data, options, responsiveOptions);
        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };
        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]('#chartPreferences', dataPreferences, optionsPreferences);
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]('#chartPreferences', {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-cmp',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/data-table-defects/data-table-defects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " #celula{\r\n    display:block;     \r\n    width:100%;        \r\n    margin:0;          \r\n    padding:0;         \r\n    border:0 none;    \r\n    line-height:20px; \r\n    height:20px;       \r\n}\r\n\r\n#celula2{\r\n    text-align: left;\r\n    font-size: 12px !important;\r\n    font-family: Verdana, Tahoma, Arial;\r\n}\r\n\r\n#tabela{\r\n    overflow-x: scroll; \r\n    overflow-y: hidden; \r\n    white-space: nowrap;\r\n}\r\n\r\n\r\ntable { \r\n    text-align: center;\r\n    border-collapse:collapse; \r\n    background-color:#FFFFFF;\r\n    }\r\n    td {border:1px solid #003366; \r\n        width:10%;\r\n    }\r\n\r\n    td div {\r\n        \r\n      overflow:auto; \r\n    }\r\n\r\n    .table-striped > thead > tr > th, .table-striped > tbody > tr > th, .table-striped > tfoot > tr > th, .table-striped > thead > tr > td, .table-striped > tbody > tr > td, .table-striped > tfoot > tr > td {\r\n        padding: 0px 0px;\r\n        white-space: nowrap;\r\n    }\r\n\r\n    #divFiltro{\r\n        text-align: left;\r\n        margin-bottom: 15px;\r\n        margin-left: 10px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    table td, table th{\r\n        padding: 0px 5px !important;\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-table-defects/data-table-defects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-md-15\">\n          <div class=\"card\">\n              <!--<div class=\"header\">\n                   <h4 class=\"title\">Lista de Defeitos</h4>\n                     <p class=\"category\"></p> \n              </div> -->\n              <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ul id=\"tabs\" class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                            <li class=\"active\"><a href=\"#home\"  (click)=\"changeTable('TODOS')\" data-toggle=\"tab\">TODOS ( {{total}} )</a></li>\n                            <li *ngFor=\"let t of ts\"><a href=\"#\" (click)=\"changeTable(t.tabs)\" data-toggle=\"tab\">{{t.tabs + ' ('+t.qt+')' }}</a></li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                        \n                                <div class=\"tab-pane active\" id=\"home\">\n                        <div class=\"content table-responsive table-full-width\">\n                                <app-text-area-table></app-text-area-table> \n                                <div id=\"divFiltro\">\n                                Filtro: <input id=\"filtro\"  (keyup)=\"filtroKeyUp($event)\"size=\"40\" value=\"{{filtro}}\">\n                            </div>\n                                <div id=\"tabela\">\n                            <table id=\"tabela\" class=\"table table-striped table-border table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\"><div id=\"celula2\" style=\"text-align: center;\"><b style=\"padding: 5px;\">{{ cell }}</b></div></th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\" [style.backgroundColor]=\"returnCor(row[1])\">\n                                        <td><div id=\"celula2\">{{row[0]}}</div></td>\n                                        <td><div id=\"celula2\">{{row[1]}}</div></td>\n                                        <td><div id=\"celula2\">{{row[2]}}</div></td>\n                                        <td [style.backgroundColor]=\"checkPriorizacao(row[3])\"><div id=\"celula2\" >{{row[3]}}</div></td>\n                                        <td><div id=\"celula2\">{{row[4]}}</div></td>\n                                        <td><div id=\"celula2\">{{row[5]}}</div></td>\n                                        <td><div id=\"celula2\">{{row[6]}}</div></td>\n                                        <td [style.backgroundColor]=\"checkDate(row[7])\"><div id=\"celula2\">{{row[7].dataFormatada}}</div></td>\n                                        <td [style.backgroundColor]=\"checkDate(row[8])\"><div id=\"celula2\">{{row[8].dataFormatada}}</div></td>\n                                        <td [style.backgroundColor]=\"checkPriorizacao(row[9])\"><div id=\"celula2\">{{row[9]}}</div></td>\n                                        <td title=\"{{row[10]}}\"><div id=\"celula2\">{{abreviar(row[10],100)}}</div></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                        </div> \n\n                        </div>\n\n                        </div>\n\n\n\n                </div>\n\n          </div>\n      </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/data-table-defects/data-table-defects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDefectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_TabsPanels__ = __webpack_require__("../../../../../src/app/models/TabsPanels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_Texto__ = __webpack_require__("../../../../../src/app/models/Texto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rest_defects_service__ = __webpack_require__("../../../../../src/app/services/rest-defects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataTableDefectsComponent = (function () {
    function DataTableDefectsComponent(defectsService) {
        this.defectsService = defectsService;
        this.equipeFiltro = 'TODOS';
        this.filtro = '';
        this.getTexto();
        this.tableData1 = {
            headerRow: ['ID', 'EQUIPE', 'USER NAME', 'PRIORIZAÇÃO', 'CODIGO', 'SLA', 'OBSERVAÇÃO', 'DATA DA DATA', 'DATA ENTREGA', 'STATUS', 'SUMARIO'],
            dataRows: []
        };
        this.ts = new Array();
        this.getDefects();
    }
    DataTableDefectsComponent.prototype.getDefects = function () {
        var _this = this;
        this.defectsService.getDefeitos()
            .subscribe(function (data) {
            _this.defeitos = data;
        }, function (error) { return console.log(error); })
            .add(function () {
            _this.returnDefeitos();
        });
    };
    DataTableDefectsComponent.prototype.getDefectsFiltroClickButon = function (equipe) {
        this.returnDefeitosFiltro(equipe);
    };
    DataTableDefectsComponent.prototype.getDefectsFiltro = function (equipe) {
        var _this = this;
        this.defectsService.getDefeitos()
            .subscribe(function (data) {
            _this.defeitos = data;
        }, function (error) { return console.log(error); })
            .add(function () {
            _this.returnDefeitosFiltro(equipe);
        });
    };
    DataTableDefectsComponent.prototype.getTexto = function () {
        var _this = this;
        this.defectsService.getTexto()
            .subscribe(function (data) {
            _this.texto = new __WEBPACK_IMPORTED_MODULE_1_app_models_Texto__["a" /* Texto */]();
            _this.texto.conteudo = data.conteudo;
        }, function (error) { return console.log(error); })
            .add(function () {
            // timplementar depois..
        });
    };
    DataTableDefectsComponent.prototype.setText = function () {
        this.defectsService.setTexto(this.texto.conteudo)
            .subscribe(function (data) { }, function (error) { return console.log(error); })
            .add(function () {
            // o que acontece depois..
        });
    };
    DataTableDefectsComponent.prototype.filtroKeyUp = function (evento) {
        this.filtro = evento.target.value;
        this.tableData1.dataRows = [];
        for (var _i = 0, _a = this.defeitos; _i < _a.length; _i++) {
            var element = _a[_i];
            if (this.checkFiltro(element, this.filtro) && (element.equipe == this.equipeFiltro || this.equipeFiltro == 'TODOS')) {
                this.tableData1.dataRows.push([element.id, element.equipe, element.userName, element.priorizacao, element.codigo, element.SLA, element.observacao, element.dataDaData, element.dataEntrega, element.statusDesc, element.sumario]);
            }
        }
    };
    DataTableDefectsComponent.prototype.checkFiltro = function (defeito, fil) {
        if (defeito.id && defeito.id.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.equipe && defeito.equipe.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.userName && defeito.userName.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.priorizacao && defeito.priorizacao.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.codigo && defeito.codigo.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.SLA && defeito.SLA.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.observacao && defeito.observacao.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.dataDaData.dataFormatada.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.dataEntrega.dataFormatada.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.statusDesc && defeito.statusDesc.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        else if (defeito.sumario && defeito.sumario.toUpperCase().includes(fil.toUpperCase())) {
            return true;
        }
        return false;
    };
    DataTableDefectsComponent.prototype.ngOnInit = function () {
        this.equipeFiltro = 'TODOS';
        this.filtro = '';
        this.getTexto();
        this.total = 0;
    };
    DataTableDefectsComponent.prototype.returnDefeitos = function () {
        this.tableData1.dataRows = [];
        var qt = 0;
        var equipe = '';
        var equipe2 = '';
        this.total = 0;
        for (var _i = 0, _a = this.defeitos; _i < _a.length; _i++) {
            var element = _a[_i];
            if (this.checkEquipes(element)) {
                this.tableData1.dataRows.push([element.id, element.equipe, element.userName, element.priorizacao, element.codigo, element.SLA, element.observacao, element.dataDaData, element.dataEntrega, element.statusDesc, element.sumario]);
            }
            if (element.equipe != 'VALIDOS' && element.equipe != 'Total') {
                this.total = this.total + 1;
            }
            if (equipe != element.equipe && element.equipe != 'VALIDOS' && element.equipe != 'Total') {
                if (equipe2 != equipe) {
                    this.ts.push(new __WEBPACK_IMPORTED_MODULE_0__models_TabsPanels__["a" /* TabsPanels */](equipe, qt + ''));
                    qt = parseInt(element.id);
                    equipe2 = equipe;
                }
                equipe = element.equipe;
                qt = parseInt(element.id);
            }
            else {
                if (element.equipe == equipe) {
                    if (parseInt(element.id) > qt) {
                        qt = parseInt(element.id);
                    }
                }
                else {
                    if (equipe2 != equipe) {
                        this.ts.push(new __WEBPACK_IMPORTED_MODULE_0__models_TabsPanels__["a" /* TabsPanels */](equipe, qt + ''));
                        qt = parseInt(element.id);
                        equipe2 = equipe;
                    }
                }
            }
        }
    };
    DataTableDefectsComponent.prototype.checkTS = function (entrada) {
        this.ts.forEach(function (element) {
            if (element.tabs == entrada) {
                return true;
            }
        });
        return false;
    };
    DataTableDefectsComponent.prototype.returnDefeitosFiltro = function (equipe) {
        this.equipeFiltro = equipe;
        this.tableData1.dataRows = [];
        for (var _i = 0, _a = this.defeitos; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.equipe == equipe || equipe == 'TODOS') {
                this.tableData1.dataRows.push([element.id, element.equipe, element.userName, element.priorizacao, element.codigo, element.SLA, element.observacao, element.dataDaData, element.dataEntrega, element.statusDesc, element.sumario]);
            }
        }
    };
    DataTableDefectsComponent.prototype.changeTable = function (entrada) {
        this.filtro = '';
        this.getDefectsFiltroClickButon(entrada);
    };
    DataTableDefectsComponent.prototype.returnCor = function (cell) {
        if (cell == 'ARQUITETURA S.') {
            return 'red';
        }
        else if (cell == 'CARE') {
            return '#5EADEF';
        }
        else if (cell == 'CORE') {
            return '#39C451';
        }
        else if (cell == 'INTERFACES(B2B)') {
            return 'pink';
        }
        else if (cell == 'INTERFACES(B2C)') {
            return '#C05BF0';
        }
        else if (cell == 'PARAMETRIZAÇÃO') {
            return '#FF9337';
        }
        else if (cell == 'TRIAGEM') {
            return '#FFD700';
        }
    };
    DataTableDefectsComponent.prototype.checkPriorizacao = function (cell) {
        if (cell == 'Priorizado') {
            return 'green';
        }
        else if (cell == 'Waiting') {
            return 'green';
        }
    };
    DataTableDefectsComponent.prototype.checkDate = function (data) {
        if (!data) {
            return '';
        }
        if (!data.maiorQuedataAtual) {
            return 'red';
        }
    };
    DataTableDefectsComponent.prototype.formatData = function (data) {
        if (data) {
            var temp = data.toString();
            var ano = temp.substr(0, 4);
            var mes = temp.substr(5, 2);
            var dia = temp.substr(8, 2);
            return (dia + '/' + mes + '/' + ano);
        }
        else {
            return '';
        }
    };
    DataTableDefectsComponent.prototype.abreviar = function (st, qt) {
        if (st.length > qt) {
            return st.substr(0, qt) + '...';
        }
        else {
            return st;
        }
    };
    DataTableDefectsComponent.prototype.checkEquipes = function (defeito) {
        if (defeito.equipe == 'ARQUITETURA S.') {
            return true;
        }
        else if (defeito.equipe == 'CARE') {
            return true;
        }
        else if (defeito.equipe == 'CORE') {
            return true;
        }
        else if (defeito.equipe == 'INTERFACES(B2B)') {
            return true;
        }
        else if (defeito.equipe == 'INTERFACES(B2C)') {
            return true;
        }
        else if (defeito.equipe == 'PARAMETRIZAÇÃO') {
            return true;
        }
        else if (defeito.equipe == 'TRIAGEM') {
            return true;
        }
        else if (defeito.equipe == 'VALIDOS') {
            return true;
        }
        else if (defeito.equipe == 'Total') {
            return true;
        }
        return false;
    };
    return DataTableDefectsComponent;
}());
DataTableDefectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-data-table-defects',
        template: __webpack_require__("../../../../../src/app/data-table-defects/data-table-defects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/data-table-defects/data-table-defects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_rest_defects_service__["a" /* RestDefectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rest_defects_service__["a" /* RestDefectsService */]) === "function" && _a || Object])
], DataTableDefectsComponent);

var _a;
//# sourceMappingURL=data-table-defects.component.js.map

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">320+ Themify Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://themify.me/\">Themify</a>.</p>\n                    </div>\n                    <div class=\"content all-icons\">\n\n                        <div class=\"icon-section\">\n                            <h3>Arrows &amp; Direction Icons </h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-up\"></span><span class=\"icon-name\"> ti-arrow-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-right\"></span><span class=\"icon-name\"> ti-arrow-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-left\"></span><span class=\"icon-name\"> ti-arrow-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-down\"></span><span class=\"icon-name\"> ti-arrow-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-vertical\"></span><span class=\"icon-name\"> ti-arrows-vertical</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-horizontal\"></span><span class=\"icon-name\"> ti-arrows-horizontal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-up\"></span><span class=\"icon-name\"> ti-angle-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-right\"></span><span class=\"icon-name\"> ti-angle-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-left\"></span><span class=\"icon-name\"> ti-angle-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-down\"></span><span class=\"icon-name\"> ti-angle-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-up\"></span><span class=\"icon-name\"> ti-angle-double-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-right\"></span><span class=\"icon-name\"> ti-angle-double-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-left\"></span><span class=\"icon-name\"> ti-angle-double-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-down\"></span><span class=\"icon-name\"> ti-angle-double-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-move\"></span><span class=\"icon-name\"> ti-move</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-fullscreen\"></span><span class=\"icon-name\"> ti-fullscreen</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-top-right\"></span><span class=\"icon-name\"> ti-arrow-top-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-top-left\"></span><span class=\"icon-name\"> ti-arrow-top-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-up\"></span><span class=\"icon-name\"> ti-arrow-circle-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-right\"></span><span class=\"icon-name\"> ti-arrow-circle-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-left\"></span><span class=\"icon-name\"> ti-arrow-circle-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-down\"></span><span class=\"icon-name\"> ti-arrow-circle-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-corner\"></span><span class=\"icon-name\"> ti-arrows-corner</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-v\"></span><span class=\"icon-name\"> ti-split-v</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-v-alt\"></span><span class=\"icon-name\"> ti-split-v-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-h\"></span><span class=\"icon-name\"> ti-split-h</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-up\"></span><span class=\"icon-name\"> ti-hand-point-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-right\"></span><span class=\"icon-name\"> ti-hand-point-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-left\"></span><span class=\"icon-name\"> ti-hand-point-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-down\"></span><span class=\"icon-name\"> ti-hand-point-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-back-right\"></span><span class=\"icon-name\"> ti-back-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-back-left\"></span><span class=\"icon-name\"> ti-back-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-exchange-vertical\"></span><span class=\"icon-name\"> ti-exchange-vertical</span>\n                            </div>\n\n                        </div> <!-- Arrows Icons -->\n\n\n\n                        <h3>Web App Icons</h3>\n\n                        <div class=\"icon-section\">\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wand\"></span><span class=\"icon-name\"> ti-wand</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-save\"></span><span class=\"icon-name\"> ti-save</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-save-alt\"></span><span class=\"icon-name\"> ti-save-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-direction\"></span><span class=\"icon-name\"> ti-direction</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-direction-alt\"></span><span class=\"icon-name\"> ti-direction-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-user\"></span><span class=\"icon-name\"> ti-user</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-link\"></span><span class=\"icon-name\"> ti-link</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-unlink\"></span><span class=\"icon-name\"> ti-unlink</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-trash\"></span><span class=\"icon-name\"> ti-trash</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-target\"></span><span class=\"icon-name\"> ti-target</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tag\"></span><span class=\"icon-name\"> ti-tag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-desktop\"></span><span class=\"icon-name\"> ti-desktop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tablet\"></span><span class=\"icon-name\"> ti-tablet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mobile\"></span><span class=\"icon-name\"> ti-mobile</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-email\"></span><span class=\"icon-name\"> ti-email</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-star\"></span><span class=\"icon-name\"> ti-star</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-spray\"></span><span class=\"icon-name\"> ti-spray</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-signal\"></span><span class=\"icon-name\"> ti-signal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shopping-cart\"></span><span class=\"icon-name\"> ti-shopping-cart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shopping-cart-full\"></span><span class=\"icon-name\"> ti-shopping-cart-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-settings\"></span><span class=\"icon-name\"> ti-settings</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-search\"></span><span class=\"icon-name\"> ti-search</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zoom-in\"></span><span class=\"icon-name\"> ti-zoom-in</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zoom-out\"></span><span class=\"icon-name\"> ti-zoom-out</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cut\"></span><span class=\"icon-name\"> ti-cut</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler\"></span><span class=\"icon-name\"> ti-ruler</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-alt-2\"></span><span class=\"icon-name\"> ti-ruler-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-pencil\"></span><span class=\"icon-name\"> ti-ruler-pencil</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-alt\"></span><span class=\"icon-name\"> ti-ruler-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bookmark\"></span><span class=\"icon-name\"> ti-bookmark</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bookmark-alt\"></span><span class=\"icon-name\"> ti-bookmark-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-reload\"></span><span class=\"icon-name\"> ti-reload</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-plus\"></span><span class=\"icon-name\"> ti-plus</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-minus\"></span><span class=\"icon-name\"> ti-minus</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-close\"></span><span class=\"icon-name\"> ti-close</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin\"></span><span class=\"icon-name\"> ti-pin</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil\"></span><span class=\"icon-name\"> ti-pencil</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil-alt\"></span><span class=\"icon-name\"> ti-pencil-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paint-roller\"></span><span class=\"icon-name\"> ti-paint-roller</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paint-bucket\"></span><span class=\"icon-name\"> ti-paint-bucket</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-na\"></span><span class=\"icon-name\"> ti-na</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-medall\"></span><span class=\"icon-name\"> ti-medall</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-medall-alt\"></span><span class=\"icon-name\"> ti-medall-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-marker\"></span><span class=\"icon-name\"> ti-marker</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-marker-alt\"></span><span class=\"icon-name\"> ti-marker-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-lock\"></span><span class=\"icon-name\"> ti-lock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-unlock\"></span><span class=\"icon-name\"> ti-unlock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-location-arrow\"></span><span class=\"icon-name\"> ti-location-arrow</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout\"></span><span class=\"icon-name\"> ti-layout</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layers\"></span><span class=\"icon-name\"> ti-layers</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layers-alt\"></span><span class=\"icon-name\"> ti-layers-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-key\"></span><span class=\"icon-name\"> ti-key</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-image\"></span><span class=\"icon-name\"> ti-image</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-heart\"></span><span class=\"icon-name\"> ti-heart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-heart-broken\"></span><span class=\"icon-name\"> ti-heart-broken</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-stop\"></span><span class=\"icon-name\"> ti-hand-stop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-open\"></span><span class=\"icon-name\"> ti-hand-open</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-drag\"></span><span class=\"icon-name\"> ti-hand-drag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag\"></span><span class=\"icon-name\"> ti-flag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag-alt\"></span><span class=\"icon-name\"> ti-flag-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag-alt-2\"></span><span class=\"icon-name\"> ti-flag-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-eye\"></span><span class=\"icon-name\"> ti-eye</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-import\"></span><span class=\"icon-name\"> ti-import</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-export\"></span><span class=\"icon-name\"> ti-export</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cup\"></span><span class=\"icon-name\"> ti-cup</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-crown\"></span><span class=\"icon-name\"> ti-crown</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comments\"></span><span class=\"icon-name\"> ti-comments</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comment\"></span><span class=\"icon-name\"> ti-comment</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comment-alt\"></span><span class=\"icon-name\"> ti-comment-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thought\"></span><span class=\"icon-name\"> ti-thought</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-clip\"></span><span class=\"icon-name\"> ti-clip</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-check\"></span><span class=\"icon-name\"> ti-check</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-check-box\"></span><span class=\"icon-name\"> ti-check-box</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-camera\"></span><span class=\"icon-name\"> ti-camera</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-announcement\"></span><span class=\"icon-name\"> ti-announcement</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-brush\"></span><span class=\"icon-name\"> ti-brush</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-brush-alt\"></span><span class=\"icon-name\"> ti-brush-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-palette\"></span><span class=\"icon-name\"> ti-palette</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-briefcase\"></span><span class=\"icon-name\"> ti-briefcase</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bolt\"></span><span class=\"icon-name\"> ti-bolt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bolt-alt\"></span><span class=\"icon-name\"> ti-bolt-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-blackboard\"></span><span class=\"icon-name\"> ti-blackboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bag\"></span><span class=\"icon-name\"> ti-bag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-world\"></span><span class=\"icon-name\"> ti-world</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wheelchair\"></span><span class=\"icon-name\"> ti-wheelchair</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-car\"></span><span class=\"icon-name\"> ti-car</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-truck\"></span><span class=\"icon-name\"> ti-truck</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-timer\"></span><span class=\"icon-name\"> ti-timer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ticket\"></span><span class=\"icon-name\"> ti-ticket</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thumb-up\"></span><span class=\"icon-name\"> ti-thumb-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thumb-down\"></span><span class=\"icon-name\"> ti-thumb-down</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stats-up\"></span><span class=\"icon-name\"> ti-stats-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stats-down\"></span><span class=\"icon-name\"> ti-stats-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shine\"></span><span class=\"icon-name\"> ti-shine</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-right\"></span><span class=\"icon-name\"> ti-shift-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-left\"></span><span class=\"icon-name\"> ti-shift-left</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-right-alt\"></span><span class=\"icon-name\"> ti-shift-right-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-left-alt\"></span><span class=\"icon-name\"> ti-shift-left-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shield\"></span><span class=\"icon-name\"> ti-shield</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-notepad\"></span><span class=\"icon-name\"> ti-notepad</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-server\"></span><span class=\"icon-name\"> ti-server</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pulse\"></span><span class=\"icon-name\"> ti-pulse</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-printer\"></span><span class=\"icon-name\"> ti-printer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-power-off\"></span><span class=\"icon-name\"> ti-power-off</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-plug\"></span><span class=\"icon-name\"> ti-plug</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pie-chart\"></span><span class=\"icon-name\"> ti-pie-chart</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-panel\"></span><span class=\"icon-name\"> ti-panel</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-package\"></span><span class=\"icon-name\"> ti-package</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-music\"></span><span class=\"icon-name\"> ti-music</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-music-alt\"></span><span class=\"icon-name\"> ti-music-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mouse\"></span><span class=\"icon-name\"> ti-mouse</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mouse-alt\"></span><span class=\"icon-name\"> ti-mouse-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-money\"></span><span class=\"icon-name\"> ti-money</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microphone\"></span><span class=\"icon-name\"> ti-microphone</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-menu\"></span><span class=\"icon-name\"> ti-menu</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-menu-alt\"></span><span class=\"icon-name\"> ti-menu-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-map\"></span><span class=\"icon-name\"> ti-map</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-map-alt\"></span><span class=\"icon-name\"> ti-map-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-location-pin\"></span><span class=\"icon-name\"> ti-location-pin</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-light-bulb\"></span><span class=\"icon-name\"> ti-light-bulb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-info\"></span><span class=\"icon-name\"> ti-info</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-infinite\"></span><span class=\"icon-name\"> ti-infinite</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-id-badge\"></span><span class=\"icon-name\"> ti-id-badge</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hummer\"></span><span class=\"icon-name\"> ti-hummer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-home\"></span><span class=\"icon-name\"> ti-home</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-help\"></span><span class=\"icon-name\"> ti-help</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-headphone\"></span><span class=\"icon-name\"> ti-headphone</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-harddrives\"></span><span class=\"icon-name\"> ti-harddrives</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-harddrive\"></span><span class=\"icon-name\"> ti-harddrive</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-gift\"></span><span class=\"icon-name\"> ti-gift</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-game\"></span><span class=\"icon-name\"> ti-game</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-filter\"></span><span class=\"icon-name\"> ti-filter</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-files\"></span><span class=\"icon-name\"> ti-files</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-file\"></span><span class=\"icon-name\"> ti-file</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zip\"></span><span class=\"icon-name\"> ti-zip</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-folder\"></span><span class=\"icon-name\"> ti-folder</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-envelope\"></span><span class=\"icon-name\"> ti-envelope</span>\n                            </div>\n\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dashboard\"></span><span class=\"icon-name\"> ti-dashboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud\"></span><span class=\"icon-name\"> ti-cloud</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud-up\"></span><span class=\"icon-name\"> ti-cloud-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud-down\"></span><span class=\"icon-name\"> ti-cloud-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-clipboard\"></span><span class=\"icon-name\"> ti-clipboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-calendar\"></span><span class=\"icon-name\"> ti-calendar</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-book\"></span><span class=\"icon-name\"> ti-book</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bell\"></span><span class=\"icon-name\"> ti-bell</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-basketball\"></span><span class=\"icon-name\"> ti-basketball</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bar-chart\"></span><span class=\"icon-name\"> ti-bar-chart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bar-chart-alt\"></span><span class=\"icon-name\"> ti-bar-chart-alt</span>\n                            </div>\n\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-archive\"></span><span class=\"icon-name\"> ti-archive</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-anchor\"></span><span class=\"icon-name\"> ti-anchor</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-alert\"></span><span class=\"icon-name\"> ti-alert</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-alarm-clock\"></span><span class=\"icon-name\"> ti-alarm-clock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-agenda\"></span><span class=\"icon-name\"> ti-agenda</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-write\"></span><span class=\"icon-name\"> ti-write</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wallet\"></span><span class=\"icon-name\"> ti-wallet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-video-clapper\"></span><span class=\"icon-name\"> ti-video-clapper</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-video-camera\"></span><span class=\"icon-name\"> ti-video-camera</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vector\"></span><span class=\"icon-name\"> ti-vector</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-support\"></span><span class=\"icon-name\"> ti-support</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stamp\"></span><span class=\"icon-name\"> ti-stamp</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-slice\"></span><span class=\"icon-name\"> ti-slice</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shortcode\"></span><span class=\"icon-name\"> ti-shortcode</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-receipt\"></span><span class=\"icon-name\"> ti-receipt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin2\"></span><span class=\"icon-name\"> ti-pin2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin-alt\"></span><span class=\"icon-name\"> ti-pin-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil-alt2\"></span><span class=\"icon-name\"> ti-pencil-alt2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-eraser\"></span><span class=\"icon-name\"> ti-eraser</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-more\"></span><span class=\"icon-name\"> ti-more</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-more-alt\"></span><span class=\"icon-name\"> ti-more-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microphone-alt\"></span><span class=\"icon-name\"> ti-microphone-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-magnet\"></span><span class=\"icon-name\"> ti-magnet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-double\"></span><span class=\"icon-name\"> ti-line-double</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-dotted\"></span><span class=\"icon-name\"> ti-line-dotted</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-dashed\"></span><span class=\"icon-name\"> ti-line-dashed</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ink-pen\"></span><span class=\"icon-name\"> ti-ink-pen</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-info-alt\"></span><span class=\"icon-name\"> ti-info-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-help-alt\"></span><span class=\"icon-name\"> ti-help-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-headphone-alt\"></span><span class=\"icon-name\"> ti-headphone-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-gallery\"></span><span class=\"icon-name\"> ti-gallery</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-face-smile\"></span><span class=\"icon-name\"> ti-face-smile</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-face-sad\"></span><span class=\"icon-name\"> ti-face-sad</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-credit-card\"></span><span class=\"icon-name\"> ti-credit-card</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comments-smiley\"></span><span class=\"icon-name\"> ti-comments-smiley</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-time\"></span><span class=\"icon-name\"> ti-time</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-share\"></span><span class=\"icon-name\"> ti-share</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-share-alt\"></span><span class=\"icon-name\"> ti-share-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rocket\"></span><span class=\"icon-name\"> ti-rocket</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-new-window\"></span><span class=\"icon-name\"> ti-new-window</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rss\"></span><span class=\"icon-name\"> ti-rss</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rss-alt\"></span><span class=\"icon-name\"> ti-rss-alt</span>\n                            </div>\n\n                        </div><!-- Web App Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Control Icons</h3>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-stop\"></span><span class=\"icon-name\"> ti-control-stop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-shuffle\"></span><span class=\"icon-name\"> ti-control-shuffle</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-play\"></span><span class=\"icon-name\"> ti-control-play</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-pause\"></span><span class=\"icon-name\"> ti-control-pause</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-forward\"></span><span class=\"icon-name\"> ti-control-forward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-backward\"></span><span class=\"icon-name\"> ti-control-backward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-volume\"></span><span class=\"icon-name\"> ti-volume</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-skip-forward\"></span><span class=\"icon-name\"> ti-control-skip-forward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-skip-backward\"></span><span class=\"icon-name\"> ti-control-skip-backward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-record\"></span><span class=\"icon-name\"> ti-control-record</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-eject\"></span><span class=\"icon-name\"> ti-control-eject</span>\n                            </div>\n                        </div> <!-- Control Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Text Editor</h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paragraph\"></span><span class=\"icon-name\"> ti-paragraph</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-uppercase\"></span><span class=\"icon-name\"> ti-uppercase</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-underline\"></span><span class=\"icon-name\"> ti-underline</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-text\"></span><span class=\"icon-name\"> ti-text</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-Italic\"></span><span class=\"icon-name\"> ti-Italic</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-smallcap\"></span><span class=\"icon-name\"> ti-smallcap</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-list\"></span><span class=\"icon-name\"> ti-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-list-ol\"></span><span class=\"icon-name\"> ti-list-ol</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-right\"></span><span class=\"icon-name\"> ti-align-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-left\"></span><span class=\"icon-name\"> ti-align-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-justify\"></span><span class=\"icon-name\"> ti-align-justify</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-center\"></span><span class=\"icon-name\"> ti-align-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-quote-right\"></span><span class=\"icon-name\"> ti-quote-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-quote-left\"></span><span class=\"icon-name\"> ti-quote-left</span>\n                            </div>\n\n                        </div> <!-- Text Editor -->\n\n\n\n                        <div class=\"icon-section\">\n                            <h3>Layout Icons</h3>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-full\"></span><span class=\"icon-name\"> ti-layout-width-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-default\"></span><span class=\"icon-name\"> ti-layout-width-default</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-default-alt\"></span><span class=\"icon-name\"> ti-layout-width-default-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab\"></span><span class=\"icon-name\"> ti-layout-tab</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-window\"></span><span class=\"icon-name\"> ti-layout-tab-window</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-v\"></span><span class=\"icon-name\"> ti-layout-tab-v</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-min\"></span><span class=\"icon-name\"> ti-layout-tab-min</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-slider\"></span><span class=\"icon-name\"> ti-layout-slider</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-slider-alt\"></span><span class=\"icon-name\"> ti-layout-slider-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-right\"></span><span class=\"icon-name\"> ti-layout-sidebar-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-none\"></span><span class=\"icon-name\"> ti-layout-sidebar-none</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-left\"></span><span class=\"icon-name\"> ti-layout-sidebar-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-placeholder\"></span><span class=\"icon-name\"> ti-layout-placeholder</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu\"></span><span class=\"icon-name\"> ti-layout-menu</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-v\"></span><span class=\"icon-name\"> ti-layout-menu-v</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-separated\"></span><span class=\"icon-name\"> ti-layout-menu-separated</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-full\"></span><span class=\"icon-name\"> ti-layout-menu-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-right\"></span><span class=\"icon-name\"> ti-layout-media-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-right-alt\"></span><span class=\"icon-name\"> ti-layout-media-right-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay\"></span><span class=\"icon-name\"> ti-layout-media-overlay</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay-alt\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay-alt-2\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-left\"></span><span class=\"icon-name\"> ti-layout-media-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-left-alt\"></span><span class=\"icon-name\"> ti-layout-media-left-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-center\"></span><span class=\"icon-name\"> ti-layout-media-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-center-alt\"></span><span class=\"icon-name\"> ti-layout-media-center-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-thumb\"></span><span class=\"icon-name\"> ti-layout-list-thumb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-thumb-alt\"></span><span class=\"icon-name\"> ti-layout-list-thumb-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-post\"></span><span class=\"icon-name\"> ti-layout-list-post</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-large-image\"></span><span class=\"icon-name\"> ti-layout-list-large-image</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-line-solid\"></span><span class=\"icon-name\"> ti-layout-line-solid</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid4\"></span><span class=\"icon-name\"> ti-layout-grid4</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid3\"></span><span class=\"icon-name\"> ti-layout-grid3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2\"></span><span class=\"icon-name\"> ti-layout-grid2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2-thumb\"></span><span class=\"icon-name\"> ti-layout-grid2-thumb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-right\"></span><span class=\"icon-name\"> ti-layout-cta-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-left\"></span><span class=\"icon-name\"> ti-layout-cta-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-center\"></span><span class=\"icon-name\"> ti-layout-cta-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-btn-right\"></span><span class=\"icon-name\"> ti-layout-cta-btn-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-btn-left\"></span><span class=\"icon-name\"> ti-layout-cta-btn-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column4\"></span><span class=\"icon-name\"> ti-layout-column4</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column3\"></span><span class=\"icon-name\"> ti-layout-column3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column2\"></span><span class=\"icon-name\"> ti-layout-column2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-separated\"></span><span class=\"icon-name\"> ti-layout-accordion-separated</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-merged\"></span><span class=\"icon-name\"> ti-layout-accordion-merged</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-list\"></span><span class=\"icon-name\"> ti-layout-accordion-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widgetized\"></span><span class=\"icon-name\"> ti-widgetized</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widget\"></span><span class=\"icon-name\"> ti-widget</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widget-alt\"></span><span class=\"icon-name\"> ti-widget-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-list\"></span><span class=\"icon-name\"> ti-view-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-list-alt\"></span><span class=\"icon-name\"> ti-view-list-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-grid\"></span><span class=\"icon-name\"> ti-view-grid</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-upload\"></span><span class=\"icon-name\"> ti-upload</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-download\"></span><span class=\"icon-name\"> ti-download</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-loop\"></span><span class=\"icon-name\"> ti-loop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-2\"></span><span class=\"icon-name\"> ti-layout-sidebar-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid4-alt\"></span><span class=\"icon-name\"> ti-layout-grid4-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid3-alt\"></span><span class=\"icon-name\"> ti-layout-grid3-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2-alt\"></span><span class=\"icon-name\"> ti-layout-grid2-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column4-alt\"></span><span class=\"icon-name\"> ti-layout-column4-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column3-alt\"></span><span class=\"icon-name\"> ti-layout-column3-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column2-alt\"></span><span class=\"icon-name\"> ti-layout-column2-alt</span>\n                            </div>\n\n\n                        </div> <!-- Layout Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Brand Icons</h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flickr\"></span><span class=\"icon-name\"> ti-flickr</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flickr-alt\"></span><span class=\"icon-name\"> ti-flickr-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-instagram\"></span><span class=\"icon-name\"> ti-instagram</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-google\"></span><span class=\"icon-name\"> ti-google</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-github\"></span><span class=\"icon-name\"> ti-github</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-facebook\"></span><span class=\"icon-name\"> ti-facebook</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dropbox\"></span><span class=\"icon-name\"> ti-dropbox</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dropbox-alt\"></span><span class=\"icon-name\"> ti-dropbox-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dribbble\"></span><span class=\"icon-name\"> ti-dribbble</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-apple\"></span><span class=\"icon-name\"> ti-apple</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-android\"></span><span class=\"icon-name\"> ti-android</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-yahoo\"></span><span class=\"icon-name\"> ti-yahoo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-trello\"></span><span class=\"icon-name\"> ti-trello</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stack-overflow\"></span><span class=\"icon-name\"> ti-stack-overflow</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-soundcloud\"></span><span class=\"icon-name\"> ti-soundcloud</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-sharethis\"></span><span class=\"icon-name\"> ti-sharethis</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-sharethis-alt\"></span><span class=\"icon-name\"> ti-sharethis-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-reddit\"></span><span class=\"icon-name\"> ti-reddit</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microsoft\"></span><span class=\"icon-name\"> ti-microsoft</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microsoft-alt\"></span><span class=\"icon-name\"> ti-microsoft-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-linux\"></span><span class=\"icon-name\"> ti-linux</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-jsfiddle\"></span><span class=\"icon-name\"> ti-jsfiddle</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-joomla\"></span><span class=\"icon-name\"> ti-joomla</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-html5\"></span><span class=\"icon-name\"> ti-html5</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-css3\"></span><span class=\"icon-name\"> ti-css3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-drupal\"></span><span class=\"icon-name\"> ti-drupal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wordpress\"></span><span class=\"icon-name\"> ti-wordpress</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tumblr\"></span><span class=\"icon-name\"> ti-tumblr</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tumblr-alt\"></span><span class=\"icon-name\"> ti-tumblr-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-skype\"></span><span class=\"icon-name\"> ti-skype</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-youtube\"></span><span class=\"icon-name\"> ti-youtube</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vimeo\"></span><span class=\"icon-name\"> ti-vimeo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vimeo-alt\"></span><span class=\"icon-name\"> ti-vimeo-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-twitter\"></span><span class=\"icon-name\"> ti-twitter</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-twitter-alt\"></span><span class=\"icon-name\"> ti-twitter-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-linkedin\"></span><span class=\"icon-name\"> ti-linkedin</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pinterest\"></span><span class=\"icon-name\"> ti-pinterest</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pinterest-alt\"></span><span class=\"icon-name\"> ti-pinterest-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-logo\"></span><span class=\"icon-name\"> ti-themify-logo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-favicon\"></span><span class=\"icon-name\"> ti-themify-favicon</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-favicon-alt\"></span><span class=\"icon-name\"> ti-themify-favicon-alt</span>\n                            </div>\n\n                        </div> <!-- brand Icons -->\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    return IconsComponent;
}());
IconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'icons-cmp',
        template: __webpack_require__("../../../../../src/app/icons/icons.component.html")
    })
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"card card-map\">\n        <div class=\"header\">\n            <h4 class=\"title\">Google Maps</h4>\n        </div>\n        <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" >\n         <marker [position]=\"[40.748817,-73.985428]\"></marker>\n           <map-circle\n               [center]=\"{lat: 40.748817, lng: -73.985428}\">\n           </map-circle>\n       </ngui-map>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        // var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        // var mapOptions = {
        //   zoom: 13,
        //   center: myLatlng,
        //   scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        //   styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        //
        // }
        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //
        // var marker = new google.maps.Marker({
        //     position: myLatlng,
        //     title:"Hello World!"
        // });
        //
        // // To add the marker to the map, call setMap();
        // marker.setMap(map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'maps-cmp',
        template: __webpack_require__("../../../../../src/app/maps/maps.component.html")
    })
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/TabsPanels.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPanels; });
var TabsPanels = (function () {
    function TabsPanels(tabs, qt) {
        this.tabs = tabs;
        this.qt = qt;
    }
    return TabsPanels;
}());

//# sourceMappingURL=TabsPanels.js.map

/***/ }),

/***/ "../../../../../src/app/models/Texto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Texto; });
var Texto = (function () {
    function Texto() {
    }
    return Texto;
}());

//# sourceMappingURL=Texto.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"ti-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"ti-pie-chart\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-9\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-gift",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notifications-cmp',
        template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html")
    })
], NotificationsComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/rest-defects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestDefectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestDefectsService = (function () {
    function RestDefectsService(http) {
        this.http = http;
        // Define API
        this.apiURL = 'http://localhost:8080/ProducaoDefectsInfoAPI/rest';
        /*========================================
          ...
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'session-variable'
            })
        };
        // Http Options2
        this.httpOptions2 = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'session-variable'
            })
        };
    }
    RestDefectsService.prototype.getDefeitos = function () {
        return this.http.get("/ProducaoDefectsInfoAPI/rest/RestServiceDesfeitos/defeitos", this.httpOptions);
    };
    //LEMBRAR DE TENTAR RETORNAR ISSO EM FORMA DE JSON
    RestDefectsService.prototype.getTexto = function () {
        return this.http.get("/ProducaoDefectsInfoAPI/rest/RestServiceDesfeitos/getText");
    };
    RestDefectsService.prototype.setTexto = function (body) {
        return this.http.post("/ProducaoDefectsInfoAPI/rest/RestServiceDesfeitos/setText", body);
    };
    RestDefectsService.prototype.handleError = function (error) {
        console.error(error);
    };
    return RestDefectsService;
}());
RestDefectsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], RestDefectsService);

var _a;
//# sourceMappingURL=rest-defects.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "   <!--<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n      <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n           <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                        <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                </a>\n            </li>\n\n\t\t\t<li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedPluginComponent = (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    return FixedPluginComponent;
}());
FixedPluginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.html")
    })
], FixedPluginComponent);

//# sourceMappingURL=fixedplugin.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = (function () {
    function FixedPluginModule() {
    }
    return FixedPluginModule;
}());
FixedPluginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]]
    })
], FixedPluginModule);

//# sourceMappingURL=fixedplugin.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <!--<ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-panel\"></i>\n                        <p>Stats</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"ti-bell\"></i>\n                            <p class=\"notification\">5</p>\n                            <p>Notifications</p>\n                            <b class=\"caret\"></b>\n                      </a>\n                      <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                      </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"ti-settings\"></i>\n                        <p>Settings</p>\n                    </a>\n                </li>\n            </ul> -->\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
        });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Defeitos Produção';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n                    <div class=\"logo-img\">\n                <img src=\"/ProducaoDefectsInfoAPI/defeitos-producao/assets/img/ericsson.jpg\" alt=\"\">\n            </div>\n            <div style=\"margin-left: 22px\" class=\"simple-text\">\n            Produção NGIN\n            </div>\n           </div>\n   <ul class=\"nav\">\n            <li *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"ti-panel\"></i>\n\t\t\t\t\t<p>Stats</p>\n                </a>\n            </li>\n            <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-bell\"></i>\n                        <p class=\"notification\">5</p>\n    \t\t\t\t\t<p>Notifications</p>\n    \t\t\t\t\t<b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Notification 1</a></li>\n                    <li><a href=\"#\">Notification 2</a></li>\n                    <li><a href=\"#\">Notification 3</a></li>\n                    <li><a href=\"#\">Notification 4</a></li>\n                    <li><a href=\"#\">Another notification</a></li>\n                  </ul>\n            </li>\n            <li *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\">\n\t\t\t\t\t<i class=\"ti-settings\"></i>\n\t\t\t\t\t<p>Settings</p>\n                </a>\n            </li>\n            <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ROUTES = [
    { path: 'defeitos', title: 'Defeitos Produção', icon: 'ti-view-list-alt', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h4 class=\"title\">Striped Table</h4>\n                    <p class=\"category\">Here is a subtitle for this table</p>\n                </div>\n                <div class=\"content table-responsive table-full-width\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let row of tableData1.dataRows\">\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col-md-12\">\n            <div class=\"card card-plain\">\n                <div class=\"header\">\n                    <h4 class=\"title\">Table on Plain Background</h4>\n                    <p class=\"category\">Here is a subtitle for this table</p>\n                </div>\n                <div class=\"content table-responsive table-full-width\">\n                    <table class=\"table table-hover\">\n                        <thead>\n                            <tr>\n                                <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let row of tableData2.dataRows\">\n                                <td *ngFor=\"let cell of row\">{{cell}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    return TableComponent;
}());
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'table-cmp',
        template: __webpack_require__("../../../../../src/app/table/table.component.html")
    })
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/text-area-table/text-area-table.component.html":
/***/ (function(module, exports) {

module.exports = "\n<textarea id=\"textArea\" (blur)=\"onKeyup($event)\" [style.display]=\"textoArea ? 'block' : 'none'\"  >{{texto.conteudo}}</textarea>\n<div id=\"texto\" [style.display]=\"textoArea ? 'none' : ''\">{{texto.conteudo}}</div>\n\n\n<hr />\n\n<div id=\"salvar\" [style.text-aling]=\"right\">\n        <button  class=\"btn btn-danger\" (click)=\"cancelar()\"[style.display]=\"textoArea ? '' : 'none'\">Cancelar</button>\n        <button class=\"btn btn-success\" (click)=\"salvar()\" [style.display]=\"textoArea ? '' : 'none'\">Salvar</button>\n        <button   class=\"btn btn-primary\" (click)=\"editar()\" [style.display]=\"textoArea ? 'none' : ''\">Editar</button>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/text-area-table/text-area-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAreaTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rest_defects_service__ = __webpack_require__("../../../../../src/app/services/rest-defects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_Texto__ = __webpack_require__("../../../../../src/app/models/Texto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextAreaTableComponent = (function () {
    function TextAreaTableComponent(defectsService) {
        this.defectsService = defectsService;
        this.texto = new __WEBPACK_IMPORTED_MODULE_2_app_models_Texto__["a" /* Texto */]();
        this.texto.conteudo = '';
        this.getTexto(false);
    }
    TextAreaTableComponent.prototype.getTexto = function (checkVisible) {
        var _this = this;
        this.defectsService.getTexto()
            .subscribe(function (data) {
            _this.texto = new __WEBPACK_IMPORTED_MODULE_2_app_models_Texto__["a" /* Texto */]();
            _this.texto.conteudo = data.conteudo;
        }, function (error) { return console.log(error); })
            .add(function () {
            _this.textoArea = checkVisible;
        });
    };
    TextAreaTableComponent.prototype.cancelar = function () {
        this.getTexto(false);
    };
    TextAreaTableComponent.prototype.salvar = function () {
        this.setText(false);
    };
    TextAreaTableComponent.prototype.editar = function () {
        this.getTexto(true);
    };
    TextAreaTableComponent.prototype.onKeyup = function (evento) {
        this.texto.conteudo = evento.target.value;
    };
    TextAreaTableComponent.prototype.setText = function (checkVisible) {
        var _this = this;
        this.defectsService.setTexto(this.texto.conteudo)
            .subscribe(function (data) {
        }, function (error) { return console.log(error); })
            .add(function () {
            _this.textoArea = checkVisible;
        });
    };
    TextAreaTableComponent.prototype.ngOnInit = function () {
        this.texto = new __WEBPACK_IMPORTED_MODULE_2_app_models_Texto__["a" /* Texto */]();
        this.texto.conteudo = '';
        this.getTexto(false);
    };
    return TextAreaTableComponent;
}());
TextAreaTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-text-area-table',
        template: __webpack_require__("../../../../../src/app/text-area-table/text-area-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/text-area-table/text-area-table.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_rest_defects_service__["a" /* RestDefectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_rest_defects_service__["a" /* RestDefectsService */]) === "function" && _a || Object])
], TextAreaTableComponent);

var _a;
//# sourceMappingURL=text-area-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/text-area-table/text-area-table.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " #textArea {\r\n     width: 100%;\r\n     border: 1px;\r\n     font-size: 20px;\r\n }\r\n\r\n #salvar{\r\n    text-align: right;\r\n    font-size: 2px;\r\n    margin: 7px;\r\n }\r\n\r\n #texto{\r\n   font-size: 20px;\r\n    color: red;\r\n    margin: 20px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Paper Dashboard Headings</h4>\n                        <p class=\"category\">Created using <a href=\"https://www.google.com/fonts/specimen/Muli\">Muli</a> Font Family</p>\n                    </div>\n                    <div class=\"content\">\n\n                        <div class=\"typo-line\">\n                            <h1><p class=\"category\">Header 1</p>Paper Dashboard Heading </h1>\n                        </div>\n\n                            <div class=\"typo-line\">\n                            <h2><p class=\"category\">Header 2</p>Paper Dashboard Heading </h2>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h3><p class=\"category\">Header 3</p>Paper Dashboard Heading </h3>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h4><p class=\"category\">Header 4</p>Paper Dashboard Heading </h4>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h5><p class=\"category\">Header 5</p>Paper Dashboard Heading </h5>\n                        </div>\n                         <div class=\"typo-line\">\n                            <h6><p class=\"category\">Header 6</p>Paper Dashboard Heading </h6>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Quote</p>\n                            <blockquote>\n                             <p>\n                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\n                             </p>\n                             <small>\n                             Steve Jobs, CEO Apple\n                             </small>\n                            </blockquote>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Muted Text</p>\n                            <p class=\"text-muted\">\n                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <!--\n                             there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\n                             -->\n                            <p class=\"category\">Coloured Text</p>\n                            <p class=\"text-primary\">\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-info\">\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-success\">\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-warning\">\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-danger\">\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'typography-cmp',
        template: __webpack_require__("../../../../../src/app/typography/typography.component.html")
    })
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"header text-center\">\n                        <h3 class=\"title\">Paper Dashboard</h3>\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Paper Dashboard Pro.</p>\n                        <br>\n                    </div>\n                    <div class=\"content table-responsive table-full-width table-upgrade\">\n                        <table class=\"table\">\n                            <thead>\n                                <th></th>\n                                <th class=\"text-center\">Free</th>\n                                <th class=\"text-center\">PRO</th>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Components</td>\n                                    <td>16</td>\n                                    <td>160</td>\n                                </tr>\n                                <tr>\n                                    <td>Plugins</td>\n                                    <td>4</td>\n                                    <td>15</td>\n                                </tr>\n                                <tr>\n                                    <td>Example Pages</td>\n                                    <td>4</td>\n                                    <td>25</td>\n                                </tr>\n                                <tr>\n                                    <td>Documentation</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>SASS Files</td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Login/Register/Lock Pages</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Premium Support</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>Free</td>\n                                    <td>Just $49</td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                    </td>\n                                    <td>\n                                        <a target=\"_blank\" href=\"https://www.creative-tim.com/product/paper-dashboard-pro-angular/?ref=pd-free-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'upgrade-cmp',
        template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html")
    })
], UpgradeComponent);

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map