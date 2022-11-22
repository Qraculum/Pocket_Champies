let body = document.querySelector("body")
document.getElementById("champie_box").innerHTML = `<img id="champie" height="256" src="Rek'Sai/Sprite_readjusted - Idle2.png">`

let champie = document.querySelector("#champie")
let idleSprite = 1, pos, key, i



//idle animation
function IdleAnimation() {                                                                    
    champie.src = `Rek'Sai/Sprite_readjusted - Idle${idleSprite}.png`
    idleSprite == 2 ? idleSprite=1 : idleSprite=2
}
let idleAnimStart = setInterval(IdleAnimation, 500)



//rearrange champie's position on scene
function ChangePosition() {document.querySelector("#champie_box").style.marginTop = `${document.querySelector("#background").clientHeight - champie.clientHeight}px`}
ChangePosition()
console.log(champie.clientHeight)



//CHAMPIE 
//rotate "champie" 360deg, after 0.2s modify transition duration to 0s (to disallow next animation) and remove transform, return back the 0.2s to transition duration
champie.addEventListener("click", (event) => {
    champie.style.transform = "rotateY(360deg)"
    setTimeout(event = () => {champie.style.transitionDuration = "0s"; champie.style.removeProperty("transform")}, 200)
    champie.style.transitionDuration = "0.2s"
})

document.addEventListener("keydown", (event) => {
    key = event.keyCode
    if (key == `69`) {
        i = 1
        function Repeat() {
            setTimeout(event = () => {
                y = Math.log2(i+25)*75-350 
                console.log(y)

                champie.style.left = `${i}px` 
                champie.style.bottom = `${y}px`

                i++
                if(i <= 516) Repeat()
            }, 5)
        }
        Repeat()
    }
})
