/*
function songRecursive(songs: string[], count=0) : number {
    return songs.length? songRecursive(songs.slice(1), count+1) : count;
}
*/
//now as lambda function
var songRecursive = function (songs, count) {
    if (count === void 0) { count = 0; }
    return songs.length ? songRecursive(songs.slice(1), count + 1) : count;
};
console.log(songRecursive(['hello', 'to', 'you']));
console.log(songRecursive([]));
