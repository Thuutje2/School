// Opgave 19:
import {Item} from "./Item";
import {MyShoppingcart} from "./MyShoppingcart";

let item1: Item = new Item("001", "Toshiba", "SX", 999.99, 10);
let item2: Item = new Item("002", "Acer", "Aspire", 1099.99, 5);

let totaal: number;
totaal = (item1.getPrijs() * item1.getAantal()) + (item2.getAantal() * item2.getPrijs());



let myShoppingcart: MyShoppingcart = new MyShoppingcart();

myShoppingcart.addToCart(item1);
myShoppingcart.addToCart(item2);
myShoppingcart.printCart();

//lab 6
console.log("\n\tTotaalbedrag is: " , Math.round(totaal* 100)/100);

// lab 7
let prijs: number = 0;
    try{
        prijs = item1.setPrijs(11);
    }catch(e){
         console.log(e.message);
    }
