function singAllSongs(singer:string, ...songs:string[]){
    for (const song of songs) {
        console.log(`${singer} sings ${song}`);
    };
};
singAllSongs("John", "The Best Song Ever", "The Second Best Song Ever", "The Third Best Song Ever");
singAllSongs("John", "The Best Song Ever");
singAllSongs("John");
//singAllSongs("John",5000); (will give error)
