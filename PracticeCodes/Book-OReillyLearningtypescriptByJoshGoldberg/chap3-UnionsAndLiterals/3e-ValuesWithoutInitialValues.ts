//let mathematician: string;
//mathematician?.length; (will give error)
let mathematician: string | undefined;
console.log(mathematician?.length);
mathematician = "Mark gulberg";
console.log(mathematician.length);