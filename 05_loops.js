// Repeat the code agai and again 
// i = 0 Initialisation
// i < 10 condition -> Stopping condition
// i++ increment

/* Print 1-5
for (let i = 0; i <= 100; i++) {
    console.log("Apna collage");
}

console.log("Loop is finished");


// calculate sum of 1-5
let sum = 0;
let x = 100;
for (let num = 1; num <= x; num++) {
    sum = sum + num;
}
console.log("Sum of 1-5 is:", sum);

*/

// print 1-5
// for (let i = 0; i <= 5; i++) {
//     console.log("i =", i );
// }


//  Never create infinite loop, it will crash the system and take more space iin tehs ystem

// While loop ->
/*
let i = 0; 
while (i <= 10) {
    console.log("i =", i);
    i++;
}
*/
// DO while loop -> at least one time run hota hai
/*
let i = 0;
do {
    console.log("i =", i);
    i++;
} while (i<=5);

*/


// for of loop -> array and string ke liye use hota hai
/*
let str = "Apna college";
let length = 0;
for (let i of str) {
    console.log("i =", i);
    length++;
}

console.log("Length of string is =", length);
*/

// for in loop -> object ke liye use hota hai, itteratotr givr keys. o fht eobject 
/*
let student = {
    fullName : "Rahul kuma",
    CGPA : 9.8,
    ispass: true,
    age: 12,
}  ;

for(let i in student){
    console.log("i =", i);
    console.log("student[i] =", student[i]);
}
*/

// print number betweeen 0 - 100

/*let num;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Even number is =", i);
    }
};
*/
/*
let num = prompt("Enter Your Number");
let j = 20;
// for (let i = 0; i <= j; i++) {
//     if (num ==j) {
//         console.log("Number is =", num);
        
//     }else {
//          num = prompt("Enter Your Number Again");
//     }
    
// }
while (num != j) {
    num = prompt("Enter Your Number Again");
}
console.log("Number is =", num);
*/

