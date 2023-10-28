'use strict';

class Item {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    static maxItems = 10;

    static getHelperText() {
        return `You can only add ${Item.maxItems} items.`;
    }

    getDetails() {
        return `${this.name} - ${this.category}`;
    }
}

class PurchaseItem extends Item {
    constructor(name, category, price) {
        super(name, category);
        this.price = price;
    }

    getDetailsWithPrice() {
        return `${super.getDetails()} - $${this.price}`;
    }

    static getNumberOfItems() {
        return `3 / ${super.maxItems}`;
    }
}

let coffee = new Item('coffee', 'food');
coffee.category = 'drink'

let purchaseItem = new PurchaseItem('bread', 'food', 2.49);

// document.getElementById('output').innerHTML = purchaseItem.getDetailsWithPrice();
// document.getElementById('output').innerHTML = Item.getHelperText();
document.getElementById('output').innerHTML = PurchaseItem.getNumberOfItems();
