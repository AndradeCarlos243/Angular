interface AudioPlayer
{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details
{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = 
{
    audioVolume: 50,
    songDuration: 180,
    song: 'La chona',
    details: 
    {
        author: 'Los Tucanes de Tijuana',
        year: 1995
    }
}

const { song: rola, details} = audioPlayer;
const { author: cantante } = details;

// console.log(rola);
// console.log(cantante);

// const anohana: string[] = ['Jintan', 'Menma', 'Anaru', 'Yukiatsu', 'Tsuruko', 'Poppo'];

// console.log(anohana);
// console.log('Protagonista: ', anohana[0] || 'No hay protagonista');
// console.log('Villano: ', anohana[9] || 'No hay villano');

// const [protagonista = 'No hay protagonista', villano = 'No hay villano']: string[] = ['Jintan', 'Menma', 'Anaru', 'Yukiatsu', 'Tsuruko', 'Poppo'];
// console.log('Protagonista: ', protagonista);
// console.log('Villano: ', villano);
