type PoemWithpages = {
    name: string;
    pages: number;
    type: 'pages';
};

type PoemWithrhymes = {
    name: string;
    rhymes: boolean;
    type: 'rhymes';
};

type Poem2 = PoemWithpages | PoemWithrhymes;

const poem2 : Poem2 = Math.random() > 0.5 
    ? { name: "The double image", pages:7, type: 'pages' }
    : { name: "her kind", rhymes:true, type: 'rhymes'};

if(poem2.type === 'pages') {
    console.log('it has pages: ${poem2.pages}');
} else {
    console.log('it has rhymes: ${poem2.rhymes}');
}
console.log(poem2.type);
//console.log(poem2.pages); (will give error)
