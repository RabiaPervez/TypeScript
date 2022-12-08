//explicit union type gives more control over code, as access to potentially nonexistent members of objects is restricted
var poem1 = Math.random() > 0.5
    ? { name: "The double image", pages: 7 }
    : { name: "her kind", rhymes: true };
console.log(poem1.name);
//console.log(poem.pages);
//console.log(poem.rhymes);
if ("pages" in poem1) {
    console.log(poem1.pages);
}
else {
    console.log(poem1.rhymes);
}
