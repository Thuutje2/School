"use strict";
exports.__esModule = true;
var Shoppingcart = /** @class */ (function () {
    function Shoppingcart() {
        this.itemList = new Array();
    }
    Shoppingcart.prototype.printCart = function () { };
    ;
    Shoppingcart.prototype.addToCart = function (item) {
        this.itemList.push(item);
    };
    return Shoppingcart;
}());
exports.Shoppingcart = Shoppingcart;
