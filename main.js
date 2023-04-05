//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DECLARATIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let body = document.body
let pos, key, x, time=1, selectedChampie, wait = true, pause = false, defend = false, champieBoxQuantity = document.querySelectorAll(".champie_box").length, countAttackPopups = 0
// add transition to every .champie_box
document.querySelectorAll(".champie_box").forEach(champie_box => { champie_box.style.transition = "all 0.4s ease-out"})
document.getElementsByClassName("champie_img")[parseInt(champieBoxQuantity/2-0.1)].style.transform = "scale(1.15)"  // change add scale to champie_img

//! create new champie
const reksaiChampie = new Champies("Rek'Sai", 15, 4, 2, 6)
console.log(reksaiChampie)

//? add champie's values to the panel on the left
document.getElementById("stats").innerHTML = `name: ${reksaiChampie.name}<br>
                                              health: ${reksaiChampie.health}<br>
                                              attack: ${reksaiChampie.attack}<br>
                                              defence: ${reksaiChampie.defence}<br>
                                              speed: ${reksaiChampie.speed}`

// make lines over the champie images disappear/appear in the beginning
let temp = 0
document.querySelectorAll(".line").forEach(line => {
    temp++
    if(temp == parseInt(document.querySelectorAll(".line").length/2+1)) line.style.opacity = "100%"
    else line.style.opacity = "0%"
    setTimeout(event => line.style.transition = "0.4s ease-in-out", 10)
})

// make middle text over the champie's image a bit higher
document.getElementsByClassName("champie_box")[parseInt(champieBoxQuantity/2-0.1)].getElementsByTagName("h1")[0].style.top = "-40px"


//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SELECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//? confirm, select the middle available champie, play its select audio, manipulate the black curtains and call the Start() function
function Confirm() {
    enter.currentTime = 0
    enter.play()
    // get id from centerized champie_box
    selectedChampie = document.getElementsByClassName("champie_box")[parseInt(champieBoxQuantity/2-0.1)].id
    if (selectedChampie == "reksaiChampie"){
        selectedChampie = reksaiChampie;   // declaring selectedChampie as x pokemon' object
        //reksaiSelect.play()

        document.getElementById("container").innerHTML = `<div id="fury_bar">
                                                            <div class="semi_bar"></div>
                                                            <div class="semi_bar"></div>
                                                            <div class="semi_bar"></div>
                                                          </div>` + document.getElementById("container").innerHTML    
    } 

    /*\
    document.querySelector("#big_black").style.zIndex = "1"  // move big_black forward
    document.querySelector("#big_black").style.opacity = "100%"  // change its opacity within transition
    setTimeout(event => {
        Start()  // call Start()
        document.querySelector("#big_black").style.opacity = "0%"  // change its opacity within transition
        setTimeout(event => {document.querySelector("#big_black").parentNode.removeChild(document.querySelector("#big_black")); music.play()}, 2500)  // remove the big_black wall
    }, 2500)
    */
    document.getElementById("big_black").style.opacity = "0%"
    document.getElementById("big_black").style.zIndex = "-1"
    document.getElementById("big_black").style.transition = "all 0.2s ease-in-out"
    //setTimeout(event => music.play(), 300)
    Start() 
}

//TODO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GAME~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//? starts the game
function Start() {
    // call RhythmStart() function to enable ticks
    RhythmStart()
    // remove whole selection menu
    document.querySelector("#selection_background").parentNode.removeChild(document.querySelector("#selection_background")) 

    // create viable character in enemy_box
    dummyEnemy.Introduce()
    let enemy = document.getElementById("enemy")
    document.querySelector("#enemy_box").style.bottom = `0`
    document.querySelector("#enemy_box").style.marginBottom = `39vh`

    // create viable character in champie_box
    reksaiChampie.Introduce()
    let champie = document.getElementById("champie")  // declaring champie's variable
    ChangePosition()  // rearrange champie's position based on his height
    
    // rotate "champie" 360deg, after 0.2s modify transition duration to 0s (to disallow next animation) and remove transform, return back the 0.2s to transition duration
    champie.addEventListener("click", event => {
        champie.style.transform = "rotateY(360deg)"
        setTimeout(event = () => {champie.style.transitionDuration = "0s"; champie.style.removeProperty("transform")}, 200)
        champie.style.transitionDuration = "0.2s"
    })
    enemy.addEventListener("click", event => {
        enemy.style.transform = "rotateY(360deg)"
        setTimeout(event = () => {enemy.style.transitionDuration = "0s"; enemy.style.removeProperty("transform")}, 200)
        enemy.style.transitionDuration = "0.2s"
    })

    setTimeout(event => Play(dummyAttack.content, 0), 2500)
}