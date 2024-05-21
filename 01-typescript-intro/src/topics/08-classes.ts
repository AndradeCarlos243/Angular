class Persona
{
    constructor(
        public nombre: string,
        public apellido: string,
        private direccion: string = "Sin dirección"
    )
    {}

    mostrarDatos()
    {
        console.log(`Nombre: ${this.nombre} Apellido: ${this.apellido} Dirección: ${this.direccion}`);
    }
}


// export class Hero extends Persona
// {
//     constructor(
//         public alterEgo: string, 
//         public age: number,
//         public realName: string,
//     )
//     {
//         super(realName, 'Calle falsa 123');
//     }
// }


export class Hero
{
    constructor(
        public alterEgo: string, 
        public age: number,
        public realName: string,
        public persona: Persona,
    )
    {
    }
}

const persona = new Persona('Nasemi', 'Sanae', 'Calle falsa 123');

const nasemi = new Hero('Nasemi', 23, 'Carlos', persona);
console.log(nasemi);
persona.mostrarDatos();