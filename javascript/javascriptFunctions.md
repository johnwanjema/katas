# Advanced Javascript Functions
## What is a Javascript functions
A function is a block of organized,reusable code that is used to perform a single,related action.

## Advanced Working with Functions
Function basics include function declarations,passing parameters and function scope.
check out this article that cover into to Javascript functions.
[Javascript Functions](https://dev.to/luxacademy/javascript-functions-257f)

In this article we are going to discuss the following:
* The new function
* Immediately invoked functions
* closures
* Arrow functions
* This keyword
* The call method
* The apply method
* The bind method
* Default parameters
* Rest parameters
* Spread parameters


## The new function
The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
```bash
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('VW', 'GTI', 2017);

console.log(car1.make); // VW
```

### Immediately Invoked Function Expression(IIFE)
An IIFE Lets us group our code and have it work in isolation,independent of any other code.
Invokes a function right away where its defined.
This prevents functions and variables from polluting the global object.
```bash
(function hello() {
    console.log('Hello World'); //Hello
})();
```
To make it a function expression, we assign it to a variable or use it in another expression.

### closures
A closure is a feature in JavaScript where a function inner scope has access to the outer scope.
In the example below closure help keep message within the scope and it can be accessed in the getMessage function.
```bash
let greeting = (function () {
    let message = 'Hello';
    let getMessage = function () {
        return message;
    };
    return {
        getMessage: getMessage
    }
})();

console.log(greeting.message); //Hello
```
### Arrow functions
Arrow functions were introduced ES6.Refers to anonymous functions with their own unique syntax.Simpler way to create a function.
#### Why?
* shorter syntax
* this derives it value from  enclosing [lexical scope](https://en.wikipedia.org/wiki/Scope_(computer_science))

### Shortcomings.
*  Arrow functions don't have their own this value.
* No argument object - we can't reference arguments
```bash
let greet = () => {
    return 'Hello world';
}
let message = greet();
console.log(message); //Hello World
```
If there is one parameter parenthesis are optional.
```bash
let greet = name => 'Hello' + name;
```
### This keyword
Refers to the owner of the function we are executing
So if it's a standard function,this refers to the global window object;otherwise it can refer to the object that a function is a method of.
```bash
let message = {
    name: 'john',
    regularFunction(name) {
        console.log('Hello' + this.name)
    },

    arrowFunction: () => console.log('Hi' + this.name)
}

message.regularFunction(); // Hello John
message.arrowFunction();// Hi
```
### The call method
The call() allows for a function/method belonging to one object to be assigned and called for a different object.
call() provides a new value of this to the function/method. 
With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
```bash
let car1 = { brand: 'Vw', color: 'blue' }
let car2 = { brand: 'Toyota', color: 'white' }

let returnCarBrand = function () {
    console.log('Car brand is ' + this.brand)
}

returnCarBrand.call(car1); // Car brand is Vw
returnCarBrand.call(car2); // Car brand is Toyota
```

### The apply method
The apply() method calls a function with a given this value, and arguments provided as an array.
Same syntax as call difference is that call accepts an argument list, while apply accepts a single array of arguments.
```bash
function bookTitle(name, author) {
    console.log(name + 'is written by ' + author);
    console.log(this);
}
bookTitle.apply(['HTML & CSS: Design and Build Web Sites', 'Jon Duckett']);
```
### The bind method
Allows to make a copy of a function and then change the value of this.
```bash
let book = {
    author: 'Mary',
    getAuthor: function () {
        return this.author;
    }
}

let book2 = { author: 'John' };
let getAuthorcopy = book.getAuthor.bind(book2);
console.log(getAuthorcopy()); // John
```
### Default parameters
Allow named parameters to be initialized with default values if no value or undefined is passed.
```bash
function sayHi(message, name = 'John') {
    console.log(message + name)
}
```
### Rest parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
Rest parameters should always come after regular parameters.
```bash
let sayHi = function greet(...names) {
    names.forEach(name => console.log('Hi ' + name))
}
greet('Welcome', 'John', 'Mary', 'James') // Hi John // Hi Mary // Hi James
```
### Spread Operator
Allows an a function to take an array as an argument and spread out its elements so that they can be assigned  to individual parameters 
```bash
function greet(user1, user2) {
    console.log('Hello' + user1 +' and ' + user2)
}
let names = ['John','Mary']
greet(...names); //Hello John and Mary
```