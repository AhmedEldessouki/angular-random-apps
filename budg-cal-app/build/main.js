(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__["MainPageComponent"] },
    { path: '**', component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'budg-cal-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-list/item-list.component */ "./src/app/item-list/item-list.component.ts");
/* harmony import */ var _item_list_item_list_card_item_list_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-list/item-list-card/item-list-card.component */ "./src/app/item-list/item-list-card/item-list-card.component.ts");
/* harmony import */ var _edit_item_model_edit_item_model_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-item-model/edit-item-model.component */ "./src/app/edit-item-model/edit-item-model.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
        _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundPageComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
        _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["ItemListComponent"],
        _item_list_item_list_card_item_list_card_component__WEBPACK_IMPORTED_MODULE_9__["ItemListCardComponent"],
        _edit_item_model_edit_item_model_component__WEBPACK_IMPORTED_MODULE_10__["EditItemModelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
                    _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundPageComponent"],
                    _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                    _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["ItemListComponent"],
                    _item_list_item_list_card_item_list_card_component__WEBPACK_IMPORTED_MODULE_9__["ItemListCardComponent"],
                    _edit_item_model_edit_item_model_component__WEBPACK_IMPORTED_MODULE_10__["EditItemModelComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                ],
                providers: [],
                entryComponents: [_edit_item_model_edit_item_model_component__WEBPACK_IMPORTED_MODULE_10__["EditItemModelComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/edit-item-model/edit-item-model.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/edit-item-model/edit-item-model.component.ts ***!
  \**************************************************************/
/*! exports provided: EditItemModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemModelComponent", function() { return EditItemModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/models/budget-item.model */ "./src/shared/models/budget-item.model.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/form.component */ "./src/app/form/form.component.ts");






class EditItemModelComponent {
    // @Input() item: BudgetItem; we dont need it anymore
    constructor(dialogRef, item) {
        this.dialogRef = dialogRef;
        this.item = item;
    }
    ngOnInit() { }
    onSubmited(updatedItem) {
        this.dialogRef.close(updatedItem);
    }
}
EditItemModelComponent.ɵfac = function EditItemModelComponent_Factory(t) { return new (t || EditItemModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
EditItemModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditItemModelComponent, selectors: [["app-edit-item-model"]], decls: 3, vars: 1, consts: [[1, "title", 2, "color", "darkgray"], [3, "item", "formSubmit"]], template: function EditItemModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function EditItemModelComponent_Template_app_form_formSubmit_2_listener($event) { return ctx.onSubmited($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item);
    } }, directives: [_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaXRlbS1tb2RlbC9lZGl0LWl0ZW0tbW9kZWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditItemModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-item-model',
                templateUrl: './edit-item-model.component.html',
                styleUrls: ['./edit-item-model.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_2__["BudgetItem"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/models/budget-item.model */ "./src/shared/models/budget-item.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0, a1) { return { "is-primary": a0, "is-success": a1 }; };
class FormComponent {
    constructor() {
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.item) {
            this.isNewItem = false;
        }
        else {
            this.isNewItem = true;
            this.item = new _shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_0__["BudgetItem"]('', null);
        }
    }
    onSubmit(form) {
        this.formSubmit.emit(form.value);
        form.reset();
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], inputs: { item: "item" }, outputs: { formSubmit: "formSubmit" }, decls: 14, vars: 8, consts: [[2, "max-width", "680px", 3, "ngSubmit"], ["itemForm", "ngForm"], [1, "field", "is-horizontal"], [1, "field-body"], [1, "field", "is-narrow"], [1, "control"], ["type", "number", "name", "amount", "placeholder", "Amount", "required", "", 1, "input", 2, "width", "100px", 3, "ngModel"], [1, "field"], ["type", "text", "name", "description", "placeholder", "Description", "required", "", 1, "input", 3, "ngModel"], ["type", "submit", 1, "button", "is-primary", 3, "disabled", "ngClass"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.item.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx.isNewItem, !ctx.isNewItem));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isNewItem ? "Add" : "Save", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], formSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/item-list/item-list-card/item-list-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/item-list/item-list-card/item-list-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: ItemListCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListCardComponent", function() { return ItemListCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { income: a0, expense: a1 }; };
class ItemListCardComponent {
    constructor() {
        this.xButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onXButtonClick() {
        this.xButtonClicked.emit();
    }
    onCardClick() {
        this.cardClick.emit();
    }
}
ItemListCardComponent.ɵfac = function ItemListCardComponent_Factory(t) { return new (t || ItemListCardComponent)(); };
ItemListCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemListCardComponent, selectors: [["app-item-list-card"]], inputs: { item: "item" }, outputs: { xButtonClicked: "xButtonClicked", cardClick: "cardClick" }, decls: 11, vars: 6, consts: [[1, "root"], [1, "budget-item", 3, "ngClass", "click"], [1, "descreption"], [1, "amount"], [1, "x-icon-button", 3, "click"]], template: function ItemListCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemListCardComponent_Template_div_click_1_listener() { return ctx.onCardClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemListCardComponent_Template_div_click_8_listener() { return ctx.onXButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.item.amount >= 0, ctx.item.amount < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.amount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900 |Lato:300,900\");\n.root[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 5px;\n  position: relative;\n}\n.root[_ngcontent-%COMP%]   .budget-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  background-color: #f5f5f5;\n  transition: background-color 0.2s ease-out;\n}\n.root[_ngcontent-%COMP%]   .budget-item[_ngcontent-%COMP%]:hover {\n  background-color: #ebebeb;\n}\n.root[_ngcontent-%COMP%]   .budget-item[_ngcontent-%COMP%]   .descreption[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: large;\n  flex-grow: 1;\n  text-transform: capitalize;\n}\n.root[_ngcontent-%COMP%]   .budget-item[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 5px;\n  border-radius: 3px;\n}\n.root[_ngcontent-%COMP%]   .income[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #00cc86;\n}\n.root[_ngcontent-%COMP%]   .income[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background-color: #bafacd;\n}\n.root[_ngcontent-%COMP%]   .expense[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ff4348;\n}\n.root[_ngcontent-%COMP%]   .expense[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background-color: #e7989a;\n}\n.root[_ngcontent-%COMP%]   .x-icon-button[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #161c29;\n  right: -14px;\n  top: -14px;\n  text-align: center;\n  cursor: pointer;\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n  transform: scale(0);\n  opacity: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.root[_ngcontent-%COMP%]   .x-icon-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #dc0006;\n  font-size: 19px;\n  font-weight: 500;\n}\n.root[_ngcontent-%COMP%]:hover   .x-icon-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.root[_ngcontent-%COMP%]:hover   .x-icon-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9pdGVtLWxpc3QvaXRlbS1saXN0LWNhcmQvaXRlbS1saXN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsZ0dBQUE7QUNIUjtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJETFM7RUNPVCwwQ0FBQTtBQUNKO0FBQUk7RUFDRSx5QkFBQTtBQUVOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBQ047QUFDSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ047QUFHSTtFQUNFLGNEdkJFO0FDc0JSO0FBR0k7RUFDRSx5QkR6QlE7QUN3QmQ7QUFLSTtFQUNFLGNBQUE7QUFITjtBQUtJO0VBQ0UseUJBQUE7QUFITjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJENUNHO0VDNkNILFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMERBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBS0k7RUFDRSxjRG5EQTtFQ29EQSxlQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQU9JO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBTE47QUFNTTtFQUNFLHFCQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWxpc3QvaXRlbS1saXN0LWNhcmQvaXRlbS1saXN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dsb2JhbCBTdHlsZXMgYW5kIGNoYW5pbmcgQnVsbWEgVmFyaWVibGVzXHJcbkBjaGFyc2V0IFwidXRmLThcIjtcclxuXHJcbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMCB8TGF0bzozMDAsOTAwXCIpO1xyXG5cclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6IHJnYigxNTksIDEwNCwgMjM1KTtcclxuJGxpZ2h0LWdyZXk6ICNmNWY1ZjU7XHJcbiRkYXJrOiByZ2IoMjIsIDI4LCA0MSk7XHJcblxyXG4kZ3JlZW46ICMwMGNjODY7XHJcbiRsaWdodC1ncmVlbjogI2JhZmFjZDtcclxuXHJcbiRyZWQ6ICNkYzAwMDY7XHJcbiRsaWdodC1yZWQ6ICNkNjUyNTY7XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL21haW4tc3R5bGVzLnNjc3NcIjtcclxuLnJvb3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuYnVkZ2V0LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0LWdyZXksIDQlKTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JlcHRpb24ge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgICAuYW1vdW50IHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmluY29tZSB7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgIH1cclxuICAgIC5hbW91bnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JlZW47XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5leHBlbnNlIHtcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogbGlnaHRlbigkcmVkLCAyMCUpO1xyXG4gICAgfVxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0LXJlZCwgMTclKTtcclxuICAgIH1cclxuICB9XHJcbiAgLngtaWNvbi1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcclxuICAgIHJpZ2h0OiAtMTRweDtcclxuICAgIHRvcDogLTE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgLngtaWNvbi1idXR0b24ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-list-card',
                templateUrl: './item-list-card.component.html',
                styleUrls: ['./item-list-card.component.scss'],
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xButtonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cardClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/item-list/item-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/item-list/item-list.component.ts ***!
  \**************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _edit_item_model_edit_item_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../edit-item-model/edit-item-model.component */ "./src/app/edit-item-model/edit-item-model.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _item_list_card_item_list_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-list-card/item-list-card.component */ "./src/app/item-list/item-list-card/item-list-card.component.ts");






function ItemListComponent_div_5_app_item_list_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-item-list-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cardClick", function ItemListComponent_div_5_app_item_list_card_1_Template_app_item_list_card_cardClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onCardClicked(item_r2); })("xButtonClicked", function ItemListComponent_div_5_app_item_list_card_1_Template_app_item_list_card_xButtonClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onDelete(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r2);
} }
function ItemListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemListComponent_div_5_app_item_list_card_1_Template, 1, 1, "app-item-list-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2.amount >= 0);
} }
function ItemListComponent_div_9_app_item_list_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-item-list-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("xButtonClicked", function ItemListComponent_div_9_app_item_list_card_1_Template_app_item_list_card_xButtonClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onDelete(item_r10); })("cardClick", function ItemListComponent_div_9_app_item_list_card_1_Template_app_item_list_card_cardClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onCardClicked(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r10);
} }
function ItemListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemListComponent_div_9_app_item_list_card_1_Template, 1, 1, "app-item-list-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.amount < 0);
} }
class ItemListComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    onDelete(item) {
        this.deleteEvent.emit(item);
    }
    onCardClicked(item) {
        const dialogRef = this.dialog.open(_edit_item_model_edit_item_model_component__WEBPACK_IMPORTED_MODULE_0__["EditItemModelComponent"], {
            width: '580px',
            data: item,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.update.emit({
                    old: item,
                    new: result,
                });
            }
        });
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["app-item-list"]], inputs: { budgetItems: "budgetItems" }, outputs: { deleteEvent: "deleteEvent", update: "update" }, decls: 10, vars: 2, consts: [[1, "add-item-section"], [1, "add-item-container"], [1, "income-column"], [4, "ngFor", "ngForOf"], [1, "expenses-column"], ["class", "expense", 3, "item", "cardClick", "xButtonClicked", 4, "ngIf"], [1, "expense", 3, "item", "cardClick", "xButtonClicked"], ["class", "expense", 3, "item", "xButtonClicked", "cardClick", 4, "ngIf"], [1, "expense", 3, "item", "xButtonClicked", "cardClick"]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "income");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ItemListComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ItemListComponent_div_9_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.budgetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.budgetItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _item_list_card_item_list_card_component__WEBPACK_IMPORTED_MODULE_4__["ItemListCardComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900 |Lato:300,900\");\n.add-item-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 50px 50px;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 680px;\n  width: 100%;\n  height: 100%;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%], .add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n  padding: 10px;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: 24px \"lato\";\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #0affab;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ff1a20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGdHQUFBO0FDRlI7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFHQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFFSTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBTjtBQUNNOztFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUVSO0FBQ0k7RUFDRSxrQkFBQTtBQUNOO0FBQU07RUFDRSxjQUFBO0FBRVI7QUFFTTtFQUNFLGNBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dsb2JhbCBTdHlsZXMgYW5kIGNoYW5pbmcgQnVsbWEgVmFyaWVibGVzXHJcbkBjaGFyc2V0IFwidXRmLThcIjtcclxuXHJcbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMCB8TGF0bzozMDAsOTAwXCIpO1xyXG5cclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6IHJnYigxNTksIDEwNCwgMjM1KTtcclxuJGxpZ2h0LWdyZXk6ICNmNWY1ZjU7XHJcbiRkYXJrOiByZ2IoMjIsIDI4LCA0MSk7XHJcblxyXG4kZ3JlZW46ICMwMGNjODY7XHJcbiRsaWdodC1ncmVlbjogI2JhZmFjZDtcclxuXHJcbiRyZWQ6ICNkYzAwMDY7XHJcbiRsaWdodC1yZWQ6ICNkNjUyNTY7XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuIiwiQGltcG9ydCBcIi4uLy4uL21haW4tc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5hZGQtaXRlbS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA1MHB4IDUwcHg7XHJcbiAgLmFkZC1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmluY29tZS1jb2x1bW4sXHJcbiAgICAuZXhwZW5zZXMtY29sdW1uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleC1iYXNpczogMDsgLy9mb3IgdGhlIDIgY29sdW1ucyB0byBiZSBvZiB0aGUgc2FtZSBoZWlnaHQsIHJlZ2FyZGxlc3Mgb2YgdGhlIGNvbnRlbnRcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udDogMjRweCBcImxhdG9cIjtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmNvbWUtY29sdW1uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGdyZWVuLCAxMiUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZXhwZW5zZXMtY29sdW1uIHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiBsaWdodGVuKCRyZWQsIDEyJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { budgetItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item-list/item-list.component */ "./src/app/item-list/item-list.component.ts");





const _c0 = function (a0, a1) { return { green: a0, red: a1 }; };
class MainPageComponent {
    constructor() {
        this.budgetItems = new Array();
        // locBudgetItems: BudgetItem[] = new Array<BudgetItem>();
        this.tottalBudget = 0;
    }
    ngOnInit() {
        this.getBudgetItems();
    }
    addItem(newItem) {
        this.budgetItems.push(newItem);
        this.tottalBudget += newItem.amount;
        // Set Local DB
        localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
        localStorage.setItem('tottalBudget', JSON.stringify(this.tottalBudget));
    }
    deleteItem(item) {
        const index = this.budgetItems.indexOf(item);
        this.budgetItems.splice(index, 1);
        this.tottalBudget -= item.amount;
        // Set Local DB
        localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
        localStorage.setItem('tottalBudget', JSON.stringify(this.tottalBudget));
    }
    updateItem(updateEvent) {
        // edit the selected item
        this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
            updateEvent.new;
        // budget Update
        const total = updateEvent.new.amount - updateEvent.old.amount;
        this.tottalBudget += total;
        // Set Local DB
        localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
        localStorage.setItem('tottalBudget', JSON.stringify(this.tottalBudget));
    }
    getBudgetItems() {
        if (localStorage.getItem('budgetItems') === null) {
            this.budgetItems = new Array();
            this.tottalBudget = 0;
        }
        else {
            this.budgetItems = JSON.parse(localStorage.getItem('budgetItems'));
            this.tottalBudget = JSON.parse(localStorage.getItem('tottalBudget'));
        }
        // return this.budgetItems;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 11, vars: 6, consts: [[1, "top-bar"], [1, "result-section"], [3, "ngClass"], [1, "add-item-section"], [1, "add-item-container"], [2, "margin", "10px", 3, "formSubmit"], [2, "margin-top", "0"], [3, "budgetItems", "deleteEvent", "update"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calculate Your Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function MainPageComponent_Template_app_form_formSubmit_8_listener($event) { return ctx.addItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-item-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteEvent", function MainPageComponent_Template_app_item_list_deleteEvent_10_listener($event) { return ctx.deleteItem($event); })("update", function MainPageComponent_Template_app_item_list_update_10_listener($event) { return ctx.updateItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.tottalBudget > 0, ctx.tottalBudget < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tottalBudget, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("budgetItems", ctx.budgetItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900 |Lato:300,900\");\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 68px;\n  background: linear-gradient(0.15turn, rgba(22, 28, 41, 0.3), #adcbe7, rgba(22, 28, 41, 0.3));\n  justify-content: center;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: x-large \"lato\";\n  letter-spacing: 1px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #161c29;\n}\n.result-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #161c29;\n  height: 136px;\n}\n.result-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 50px \"lato\";\n  font-weight: bold;\n}\n.result-section[_ngcontent-%COMP%]   h2.green[_ngcontent-%COMP%] {\n  color: #0affab;\n}\n.result-section[_ngcontent-%COMP%]   h2.red[_ngcontent-%COMP%] {\n  color: #ff4348;\n}\n.add-item-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%] {\n  width: 680px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGdHQUFBO0FDRlI7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0RkFBQTtFQU1BLHVCQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQU1FO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjRFZHO0FDTVA7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJEakJLO0VDa0JMLGFBQUE7QUFKRjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUhKO0FBSUk7RUFDRSxjQUFBO0FBRk47QUFJSTtFQUNFLGNBQUE7QUFGTjtBQU1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQUlFO0VBQ0UsWUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vR2xvYmFsIFN0eWxlcyBhbmQgY2hhbmluZyBCdWxtYSBWYXJpZWJsZXNcclxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5cclxuLy8gSW1wb3J0IGEgR29vZ2xlIEZvbnRcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwIHxMYXRvOjMwMCw5MDBcIik7XHJcblxyXG4vLyBTZXQgeW91ciBicmFuZCBjb2xvcnNcclxuJHB1cnBsZTogcmdiKDE1OSwgMTA0LCAyMzUpO1xyXG4kbGlnaHQtZ3JleTogI2Y1ZjVmNTtcclxuJGRhcms6IHJnYigyMiwgMjgsIDQxKTtcclxuXHJcbiRncmVlbjogIzAwY2M4NjtcclxuJGxpZ2h0LWdyZWVuOiAjYmFmYWNkO1xyXG5cclxuJHJlZDogI2RjMDAwNjtcclxuJGxpZ2h0LXJlZDogI2Q2NTI1NjtcclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRwdXJwbGU7XHJcblxyXG4vLyBVcGRhdGUgc29tZSBvZiBCdWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vbWFpbi1zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLnRvcC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2OHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDAuMTV0dXJuLFxyXG4gICAgcmdiYSgyMiwgMjgsIDQxLCAzMCUpLFxyXG4gICAgcmdiKDE3MywgMjAzLCAyMzEpLFxyXG4gICAgcmdiYSgyMiwgMjgsIDQxLCAzMCUpXHJcbiAgKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGgxIHtcclxuICAgIGZvbnQ6IHgtbGFyZ2UgXCJsYXRvXCI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogJGRhcms7XHJcbiAgfVxyXG59XHJcbi5yZXN1bHQtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xyXG4gIGhlaWdodDogMTM2cHg7XHJcbiAgaDIge1xyXG4gICAgZm9udDogNTBweCBcImxhdG9cIjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgJi5ncmVlbiB7XHJcbiAgICAgIGNvbG9yOiBsaWdodGVuKCRncmVlbiwgMTIlKTtcclxuICAgIH1cclxuICAgICYucmVkIHtcclxuICAgICAgY29sb3I6IGxpZ2h0ZW4oJHJlZCwgMjAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmFkZC1pdGVtLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuYWRkLWl0ZW0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2ODBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 2, vars: 0, template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found-page',
                templateUrl: './not-found-page.component.html',
                styleUrls: ['./not-found-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/models/budget-item.model.ts":
/*!************************************************!*\
  !*** ./src/shared/models/budget-item.model.ts ***!
  \************************************************/
/*! exports provided: BudgetItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItem", function() { return BudgetItem; });
class BudgetItem {
    constructor(description, amount) {
        this.description = description;
        this.amount = amount;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Nemo\github\angular-random-apps\budg-cal-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map