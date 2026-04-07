// Shopping Cart Functionality for Fia Co. Beauty Products

class ShoppingCart {
    constructor() {
        this.items = [];
        this.taxRate = 0.07; // 7% tax
        this.shippingCost = 5.00; // Flat rate shipping
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    calculateSubtotal() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    calculateTax() {
        return this.calculateSubtotal() * this.taxRate;
    }

    calculateTotal() {
        return this.calculateSubtotal() + this.calculateTax() + this.shippingCost;
    }

    clearCart() {
        this.items = [];
    }

    getItems() {
        return this.items;
    }
}

// Example usage:
const cart = new ShoppingCart();
const product1 = { id: 1, name: 'Lipstick', price: 20.00 };
const product2 = { id: 2, name: 'Foundation', price: 35.00 };

cart.addItem(product1, 2);
cart.addItem(product2, 1);
console.log('Items in Cart:', cart.getItems());
console.log('Subtotal:', cart.calculateSubtotal());
console.log('Tax:', cart.calculateTax());
console.log('Shipping:', cart.shippingCost);
console.log('Total:', cart.calculateTotal());