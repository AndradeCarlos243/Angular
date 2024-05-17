function add_numbers(a: number, b: number)
{
    return a + b;
}

const add_numbers_arrow = (a: number, b: number): string => 
{ 
    return `${a + b}`; 
};

function multiply(fist_number: number, second_number?: number, base: number = 2): number
{
    return fist_number * base;
}

interface Character 
{
    name: string;
    hp: number;
    show_hp: () => void;
    
}

const result: number = add_numbers(1, 2);
const result_arrow: string = add_numbers_arrow(1, 2);
const result_multiply: number = multiply(5);

// console.log({ result, result_arrow, result_multiply });

const heal_character = (character: Character, amount: number): void =>
{
    character.hp += amount;
}

const nasemi: Character =
{
    name: 'Nasemi',
    hp: 100,
    show_hp()
    {
        console.log(`${this.name} has ${this.hp} points`);
    }
};

nasemi.show_hp();
heal_character(nasemi, 20);
nasemi.show_hp();
export
{

};