type StringToNumber = (input : string) => number;
let stringToNumber : StringToNumber;

stringToNumber = (input) => input.length;

// stringToNumber = (input) => input.toUpperCase(); (will give error)