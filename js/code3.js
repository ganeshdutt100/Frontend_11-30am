// let a = 57;


// if(a % 2 == 0){
//     console.log("Even number"); // true 
// } 

// if(condition){
//     stm
// }

// if(a % 2 == 0){
//     console.log("Even number"); // true 
// } else{
//     console.log("Odd number"); // false
// }



// if(condition1){
//     stm
// }else if(condition2){
//     stm
// }else if(condition3){
// stm
// }else{
//     stm
// }


// let marks = 40;

// if(marks >= 80){
//     console.log("A grade");
// } else if(marks >= 60){
//     console.log("B grade");
// } else if(marks >= 40){
//     console.log("C grade");
// } else{
//     console.log("D grade");
// }


// let a = 11;
// let b = 10;

// if(a % 2 == 0){
//      if(b  ==  10){
//         console.log(" b  is 10");
        
//      }
// }
// else{
//     console.log("Odd number");
// }


// let  r = 349;
// let U = 350;

let Recharge = false;
let Premium  = true;
let internetSpeed  = 1.5; //mbps

if(Recharge){
if(Premium){
    if(internetSpeed >= 1.5){
        console.log("Enjoy this  video  with add-free 1080p quality" );
    }else{
        console.log("Enjoy add-free 720p quality video");
    }
}
else{
    if(internetSpeed >= 1.5){
        console.log("Enjoy this  video  without add-free 1080p quality" );
    }else{
        console.log("Enjoy without add-free 720p quality video");
    } 
}
}else{
   console.log("Recharge required to watch this video");
    
}