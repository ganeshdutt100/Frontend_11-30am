// function helloWorld(){
//     console.log("Hello Khushi");
    
// }

// helloWorld();


// function add(a ,b){
//     return console.log(a + b);
    
// }
// add(10,20);

// let fun = function(){
//     console.log("Hello World");
// }

// let fun = function(a,b,c){
//   return  console.log(a+b*c);
// }

// fun(2,2,4);

// (function(){
//     console.log("Hello World1");
// })();
// (function(){
//     console.log("Hello World 2");
// })();
// (function(){
//     console.log("Hello World 3");
// })();
// (function(){
//     console.log("Hello World 4");
// })();
    
// (function(){
//     console.log("Hello World 5");
// })()
// let arrowFunction =  () => console.log("Hello World");
// let arrowFunction1 =  () =>{
//      console.log("Hello World");
//      console.log("Hello World");
//      console.log("Hello World");
//      console.log("Hello World");
// }
// arrowFunction1()


function cal(){
    let first = 10;
let op = "/";
let second = 10;

let result;

switch(op){
    case "+":
        result = first + second;
        break;
    case "-":
        result = first - second;
        break;
    case "*":
        result = first * second;
        break;
    case "/":
        if(second == 0){
            result = "Cannot divide by zero";
        }
        else
        result = first / second;
        break;
    default:
        result = "Invalid Operator"
}

console.log(result);
}
cal();