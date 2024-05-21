function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T)
{
    return class extends constructor
    {
        newProperty = 'new property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass
{
    public myProperty: string = 'Hola mundo';

    print()
    {
        console.log('SuperClass.print()');
    }
}

console.log('SuperClass:',  SuperClass);

const superClass = new SuperClass();
console.log('superClass:', superClass);