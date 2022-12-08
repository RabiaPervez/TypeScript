/*
let inputAndOutput: (songs: string[], count?: number) => number;
inputAndOutput is a variable
songs is a string parameter
count is an optional parameter
return type is number
*/

const songs = ["hello", "shake it up", "believer"];

function runOnSongs(getSongAt: (index:number) => string){
    for (let i =0; i < songs.length; i++){
        console.log(getSongAt(i));
    }
};

function getSongAt(index: number){
    return `${songs[index]}`;
}

runOnSongs(getSongAt);

/*
function logSong(song:string){
    return `${song}`;
}

runOnSongs(logSong); (gives error) 
*/