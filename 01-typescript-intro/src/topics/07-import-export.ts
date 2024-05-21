import { Product } from './06-function-destructuring';
import { ShoppingCart } from './06-function-destructuring';

const shoppingCart: Product[] = 
[
    {
        description: 'LG GM205',
        price: 100
    },
    {
        description: 'SMARTBITT 10"',
        price: 500
    }
];

const shopping_cart: ShoppingCart =
{
    products: shoppingCart,
    tax: 0.16,
    calculateTax: function(shoppingCart: ShoppingCart): [number, number]
    {
        const total = shoppingCart.products.reduce((total, product) => total + product.price, 0);
        const tax = total * shoppingCart.tax;
        return [total, tax];
    }
}

const [total, tax] = shopping_cart.calculateTax(shopping_cart);

console.log(`Total: ${total}, IVA: ${tax}`);