class Champies {
    constructor (name, health, attack, defence, agility, height){
        this.name = name
        this.health = health
        this.attack = attack
        this.defence = defence
        this.agility = agility
        this.height = height
    }

    IdleAnimation(idleSprite) {                                                                    
        champie.src = `${this.name}/Sprite_readjusted - Idle${idleSprite}.png`
        idleSprite == 2 ? idleSprite=1 : idleSprite=2
        console.log(idleSprite)
        return idleSprite
    }
    

}