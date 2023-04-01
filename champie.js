//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CHAMPIE CREATOR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let fury = 1

class Champies {
    constructor (name, health, attack, defence, speed){  //? adding needed properties for a character
        this.name = name
        this.health = health
        this.attack = attack
        this.defence = defence
        this.speed = speed
    }

    IdleAnimation(idleSprite) {  //? idle animation module   
        if(!pause) {
            if (selectedChampie == reksaiChampie) champie.src = `Champies/${this.name}/Sprite_readjusted - Idle${idleSprite}${fury}.png`
            else champie.src = `Champies/${this.name}/Sprite_readjusted - Idle${idleSprite}.png`
            idleSprite == 2 ? idleSprite=1 : idleSprite=2
            return idleSprite
        }      
        else return idleSprite
    }
}