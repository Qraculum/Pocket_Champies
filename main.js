//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DECLARATIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let body = document.querySelector("body")
let idleSprite = 1, pos, key, x, time=1, selectedChampie

//! creating new pokemon
const reksaiChampie = new Champies("Rek'Sai", 15, 4, 2, 6, 256)
console.log(reksaiChampie)


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SELECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let /*tab = [0, 0, 0, 0, 0], boxIDTab = ["a", "b", "reksai", "c", "d"],*/ wait = true
document.querySelectorAll(".beginning_box").forEach(beginning_box => {  // add transition to every .beginning_box
    beginning_box.style.transition = "all 0.4s ease-out"
})

//? confirm and select the middle available champie
function Confirm() {
        // get id from centerized beginning_box
        selectedChampie = document.getElementsByClassName("beginning_box")[2].id
        if (selectedChampie == "reksaiChampie") selectedChampie = reksaiChampie  //? declaring selectedChampie as x pokemon' object

        Start()
}

//? swipe all champies to the left
function ToggleLeft() {
    if (wait) {
        for(i=0; i<5; i++) document.getElementsByClassName("beginning_box")[i].style.transform = "translate(-300px, 0px)"

        setTimeout(event => {
            document.querySelector("#pokemon_selection_case").appendChild(document.getElementsByClassName("beginning_box")[0], document.getElementsByClassName("beginning_box")[4])
            document.querySelectorAll(".beginning_box").forEach(beginning_box => {
                beginning_box.style.removeProperty("transition")
                beginning_box.style.removeProperty("transform")
            })
            setTimeout(event => {document.querySelectorAll(".beginning_box").forEach(beginning_box => { beginning_box.style.transition = "all 0.4s ease-out" })}, 400)
        }, 400)

        wait = false
        setTimeout(event => {wait = true}, 800)
    }
}

//? swipe all champies to the right
function ToggleRight() {
    if (wait) {
        for(i=0; i<5; i++) document.getElementsByClassName("beginning_box")[i].style.transform = "translate(300px, 0px)"

        setTimeout(event => {
                /*
                for(i=0; i<5; i++){
                    tab[i+1] = boxIDTab[i]
                }
                tab.pop()
                boxIDTab = tab
                tab = [0, 0, 0, 0, 0]
                console.log(boxIDTab)
                */
            document.querySelector("#pokemon_selection_case").insertBefore(document.getElementsByClassName("beginning_box")[4], document.getElementsByClassName("beginning_box")[0])
            document.querySelectorAll(".beginning_box").forEach(beginning_box => {
                beginning_box.style.removeProperty("transition")
                beginning_box.style.removeProperty("transform")
            })
            setTimeout(event => {document.querySelectorAll(".beginning_box").forEach(beginning_box => { beginning_box.style.transition = "all 0.4s ease-out" })}, 400)
        }, 400)

        wait = false
        setTimeout(event => {wait = true}, 800)
    }
}

//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GAME~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//! starts the game and chooses the pokemon
function Start() {
    //? remove whole selection menu
    document.querySelector("#selection_background").parentNode.removeChild(document.querySelector("#selection_background")) 

    //? create viable character in champie_box
    document.getElementById("champie_box").innerHTML = `<img id="champie" height="${selectedChampie.height}" src="${selectedChampie.name}/Sprite_readjusted - Idle2.png">` 
    let champie = document.getElementById("champie")  // declaring champie's variable
    ChangePosition()  // rearrange champie's position based on his height
    let idleAnimStart = setInterval(event => {idleSprite=selectedChampie.IdleAnimation(idleSprite)}, 500)  // animate champie's idle animation
    
    //? rotate "champie" 360deg, after 0.2s modify transition duration to 0s (to disallow next animation) and remove transform, return back the 0.2s to transition duration
    champie.addEventListener("click", event => {
        champie.style.transform = "rotateY(360deg)"
        setTimeout(event = () => {champie.style.transitionDuration = "0s"; champie.style.removeProperty("transform")}, 200)
        champie.style.transitionDuration = "0.2s"
    })
}

//? test attack
document.addEventListener("keydown", event => {
    key = event.keyCode
    if (key == `69`) {
        x = 2
        selectedChampie.Attack(x)
    }
})