let name  = "Ganesh Dutt"
// console.log("Helllo :  " + name )
// console.log(`Hello ${name}  How are you`);

// function fun(value){
//    console.log(`Hello ${value} , How are you`);
// }
// fun.call(null ,"Vaibhav" );

function studentInfo(name , course , id ){
     this.name = name
     this.course = course
     this.id = id
}
function Student(name, course , id ){
    studentInfo.call(this,name,course,id);
}
function tempStudent(name, course , id , Salary  ){
    this.Salary = Salary
    studentInfo.call(this,name,course,id);
}
 
let Kartik = new Student("Kartik" , "Frontend" , 101);
let Vaibhav = new Student("Vaibhav" , "Frontend" , 103);
let Khushi = new tempStudent("Khushi" , "fs" , 102,123456789);
console.log(Kartik  , Vaibhav);
console.log(Khushi);
// console.log(Student2);

