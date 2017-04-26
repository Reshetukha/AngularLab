"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Item = (function () {
    function Item(purchase, price) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.items = [
            { purchase: "����", done: false, price: 15.9 },
            { purchase: "�����", done: false, price: 60 },
            { purchase: "���������", done: true, price: 22.6 },
            { purchase: "���", done: false, price: 310 }
        ];
    }
    AppComponent.prototype.addItem = function (text, price) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        this.items.push(new Item(text, price));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'purchase-app',
        template: "<div class=\"page-header\">\n        <h1> \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD \uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD </h1>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" [(ngModel)]=\"text\" placeholder = \"\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-6\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\" placeholder=\"\uFFFD\uFFFD\uFFFD\uFFFD\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(text, price)\">\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD</button>\n                </div>\n            </div>\n        </div>\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD</th>\n                    <th>\uFFFD\uFFFD\uFFFD\uFFFD</th>\n                    <th>\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{item.purchase}}</td>\n                    <td>{{item.price}}</td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"item.done\" /></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map