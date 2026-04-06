// Array linear way of storing similar data;
// let arr = [1, 2, 3, 4, 5];/
// can store different types of elements also.
// let mixedArr = [1, "hello", true, null];
let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);//Propert of array stored already

let hero = ["Ironman", "Spiderman", "Thor", "Hulk"];
// console.log(hero);
// console.log(hero.length);

// array indexed access to any element, arr[0]

// console.log(hero[0]);
// hero[0] = "Captain America"; 
// console.log(hero); // arrraya are mutable cn be changed 

// Print it using for loop
// for (let i = 0; i < hero.length; i++) {
//     console.log(hero[i]);
// }


// //assesing the element using for of loop
// for (let el of hero) {
//     console.log(el);
// }
/*
let num = [85, 97, 44, 37, 76, 60];
let avg = 0;
let n = num.length;
for (const i of num) {
    avg = avg + i; // we don't need to write num[i]
}
console.log(avg/n);

*/
// for (let i = 0; i < num.length; i++) {
    
//     avg = avg + num[i];
    
// }
// avg = avg / n;
// console.log("Average is =", avg);

// offer question 
/*
let items = [250, 645, 300, 900, 50];
let i = 0;
while ( i< items.length) {
    console.log(items[i]);
    i++;
}

console.log("after discount");


for (let i = 0; i < items.length; i++) {
    let newItems = items[i] - (0.1 * items[i]);
   console.log(newItems);
}
*/

// Array methords 
// Push method - add element at the end of the array
// Push -> add somethng at end, Poop remove somrething 
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange", "Grapes");
// console.log(fruits);

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.pop("Apple");
// console.log(fruits);

// to convery array to sting 


// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.toString());
// console.log(fruits);


let mhero = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"];
let dcHero = ["Superman", "Batman", "Wonder Woman"];
let ihero = ["Shaktiman", "Doga", "Nagraj"];

// let heroes = mhero.concat(dcHero, ihero);// input multiple arays
// console.log(heroes);

//Unshift enter the array at the startting of the array
// shift - Pop
// mhero.unshift("Captain America");
// console.log(mhero);
// mhero.shift("Thor");
// console.log(mhero);

// Slice -> give part of the array from start to end-1, not change in original array 

// console.log(mhero);

// console.log(mhero.slice(1, 2));

// splice method change the og array
//splice (start, deleteCount(num of element deleted after start), item1, item2, ... to add)

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.splice(2, 3, 11, 12, 13);
array.splice(2, 0, 21,22,23);
console.log(array);

