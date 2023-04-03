//? swipe all champies to the left
function ToggleRight() {
    click.currentTime = 0
    click.play()
    if (wait) {
        // remove transform from the image inside of champie_box and add it to next in the row
        document.getElementsByClassName("champie_img")[parseInt(champieBoxQuantity/2-0.1)].style.removeProperty("transform")
        document.getElementsByClassName("champie_img")[parseInt(champieBoxQuantity/2-0.1)+1].style.transform = "scale(1.15)"
        // change opacity of middle and right line over the champies' images
        document.getElementsByClassName("line")[parseInt(champieBoxQuantity/2-0.1)].style.opacity = "0%"
        document.getElementsByClassName("line")[parseInt(champieBoxQuantity/2-0.1)+1].style.opacity = "100%"
        // change height of middle and right champies' names over the images
        document.getElementsByClassName("champie_box")[parseInt(champieBoxQuantity/2-0.1)].getElementsByTagName("h1")[0].style.removeProperty("top")
        document.getElementsByClassName("champie_box")[parseInt(champieBoxQuantity/2-0.1)+1].getElementsByTagName("h1")[0].style.top = "-40px"
        // move all boxes to the left by 300px
        for(i=0; i<champieBoxQuantity; i++) document.getElementsByClassName("champie_box")[i].style.transform = "translate(-300px, 0px)"  

        // after 0.4s 
        setTimeout(event => {
            // put the first object as the last
            document.querySelector("#pokemon_selection_case").appendChild(document.getElementsByClassName("champie_box")[0], document.getElementsByClassName("champie_box")[champieBoxQuantity-1])
            document.querySelectorAll(".champie_box").forEach(champie_box => {  // for every champie_box remove transition and transform in style
                champie_box.style.removeProperty("transition")
                champie_box.style.removeProperty("transform")
            })

            // left panel
            if (document.getElementsByClassName("champie_box")[parseInt(champieBoxQuantity/2-0.1)].id == "reksaiChampie"){
                document.getElementById("stats").innerHTML = `name: ${reksaiChampie.name}<br>
                                                              health: ${reksaiChampie.health}<br>
                                                              attack: ${reksaiChampie.attack}<br>
                                                              defence: ${reksaiChampie.defence}<br>
                                                              speed: ${reksaiChampie.speed}`
            }
            else {
                document.getElementById("stats").innerHTML = `name: ROCK<br>
                                                              health: 1<br>
                                                              attack: 1<br>
                                                              defence: 1<br>
                                                              speed: 1<br>`
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
    click.currentTime = 0
    click.play()
    if (wait) {
        // remove transform from the image inside of champie_box and add it to previous in the row
        document.getElementsByClassName("champie_img")[parseInt(champieBoxQuantity/2-0.1)].style.removeProperty("transform")
        document.getElementsByClassName("champie_img")[parseInt(champieBoxQuantity/2-0.1)-1].style.transform = "scale(1.15)"
        // change opacity of middle and right line over the champies' images
        document.getElementsByClassName("line")[parseInt(champieBoxQuantity/2-0.1)].style.opacity = "0%"
        document.getElementsByClassName("line")[parseInt(champieBoxQuantity/2-0.1)-1].style.opacity = "100%"
        // change height of middle and right champies' names over the images
        document.getElementsByClassName("champie_box")[parseInt(champieBoxQuantity/2-0.1)].getElementsByTagName("h1")[0].style.removeProperty("top")
        document.getElementsByClassName("champie_box")[parseInt(champieBoxQuantity/2-0.1)-1].getElementsByTagName("h1")[0].style.top = "-40px"
        // move all boxes to the right by 300px
        for(i=0; i<champieBoxQuantity; i++) document.getElementsByClassName("champie_box")[i].style.transform = "translate(300px, 0px)"

        // after 0.4s 
        setTimeout(event => {
            // put the last object as the first
            document.querySelector("#pokemon_selection_case").insertBefore(document.getElementsByClassName("champie_box")[champieBoxQuantity-1], document.getElementsByClassName("champie_box")[0])
            document.querySelectorAll(".champie_box").forEach(champie_box => {
                champie_box.style.removeProperty("transition")
                champie_box.style.removeProperty("transform")
            })

            // left panel
            if (document.getElementsByClassName("champie_box")[parseInt(champieBoxQuantity/2-0.1)].id == "reksaiChampie"){
                document.getElementById("stats").innerHTML = `name: ${reksaiChampie.name}<br>
                                                              health: ${reksaiChampie.health}<br>
                                                              attack: ${reksaiChampie.attack}<br>
                                                              defence: ${reksaiChampie.defence}<br>
                                                              speed: ${reksaiChampie.speed}`
            }
            else {
                document.getElementById("stats").innerHTML = `name: ROCK<br>
                                                              health: 1<br>
                                                              attack: 1<br>
                                                              defence: 1<br>
                                                              speed: 1<br>`
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