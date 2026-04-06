// xonditional statements

//  let age = 15

//  if (age > 20){
//     console.log("you can code");
//  }
//  if (age<18){
//     console.log("you cannot code");
//  }

// let mode = "Dark";
// let color;

// if(mode === "Dark"){
//     color = "black";
// }
// if (mode === "Light") {
//     color = "White";
// }
// console.log(color);

// let mode = "w";
// let color;

// if(mode === "Dark"){
//     color = "black";
// }
// else{
//     color = "White";
// }
// console.log(color);

// let age = 15;
// if (age>18) {
//     console.log("vote");
// }else{
//     console.log('Not Vote')
// }
/*
let num = 21;
if (num%2 ==0) {
    console.log("even");
    
} else {
    console.log("Odd");
    
}
*/
// syntax ->. Rules

// let mode = "Pink";
// if (mode === "Dark") {
//     console.log("Black");
    
// } else if (mode === "Light") {
//     console.log(White);
    
// }
// else{
//     console.log("other color");
// }
// Terninary operator ? : ie a? b: c
// if a is true then b elce c 
/*
let age = 12;
let result = age >= 18 ? "adult" : "not adult"; // contact if else
console.log(result);
*/

/// Alert one time popup
// promp give message and can enter in input field
/*
let name = prompt("Enter Your Number");
if (name % 5 ===0) {
    console.log("Divisible by 5");
    
} else {
    console.log("Not divisible by 5");
}
*/

let marks = prompt("Enter Your Marks");
let grade;
if (marks >=90 && marks <=100) {
    grade = "a";
} else if(marks >=70 && marks <90) {
    grade= "b";
} else if (marks >=60 && marks <=69){
       
    grade = "C";
}else if (marks >=50 && marks <=59){
       
    grade = "D";
}
else if (marks >=30 && marks <=49){
       
    grade = "e";
}else if (marks >=0 && marks <=29){
       
    grade = "f";
}

console.log("Your grade is ", grade);
