const scoreDisplay = document.getElementById('score')
const rpsContainer = document.getElementById('rps_display')
const duelContainer = document.getElementById('duel_display')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn= document.getElementById('scissors')
const rulesBtn = document.getElementById('rules')
const modalDisplay = document.getElementById('modal')
const counterDisplay = document.getElementById('counter')
const closeModal = document.getElementsByClassName('close')
const rulesImg = document.getElementById('rules_img')
const exitRules= document.getElementById('exit_rules')
const playerChoiceDisplay = document.getElementById('player_choise')
const pcChoiceDisplay = document.getElementById('pc')
const winnerDisplay = document.getElementById('winner')
const tryAgainBtn = document.getElementById('try_again')



const youWon = '<p>You Won!</p>'
const youLose = '<p>You Lose!</p>'
const tide = '<p>Tide!</p>'

let playerWon = false

let seconds = 3;
let playerChoice= 0
let houseChoice = 0
let myInterval= 0
let score = 0


 randomChoice = () =>{
    houseChoice =Math.floor(Math.random() * 3) + 1
}

 yourScoreUp = () =>{
    score += 1;
    scoreDisplay.innerText = score
}


 clearScreen = () =>{
    modalDisplay.style.display = 'block'
    rulesImg.style.display= 'none'
    exitRules.style.display= 'none'
    rpsContainer.style.display='none'
}

 highlightPlayer = () => {
    const house = document.getElementById('house')
    const player = document.getElementById('player')

    player.classList.add('winner')
    house.classList.add('shadow')
}

 highlightHouse = () => {
    const house = document.getElementById('house')
    const player = document.getElementById('player')
    
    house.classList.add('winner')
    player.classList.add('shadow')
}

 noWinner = () => {
    
    house.classList.add('no_highlight')
    player.classList.add('no_highlight')
}


 winnerannouncement = () =>{
    if( playerChoice ==1 && houseChoice==2){
        winnerDisplay.innerHTML= youLose
        highlightHouse()

    }else if(playerChoice ==2 && houseChoice==1){
        highlightPlayer()
        yourScoreUp();
        winnerDisplay.innerHTML= youWon

    }else if(playerChoice ==1 && houseChoice==3){
        highlightPlayer()
        yourScoreUp();
        winnerDisplay.innerHTML= youWon

    }else if(playerChoice ==3 && houseChoice==1){
        winnerDisplay.innerHTML= youLose
        highlightHouse()
        
    }else if(playerChoice ==3 && houseChoice==2){
        winnerDisplay.innerHTML= youWon
        yourScoreUp();
        highlightPlayer()

    }else if(playerChoice ==2 && houseChoice==3){
        winnerDisplay.innerHTML= youLose
        highlightHouse()

    }else if(playerChoice ==1 && houseChoice==1){
        winnerDisplay.innerHTML= tide
        noWinner()

    }else if(playerChoice ==2 && houseChoice==2){
        winnerDisplay.innerHTML= tide
        noWinner()

    }else if(playerChoice ==3 && houseChoice==3){
        winnerDisplay.innerHTML= tide
        noWinner()
}}


 displayHousePick = () => {
    if(houseChoice==1){
        pcChoiceDisplay.innerHTML =`
        <div class="rock circle" id="house" >
            <img src="IMG/icon-rock.svg" alt="Rock icon">
        </div>`
    }else if(houseChoice==2){
        pcChoiceDisplay.innerHTML =`
        <div class="paper circle" id="house" >
            <img src="IMG/icon-paper.svg" alt="Paper icon">
        </div>`
    }else if(houseChoice==3){
        pcChoiceDisplay.innerHTML =`
        <div class="scissors circle" id="house"  >
            <img src="IMG/icon-scissors.svg" alt="Scissors icon">
        </div>`
    }
}

 displayDuel = () =>{
    duelContainer.style.display= 'grid'
    if(playerChoice==1){
        playerChoiceDisplay.innerHTML =`
        <div class="rock circle" id="player">
            <img src="IMG/icon-rock.svg" alt="Rock icon">
        </div>`
    }else if(playerChoice==2){
        playerChoiceDisplay.innerHTML =`
        <div class="paper circle" id="player"  >
            <img src="IMG/icon-paper.svg" alt="Paper icon">
        </div>`
    }else if(playerChoice==3){
        playerChoiceDisplay.innerHTML =`
        <div class="scissors circle" id="player" >
            <img src="IMG/icon-scissors.svg" alt="Scissors icon">
        </div>`
    }
    
    displayHousePick();
    winnerannouncement();

}


 countdown = () =>{
    if(seconds>0){
        counterDisplay.innerText = seconds ;
        seconds -=1
    }else if (seconds ==0) {
        
        counterDisplay.style.display = 'none'
        modalDisplay.style.display = 'none'
        rulesImg.style.display= 'block'
        exitRules.style.display= 'block'
        counterDisplay.innerText = 3
        clearInterval(myInterval)
        displayDuel();
    }
}


rulesBtn.addEventListener('click', function(){
    modalDisplay.style.display = 'block'
    counterDisplay.style.display = 'none'
})

tryAgainBtn.addEventListener('click', function(){
    duelContainer.style.display= 'none'
    rpsContainer.style.display='grid'
    
})

modalDisplay.addEventListener('click',function(){
    modalDisplay.style.display ='none'
})

rockBtn.addEventListener('click', function(){
    playerChoice = 1
    randomChoice();
    seconds =2
    clearScreen();
    counterDisplay.style.display = 'block'
    myInterval= setInterval(countdown,1000);
})

paperBtn.addEventListener('click', function(){
    playerChoice = 2
    randomChoice();
    seconds =2
    clearScreen();
    counterDisplay.style.display = 'block'
    myInterval= setInterval(countdown,1000);
    })

scissorsBtn.addEventListener('click', function(){
    playerChoice = 3
    randomChoice();
    seconds =2
    clearScreen();
    counterDisplay.style.display = 'block'
    myInterval= setInterval(countdown,1000);
})

