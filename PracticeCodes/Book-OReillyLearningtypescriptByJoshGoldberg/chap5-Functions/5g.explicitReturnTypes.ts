/*
function songRecursive(songs: string[], count=0) : number {
    return songs.length? songRecursive(songs.slice(1), count+1) : count;
}
*/
//now as lambda function

const songRecursive = (songs: string[], count=0) : number =>
    songs.length? songRecursive(songs.slice(1), count+1) : count;

console.log(songRecursive(['hello','to','you']));
console.log(songRecursive([]));