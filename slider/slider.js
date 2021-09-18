const thumbs = document.querySelectorAll(".thumb")
const slider = document.getElementById("slider")

let shiftX = 0
function movethumbElement(event){
    const thumb = document.getElementsByClassName("moving")[0]
    let newLeft = event.clientX - slider.getBoundingClientRect().left - shiftX
    if (newLeft < 0) {
        newLeft = 0;
      }
    let rightEdge = slider.getBoundingClientRect().width;
    if (newLeft > rightEdge) {
        newLeft = rightEdge;
    }
    thumb.style.left = `${newLeft}px`
}
function primeMove(event){
    const targetThumb = event.target
    targetThumb.classList.add("moving")
    targetThumb.style.position = 'relative'
    shiftX = event.clientX - targetThumb.getBoundingClientRect().left
    document.addEventListener("mousemove", movethumbElement)
    document.addEventListener("mouseup", finishMove)
}
function finishMove(){
    const targeted = document.getElementsByClassName("moving")
    targeted[0].classList.remove("moving")
    document.removeEventListener("mousemove", movethumbElement)
    document.removeEventListener("mouseup", finishMove)
}
for (let thumb of thumbs){
    thumb.addEventListener("mousedown", primeMove)
}