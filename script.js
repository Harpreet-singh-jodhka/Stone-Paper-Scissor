
const disappearGamerules = () => {
    let gameRulesBox = document.getElementById("gameRulesBox")
    gameRulesBox.style.display = "none";
}
const rulesAppears = () => {
    gameRulesBox.style.display = "";
}

let stoneImg = document.getElementById("stoneImg")
let paperImg = document.getElementById("paperImg")
let scissorImg = document.getElementById("scissorImg")
let imgYouPicked = document.querySelector(".imgYouPicked")
const imgPcPicked = document.querySelector(".imgPcPicked");

let lowerDiv = document.getElementsByClassName("lowerDiv")[0]
let answer = document.getElementsByClassName("answer")[0]
let uwin = document.getElementById("uwin")
let pcagainst = document.getElementById("pcagainst")

let playAgain = document.getElementById("playAgain")
const playAGAIN = () => {
    imgYouPicked.style.boxShadow = ""
    imgPcPicked.style.boxShadow = ""
    lowerDiv.style.display = "";
    answer.style.display = "none";

}

let a = 0;
let b = 0;
let yourScore = document.getElementById("yrScore")
let computerScore = document.getElementById("compScore")
const userClicked = (event) => {
    const elementId = event.target.id;
    // console.log(elementId);
    if (elementId == "stone") {
        imgYouPicked.style.backgroundPosition = "20px 25px";

        imgYouPicked.style.border = "19px solid #0074B6";
    } else if (elementId == "scissor") {
        imgYouPicked.style.border = "19px solid #BD00FF";
        imgYouPicked.style.backgroundPosition = "38px 30px";

    } else {
        imgYouPicked.style.border = "19px solid #FFA943";
        imgYouPicked.style.backgroundPosition = "24px 20px";
        
    }
    imgYouPicked.style.backgroundImage = `url(${elementId}.png)`;

    const options = ["stone", "scissor", "paper"]; // Available options

    // Randomly select an option
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];

    // Set the background image based on the selected option


    imgPcPicked.style.backgroundImage = `url(${selectedOption}.png)`;
    imgPcPicked.style.border = "19px solid pink";
    if (selectedOption == "stone") {
        imgPcPicked.style.backgroundPosition = "17px 28px";
        imgPcPicked.style.backgroundSize = "80px";
    } else if (selectedOption == "scissor") {
        imgPcPicked.style.backgroundPosition = "36px 28px";
        imgPcPicked.style.backgroundSize = "46px";
    } else {
        imgPcPicked.style.backgroundPosition = "25px 25px";
        imgPcPicked.style.backgroundSize = "70px";
      }





    if ((elementId == "stone" && selectedOption == "scissor") || (elementId == "scissor" && selectedOption == "paper") || (elementId == "paper" && selectedOption == "stone")) {
        a = a + 1;
        yourScore.innerText = a;
        uwin.innerText = "YOU WINS";
        pcagainst.innerText = "AGAINST PC";
        imgYouPicked.style.boxShadow = "0 0 100px 100px rgba(3, 55, 32, 0.5)"
    } else if ((elementId == "scissor" && selectedOption == "stone") || (elementId == "paper" && selectedOption == "scissor") || (elementId == "stone" && selectedOption == "paper")) {
        b = b + 1;
        computerScore.innerText = b;
        uwin.innerText = "PC WINS";
        pcagainst.innerText = "AGAINST USER";
        imgPcPicked.style.boxShadow = "0 0 100px 100px rgba(3, 55, 32, 0.5)"

    } else {
        uwin.innerText = "MATCH TIE";
        pcagainst.innerText = "";
    }

    lowerDiv.style.display = "none";
    answer.style.display = "flex";

    if (a == 3 && b < 3) {
        window.open("result.html", "_blank");
    }

    // set the user pick
}

let playagain = ()=>{
    window.open("index.htm");

}