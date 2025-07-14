let correctEmail = "trainerganeshdutt@gmail.com"
let correctPassword = "123456789"

let email = prompt("Enter your email ")
let password = prompt("Enter your password ")

if(email ==  correctEmail){
 if(password ==  correctPassword){
    console.log("Login Successful");
    
 }else{
    console.log("Wrong Password");
 }
}else{
    console.log("Invalid Email ");
    
}