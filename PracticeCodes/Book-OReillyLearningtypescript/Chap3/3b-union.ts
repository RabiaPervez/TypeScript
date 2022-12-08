/*
let thinker: string | null = null;
if(Math.random() > 0.5){
    thinker = 'George';
}
console.log(thinker);
*/

let researcher = Math.random() > 0.5 ? "George" : 54;
typeof researcher === 'string' ? researcher.toUpperCase() : researcher.toFixed();

/*
if (typeof researcher === 'string'){
    researcher.toUpperCase();
}*/
console.log(researcher);