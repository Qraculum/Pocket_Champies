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
    defend = false
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
            setTimeout(event => {
                defend = true

                let element = document.createElement("div")
                element.id = "poise_panel"
                element.innerHTML = `<img id="poise_meter" src="Interface/Poise_Meter.png">`

                document.getElementById("container").appendChild(element)

                element = document.createElement("div")
                element.id = "hitbox"
                element.style.marginLeft = "40vw"
                element.style.bottom = "57vh"
                element.innerHTML = `<img id="hitbox_img" src="Interface/Hitbox.png" style="transform: rotate(45deg) scale(1.3)" style="translate: all 0.1s ease-in-out">`

                document.getElementById("container").appendChild(element)

                console.log(document.getElementById("hitbox").offsetTop)
                console.log(document.getElementById("hitbox").offsetLeft)
                hitboxTop = element.offsetTop
                hitboxLeft = element.offsetLeft
            }, 100)
        }, 250)
    }, 300)
}

//! --------------------------------------SPECIAL ATTACK
reksaiChampie.Special = function () {
    pause = true; defend = false; special = true

    setTimeout(event => {
        document.getElementById("hitbox").remove()
        champie.src = "Champies/Rek'Sai/Sprite - FuryAttack1.png"
        setTimeout(event => {
            champie.src = "Champies/Rek'Sai/Sprite - SpecialAttack1.png"
            document.getElementById("champie_box").innerHTML += `<img id="burrow">`
            setTimeout(event => {
                champie.style.opacity = "0%"
                document.getElementById("burrow").src = `Champies/Rek'Sai/Sprite - SpecialAttack2.png`

                reksaiBurrow.play()
                setTimeout(event => {
                    document.getElementById("burrow").src = "Champies/Rek'Sai/Sprite - SpecialAttack3.png"
                    champie.style.marginLeft = "36vw"
                    setTimeout(event => {
                        champie.style.opacity = "100%"
                        champie.style.zIndex = "1"
                        document.getElementById("champie_box").innerHTML += `<img id="burrow_duplicate" src="Champies/Rek'Sai/Sprite - SpecialAttack3.png">`
                        champie.src = "Champies/Rek'Sai/Sprite - SpecialAttack4.png"

                        let x = 1
                        specialAttack = setInterval(event => {
                            if(x >= 250) {
                                clearInterval(specialAttack)
                                document.getElementById("big_black").style.zIndex = "1"
                                document.getElementById("big_black").style.opacity = "100%"

                                setTimeout(event => {
                                    document.getElementById("champie_box").innerHTML += `<img id="slice" style="transition: all 0.2s ease-in-out; z-index: 2;" src="Champies/Rek'Sai/Sprite - Slice1.png">`
                                    reksaiSlice.play()
                                    setTimeout(event => {
                                        document.getElementById("slice").src = "Champies/Rek'Sai/Sprite - Slice2.png"
                                        setTimeout(event => {
                                            document.getElementById("slice").src = "Champies/Rek'Sai/Sprite - Slice3.png"
                                            setTimeout(event => document.getElementById("slice").style.opacity = "0%", 300)
                                            setTimeout(event => {pause = false; special = false}, 600)
                                            setTimeout(event => {
                                                champie.style.removeProperty("z-index")
                                                champie.style.removeProperty("margin-left")
                                                champie.style.removeProperty("bottom")

                                                document.getElementById("enemy").style.removeProperty("bottom")

                                                document.getElementById("burrow").remove()
                                                document.getElementById("burrow_duplicate").remove()
                                                document.getElementById("slice").remove()

                                                document.getElementById("big_black").style.opacity = "0%"
                                                document.getElementById("big_black").style.zIndex = "-1"
                                            }, 750)
                                        }, 50)
                                    }, 50)
                                }, 600)
                            }
                            console.log(x)
                            champie.style.bottom = `${Math.log10(x)*90}px`
                            document.getElementById("enemy").style.bottom = `${Math.log10(x)*90}px`
                            x++
                        }, 5)

                        reksaiUlt.play()
                    }, 1500)
                }, 100)
            }, 250)
        }, 200)
    }, 200)
}