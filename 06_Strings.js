//// sequence of characteers is called string. It is used to store text data. 
// let str = "Apna college";
// console.log(str[8]);

// Template literals -> ``, it is used to embed the variable in string, it is also called string

// let obj = {
//     Price : 100,
//     item : "Ball Pen",
// }
// let output = `Cost of ${obj.item} is ${obj.Price}`;// string literals, it is used to embed the variable in string, it is also called string interpolation
// console.log(output); // String interp/ollation
// console.log("Cost of pen is ", obj.Price, ); 


// let output = `Cost of ${obj.item} is ${obj.Price}`;// Template literals
 
/*

console.log("Apna collage");

// how to print in next line -> \n, \t -> tab space
console.log("Apna collage\nis best");
*/
// String methords -> blck of code that do something wrk
// let str = "    Apna college   ";

// let str1 = str.toUpperCase(); // don not chanage the orignal string, it creat new string with new value
// console.log(str);
// console.log(str1);
// console.log(str.trim());
//str.trim // remove the white spaces 
// str.slice(0, 5) // it will remove the first 5 characters from the string and return the remaining string
// let num = "apna";
// // console.log(num.slice(0,4));      
// let num2 = "college";

// let final = num + num2;
// console.log(final);
// console.log(num.concat(num2)); // it will concatenate the two strings and return the new string
// console.log(str.replace("college", "university")); // it will replace the first occurrence of the word "college" with "university" and return the new string
// str.charAt(0); // it will return the character at the specified index
// console.log(num.charAt(2));
// Practice Question 
let name = prompt("Enter your name");
let nname = "@" + name + name.length;
console.log(nname);

// console.log("@",name, name.length);
