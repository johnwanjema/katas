// A function is a block of organized.reusable code that is used to perform a single,
// related action

// Consists of function keyword function name arguments and function body
function hello(name){
    console.log('Hello' + name)
}

// function call
hello('John');

// Functions have a return value
function greetings(){
    return 'Hello John'
}

let message = greetings();
console.log(message);

// An argument is a value that we pass to the function when its invoked whereas  an paramenter 
// is a variable that we list as part  of a function defination

//Parameters num1 , num2
function sum(num1,num2){
    return num1 + num2;
}

//Arguments 1 and 2 a
let result = sum(1,2)


// The Arguments Object
// Allows one to invoke a function with an idefinate number of arguments.
// The Arguments object allows us represent arguments like an array. It  does
// not have array some array inbuilt methods like for each and map
function sumAll(){
    total = 0
    for(let i=0; i< arguments.length; i++){
        total += arguments[i]
    }

    return total;
}

sumAll(3,45,4)//52


//Function scope
//local scope
function greetings(){
    let message = 'Habari Yako';
}
greeting();
console.log(message) //message is not defined


//global scope
function greeting(){
    let message = 'Hello';
    let  hello = function hello(){
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

if(age === 100){
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

if(messsage === 'Hello'){
    let message = 'Inside if block'
    console.log(message); //Inside if block
}

console.log(message);// Hello

 
