const main = document.getElementById("main")



const checkWinner =(houseChoice, playerChoice)=>{
    if(playerChoice)

}


const getPlayerAndHouseChoice = (event)=>{
    if(event.target.id==="paper" ||event.target.id==="scissors" || event.target.id==="rock" ){
        const choices =["paper","scissors","rock"]
        const houseChoice = choices[Math.floor(Math.random()*3)]
        const playerChoice = event.target.id
        const winner =""
        checkWinner(houseChoice,playerChoice,winner)
        main.style.background ="none"
        main.classList.remove("step1")
        main.classList.add("step2")
        main.innerHTML=`
        <div class="fight-container">
            <div class=${playerChoice} >
                    <div class="clickObject"></div>
                    <div class="img-container">
                        <img src="./images/icon-${playerChoice}.svg" alt=${playerChoice}>
                    </div>
                    <div class ="player-tag">you picked</div>
            </div>
            <div class="${houseChoice}" >
                    <div class="clickObject"></div>
                    <div class="img-container">
                        <img src="./images/icon-${houseChoice}.svg" alt=${houseChoice}>
                    </div>
                    <div class ="player-tag">the house picked</div>
            </div>
        </div>
        <div>
        <h2>
        </div>
        `
    }
}

window.addEventListener("click", ()=> getPlayerAndHouseChoice(event))