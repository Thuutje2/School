"use strict";
exports.__esModule = true;
// Opgave 19:
var Item_1 = require("./Item");
var MyShoppingcart_1 = require("./MyShoppingcart");
var item1 = new Item_1.Item("001", "Toshiba", "SX", 999.99, 10);
var item2 = new Item_1.Item("002", "Acer", "Aspire", 1099.99, 5);
var myShoppingcart = new MyShoppingcart_1.MyShoppingcart();
myShoppingcart.addToCart(item1);
myShoppingcart.addToCart(item2);
myShoppingcart.printCart();
