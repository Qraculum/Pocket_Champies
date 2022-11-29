//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RHYTHM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let tick = 0, i = 0, patternTemp = [], real=true, idleSprite = 1
    patternAttack = ["Q", "Q", "W", "Q"],
    patternBlock = ["E", "E", "Q", "W"]

//? check and call out a score based on user's correct input between ticks
function CheckTick () {
    if(tick >= 0.9 || tick <= 0.2) console.log("PERFECT!!!")
    else if(tick >= 0.8 || tick <= 0.4) console.log("Good!")
    else if(tick >= 0.4 && tick <= 0.8) console.log("Okay")
}

//? call it to start the whole rhythm
function RhythmStart() {
    // create an interval, where every 0.1s tick goes up to max value of 1
    let rhythm = setInterval(event => {
        tick += 0.1
        tick = parseFloat(tick.toFixed(1))
        if(tick >= 1) {
            tick = 0
            idleSprite = selectedChampie.IdleAnimation(idleSprite)  // animate champie's idle animation (synchro with the tickrate)
        }
        console.log(tick)
    }, 50)

    // add to the whole window a listener listening to keys pressed on the keyboard
    document.addEventListener("keydown", event => {
        key = event.keyCode  // get pressed key's data

        // check if the key clicked is Q -> W -> E -> R
        if (key == `81`) {patternTemp[i] = "Q"; i++; CheckTick()} 
        else if (key == `87`) {patternTemp[i] = "W"; i++; CheckTick()}
        else if (key == `69`) {patternTemp[i] = "E"; i++; CheckTick()} 
        else if (key == `82`) {patternTemp[i] = "R"; i++; CheckTick()}

        // if pattern has already 4 letters (keys) in, then check if it is similar to any of patterns
        if(patternTemp.length == 4) {
            for(j=0; j <=3; j++){
                if(patternTemp[j] != patternAttack[j]) {patternTemp = []; i = 0; break}
                else if(j == 3) {patternTemp = []; i = 0; selectedChampie.Attack()}
            }
        }
    })
}


