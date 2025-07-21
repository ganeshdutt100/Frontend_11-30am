// Syntax  => bind   = > functionRef.bind'Person'(thisArg  , [value1,[vaalue2, [value3]]])

let person = {
    name : 'sachin',
    age : 20,
    print : function(){
        console.log(this.name + ' ' + this.age, this.course);
    }
}
// person.print();
let person1 = {
    name : 'vaibhav',
    age : 22,
    course: 'BCA',
     
}

let boundGetNameAndAge = person.print.bind(person1);
boundGetNameAndAge();


