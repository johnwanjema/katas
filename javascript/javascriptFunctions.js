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