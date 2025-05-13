let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    alert(msg.innerText = "Game was draw");
    msg.style.backgroundColor = "orange";
};

const showWinner = (userWin, userChoice, comChoice) =>{
    if(userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        alert(msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`);
        msg.style.backgroundColor = "green";
    }
    else{
        comScore++;
        compScoreBoard.innerText = comScore;
        alert(msg.innerText = `You Lose! computer ${comChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    
    const comChoice = genComChoice(); //generate computer choice
    console.log("computer Choice = ", comChoice);

    if (userChoice === comChoice){
        drawGame(); //draw game
    }
    else{
        let userWin = true;

        if (userWin === "rock"){
            //paper, scissor
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userWin === "paper"){
            //rock, scissor
            userWin = comChoice === "scissor" ? false : true;
        }
        else{
            //rock, paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
        });
});