// let arr =[1,2,5,8,12,34,56,78,39]
// copywithin(target, start ,end)
// arr.copyWithin(0,3,5);


//  let arr = ['apple','banana', 'orange','mango','kiwi','grape','js'];
//  arr.copyWithin(4,0,5)

 // target  - orange 
 // starting  - apple
 //end  - banana
 //'apple','banana', 'orange'

 //apple , banana , apple ,banana, kiwi, grape
 //apple , banana,'apple','banana', 'orange' 


// 1 fill - (value  , start , end (n-1))
// let output  = arr.fill("JS",2, 5);
// 2 pop()
// let output  = arr.pop();
// 3 push()
// let output  = arr.push("Ganesh Dutt");
// 4 reverse()
// let output  = arr.reverse();
// 5 shift()
// let output  = arr.shift();
// 6 unshift()
// let output  = arr.unshift("Ganesh Dutt");
// 7 sort()
// let output  = arr.sort(); // 0-9 and 10- 99 || 100 - 999
// 8 splice(start, deleteCount, Item1, Item2,....)
// let output  = arr.splice(1,0,"js","css","TailwindCSS","HTML"); 

// console.log(output);
// console.log(arr);



// 2 - Accessor 
// let arr1 = [22,1,2,34,5,6,22,7]
// let arr2 = [434,5,6,7,65,4,56,54]

// 0Concat()
// let output  = arr1.concat(arr2)
// console.log(output);

// 1 Include 
// let output  = arr1.includes(22)
// 2 IndexOf 
// let output  = arr1.indexOf(22)
// 3 join
// let output  = arr1.join( ' / ')
// 4 lastIndexOf
// let output  = arr1.lastIndexOf(22)
// 5 slice(start, end )
// let output  = arr1.slice(1,2)
// 6 toString(start, end )
// let output  = arr1.toString()
// console.log(output);



// 3 -Iteration s
let arr =[12,34,56,78,39,21,67,98,76,54,32,33]
// let sum = 0
// for(let x  of arr){
//     sum = sum + x;
// }
// console.log(sum);

// let output  = arr.every((x)=>x % 2 == 0)
// let output  = arr.some((x)=>x % 2 == 0)
// let output  = arr.entries()
// arr.entries()

// for(let value of arr.entries()){
// console.log(value);

// }

// let output  = arr.filter(x => x%2!=0);
// let output  = arr.map(x => x*2);
// let output  = arr.reduce((acc , num)=> acc + num);
// let output  = arr.find(x => x%2==0);
// let output  = arr.findIndex(x => x%2==0);
// let output  = arr.forEach(x => x+2);
// arr.forEach(x => console.log(x))
// for(let x  of arr){
//     console.log(x);
    
// }


// console.log(output);
