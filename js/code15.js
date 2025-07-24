let random = Math.floor(Math.random() * 10)+1;
// console.log(random);
let counter  = 0

function fun(){
    let userNumber  =  document.getElementById('userNumber').value;
    
    
    if(userNumber > 10 || userNumber < 0 || isNaN(userNumber)){
        alert('this is wrong number ');
        
    }
    counter++;
    if(userNumber ==  random){
        // console.log('you win');
         document.getElementById('output').innerHTML=`Congratulation! you win , you guess the correct number with in ${counter} and computer choose : ${random} and user guess :  ${userNumber}`
        
    }else if(userNumber > random){
        // console.log('your number is greater than random number');
        document.getElementById('output').innerHTML=`your number is greater than random number`
    }else if(userNumber < random){
        // console.log('your number is less than random number');
        document.getElementById('output').innerHTML=`your number is less than random number`
    }

    if(counter == 5){
        // console.log('you are out of guess');
        document.getElementById('output').innerHTML=`you are out of guess`
    }
}
// fun();