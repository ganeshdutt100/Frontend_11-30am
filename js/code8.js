// first  = 0
// second  = 1

// first          second(next)                print(first) 
// 0                  1            =      0 
// 1                  1           =       1
// 1                  2           =       1
// 2                   3          =       2
// 3                   5          =       3
// 5                   8          =       5
// 8                   13         =       8
//     13                  21         =       13
      

// next  = first + second ;
// first  = second 
// second = next
// 1. Write a program to print the Fibonacci series using a for loop up to 10 terms.

let num = 10;
let first = 0;
let second = 1;
for(let i = 1; i<= num; i++){
    console.log(first);

    let next  = first + second ;
    first  = second ;
    second = next;
}