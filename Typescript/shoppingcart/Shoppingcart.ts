// Opgave 17:
import {Item} from "./Item";
import {IShoppingcart} from "./IShoppingcart";
export abstract class Shoppingcart implements IShoppingcart {
    printCart(): void{};

    public itemList: Array<Item> = new Array<Item>();

    public addToCart(item: Item): void {
        this.itemList.push(item);
    }
}