//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MISCELLANEOUS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//? rearrange champie's position on scene (creates margin-top to put the object on the ground)
function ChangePosition() {
    document.querySelector("#champie_box").style.bottom = `0`
    document.querySelector("#champie_box").style.marginBottom = `39vh`
}


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REK'SAI~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let xersaiFury = false, times=-1

//! --------------------------------------ATTACK
reksaiChampie.Attack = function () {  
    if(!xersaiFury){
        reksaiAttack.play()  // play the rek'sai's attack audio
        pause = true
        times++

        // rek'sai animations during attack
        champie.src = "Champies/Rek'Sai/Sprite_readjusted - Prepare1.png"
        setTimeout(event => {
            champie.src = "Champies/Rek'Sai/Sprite_readjusted - Prepare2.png"
            setTimeout(event => {
                champie.src = "Champies/Rek'Sai/Sprite_readjusted - Prepare3.png"
                setTimeout(event => {
                    champie.src = "Champies/Rek'Sai/Sprite_readjusted - Attack.png"
                    setTimeout(event => {
                        champie.src = "Champies/Rek'Sai/Sprite_readjusted - Prepare1.png"
                        setTimeout(event => {
                            champie.src = "Champies/Rek'Sai/Sprite - LieDown.png"
                            dummyEnemy.Injure()
                        }, 50)
                    }, 700)
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
                else {
                    // if x>90 then start new phase and adds this.x to the new phase 
                    x=3 
                    time=1
                    x_old=x

                    AttackP2()
                    document.getElementsByClassName("semi_bar")[times].style.backgroundColor = "rgb(231, 29, 73)"
                }
            }, time)
        }

        function AttackP2() {                                   //? PHASE 2
            setTimeout(event = () => {  // move with a little delay (time)
                y = Math.sin(x/150)*50  // every iteration create new y value based on sin function    
    
                champie.style.left = `${x}px`  // move champie
                champie.style.bottom = `${y}px`
    
                x += 3.5  // lower = slower | higher = faster
                if(x <= 470) AttackP2()  // loop the same phase to iterate the movement
                else setTimeout(event = () => {  // after x time resets the champie's position
                    champie.style.removeProperty("left")
                    champie.style.removeProperty("bottom")
                    champie.src = `Champies/${selectedChampie.name}/${selectedChampie.name} - Idle${idleSprite}1.png`

                    if(times == 2){
                        times = -1
                        xersaiFury = true
                    }
                    pause=false
                }, 400)  
            }, 1)
        }
        AttackP1()  //? first function call
        }
    else {  //? if all top bars are fully loaded, make the next attack empowered
        pause = true
        reksaiFuryAttack.play()

        setTimeout(event => {champie.src = "Champies/Rek'Sai/Sprite - FuryAttack1.png"}, 100)
        setTimeout(event => {
            champie.src = "Champies/Rek'Sai/Sprite - FuryAttack2.png"
            setTimeout(event => {
                champie.src = "Champies/Rek'Sai/Sprite - FuryAttack3.png"
                setTimeout(event => {
                    champie.src = "Champies/Rek'Sai/Sprite - FuryAttack5.png"
                    setTimeout(event => {
                        champie.src = "Champies/Rek'Sai/Sprite - FuryAttack6.png"
                        setTimeout(event => {
                            champie.src = "Champies/Rek'Sai/Sprite - FuryAttack7.png"
                            dummyEnemy.Injure()
                            setTimeout(event => {champie.src = "Champies/Rek'Sai/Sprite - FuryAttack6_NoFury.png"}, 450)
                        }, 700)
                    }, 100)
                }, 200)
            }, 500)
        }, 600)

        // reset the top bars
        setTimeout(event => {
            document.querySelectorAll(".semi_bar").forEach(semi_bar => {
                semi_bar.style.backgroundColor = "rgb(44, 36, 36)"
            })
            pause = false
            xersaiFury = false
        }, 3400)
    }
}

//! --------------------------------------BLOCK
reksaiChampie.Block = function () {  
    pause = true

    setTimeout(event => {
        champie.src = "Champies/Rek'Sai/Sprite - FuryAttack1.png"
        setTimeout(event => {
            champie.src = "Champies/Rek'Sai/Sprite - FuryAttack2.png"
        }, 250)
    }, 300)
}