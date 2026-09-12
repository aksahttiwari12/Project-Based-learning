let playbutton = document.getElementById("playbutton");
let choicesbuttons = document.getElementById("choicesbuttons");
let rock = document.getElementById("rocks");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let playerchoice;
let computerchoice;
let playerscore = 0;
let computerscore = 0;
let playerscoretext = document.getElementById("playerscoretext");
let computerscoretext = document.getElementById("computerscoretext");
let result = document.getElementById("result");
let computerchose = document.getElementById("computerchose");
let playerchose = document.getElementById("playerchose");
playbutton.addEventListener("click", function () {
    let randomnum = Math.floor(Math.random() * 3);
    if (randomnum == 0) {
        computerchoice = "rock";
    }
    else if (randomnum == 1) {
        computerchoice = "paper";
    }
    else {
        computerchoice = "scissor";
    }
    if (choicesbuttons.style.display === "block") {
        choicesbuttons.style.display = "none";
    }
    else {
        choicesbuttons.style.display = "flex";
        playbutton.style.display = "none";
    }
})

choicesbuttons.addEventListener("click", function () {
    playbutton.style.display = "";
    choicesbuttons.style.display = "none";
})

rock.addEventListener("click", function () {
    playerchoice = "rock";
    checkwinner(playerchoice,computerchoice);
})
paper.addEventListener("click", function () {
    playerchoice = "paper";
    checkwinner(playerchoice,computerchoice);
})
scissor.addEventListener("click", function () {
    playerchoice = "scissor";
    checkwinner(playerchoice,computerchoice);
})

function checkwinner(playerchoice,computerchoice){ 
    playerchose.textContent = playerchoice;
    computerchose.textContent = computerchoice;
  if(playerchoice == computerchoice){
        result.textContent = "Draw";
    }
    else if(playerchoice == "rock" && computerchoice == "scissor" || playerchoice == "paper" && computerchoice == "rock" || playerchoice == "scissor" && computerchoice == "paper"){
        playerscore++;
        playerscoretext.textContent = `Score : ${playerscore}`;
        result.textContent = "You Win!!";
       
    }
    else{
        computerscore++;
        computerscoretext.textContent = `Score : ${computerscore}`;
        result.textContent = "You Lose!!";
        
    }
}
