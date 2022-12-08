function announceSong(song : string, singer? : string) {
    console.log(`song is ${song}`);
    console.log(`singer is ${singer}`);
    if (singer) {
        console.log(`Singing: ${song} by ${singer}!`);
    }
};

announceSong('ballad');
announceSong('ballad', 'rock');
//announceSong('ballad', 'rock', 'pop'); (will give error)
announceSong('ballad', undefined);
//announceSong('ballad', null); (will give error)
