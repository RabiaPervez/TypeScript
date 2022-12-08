/*
let inputAndOutput: (songs: string[], count?: number) => number;
inputAndOutput is a variable
songs is a string parameter
count is an optional parameter
return type is number
*/
var songs = ["hello", "shake it up", "believer"];
function runOnSongs(getSongAt) {
    for (var i = 0; i < songs.length; i++) {
        console.log(getSongAt(i));
    }
}
;
function getSongAt(index) {
    return "".concat(songs[index]);
}
runOnSongs(getSongAt);
/*
function logSong(song:string){
    return `${song}`;
}

runOnSongs(logSong); (gives error)
*/ 
