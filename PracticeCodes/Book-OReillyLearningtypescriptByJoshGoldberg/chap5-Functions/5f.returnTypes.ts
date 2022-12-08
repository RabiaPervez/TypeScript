function singSongs(songs: string[]){
    for (const song of songs){
        console.log(`Singing ${song}`);
    }
};

function getSongAt(songs: string[], index:number){
    return index < songs.length 
    ? console.log(songs[index]) 
    : undefined;
}

singSongs(['hello','to','you']);
getSongAt(['hello','to','you'], 1);
getSongAt(['hello','to','you'], 3);
