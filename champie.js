//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CHAMPIE CREATOR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Champies {
    constructor (name, health, attack, defence, agility, height){  //? adding needed properties for a character
        this.name = name
        this.health = health
        this.attack = attack
        this.defence = defence
        this.agility = agility
        this.height = height
    }

    IdleAnimation(idleSprite) {  //? idle animation module         
        champie.src = `${this.name}/Sprite_readjusted - Idle${idleSprite}.png`  // getting 
        idleSprite == 2 ? idleSprite=1 : idleSprite=2
        return idleSprite
    }
}