let body = document.getElementsByTagName("body")[0], idleSprite = 1
body.innerHTML = 
`<div> 
    <img id="champie" src="Sprite_readjusted - Idle2.png"> 
</div>` + body.innerHTML


function IdleAnimation() {
    document.getElementById("champie").src = `Sprite_readjusted - Idle${idleSprite}.png`
    idleSprite == 2 ? idleSprite=1 : idleSprite=2
    console.log(idleSprite)
}
let idleAnimStart = setInterval(IdleAnimation, 500)

