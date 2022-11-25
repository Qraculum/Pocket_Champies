let body = document.querySelector("body")
let idleSprite = 1, pos, key, x, time=1

const reksaiChampie = new Champies("Rek'Sai", 15, 4, 2, 6, 256)
console.log(reksaiChampie)

document.getElementById("champie_box").innerHTML = `<img id="champie" height="${reksaiChampie.height}" src="${reksaiChampie.name}/Sprite_readjusted - Idle2.png">`
let champie = document.querySelector("#champie")
let idleAnimStart = setInterval(idleSprite=reksaiChampie.IdleAnimation(idleSprite), 500)

document.addEventListener("keydown", (event) => {
    key = event.keyCode
    if (key == `69`) {
        x = 2
        reksaiChampie.Attack()
    }
})
//idle animation
/*
function IdleAnimation() {                                                                    
    champie.src = `Rek'Sai/Sprite_readjusted - Idle${idleSprite}.png`
    idleSprite == 2 ? idleSprite=1 : idleSprite=2
}
let idleAnimStart = setInterval(IdleAnimation, 500)
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                                                                      CHAMPIE 
//rotate "champie" 360deg, after 0.2s modify transition duration to 0s (to disallow next animation) and remove transform, return back the 0.2s to transition duration



//attack (first phase1, then phase2 with quick lunge)


