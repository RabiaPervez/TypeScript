/*  WithFirstName and WithLastName aliased object types both
only declare a single member of type string. The hasBoth variable just so
happens to have both of them—even though it wasn’t declared as such
explicitly—so it can be provided to variables that are declared as either of
the two aliased object types */
var hasBoth = {
    firstName: "Oliver",
    lastname: "Twist"
};
var withFirstName = hasBoth;
console.log(withFirstName);
var withLastName = hasBoth;
console.log(withLastName);
