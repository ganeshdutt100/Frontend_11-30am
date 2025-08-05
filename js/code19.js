// let person ={
//     // key : "value",
//     name : "sachin",
//     age : 20,
//     address : "mumbai",
//     phone : 1234567890,

// }
// for(let key in person){
//     console.log(key, " :  ",person[key]);
// }
// console.log("Name :", person.name);
// console.log("Age :", person.age);
// console.log("Address :", person.address);
// console.log("Name :", person["name"] ,\n, "Age :", person["age"]);

// Object Constructor
// function Person(name , age){
//     this.name = name;
//     this.age = age;
// }

// let person1  = new Person("Khushi" , 20)
// let person2  = new Person("Vaibhav" , 25)

// for(let key in person1){
//     console.log(key, " :  ",person1[key]);
// }
// for(let key in person2){
//     console.log(key, " :  ",person2[key]);
// }

// class Person{
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let person1  = new Person("Khushi" , 20)
// let person2  = new Person("Vaibhav" , 25)

// for(let key in person1){
//     console.log(key, " :  ",person1[key]);
// }
// for(let key in person2){
//     console.log(key, " :  ",person2[key]);
// }

// function Person(name , age){
//     return{
//         name:name,
//         age:age
//     }
// }
// let student1 = new Person("Khushi", 20)

//  for(let key in student1){
//     console.log(key, " :  ",student1[key]);
//  }

// Object methods
// 1) Assign()
//  Assign(target , source1, .....)

// let target = { a: 1, b: 2, c: 3 };
// let source = { a:10,d: 4, e: 5 };

// const result   = Object.assign(target , source)
// console.log(result);


// let obj1 = {
//     greet:"Hello"
// }

// let obj2 = Object.create(obj1)
// obj2.name =  "Ganesh_Dutt"
// obj2.age=34,
// obj2.job = "Developer"


// for(let newValue  in obj2){
//     console.log(newValue , obj2[newValue]);
// }

// const value1={
//     age:23
// }
// const value2= Object.freeze(value1);
// value2.age = 34
// console.log(value2.age);

// const value ={a:1,b:23,c:45,d:6}
// Object.freeze(value)
// console.log(Object.isFrozen(value));


// console.log(Object.is(5,5));
// console.log(Object.is("5",5));
// console.log(Object.is("5",'5'));
// console.log(Object.is(null,null));
// console.log(Object.is([],[]));
// console.log(Object.is({},{}));
// console.log(Object.is(NaN,NaN));
// console.log(Object.is(undefined , undefined));
// console.log(Object.is(0 , -0));

// const value ={a:1,b:23,c:45,d:6}
// Object.preventExtensions(value)

// console.log(Object.isExtensible(value));



// const value ={a:1,b:23,c:45,d:6}
// console.log(Object.isSealed(value));
// Object.seal(value)
// console.log(Object.isSealed(value));
// value.a="Ganesh"
// console.log(value);


let obj1 ={a:1,b:2}
console.log(obj1);

console.log(Object.values(obj1))





