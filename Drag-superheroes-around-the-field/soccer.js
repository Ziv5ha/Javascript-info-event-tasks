const draggables = document.querySelectorAll(".draggable")

let shiftX = 0
let shiftY = 0

function movethumbElement(event){
    const movingElem = document.getElementsByClassName("moving")[0]
    movingElem.style.position = "absolute"
    let newLeft = event.clientX - shiftX
    let newTop = event.clientY - shiftY
    if (newLeft < 0) {
        newLeft = 0
    }
    if (newTop < 0) {
        newTop = 0
    }
    movingElem.style.left = `${newLeft}px`
    movingElem.style.top = `${newTop}px`
}
function primeMove(event){
    const targetElem = event.target
    targetElem.classList.add("moving")
    shiftX = event.clientX - targetElem.getBoundingClientRect().left
    shiftY = event.clientY - targetElem.getBoundingClientRect().top
    document.addEventListener("mousemove", movethumbElement)
    document.addEventListener("mouseup", finishMove)
}
function finishMove(){
    const targeted = document.getElementsByClassName("moving")
    targeted[0].classList.remove("moving")
    document.removeEventListener("mousemove", movethumbElement)
    document.removeEventListener("mouseup", finishMove)
}
for (let draggableElem of draggables){
    draggableElem.addEventListener("mousedown", primeMove)
    draggableElem.ondragstart = () => {return false}
}