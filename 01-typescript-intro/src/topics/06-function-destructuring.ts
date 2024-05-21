export interface Product
{
    description: string;
    price: number;
}

export interface ShoppingCart
{
    products: Product[];
    tax: number;
    calculateTax(shoppingCart: ShoppingCart): [number, number];
}

const telefono: Product =
{
    description: 'LG GM205',
    price: 100
}

const tablet: Product =
{
    description: 'SMARTBITT 10"',
    price: 500
}

let shoppingCart: ShoppingCart =
{
    products: [telefono, tablet],
    tax: 0.16,
    calculateTax: function(shoppingCart: ShoppingCart): [number, number]
    {
        const total = shoppingCart.products.reduce((total, product) => total + product.price, 0);
        const tax = total * shoppingCart.tax;
        return [total, tax];
    }
}

const [total, tax] = shoppingCart.calculateTax(shoppingCart);

console.log(`Total: ${total}, IVA: ${tax}`);
console.log(`Productos: ${shoppingCart.products.map(product => product.description).join(', ')}`)
