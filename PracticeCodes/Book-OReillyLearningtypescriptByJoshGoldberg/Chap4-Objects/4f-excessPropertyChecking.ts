type PoetNew ={
    name: string;
    age: number;
}

const poetMatch : PoetNew ={
    name: "Oliver",
    age: 23,
}

const extraProperty : PoetNew ={
    name: "Oliver",
    age: 23,
    //extra: "extra" //it will give error as it has extra property
}

//but in following manner, error will not be generated and extra property will be added

const extrapropertOk ={
    name: "Oliver",
    age: 23,
    extra: "hello",    
};

const extrapropertOk2 : PoetNew = extrapropertOk;
console.log(extrapropertOk2);
