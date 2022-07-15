/**
 * Since typescript is a subset of javascript, variables and functions
 * can be declared just the way you do in javascript. 
 * 
 * The only difference being that you have to specify the datatypes 
 * and return types (functions)
 */
let userName: string = "Courage";

/**
 * when you define a varable with the const keyword you do not
 * have define the datatype cuz typescript knows that 
 * constants are immutable
 * 
 * NOTE: while this looks great, it is always a good practice
 * to define your datatype as this will help in maintaining
 * this source code and better team experience
 */

const age : number = 29;

/**
 * When creating an array, you must add [] in front of the datatype
 * This means you are trying to creat an array of the specified
 * datatype
 * 
 * Failure to do so will result into a type error
 * (Type 'string[]' is not assignable to type 'string'.)
 */

const users: string[] = ["Courage", "Mandate"];


/**
 * Function parameters should also be well defined to allow certain
 * types of data, this makes the code more readable and anyone 
 * using the code will understand the types that is allowed
 * @returns type
 */

const getAge = () : number => age;
const getName = () : string => userName;
const getUserDetails = (userName: string, age: number) => `${userName} ${age}`; 

/**
 * Objects are created just the way we do in javascript and typescript 
 * authomatically understands the type of eage feild in the object
 */

const user = {
    name: "Courage",
    age: 20
}

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
}

/**
 * As you can see they no more of the same type and the only way to fix this
 * will be to explicitly define the type like so:
 */

const userWithType : { name: string, age: number } = {
    name: "Courage",
    age: 20
}

const userWithType2 : { name: string, age: number } = {
    name: "Smith",
    age: 30
}

/**
 * First thing you will notice from the code above is code repeatition 
 * which is really bad standard. To make sure we don't repeat like
 * we did above, we use an interface.
 * 
 * Note: all interface names must begin with uppercase letter
 */

interface User {
    name: string,
    age: number
}

/**
 * We will use the interface in the code above like so
 */

const userWithI : User = {
    name: "Courage",
    age: 20
}

const userWithI2 : User = {
    name: "Smith",
    age: 10 // if you did not specify a value tsc will not throw any error but make sure specify the key
}

/**
 * In event we want to make any field optional in the interface, you do that by
 * using (?) infront of the field like so:
 */

interface UserI {
    name: string,
    age?: number
}

const user3 : UserI = {
    name: "God man"
    // without age field will dont get an error
}

/**
 * We can also create a function signature in our interface
 * and implement the method anywhere we use the interface
 */

interface UserI2 {
    name: string,
    age: number,
    getDetails() : string
}

const userI2 : UserI2 = {
    name: "Courage",
    age,
    getDetails() {
        return `${name} ${age}`
    },
}

// and you can access the method like so
userI2.getDetails()

/**
 * We can also use an interface as a datatype in an interface
 */
interface Post {
    title: string, 
    body: string
}

interface UserI3 {
    name: string,
    age: number,
    post: Post // Post interface is used as a datatype here
}

const userI3 : UserI3 = {
    name: "Courage",
    age,
    post: {title: "Country Man", body: "The first man in the country"} // post interface implementation
} 

/**
 * There are two ways of naming an interface first is by prefixing the word with "I" like IUser
 * and the other is pascal case word with the latter as "Interface". like UserInterface
 * 
 * The second is better because it is more discriptive 
 */

// you can use union operator to specify more than one datatype
const date: Date | string = "2019"; // date can either be an instance of Date() or a string

// we can also use union operator to check for null value
let message : string | null = null; // no value assigned, default to null;

message = "You are doing great!"; // change to string when a value is asigned, only a string or null is allowed

/**
 * Like interfaces that help use define a custom type, type aliases also help to define datatypes in a more
 * human readable format
 */

type ID = string;

interface Comment{
    id: ID // type alias
    post: Post
}

// we can also combine type alias with union operator
type PopularTag = string | null;

/**
 * type casting is useful if you want to convert datatypes
 */

const nameCount : number = 10;
const n: string = (nameCount as unknown) as string

/**
 * Working with DOM
 * 
 */

const input: HTMLInputElement | null = document.querySelector('.class');
input?.value

const someElement = document.querySelector('.class') as HTMLInputElement;
someElement.value;

const imageElement: HTMLImageElement | null = document.querySelector('.image')
imageElement?.src;

const imageElement2 = document.querySelector('.image') as HTMLImageElement
imageElement2.src;

// working with events
someElement.addEventListener('click', (e: Event) => {
    const { target }  = e
    const el = target as HTMLInputElement;
    el.value
})



