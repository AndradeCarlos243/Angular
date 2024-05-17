const skills: string[] = [
    'Bash',
    'Counter',
    'Healing'
];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const nasemi: Character = {
    name: 'Nasemi',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

nasemi.hometown = 'Xalapa';
console.table(nasemi);
export
{

}