const poem = Math.random() > 0.5
    ? { name: "The double image", pages:7 }
    : { name: "her kind", rhymes:true};

console.log(poem.name);
console.log(poem.pages);
console.log(poem.rhymes);