"use strict";
exports.__esModule = true;
//Opgave 15
var Item = /** @class */ (function () {
    // constructor
    function Item(id, merk, model, prijs, aantal) {
        this.id = id;
        this.merk = merk;
        this.model = model;
        this.prijs = prijs;
        this.aantal = aantal;
    }
    Item.prototype.getID = function () {
        return this.id;
    };
    Item.prototype.getOmschrijving = function () {
        return (this.merk + " " + this.model);
    };
    Item.prototype.getPrijs = function () {
        return this.prijs;
    };
    Item.prototype.getAantal = function () {
        return this.aantal;
    };
    Item.prototype.setAantal = function (aantal) {
        this.aantal = aantal;
    };
    return Item;
}());
exports.Item = Item;
