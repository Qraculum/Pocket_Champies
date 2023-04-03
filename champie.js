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
        document.getElementById("champie").src = `Champies/${this.name}/${this.name} - idle11.png`
    }

    IdleAnimation(idleSprite) {  //? idle animation module   
        if(!pause) {
            if (selectedChampie == reksaiChampie) champie.src = `Champies/${this.name}/${this.name} - Idle${idleSprite}${fury}.png`
            else champie.src = `Champies/${this.name}/${this.name} - Idle${idleSprite}.png`
            idleSprite == 2 ? idleSprite=1 : idleSprite=2
            return idleSprite
        }      
        else return idleSprite
    }
}