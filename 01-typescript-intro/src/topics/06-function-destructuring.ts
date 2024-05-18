interface Product
{
    description: string;
    price: number;
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

interface TaxCalculationOptions
{
    tax: number;
    products: Product[];
}

function calculateTax(options: TaxCalculationOptions): number[]
{
    let total = 0;
    options.products.forEach(product =>
    {
        total += product.price;
    });

    return [total, total * options.tax];
}

const shoppingCart = [telefono, tablet];
const tax = 0.16;

const result = calculateTax(
    { 
        tax: tax,
        products: shoppingCart,
    }
);

console.log(`Total: ${result[0]}, IVA: ${result[1]}`); // Total: 600, IVA: 96




