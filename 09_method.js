// for. each method is used to iterate over an arra

// function abc(){
//     return abc;
// }

// function mufunc(num){
//     return num;
// }

//  let arr = [1, 2, 3, 4, 5];

//  arr.forEach(function printval(val, idx, arr){//value at each index
//     console.log(val, idx, arr);
    

//  });

 //heir orer fuction -> take other parameter as inout. or return as output
/*
 let numarr = [1, 2, 3, 6, 7];

 numarr.forEach(function sqar(val){
   console.log(val*val);
   
 });
  let calcsqr = (num) =>{
   console.log(num*num);
   
  }

numarr.forEach(calcsqr);

*/

// map methord same as for reach but it gives new array 

/*
let num = [1, 5, 8]
let newarr = num.map((val) => {

   // console.log(val);
   return val * 2;
   
})

console.log(newarr);
*/

// filter -> filter some of value in new array
/*
let arr = [ 1, 5, 8, 12, 24, 6, 4];

let evenarr = arr.filter((val) => {
   return val % 2 == 0;
})

console.log(evenarr);

*/

// reduce methord avg,, sum,  multi input singgle output 
/*
const arr = [1, 6, 9, 12, 450, 55, 88];

// const result = arr.reduce((res, curr) => {
//    return res + curr ;// store in res
// });
// console.log(result);

const newarr = arr.reduce((res, cur) => {
   return res > cur ? res : cur;
})
console.log(newarr);

*/

/*
let mark = [ 31, 81, 93 , 98, 33, 97];

const aboveavg = mark.forEach((val) =>{
   if(val>=90){
      console.log(val);
      
   }
});
console.log(aboveavg);

*/

let val = prompt("Enter your number");

let arr = [];
for (let i = 1; i <= val; i++) {
   arr[i-1] = i;
   
};

console.log(arr);

const redarr = arr.reduce((res, val) => {
   return res + val ;
})
console.log(redarr);


const factdarr = arr.reduce((res, val) => {
   return res * val ;
})
console.log(factdarr);
