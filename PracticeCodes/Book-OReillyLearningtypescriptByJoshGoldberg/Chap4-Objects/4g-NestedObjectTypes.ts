type Author = {
    firstname: string;
    lastname: string;
};
type Poem = {
    author: Author;
    name:string;
};
const poemmatch : Poem ={
    author:{
        firstname:"anna",
        lastname:"karenina",
    },
    name:"halla",
};