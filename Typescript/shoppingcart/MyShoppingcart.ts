// Opgave 18:
import {Shoppingcart} from "./Shoppingcart";
export class MyShoppingcart extends Shoppingcart {
    public printCart(): void {

        console.log("Product Omschrijving \t Prijs \t Aantal\n");

        this.itemList.forEach(function (item){
            console.log(
                item.getID() + "\t" + item.getOmschrijving() + "\t" +
                item.getPrijs() + "\t" + item.getAantal() + "\t" +
                item.getTotaal());

                

        });
        
    }
}