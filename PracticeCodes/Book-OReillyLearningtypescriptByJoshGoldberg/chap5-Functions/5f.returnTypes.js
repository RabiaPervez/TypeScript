function singSongs(songs) {
    for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
        var song = songs_1[_i];
        console.log("Singing ".concat(song));
    }
}
;
function getSongAt(songs, index) {
    return index < songs.length
        ? console.log(songs[index])
        : undefined;
}
singSongs(['hello', 'to', 'you']);
getSongAt(['hello', 'to', 'you'], 1);
getSongAt(['hello', 'to', 'you'], 3);
