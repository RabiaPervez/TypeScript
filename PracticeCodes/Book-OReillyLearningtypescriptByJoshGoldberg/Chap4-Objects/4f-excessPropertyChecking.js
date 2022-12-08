var poetMatch = {
    name: "Oliver",
    age: 23
};
var extraProperty = {
    name: "Oliver",
    age: 23
};
//but in following manner, error will not be generated and extra property will be added
var extrapropertOk = {
    name: "Oliver",
    age: 23,
    extra: "hello"
};
var extrapropertOk2 = extrapropertOk;
console.log(extrapropertOk2);
