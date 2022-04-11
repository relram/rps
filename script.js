//default score
userScore = 0
compScore = 0

document.getElementById("userScore").innerHTML=userScore;
document.getElementById("compScore").innerHTML=compScore;

// variable for the possible choiced by computer
const rps = ["Rock", "Paper", "Scissors"];

// function for computer choice + output
function computerPlay(){
    cChoice = rps[Math.floor(Math.random() * rps.length)];
    return("The computer picks " + cChoice);
}

// user choices based on button clicks
function chooseRock(){
    function userRock(){
        uChoice = "Rock";
        return "You Picked Rock";
    }
    document.getElementById("playerChoice").innerHTML = userRock();
    document.getElementById("compChoice").innerHTML = computerPlay();
    document.getElementById("outcome").innerHTML = result();
}

function choosePaper(){
    function userPaper(){
        uChoice = "Paper"
        return "You Picked Paper";
    }
    document.getElementById("playerChoice").innerHTML = userPaper();
    document.getElementById("compChoice").innerHTML = computerPlay();
    document.getElementById("outcome").innerHTML = result();

}

function chooseScissors(){
    function userScissors(){
        uChoice = "Scissors"
        return "You Picked Scissors";
    }
    document.getElementById("playerChoice").innerHTML = userScissors();
    document.getElementById("compChoice").innerHTML = computerPlay();
    document.getElementById("outcome").innerHTML = result();


}

// These will be the end result of each round
function tie(){
    console.log("tie");
    score();
    console.log(userScore, compScore);
    return "It's a tie.";
};

function win(){
    userScore = userScore + 1;
    score();
    console.log("win");
    console.log(userScore, compScore);
    scoreCheck();
    return "You win.";
};

function loss(){
    compScore = compScore + 1;
    score();
    console.log("lose");
    console.log(userScore, compScore);
    scoreCheck();
    return "You lose.";
};

// this will determine the outcome of each round
function result(){
    if (uChoice == "Rock") {
        if (cChoice == "Rock") {
            return tie();
        }
        else if (cChoice == "Paper") {
            return loss();
        }
        else {
            return win();
        }
    }
    else if (uChoice == "Paper") {
        if (cChoice == "Rock") {
            return win();
        }
        else if (cChoice == "Paper") {
            return tie();
        }
        else {
            return loss();
        }
    }
    else {
        if (cChoice == "Rock") {
            return loss();
        }
        else if (cChoice == "Paper") {
            return win();
        }
        else {
            return tie();
        }
    }
};

// scoring

function score(){
    document.getElementById("userScore").innerHTML=userScore;
    document.getElementById("compScore").innerHTML=compScore;
}

// win or loss conditions met
function scoreCheck(){
    function victory(){
        return "You are victorious! Refresh the page to try again."
    }
    function defeat(){
        return "You have been defeated. Refresh the page to try again."
    }
    function freeze(){
        document.getElementById("rockBtn").disabled = true;
        document.getElementById("paperBtn").disabled = true;
        document.getElementById("scissorsBtn").disabled = true;
    }

    if (userScore == 5) {
        document.getElementById("scoreCheck").innerHTML=victory();
        freeze();
        }
    else if (compScore == 5){
        document.getElementById("scoreCheck").innerHTML=defeat();
        freeze();
    }
}