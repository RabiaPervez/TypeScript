/*  WithFirstName and WithLastName aliased object types both
only declare a single member of type string. The hasBoth variable just so
happens to have both of them—even though it wasn’t declared as such
explicitly—so it can be provided to variables that are declared as either of
the two aliased object types */

type WithFirstname ={
    firstName: string;
};
type WithLastName={
    lastname: string;
};

const hasBoth = {
    firstName: "Oliver",
    lastname: "Twist",
};

let withFirstName: WithFirstname = hasBoth;
console.log(withFirstName);

let withLastName: WithLastName = hasBoth;
console.log(withLastName);
