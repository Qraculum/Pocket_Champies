//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DECLARATIONS
let body = document.body
let pos, key, x, time=1, selectedChampie, wait = true, pause = false
// add transition to every .champie_box
document.querySelectorAll(".champie_box").forEach(champie_box => {
    champie_box.style.transition = "all 0.4s ease-out"
})
document.getElementsByClassName("champie_img")[2].style.transform = "scale(1.15)"  // change add scale to champie_img

//! create new pokemon
const reksaiChampie = new Champies("Rek'Sai", 15, 4, 2, 6)
console.log(reksaiChampie)

//? add champie's values to the panel on the left
document.getElementById("stats").innerHTML = `name: ${reksaiChampie.name}<br>
                                              health: ${reksaiChampie.health}<br>
                                              attack: ${reksaiChampie.attack}<br>
                                              defence: ${reksaiChampie.defence}<br>
                                              agility: ${reksaiChampie.agility}`


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SELECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//? confirm, select the middle available champie, play its select audio, manipulate the black curtains and call the Start() function
function Confirm() {
        // get id from centerized champie_box
        selectedChampie = document.getElementsByClassName("champie_box")[2].id
        if (selectedChampie == "reksaiChampie"){
            selectedChampie = reksaiChampie;   // declaring selectedChampie as x pokemon' object
            //reksaiSelect.play()

            document.body.innerHTML = `<div id="fury_bar">
                                            <div class="semi_bar"></div>
                                            <div class="semi_bar"></div>
                                            <div class="semi_bar"></div>
                                        </div>` + document.body.innerHTML
        } 

        /*
        document.querySelector("#big_black").style.zIndex = "1"  // move big_black forward
        document.querySelector("#big_black").style.opacity = "100%"  // change its opacity within transition
        setTimeout(event => {
            Start()  // call Start()
            document.querySelector("#big_black").style.opacity = "0%"  // change its opacity within transition
            setTimeout(event => {document.querySelector("#big_black").parentNode.removeChild(document.querySelector("#big_black")); music.play()}, 2500)  // remove the big_black wall
        }, 2500)
        */
        document.querySelector("#big_black").parentNode.removeChild(document.querySelector("#big_black"))
        //music.play()
        Start() 
}

//? swipe all champies to the left
function ToggleRight() {
    if (wait) {
        // remove transform from the image inside of champie_box and add it to next in the row
        document.getElementsByClassName("champie_img")[2].style.removeProperty("transform")
        document.getElementsByClassName("champie_img")[3].style.transform = "scale(1.15)"
        // move all boxes to the left by 300px
        for(i=0; i<5; i++) document.getElementsByClassName("champie_box")[i].style.transform = "translate(-300px, 0px)"  

        // after 0.4s 
        setTimeout(event => {
            // put the first object as the last
            document.querySelector("#pokemon_selection_case").appendChild(document.getElementsByClassName("champie_box")[0], document.getElementsByClassName("champie_box")[4])
            document.querySelectorAll(".champie_box").forEach(champie_box => {  // for every champie_box remove transition and transform in style
                champie_box.style.removeProperty("transition")
                champie_box.style.removeProperty("transform")
            })

            // left panel
            if (document.getElementsByClassName("champie_box")[2].id == "reksaiChampie"){
                document.getElementById("stats").innerHTML = `name: ${reksaiChampie.name}<br>
                                                              health: ${reksaiChampie.health}<br>
                                                              attack: ${reksaiChampie.attack}<br>
                                                              defence: ${reksaiChampie.defence}<br>
                                                              agility: ${reksaiChampie.agility}`
            }
            else {
                document.getElementById("stats").innerHTML = `name: ROCK<br>
                                                              health: 1<br>
                                                              attack: 1<br>
                                                              defence: 1<br>
                                                              agility: 1<br>`
            }

            // after 0.4s add transition to every box
            setTimeout(event => {
                document.querySelectorAll(".champie_box").forEach(champie_box => {
                    champie_box.style.transition = "all 0.4s ease-out" 
                })
            }, 400)
        }, 400)

        wait = false
        setTimeout(event => {wait = true}, 800) // change var wait 
    }
}

//? swipe all champies to the right
function ToggleLeft() {
    if (wait) {
        // remove transform from the image inside of champie_box and add it to previous in the row
        document.getElementsByClassName("champie_img")[2].style.removeProperty("transform")
        document.getElementsByClassName("champie_img")[1].style.transform = "scale(1.15)"
        // move all boxes to the right by 300px
        for(i=0; i<5; i++) document.getElementsByClassName("champie_box")[i].style.transform = "translate(300px, 0px)"

        // after 0.4s 
        setTimeout(event => {
            // put the last object as the first
            document.querySelector("#pokemon_selection_case").insertBefore(document.getElementsByClassName("champie_box")[4], document.getElementsByClassName("champie_box")[0])
            document.querySelectorAll(".champie_box").forEach(champie_box => {
                champie_box.style.removeProperty("transition")
                champie_box.style.removeProperty("transform")
            })

            // left panel
            if (document.getElementsByClassName("champie_box")[2].id == "reksaiChampie"){
                document.getElementById("stats").innerHTML = `name: ${reksaiChampie.name}<br>
                                                              health: ${reksaiChampie.health}<br>
                                                              attack: ${reksaiChampie.attack}<br>
                                                              defence: ${reksaiChampie.defence}<br>
                                                              agility: ${reksaiChampie.agility}`
            }
            else {
                document.getElementById("stats").innerHTML = `name: ROCK<br>
                                                              health: 1<br>
                                                              attack: 1<br>
                                                              defence: 1<br>
                                                              agility: 1<br>`
            }

            // after 0.4s add transition to every box
            setTimeout(event => {
                document.querySelectorAll(".champie_box").forEach(champie_box => {
                    champie_box.style.transition = "all 0.4s ease-out" 
                })
            }, 400)
        }, 400)

        wait = false
        setTimeout(event => {wait = true}, 800) // change var wait
    }
}

//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GAME~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//? starts the game
function Start() {
    // call RhythmStart() function to enable ticks
    RhythmStart()
    // remove whole selection menu
    document.querySelector("#selection_background").parentNode.removeChild(document.querySelector("#selection_background")) 

    // create viable character in champie_box
    document.getElementById("champie_box").innerHTML = `<img id="champie"  src="Champies/${selectedChampie.name}/Sprite_readjusted - Idle21.png">` 
    let champie = document.getElementById("champie")  // declaring champie's variable
    ChangePosition()  // rearrange champie's position based on his height
    
    // rotate "champie" 360deg, after 0.2s modify transition duration to 0s (to disallow next animation) and remove transform, return back the 0.2s to transition duration
    champie.addEventListener("click", event => {
        champie.style.transform = "rotateY(360deg)"
        setTimeout(event = () => {champie.style.transitionDuration = "0s"; champie.style.removeProperty("transform")}, 200)
        champie.style.transitionDuration = "0.2s"
    })
}