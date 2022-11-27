//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MISCELLANEOUS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//? rearrange champie's position on scene (creates margin-top to put the object on the ground)
function ChangePosition() {
    document.querySelector("#champie_box").style.marginTop = `${document.querySelector("#background").clientHeight - champie.clientHeight}px`
}


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REK'SAI~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//! --------------------------------------ATTACK
reksaiChampie.Attack = function () {  
    reksaiAttack.play()  // play the rek'sai's attack audio
    pause = true

    // rek'sai animations during attack
    champie.src = "Champies/Rek'Sai/Sprite_readjusted - Prepare1.png"
    setTimeout(event => {
        champie.src = "Champies/Rek'Sai/Sprite_readjusted - Prepare2.png"
        setTimeout(event => {
            champie.src = "Champies/Rek'Sai/Sprite_readjusted - Prepare3.png"
            setTimeout(event => {
                champie.src = "Champies/Rek'Sai/Sprite_readjusted - Attack.png"
            }, 250)
        }, 250)
    }, 250)

    x = 2
    function AttackP1() {                                   //? PHASE 1
        setTimeout(event = () => {  // move with a little delay (time)
            champie.style.left = `${-x}px`  // every iteration decrease x to move further to the left   
    
            x++  // lower = slower | higher = faster
            if(x%10 == 0) time += 2  // slow down the backwards charge
            if(x <= 80) AttackP1()  // loop the same phase to iterate the movement
            else {x=3; time=1; x_old=x; AttackP2()}  // if x>90 then start new phase and adds this.x to the new phase 
        }, time)
    }

    function AttackP2() {                                   //? PHASE 2
        setTimeout(event = () => {  // move with a little delay (time)
            y = Math.sin(x/150)*50  // every iteration create new y value based on function    
    
            champie.style.left = `${x}px`  // move champie
            champie.style.bottom = `${y}px`
    
            x += 3.5  // lower = slower | higher = faster
            if(x <= 516) AttackP2()  // loop the same phase to iterate the movement
            else setTimeout(event = () => {champie.style.removeProperty("left"); champie.style.removeProperty("bottom"); pause=false}, 500)  //after x time resets the champie's position
        }, 1)
    }
    AttackP1()  //? first function call
}

//! --------------------------------------BLOCK
reksaiChampie.Block = function () {  

}