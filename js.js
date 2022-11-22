let body = document.querySelector("body")
body.innerHTML = `<img id="champie" src="Rek'Sai/Sprite_readjusted - Idle2.png">` + body.innerHTML

let champie = document.querySelector("#champie"); champie.addEventListener("click", (event) => {champie.style.transform = "rotateY(360deg)"})
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