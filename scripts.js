let start_button = document.getElementById("start_button");
let initial = document.getElementById("initial");
let options = document.getElementById("options");
// start_button.addEventListener("click", startGame)

let round_label = document.getElementById("round");
let COM_choise = document.getElementById("COM_choise");
let message_label = document.getElementById("message");
let scoreboard_table = document.getElementById("scoreboard"); 

let player_rock = document.getElementById("rock_button");
let player_paper = document.getElementById("paper_button");
let player_scissors = document.getElementById("scissors_button");

let announcer_winner = document.getElementById("announcer_winner");

let scorePlayer = 0;
let scoreComp = 0;
let round = 0;
scoreboard_table.style.display = "block";




function startGame(){
    options.style.display = "block";
    initial.style.display = "none";
    Game(playerSelection);
}

function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection){ 

    let winner;
    let message;   

    const value = playerSelection + "_" + computerSelection.toLowerCase();
    switch (value) {
        case "rock_paper":
            winner = "COM";
            message = "You Lose! Paper beats Rock!";
            break;
        
        case "rock_scissors":
            winner = "PLAYER";
            message = "You Win! Rock beats Scissors!";  
            break;     
    
        case "paper_scissors":
            winner = "COM";
            message = "You Lose! Scissors beats Paper!";
            break;
        case "paper_rock":
            winner = "PLAYER";
            message = "You Win! Paper beats Rock!";
            break;
        case "scissors_rock":
            winner = "COM";
            message = "You Lose! Rock beats Scissors!";
            break;
        case "scissors_paper":
            winner = "PLAYER";
            message = "You Win! Scissors beats paper!";
            break;
        default:
            winner = "TIE";
            message = "It's a Tie, repeat.";
            break;
    }
    return {winner, message};
}

function Game(playerSelection){
    var computerSelection = computerPlay();
    var result = playRound(playerSelection,computerSelection);
    
    updateScore(result,computerSelection);

    if(scorePlayer === 5){
        options.style.display="none";
        announcer_winner.style.display="block";
        announcer_winner.innerHTML = "<h1>The Winner is PLAYER!!!</h1><br><h2>Congratulations!!</h2>";
        play_again.style.display = "block";
    }
    
    if(scoreComp === 5){
        options.style.display="none";
        announcer_winner.style.display="block";
        announcer_winner.innerHTML = "<h1>The Winner is COM!!!</h1><br><h2>Better luck for next</h2>";
        play_again.style.display = "block";
    }
}

function updateScore(result,computerSelection){
    var new_row = document.createElement("tr");
    var cell_round = document.createElement("td");
    var cell_playerScore = document.createElement("td");
    var cell_comScore = document.createElement("td");

    if (result.winner == "PLAYER"){
        COM_choise.innerHTML = "Computer chose: " + computerSelection;
        message_label.className = "winner"
        message_label.innerHTML = result.message;
        scorePlayer = scorePlayer + 1;
        round = round + 1;
        round_label.innerHTML = round;
        cell_round.textContent = round;
        cell_playerScore.textContent = scorePlayer;
        cell_comScore.textContent = scoreComp;
        new_row.appendChild(cell_round);
        new_row.appendChild(cell_playerScore);
        new_row.appendChild(cell_comScore);
        scoreboard_table.appendChild(new_row);
    }

    if(result.winner == "COM"){
        COM_choise.innerHTML = "Computer chose: " + computerSelection;
        message_label.className = "loser"
        message_label.innerHTML = result.message;
        scoreComp = scoreComp + 1;
        round = round + 1;
        round_label.innerHTML = round;
        cell_round.textContent = round;
        cell_playerScore.textContent = scorePlayer;
        cell_comScore.textContent = scoreComp;
        new_row.appendChild(cell_round);
        new_row.appendChild(cell_playerScore);
        new_row.appendChild(cell_comScore);
        scoreboard_table.appendChild(new_row);
    }

    if(result.winner == "TIE"){
        COM_choise.innerHTML = "Computer chose: " + computerSelection;
        message_label.className = ""
        message_label.innerHTML = result.message;
        round = round + 1;
        round_label.innerHTML = round;
        cell_round.textContent = round;
        cell_playerScore.textContent = scorePlayer;
        cell_comScore.textContent = scoreComp;
        new_row.appendChild(cell_round);
        new_row.appendChild(cell_playerScore);
        new_row.appendChild(cell_comScore);
        scoreboard_table.appendChild(new_row);
    }

    return{scorePlayer,scoreComp};
}


player_rock.addEventListener("click", function(){Game("rock")});
player_paper.addEventListener("click", function(){ Game("paper")});
player_scissors.addEventListener("click", function(){Game("scissors")});