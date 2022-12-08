function singAllSongs(singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, songs_1 = songs; _a < songs_1.length; _a++) {
        var song = songs_1[_a];
        console.log("".concat(singer, " sings ").concat(song));
    }
    ;
}
;
singAllSongs("John", "The Best Song Ever", "The Second Best Song Ever", "The Third Best Song Ever");
singAllSongs("John", "The Best Song Ever");
singAllSongs("John");
//singAllSongs("John",5000); (will give error)
