function fun() {
  let arr = ["rock", "paper", "scissors"];
  let computerInput = arr[Math.floor(Math.random() * 3)];
  //   console.log(computerInput);

  let user = "paper";

  if (user == computerInput) {
    console.log("Tie this Game!");
  } else if (
    (user == "rock" && computerInput == "scissors") ||
    (user == "scissors" && computerInput == "paper") ||
    (user == "paper" && computerInput == "rock")
  ) {
    console.log(
      `user win , user choice ${user} and computer choice ${computerInput}`
    );
  } else {
    console.log(
      `computer win , computer choice ${computerInput} and user choice ${user}`
    );
  }
}
fun();
//   user
//   r  = s
//   s  = p
//   p  = r
