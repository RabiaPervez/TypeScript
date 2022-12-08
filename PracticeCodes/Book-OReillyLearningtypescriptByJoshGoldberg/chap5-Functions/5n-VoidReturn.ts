function logSong(song: string | undefined) :void {
    if (!song){
        return;
    }
    console.log(`${song}`);
    // return true; (as boolean cannot be assigned to type void)
}