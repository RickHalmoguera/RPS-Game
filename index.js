const step1 = document.getElementById("step1")
const step2 = document.getElementById("step2")
const playerChoiceBtn = document.getElementById("playerChoice")
const houseChoiceBtn = document.getElementById("houseChoice")
const playerBtnImg = document.getElementById("playerBtnImg")
const houseBtnImg = document.getElementById("houseBtnImg")
const winnerDisplay = document.getElementById("winnerDisplay")
const scoreDisplay = document.getElementById("score")
const restartBtn = document.getElementById("restartBtn")
const closeBtn = document.getElementById("closeBtn")
const rulesBtn = document.getElementById("rulesBtn")
const modal = document.getElementById("modal")

let playerChoice
let houseChoice
let isPlayerWinner =false
let isADraw = false
let score = 0

const restartGame = ()=>{
    playerChoice
    houseChoice
    isPlayerWinner =false
    isADraw = false

    step1.classList.remove("hidden")
    step2.classList.add("hidden")
    playerChoiceBtn.className =""
    houseChoiceBtn.className =""
}

const changeLayout = ()=>{
    step1.classList.add("hidden")
    setTimeout(()=>{
        step2.classList.remove("hidden")
        displayWinner()},1000)

    playerChoiceBtn.classList.add(playerChoice)
    playerBtnImg.innerHTML =`
        <img src="./images/icon-${playerChoice}.svg" alt=${playerChoice}>
    `
    houseChoiceBtn.classList.add(houseChoice)
    houseBtnImg.innerHTML =`
        <img src="./images/icon-${houseChoice}.svg" alt=${houseChoice}>
    `
}

const getHouseChoice = ()=>{
    const choices =["paper","scissors","rock"]
    houseChoice = choices[Math.floor(Math.random()*3)]
}

const checkWinner =()=>{
    
    if(playerChoice =="paper" && houseChoice =="rock"){
        isPlayerWinner = true
    }else if( playerChoice =="scissors" && houseChoice =="paper"){
        isPlayerWinner = true
    }else if( playerChoice =="rock" && houseChoice =="scissors"){
        isPlayerWinner = true
    }else if(playerChoice == houseChoice ){
        isADraw = true
    }else{
        isPlayerWinner = false
    }  
}

const displayWinner = ()=>{
    if(isPlayerWinner){
        score++
        winnerDisplay.innerText = "you win"
        scoreDisplay.innerText = score
    }else if(isADraw){
        winnerDisplay.innerText = "draw"
        
    }else{
        winnerDisplay.innerText = "you lose"
    }
}

const showFight = (event)=>{
    if(event.target.id==="paper" || event.target.id==="scissors" || event.target.id==="rock" ){

        playerChoice = event.target.id
        getHouseChoice()
        changeLayout()
        checkWinner()
    }

}

const closeRules =()=>{
    modal.classList.add("hidden")
}

const openRules = () =>{
    modal.classList.remove("hidden")
}
restartBtn.addEventListener("click", restartGame)
closeBtn.addEventListener("click", closeRules)
rulesBtn.addEventListener("click", openRules)
window.addEventListener("click", ()=> showFight(event))