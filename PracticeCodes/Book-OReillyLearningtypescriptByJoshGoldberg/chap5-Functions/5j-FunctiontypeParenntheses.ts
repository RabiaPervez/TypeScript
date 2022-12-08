//type is a funcion that returns a union: string or undefined
let returnStringorundefined: () => string | undefined;

// type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;
