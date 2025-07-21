// Syntax  => bind   = > functionRef.bind'Person'(thisArg  , [value1,[vaalue2, [value3]]])

// let person = {
//     name : 'sachin',
//     age : 20,
//     print : function(){
//         console.log(this.name + ' ' + this.age, this.course);
//     }
// }
// person.print();
// let person1 = {
//     name : 'vaibhav',
//     age : 22,
//     course: 'BCA',
     
// }

// let boundGetNameAndAge = person.print.bind(person1);
// boundGetNameAndAge();



// function multiply(a, b){
//     return a *b;

// }
// let newValue  = multiply.bind(null , 2)   //a = 5

// console.log(newValue(45));


// let num =  23;
// console.log(typeof num.toString());

// nested Loop

// for(let i = 0; i <= 3; i++){
 
//     for(let j = 0; j <=3; j++){
//         console.log( "i " + i + " j "+  j);
        
//     }
    
// }

//  i= 0; i = 3  
//  j = 0; j = 3




// i = 0 , j = 0
// i = 0 , j = 1
// i = 0 , j = 2
// i = 0 , j = 3


// i = 1 , j = 0
// i = 1 , j = 1
// i = 1 , j = 2
// i = 1 , j = 3

// for(let i = 1; i <= 5; i++){
//  let output  =""
//     for(let j = 1; j <=i; j++){
//         output += " * "
        
//     }
//         console.log(output);

    
// }


// 6 <= 5 
for(let i = 5; i >= 1; i--){
 let output  =""
    for(let j = 1; j <=i; j++){
        output += " * "
        
    }
        console.log(output);

    
}