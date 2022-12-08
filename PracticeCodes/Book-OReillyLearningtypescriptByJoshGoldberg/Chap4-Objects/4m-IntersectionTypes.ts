type AtWork = {
    genre: string;
    name:string;
};

type writing = {
    pages: number;
    name: string;
};

type writingArt = AtWork & writing;
/* 
equivalent to 
{
    genre: string;
    name:string;
    pages: number;
}
*/