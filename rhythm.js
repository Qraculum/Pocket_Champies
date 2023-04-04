//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RHYTHM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let tick = 0, i = 0, patternTemp = [], idleSprite = 2, countPopup = 0, popupActive = true, countDefendPopups = 0, listDefendPopups = [], hitboxLeft = 0, hitboxTop = 0,
    letterTop = 0, letterLeft = 0, distanceY = 0, distanceX = 0,
    popupClass = document.getElementsByClassName("popup"),
    patternAttack = ["Q", "Q", "W"],  // patterns
    patternBlock = ["E", "W", "E"],
    patternMove = ["W", "W", "W"]

//? vanish all popups if no input
function VanishPopup () {
    countPopup = 3
    i = 0
    popupActive = false  // disables adding more popups in ModifyPopup and keys to the patterns in RhythmStart
    ResetPopup()  // call ResetPopup()

    patternTemp = []  // resets all pressed keys in the pattern
}
let vanishTimeout = setTimeout(event => {VanishPopup()}, 1000)
clearTimeout(vanishTimeout)

//? if popupActive, then move a single popup, change it's opacity, resize it, 
//? add tick score and add the pressed letter
function ModifyPopup (letter, text) {
    if(popupActive) {
        popupClass[countPopup].style.transition = "all 0.5s ease-out, scale 0.2s ease-in-out"
        popupClass[countPopup].style.transform = `translate(${Math.floor(Math.random() * 1400) + 250}px, ${Math.floor(Math.random()*300)+10}px)`
        popupClass[countPopup].style.transform += `rotate(${Math.floor(Math.random()*56)-25}deg)`
        setTimeout(event => {popupClass[countPopup].style.transform += `scale(1.2)`}, 200)
        popupClass[countPopup].style.opacity = "1"

        document.getElementsByClassName("popup")[countPopup].querySelector("h2").innerHTML = text
        document.getElementsByClassName("popup")[countPopup].querySelector("h3").innerHTML = letter
        countPopup++

        if(text == "PERFECT!!!"){  // if the tick score is PERFECT!!!, then modify body and after 0.25s revert the changes
            body.style.transition = `all 0.15s`
            body.style.transform = `scale(1.03)`
            body.style.transform += `rotate(${Math.random()*5-2}deg)`

            setTimeout (event => {body.style.transform = `scale(1)`}, 250)
        }
    }
}

//? if quantity of popups == 3, then disable the "if" above, 
//? after 1.5s for each popup change its opacity to 0% and after 0.5s change its h's innerHTMLs to ""
function ResetPopup () {
    document.querySelectorAll(".popup").forEach(popup => {
        popup.style.opacity = "0%"
        popup.style.removeProperty("transform")
        popup.style.transform = `translate(${Math.floor(Math.random() * 1400) + 250}px, ${Math.floor(Math.random()*300)+10}px)`

        setTimeout(event => {  // after 0.5s reset h2 and h3 in every popup to empty
            popup.querySelector("h2").innerHTML = ""
            popup.querySelector("h3").innerHTML = ""
        }, 500)
    })
    countPopup = 0  // reset countPopup count
    setTimeout(event => {popupActive = true}, 500)  // after 0.5s activate the ModifyPopup() 
} 

//? check and call out a score based on user's correct input between ticks
function CheckTick (letter) {
    if(tick >= 0.9 || tick <= 0.2){
        // call ModifyPopup, ResetPopup
        ModifyPopup(letter, "PERFECT!!!")
        if(countPopup == 3){
            popupActive = false  // disables adding more popups in ModifyPopup and keys to the patterns in RhythmStart
            setTimeout(event => {ResetPopup()}, 1500)
        } 

        console.log("PERFECT!!!")
    }
    else if(tick >= 0.8 || tick <= 0.4){
        // call ModifyPopup, ResetPopup
        ModifyPopup(letter, "Good!")
        if(countPopup == 3){
            popupActive = false  // disables adding more popups in ModifyPopup and keys to the patterns in RhythmStart
            setTimeout(event => {ResetPopup()}, 1500)
        } 

        console.log("Good!")
    } 
    else if(tick >= 0.4 && tick <= 0.8){
        // call ModifyPopup, ResetPopup
        ModifyPopup(letter, "Okay")
        if(countPopup == 3){
            popupActive = false  // disables adding more popups in ModifyPopup and keys to the patterns in RhythmStart
            setTimeout(event => {ResetPopup()}, 1500)  // after 1.5s call ResetPopup
        } 

        console.log("Okay")
    } 
}

//? function to add another popup during defence
function DefendPopupAdd(letter) {
    rank = "Unknown"

    if (document.getElementsByClassName("attack_popup")[0] != null){    // checks if the popup exist, to not create an error
        letterTop = document.getElementsByClassName("attack_popup")[0].offsetTop    // calculates distances between objects `hitbox` and `attack_popup`
        letterLeft = document.getElementsByClassName("attack_popup")[0].offsetLeft
        distanceY = hitboxTop - letterTop
        distanceX = letterLeft - hitboxLeft

        // based on distances give user his rank - [DISTANCE_Y ; DISTANCE_Y-30; DISTANCE_X+30 ; DISTANCE_X]
        if (distanceY < 35 && distanceY > -65 && distanceX < 65 && distanceX > -25){
            rank = "PERFECT!!!"

            document.getElementById("hitbox_img").style.transition = "all 0.1s ease-in-out" 
            document.getElementById("hitbox_img").style.transform = "scale(2) rotate(45deg)"
            setTimeout(event => document.getElementById("hitbox_img").style.transform = "scale(1) rotate(45deg)", 150)
        }
        else if (distanceY < 55 && distanceY > -85 && distanceX < 95 && distanceX > -45){
            rank = "Good!"
        }
        else rank = "Okay"
    }

    countDefendPopups++
    listDefendPopups.push(new DefendPopup(countDefendPopups, letter, rank))   // creates new object of class DefendPopup to the list
    listDefendPopups[countDefendPopups-1].Begin()   // calls the object's method Begind()

    console.log(`${letter} with rank ${rank}`)
}

//? function to add another popup during attack
function AttackPopupAdd(letter) {
    patternTemp[i] = letter   // adds another letter to the temporary pattern var
    i++
    CheckTick(letter)  // call CheckTick() function

    switch (letter){  // depending on the acquired letter - play an appropiate audio
        case "Q":
            reksaiQ.currentTime = 0
            reksaiQ.play()
            break
        case "W":
            reksaiW.currentTime = 0
            reksaiW.play()
            break
        case "E":
            reksaiE.currentTime = 0
            reksaiE.play()
            break
    }
    
    clearTimeout(vanishTimeout)
    vanishTimeout = setTimeout(event => {VanishPopup()}, 2000)
}

//? call it to start the whole rhythm  <----------------------------------------------------------------------------------------
function RhythmStart() {
    // for each popup give them a starting position 
    document.querySelectorAll(".popup").forEach(popup => popup.style.transform = `translate(${Math.floor(Math.random() * 1400) + 250}px, ${Math.floor(Math.random() * 300) + 10}px)`)

    // create an interval, where every 0.1s tick goes up to max value of 1
    let rhythm = setInterval(event => {
        tick += 0.1
        tick = parseFloat(tick.toFixed(1))
        if(tick >= 1) {  // ticks reset every 10 iterations
            tick = 0
            idleSprite = selectedChampie.IdleAnimation(idleSprite)  // animate champie's idle animation (synchro with the tickrate)
        }
        //console.log(tick)
    }, 50)

    // add to the whole document a listener listening to keys pressed on the keyboard
    document.addEventListener("keydown", event => {
        if(popupActive){
            key = event.keyCode  // get pressed key's data

            if (i == 0 && !defend) vanishTimeout = setTimeout(event => {VanishPopup()}, 2000)

            // mechanism of popups during defence/attack sequences
            if (defend){        // if the key "Q", "W" or "E" is pressed, call function DefendPopupAdd(), else delete all defend_popups' content, reset variables and stop champie def stance
                if (key == `81`) DefendPopupAdd("Q")
                else if (key == `87`) DefendPopupAdd("W")
                else if (key == `69`) DefendPopupAdd("E")
                else if (key == `82`) { 
                    listDefendPopups.forEach(defendPopup => document.getElementById(`defend_popup${defendPopup.id}`).remove())
                    countDefendPopups = 0; listDefendPopups = []
                    selectedChampie.DefendStop(); 
                }
            }
            else {              // check if the key pressed is Q -> W -> E - if it is, then call function AttackPopupAdd()
                if (key == `81`) AttackPopupAdd("Q")
                else if (key == `87`) AttackPopupAdd("W")
                else if (key == `69`) AttackPopupAdd("E") 
                console.log(patternTemp[i])
            }

            // if pattern has already 4 letters (keys) in, then check if it is similar to any of patterns
            if(patternTemp.length == 3 && !defend) {
                clearTimeout(vanishTimeout)
                for(j=0; j <= 2; j++){
                    if(patternTemp[j] != patternAttack[j] && patternTemp[j] != patternBlock[j]) {patternTemp = []; i = 0; break}  // if any of the values from the table are not the same, clear the table, reset i and break the loop
                    else if(j == 2 && patternTemp[0] == "Q") {patternTemp = []; i = 0; selectedChampie.Attack()}
                    else if(j == 2 && patternTemp[0] == "E") {patternTemp = []; i = 0; selectedChampie.Block()}
                }
            }
        }
        
    })
}


