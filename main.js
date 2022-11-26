//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DECLARATIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let body = document.querySelector("body")
let idleSprite = 1, pos, key, x, time=1, selectedChampie

//! creating new pokemon
const reksaiChampie = new Champies("Rek'Sai", 15, 4, 2, 6, 256)
console.log(reksaiChampie)


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SELECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let wait = true
document.querySelectorAll(".champie_box").forEach(champie_box => {  // add transition to every .champie_box
    champie_box.style.transition = "all 0.4s ease-out"
})

//? confirm, select the middle available champie and call the Start() function
function Confirm() {
        // get id from centerized champie_box
        selectedChampie = document.getElementsByClassName("champie_box")[2].id
        if (selectedChampie == "reksaiChampie") selectedChampie = reksaiChampie  // declaring selectedChampie as x pokemon' object

        Start()
}

//? swipe all champies to the left
function ToggleRight() {
    if (wait) {
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
            // after 0.4s add transition to every box
            setTimeout(event => {document.querySelectorAll(".champie_box").forEach(champie_box => { champie_box.style.transition = "all 0.4s ease-out" })}, 400)
        }, 400)

        wait = false
        setTimeout(event => {wait = true}, 800)
    }
}

//? swipe all champies to the right
function ToggleLeft() {
    if (wait) {
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
            // after 0.4s add transition to every box
            setTimeout(event => {document.querySelectorAll(".champie_box").forEach(champie_box => { champie_box.style.transition = "all 0.4s ease-out" })}, 400)
        }, 400)

        wait = false
        setTimeout(event => {wait = true}, 800)
    }
}

//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GAME~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//? starts the game
function Start() {
    // remove whole selection menu
    document.querySelector("#selection_background").parentNode.removeChild(document.querySelector("#selection_background")) 

    // create viable character in champie_box
    document.getElementById("champie_box").innerHTML = `<img id="champie" height="${selectedChampie.height}" src="${selectedChampie.name}/Sprite_readjusted - Idle2.png">` 
    let champie = document.getElementById("champie")  // declaring champie's variable
    ChangePosition()  // rearrange champie's position based on his height
    let idleAnimStart = setInterval(event => {idleSprite=selectedChampie.IdleAnimation(idleSprite)}, 500)  // animate champie's idle animation
    
    // rotate "champie" 360deg, after 0.2s modify transition duration to 0s (to disallow next animation) and remove transform, return back the 0.2s to transition duration
    champie.addEventListener("click", event => {
        champie.style.transform = "rotateY(360deg)"
        setTimeout(event = () => {champie.style.transitionDuration = "0s"; champie.style.removeProperty("transform")}, 200)
        champie.style.transitionDuration = "0.2s"
    })
}

//? test attack
document.addEventListener("keydown", event => {
    key = event.keyCode
    if (key == `69`) selectedChampie.Attack()
})