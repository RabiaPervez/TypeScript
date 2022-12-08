type RawData = boolean | number | string | null | undefined;

// Type aliases can be used to create a new type from an existing type
let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

//type aliases cannot be referred in runtime
// type Sometype = string | boolean;
//console.log(Sometype); (will give error)

