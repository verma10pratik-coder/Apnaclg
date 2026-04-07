// console.log("Hello");
// "abc".toUpperCase();

// [1,2,3].push(4);

// function is a block of code that performs a specific task and can be reused multiple times in a program. It allows you to encapsulate a set of instructions and execute them whenever needed, without
// help to remove repetancy
// def of function, function funftionname(){} 
// function call, function functionname

// function myfunction() {
//     console.log("Welcome to apna collage");
//     console.log("We are learning JS");
// }

// myfunction(); // function call, invoke 

// function myfunction(msg){
//     // console.log("Welcome to apna collage");
//     console.log(msg);
    
// }
// myfunction("Hello, world!");// argument 

//. function to calculate the sum 

function sum(a, b) {
    // act as a local variable 
    console.log(a+b);

    s = a + b;
    return s;
    //console.log("after return") do not execute after return
}

let v = sum(5, 10);
console.log(v);

// arrow function

function sum(a, b){
    return a+b;
}
//Modern js 
const arr = (a, b) => {
    console.log(a+b);
    
}
// multipliation 

const arrowmult = (a, b) => {

    return a*b;
}



function mult(a,b) {
    return a*b;
}

const printhello = () =>   console.log("Hello");

// practice

// let input = prompt("Enter your word");

function vowel(str) {
    //apna collage
    let count = 0;
   for( const i of str){
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
        console.log(i);
        count++
    }

}
console.log(count);

}

const countvow = (str) => {
        let count = 0;
   for( const i of str){
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
        count++
    }

}
console.log(count);
}
