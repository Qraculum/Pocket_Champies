//let FILE = fetch("Champies\\dummyAttacks.txt")
//FILE.then(x => x.text()).then(insides => console.log(insides)) <- działa, ale jedynie na serwerze, bo nie da się normalnie bezpośrednio plików z pc, tylko przez http
//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ENEMY CREATOR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Enemy {               //! creates an enemy to fight against!
    constructor (name){
        this.name = name
    }

    Introduce(){    //? adds a source for an image for an enemy to recreate within the game
        document.getElementById("enemy").src = `Enemies/${this.name}/${this.name} - idle1.png`
    }

    Injure(){       //? method to call when enemy gets damaged
        let popupEnemy = document.getElementById("enemy_popup")
    
        //images for being attacked, idle
        document.getElementById("enemy").src = `Enemies/${this.name}/${this.name} - attacked.png`
        setTimeout(event => document.getElementById("enemy").src = `Enemies/${this.name}/${this.name} - idle1.png`, 300)
    
        //popup for text display when attacked
        popupEnemy.style.transition = "all 0.5s ease-out, scale 0.2s ease-in-out"
        popupEnemy.style.transform += `rotate(${Math.floor(Math.random()*56)-25}deg)`
        setTimeout(event => popupEnemy.style.transform += `scale(1.2)`, 200)
        popupEnemy.style.opacity = "1"
        popupEnemy.querySelector("h2").innerHTML = "FUQ"
    
        setTimeout(event => {
            popupEnemy.style.opacity = "0%"
            popupEnemy.style.removeProperty("transform")
    
            setTimeout(event => popupEnemy.querySelector("h2").innerHTML = "", 500) // after 0.5s reset h2 and h3 in every popup to empty
        }, 400)
    }
}


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ENEMY ATTACKS CREATOR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class EnemyAttacks {            //! create a sequence of attacks for certain enemy
    constructor (content){
        this.content = content
    }
}

let attackPopupsList = []
function Play(text, index){  //? plays through the whole text of letters and dots to set a proper attack towards our champie
    if (special) setTimeout(event => {return Play(text, index)}, 400)
    else {
        switch (text[index]){
            // if the character is ".", set a timeout to log the char and replay the function
            case ".":                                   // for value = "."
                setTimeout(event =>{                    // set a timeout of 500ms to
                    console.log(".")                    // log "."
                    return Play(text, index+1)          // and replay the function Play()
                }, 250)
                break                                   // then break the switch
    
            case "\n":
                setTimeout(event =>{ 
                    console.log("END")
                    console.log(attackPopupsList)
                    //return this.Play(text, index+1)
                }, 1000)
                break
    
            default:
                setTimeout(event =>{ 
                    attackPopupsList.push(new AttackPopup(countAttackPopups+1, text[index]))             // creates an object from class AttackPopup and pushes the object into list attackPopupsList
                    attackPopupsList[attackPopupsList.length-1].Begin(text[index])  // calls method Begin() of the previously created object
    
                    countAttackPopups++
                    return Play(text, index+1)
                }, 150)
                break
        }
    }
}


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ATTACK POPUPS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class AttackPopup {         //! creates an attack popup and manipulates it
    constructor (id, letter){
        this.id = id
        this.letter = letter
    }

    Begin (letter){
        let element = document.createElement("div")
        element.id = `attack_popup${this.id}`
        element.className = "attack_popup"
        element.innerHTML = letter

        document.getElementById("enemy_popups").appendChild(element)

        let count = 0
        document.querySelectorAll(".attack_popup").forEach(element => count++)

        this.Move()
    }

    Move (){
        let left = 1260, element = document.getElementById(`attack_popup${this.id}`), valX, valY

        // random Y parameter between 225 and 525
        let y = parseInt(Math.random()*251)+320
        element.style.top = `${y}px`

        // X parameter based on sinus of y
        let x = parseInt(Math.sin(y/95.6 - 2.35)*35)
        element.style.marginLeft = `${left-x}px`
        x = left-x

        // speed values the overall incremenation of x towards left to adjust the speed
        //let speed = (Math.random()*26)+180
        let speed = 200
        let pathX = (x-p)/speed
        //let pathY = (y-q)/speed
        //let pathXCON = pathX
        //let pathYCON = pathY 
        //let pathCount = 0

        y = y-445

        let move = setInterval(event => {
            valX = element.offsetLeft - document.getElementById("hitbox").offsetLeft
            valY = element.offsetTop - document.getElementById("hitbox").offsetTop

            element.style.marginLeft = `${element.offsetLeft - pathX}px`
            //element.style.top = `${Math.log(valX)/Math.log(10)*y+375}px`
            element.style.top = `${Math.sin(valX/300.49)*y*2.465+445}px`
            //element.style.top = `${valX**(1/2)/y**2+375}px`

            //pathX += pathXCON
            //pathY += pathYCON
            //pathCount++
            

            if(element.offsetLeft+85 <= document.getElementById("hitbox").offsetLeft) {
                clearInterval(move)
                element.remove()
            }
        }, 6)
    }
}


//! --------------------------------------DUMMY 
const dummyEnemy = new Enemy("Dummy")
const dummyAttack = new EnemyAttacks("QQ...E.W..Q.E.W.E.E..W.Q.Q..W....W.E.Q..W.W.W..Q.E.E..W.E.Q....W\n")
//const dummyAttack = new EnemyAttacks("QQ...E.W..QEWEE.W.Q.Q..W....WEQ.WWW.QEE.WEQ....W\n")
//const dummyAttack = new EnemyAttacks("Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..Q..\n")