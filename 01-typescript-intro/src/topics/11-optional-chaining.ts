export interface Passenger
{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Carlos Andrade',
};

const passenger2: Passenger = {
    name: 'Ana Gabriela',
    children: ['Carlos Jr.', 'Gabriela Jr.'],
};

const printChildren = (passenger: Passenger) =>
{
    const howManyChildren = passenger.children?.length ?? 'ninguna';
    console.log(`Cuantas bendis tiene ${passenger.name}: `, howManyChildren);
}

printChildren(passenger1);