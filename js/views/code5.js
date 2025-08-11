// let correctEmail = "trainerganeshdutt@gmail.com"
// let correctPassword = "123456789"

// let email = prompt("Enter your email ")
// let password = prompt("Enter your password ")

// if(email ==  correctEmail){
//  if(password ==  correctPassword){
//     console.log("Login Successful");
    
//  }else{
//     console.log("Wrong Password");
//  }
// }else{
//     console.log("Invalid Email ");
    
// }


let char = prompt("Enter your Value ")

if(char.length == 1 && char  >= 'a' && char <= 'z'){
 if(char == 'a' || char == 'e' || char == "i" || char == "o" || char == "u"){
    console.log("It is a vowel");
 }
 else{
    console.log("It is a consonant");
 }
}else{
    console.log("Invalid Input" );
    
}