type shortPoem = 
    {author:string} & (
    | {book:string; type:'Hello';} 
    | {pages:number; type:'Goodbye';}
    );

const morningglory: shortPoem = {
    author: 'Mary Oliver',
    book: 'Morning Glory',
    type: 'Hello'
};

const artglory: shortPoem = {
    author: 'Mary Oliver',
    pages: 7,
    type: 'Goodbye'
};

console.log(morningglory);
console.log(artglory);
