"use strict";
/**
 * Since typescript is a subset of javascript, variables and functions
 * can be declared just the way you do in javascript.
 *
 * The only difference being that you have to specify the datatypes
 * and return types (functions)
 */
let userName = "Courage";
/**
 * when you define a varable with the const keyword you do not
 * have define the datatype cuz typescript knows that
 * constants are immutable
 *
 * NOTE: while this looks great, it is always a good practice
 * to define your datatype as this will help in maintaining
 * this source code and better team experience
 */
const age = 29;
/**
 * When creating an array, you must add [] in front of the datatype
 * This means you are trying to creat an array of the specified
 * datatype
 *
 * Failure to do so will result into a type error
 * (Type 'string[]' is not assignable to type 'string'.)
 */
const users = ["Courage", "Mandate"];
/**
 * Function parameters should also be well defined to allow certain
 * types of data, this makes the code more readable and anyone
 * using the code will understand the types that is allowed
 * @returns type
 */
const getAge = () => age;
const getName = () => userName;
const getUserDetails = (userName, age) => `${userName} ${age}`;
/**
 * Objects are created just the way we do in javascript and typescript
 * authomatically understands the type of eage feild in the object
 */
const user = {
    name: "Courage",
    age: 20
};
/**
 * The example above will generate an object type that looks like
 *
 *  const user: {
 *      name: string;
 *      age: number;
 *   }
 *
 * The only problem is that if we have more than one object and you want it
 * to be of the same type like the example below.
 */
const user2 = {
    name: "Smith"
};
/**
 * As you can see they no more of the same type and the only way to fix this
 * will be to explicitly define the type like so:
 */
const userWithType = {
    name: "Courage",
    age: 20
};
const userWithType2 = {
    name: "Smith",
    age: 30
};
/**
 * We will use the interface in the code above like so
 */
const userWithI = {
    name: "Courage",
    age: 20
};
const userWithI2 = {
    name: "Smith",
    age: 10 // if you did not specify a value tsc will not throw any error but make sure specify the key
};
const user3 = {
    name: "God man"
    // without age field will dont get an error
};
const userI2 = {
    name: "Courage",
    age,
    getDetails() {
        return `${name} ${age}`;
    },
};
// and you can access the method like so
userI2.getDetails();
const userI3 = {
    name: "Courage",
    age,
    post: { title: "Country Man", body: "The first man in the country" } // post interface implementation
};
/**
 * There are two ways of naming an interface first is by prefixing the word with "I" like IUser
 * and the other is pascal case word with the latter as "Interface". like UserInterface
 *
 * The second is better because it is more discriptive
 */
// you can use union operator to specify more than one datatype
const date = "2019"; // date can either be an instance of Date() or a string
// we can also use union operator to check for null value
let message = null; // no value assigned, default to null;
message = "You are doing great!"; // change to string when a value is asigned, only a string or null is allowed
/**
 * type casting is useful if you want to convert datatypes
 */
const nameCount = 10;
const n = nameCount;
/**
 * Working with DOM
 *
 */
const input = document.querySelector('.class');
input === null || input === void 0 ? void 0 : input.value;
const someElement = document.querySelector('.class');
someElement.value;
const imageElement = document.querySelector('.image');
imageElement === null || imageElement === void 0 ? void 0 : imageElement.src;
const imageElement2 = document.querySelector('.image');
imageElement2.src;
// working with events
someElement.addEventListener('click', (e) => {
    const { target } = e;
    const el = target;
    el.value;
});
