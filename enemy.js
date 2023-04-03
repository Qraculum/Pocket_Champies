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
                console.log(text[index])

                attackPopupsList.push(new AttackPopup(text[index]))             // creates an object from class AttackPopup and pushes the object into list attackPopupsList
                attackPopupsList[attackPopupsList.length-1].Begin(text[index])  // calls method Begin() of the previously created object

                return Play(text, index+1)
            }, 150)
            break
    }
}


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ATTACK POPUPS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class AttackPopup {         //! creates an attack popup and manipulates it
    constructor (letter){
        this.letter = letter
    }

    Begin(letter){
        let element = document.createElement("div")
        element.className = "attack_popup"
        element.innerHTML = letter

        document.getElementById("enemy_popups").appendChild(element)

        let count = 0
        document.querySelectorAll(".attack_popup").forEach(element => count++)

        this.Move(count-1)
    }

    Move(index){
        let left = 70, attackPopup = document.getElementsByClassName("attack_popup")
        attackPopup[index].style.marginLeft = `${left}vw`
        attackPopup[index].style.bottom = "0px"
        attackPopup[index].style.marginBottom = "-42vh"

        let move = setInterval(event => {
            left--
            attackPopup[index].style.marginLeft = `${left}vw`

            if(left == 40) {
                attackPopup[index].style.opacity = "0%"
                clearInterval(move)
            }
        }, 20)
    }
}


//! --------------------------------------DUMMY 
const dummyEnemy = new Enemy("Dummy")
const dummyAttack = new EnemyAttacks("QQ...E.W..QEW\n")