// A function is a block of organized.reusable code that is used to perform a single,
// related action

// Consists of function keyword function name arguments and function body
function hello(name) {
    console.log('Hello' + name)
}

// function call
hello('John');

// Functions have a return value
function greetings() {
    return 'Hello John'
}

let message = greetings();
console.log(message);

// An argument is a value that we pass to the function when its invoked whereas  an paramenter 
// is a variable that we list as part  of a function defination

//Parameters num1 , num2
function sum(num1, num2) {
    return num1 + num2;
}

//Arguments 1 and 2 a
let result = sum(1, 2)


// The Arguments Object
// Allows one to invoke a function with an idefinate number of arguments.
// The Arguments object allows us represent arguments like an array. It  does
// not have array some array inbuilt methods like for each and map
function sumAll() {
    total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }

    return total;
}

sumAll(3, 45, 4)//52


//Function scope
//local scope
function greetings() {
    let message = 'Habari Yako';
}
greeting();
console.log(message) //message is not defined


//global scope
function greeting() {
    let message = 'Hello';
    let hello = function hello() {
        console.log(message)
    }
    hello(); //Hello
}

greeting();

//Block Scope
// Refers to code placed between curly braces.
// lifetime of variables of curly braces of an if statement,a while loop,or any set curly braces other than a function
// NB variables  declared with the var key word or within function declarations DO NOT have BLock scope.

//Example 1
let age = 100

if (age === 100) {
    // var age = 100;
    // var removes block scope
    let age = 100;
    //let has block scope
    //use let for block scope
}

console.log(color); //Error
//color is out of scope

// Example 2
let messsage = 'Hello';

if (messsage === 'Hello') {
    let message = 'Inside if block'
    console.log(message); //Inside if block
}

console.log(message);// Hello


// Immediately Invoked Function Expression(IIFE)
// Lets us group our code and have it work in isolation,idependent of any other code.
//Function Expression
//Define a function and assign it to a a variable
function hello() {
    console.log('Hello');
}

// function call
hello(); //Hello


//Immediately invoked
// Invoking function right away where its defined
// To make it a function expression, we assign it to a variable or use it in another expression
(function hello() {
    console.log('Hello'); //Hello
})();


// Closures
//without closure
let greeting = (function () {
    let message = 'Hello';
    let getMessage = function () {
        return message;
    };
})();

console.log(greeting.message); //undefined Message variable is out of scope

//Closures help keep message within the scope
//with closures
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

//Arrow Functions
// Refers to anonymous functions with thier own unique syntax
// Introduced in ES6
// Simpler way to create a function
// WHY?
// -shorter syntax
// -this derives it value from  enclosing lexical scope

//Short comings
// Observe behavior of this keyword
// No argument object - we cant ref arguments

//Regular function Example 1
let greet = function () {
    return 'Hello world'
}
let message = greet();
console.log(message); //Hello World


//Arrow function Example 1
let greet = () => {
    return 'Hello world'
}
let message = greet();
console.log(message); //Hello World


//Regular function Example 2
let greet = function (name) {
    return 'Hello' + name
}
let message = greet('John');
console.log(message); //Hello John

//Arrow function Example 2
// if there is one parameter paranthesis are optinal
let greet = name => 'Hello' + name;
let message = greet('John');
console.log(message); //Hello John


//Add two number Arrow function
let sum = (num1, num2) => num1 + num2;


// This keyword
// Refers to the owner of the function we are executing
// so if it's a standard function,this refers to the global window object;otherwise it can
// refer to the object that a function is a method of.

// Arrow functions dont have thier own this value.
// Moreover the value of this is always inherited  from the enclosing scope


let message ={
    name:'john',
    regularFunction(name){
        console.log('Hello' + this.name)
    },

    arrowFunction: () => console.log('Hi' + this.name)
}

message.regularFunction(); // Hello John
message.arrowFunction();// Hi

// Function Context
function sayHi(){
    console.log('Hi'); //Hi
    console.log(this);// [obj object]
}

let greeting = new sayHi()
//conservative function
//Everytime you invoke a function with the new keyword javascript creates
// an empty object within the function before returing it.

// The call method
let car1 = {brand:'Vw' ,color:'blue'}
let car2 = {brand:'Toyota' ,color:'white'}

let returnCarBrand = function (){
    console.log('Car brand is ' + this.brand)
}

returnCarBrand.call(car1); // Car brand is Vw
returnCarBrand.call(car2); // Car brand is Toyota

// The apply method
// same syntax as apply
// Diff is that call accepts an argument list, while apply accepts a single array of arguments

function bookTitle(name,author){
    console.log(name + 'is written by ' + author);
    console.log(this);
}

bookTitle('Clean Code',' Robert Cecil Martin');
//apply
bookTitle.apply(undefined ,['HTML & CSS: Design and Build Web Sites','Jon Duckett']);
//call
bookTitle.call(undefined ,'Coding All-in-One For Dummies','Nikhil Abraham');

//apply() 
// array imput with similar elements

// call()
// individual arguments of varying type


// bind method
// Allows to make a copy of a function and then change the value of this
let user1 = {
    name:'Mary',
    getName: function(){
        return this.name;
    }
}

let user2 = {name: 'John'};
let getNameCopy = user1.getName.bind(user2);
console.log(getNameCopy); // John


