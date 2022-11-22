let body = document.querySelector("body")
body.innerHTML = `<img id="champie" src="Rek'Sai/Sprite_readjusted - Idle2.png">` + body.innerHTML

let champie = document.querySelector("#champie")
    //rotate "champie" 360deg, after 0.2s modify transition duration to 0s (to disallow next animation) and remove transform, return back the 0.2s to transition duration
    champie.addEventListener("click", (event) => {
        champie.style.transform = "rotateY(360deg)"
        setTimeout(event = () => {champie.style.transitionDuration = "0s"; champie.style.removeProperty("transform")}, 200)
        champie.style.transitionDuration = "0.2s"
    })
let idleSprite = 1, pos



//idle animation
function IdleAnimation() {                                                                    
    champie.src = `Rek'Sai/Sprite_readjusted - Idle${idleSprite}.png`
    idleSprite == 2 ? idleSprite=1 : idleSprite=2
}
let idleAnimStart = setInterval(IdleAnimation, 500)



//rearrange champie's position on scene
function ChangePosition() {champie.style.top = `${document.querySelector("#background").clientHeight - champie.clientHeight}px`}
ChangePosition()
console.log(champie.clientHeight)