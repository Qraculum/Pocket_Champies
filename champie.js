//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CHAMPIE CREATOR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let fury = 1

class Champies {        //! creates a champie!
    constructor (name, health, attack, defence, speed){  //? adding needed properties for a character
        this.name = name
        this.health = health
        this.attack = attack
        this.defence = defence
        this.speed = speed
    }

    Introduce(){    //? adds a source for an image for a champie to recreate within the game
        if (selectedChampie == reksaiChampie) document.getElementById("champie").src = `Champies/${this.name}/${this.name} - idle11.png`
        else document.getElementById("champie").src = `Champies/${this.name}/${this.name} - idle1.png`
        
    }

    IdleAnimation(idleSprite) {  //? idle animation module   
        if(!pause) {
            if (selectedChampie == reksaiChampie) champie.src = `Champies/${this.name}/${this.name} - Idle${idleSprite}${fury}.png`
            else champie.src = `Champies/${this.name}/${this.name} - Idle${idleSprite}.png`
            idleSprite == 2 ? idleSprite=1 : idleSprite=2
            return idleSprite
        }     
        else if(defend) {
            if (selectedChampie == reksaiChampie) champie.src = `Champies/${this.name}/${this.name} - DefendHit${idleSprite}.png`
            else champie.src = `Champies/${this.name}/${this.name} - DefendHit${idleSprite}.png`
            idleSprite == 2 ? idleSprite=1 : idleSprite=2
            return idleSprite
        }
        else return idleSprite
    }

    DefendStop() {  //? stop the defend mechanism and remove `hitbox`
        defend = false
        hitboxLeft = 0
        hitboxTop = 0

        document.getElementById("poise_panel").style.opacity = "0%"
        document.getElementById("hitbox").style.opacity = "0%"

        if (selectedChampie == reksaiChampie){
            setTimeout(event => {
                champie.src = "Champies/Rek'Sai/Sprite - FuryAttack2.png"
                setTimeout(event => {
                    champie.src = "Champies/Rek'Sai/Sprite - FuryAttack1.png"
                    setTimeout(event =>  pause = false, 250)
                }, 250)
            }, 300)
        }
        else if (selectedChampie == mordekaiserChampie){
            null
        }
    }
}


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DEFEND POPUPS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class DefendPopup {
    constructor (id, letter, rank){
        this.id = id
        this.letter = letter
        this.rank = rank
    }

    Begin (){
        let element = document.createElement("div")
        element.id = `defend_popup${this.id}`
        element.className = "defend_popup"
        element.innerHTML = `<h2>${this.rank}</h2><h3>${this.letter}</h3>`

        document.getElementById("defend_popups").appendChild(element)

        this.Move(element)
    }

    Move (element){
        element.style.transition = "all 0.5s ease-out, scale 0.2s ease-in-out"
        element.style.transform = `translate(${Math.floor(Math.random() * 501) + 100}px, ${Math.floor(Math.random()*300)+10}px)`
        element.style.transform += `rotate(${Math.floor(Math.random()*56)-25}deg)`

        setTimeout(event => {element.style.transform += `scale(1.3)`}, 50)
        element.style.opacity = "100%"

        if(this.rank == "PERFECT!!!"){  // if the tick score is PERFECT!!!, then modify body and after 0.25s revert the changes
            body.style.transition = `all 0.15s`
            body.style.transform = `scale(1.02)`
            body.style.transform += `rotate(${Math.random()*4-1.5}deg)`

            setTimeout (event => {body.style.transform = `scale(1)`}, 250)
        }

        setTimeout(event => element.style.opacity = "0%", 200)
    }

    Remove (){
        
    }
}