//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MISCELLANEOUS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//rearrange champie's position on scene
function ChangePosition() {document.querySelector("#champie_box").style.marginTop = `${document.querySelector("#background").clientHeight - champie.clientHeight}px`}
ChangePosition()


//rotate "champie" 360deg, after 0.2s modify transition duration to 0s (to disallow next animation) and remove transform, return back the 0.2s to transition duration
champie.addEventListener("click", (event) => {
    champie.style.transform = "rotateY(360deg)"
    setTimeout(event = () => {champie.style.transitionDuration = "0s"; champie.style.removeProperty("transform")}, 200)
    champie.style.transitionDuration = "0.2s"
})


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REK'SAI~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//--------------------------------------ATTACK
reksaiChampie.Attack = function () {  
    function AttackP1() {                                   //PHASE 1
        setTimeout(event = () => {
            champie.style.left = `${-x}px` 
    
            x++
            if(x%10 == 0) time += 2
            if(x <= 90) AttackP1()
            else {x=3; time=1; x_old=x; AttackP2()} 
        }, time)
    }
    function AttackP2() {                                   //PHASE 2
        setTimeout(event = () => {
            y = Math.sin(x/150)*50                
            console.log(y)
    
            champie.style.left = `${x}px` 
            champie.style.bottom = `${y}px`
    
            x += 3
            if(x <= 516) AttackP2()
            else setTimeout(event = () => {champie.style.removeProperty("left"); champie.style.removeProperty("bottom")}, 500)
        }, 1)
    }
    AttackP1()
}