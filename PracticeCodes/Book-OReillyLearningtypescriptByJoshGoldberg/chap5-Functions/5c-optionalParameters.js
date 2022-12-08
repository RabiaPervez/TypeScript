function announceSong(song, singer) {
    console.log("song is ".concat(song));
    console.log("singer is ".concat(singer));
    if (singer) {
        console.log("Singing: ".concat(song, " by ").concat(singer, "!"));
    }
}
;
announceSong('ballad');
announceSong('ballad', 'rock');
//announceSong('ballad', 'rock', 'pop'); (will give error)
announceSong('ballad', undefined);
//announceSong('ballad', null); (will give error)
