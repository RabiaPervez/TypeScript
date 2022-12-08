/*
function getSongrecorded(song: string): Date | undefined {
    switch(song){
        case "strange":
            return new Date('April 01,2005');
        
        case "lovely":
               // return "don't know"; (will give error as string shouldnot be returned)
            return new Date('April 01,2006'); 
        default:
            return undefined;
    }
}
*/
const getSongrecorded = (song: string): Date | undefined =>
    {switch(song){
        case "strange":
            return new Date('April 01,2005');
        
        case "lovely":
               // return "don't know"; (will give error as string shouldnot be returned)
            return new Date('January 01,2006'); 
        default:
            return undefined;
    }
}

console.log(getSongrecorded("strange"));
console.log(getSongrecorded("lovely"));
console.log(getSongrecorded(""));
