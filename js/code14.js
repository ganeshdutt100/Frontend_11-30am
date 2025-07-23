

let userScore = 0
let computerScore = 0

function fun(user) {
let output  =  document.getElementById('output')


  let arr = ["rock", "paper", "scissor"];
  let computerInput = arr[Math.floor(Math.random() * 3)];
  //   console.log(computerInput);

  

  if (user == computerInput) {
    // console.log("Tie this Game!");
    output.innerHTML="Tie this Game!"
  } else if (
    (user == "rock" && computerInput == "scissor") ||
    (user == "scissor" && computerInput == "paper") ||
    (user == "paper" && computerInput == "rock")
  ) {
    // console.log(
    //   `user win , user choice ${user} and computer choice ${computerInput}`
    // );
    output.innerHTML=`user win , user choice ${user} and computer choice ${computerInput}`
    userScore++;
  } else {
    // console.log(
    //   `computer win , computer choice ${computerInput} and user choice ${user}`
    // );
    output.innerHTML= `computer win , computer choice ${computerInput} and user choice ${user}`
    computerScore++;
  }
  score();
}

function score(){
    document.getElementById('userScore').innerHTML = `computer score ${computerScore}`
    document.getElementById('computerScore').innerHTML=`user score ${userScore}`

}
// fun();
//   user
//   r  = s
//   s  = p
//   p  = r
