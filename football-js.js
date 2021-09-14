const aspectRatio = "01:01"
const size = 10
const ballSize = 30



let testTable = []
const field = document.getElementById("field")

const createRow = (rowLength, row) => {
    for (let r=0 ; r<rowLength; r++){
            let tile = document.createElement("td")
            tile.textContent = ""
            row.appendChild(tile)
        }
        return row
}

function createField(size, aspectRatio){
    const field = document.getElementById("field")
    const rowsNum = parseInt(aspectRatio.slice(0,Math.floor(aspectRatio.length/2)))*size
    const rowLength = parseInt(aspectRatio.slice(Math.ceil(aspectRatio.length/2)))*size
    for (let h = 0; h < rowsNum; h++) {
        let row = document.createElement("tr")
        createRow(rowLength, row)
        
        field.appendChild(row)
    }
    return field
}

function createBall(ballSize){
    const ball = document.createElement("span")
    ball.setAttribute("id", "ball")
    ball.textContent = "⚽"
    ball.style.textAlign = "center"
    ball.style.fontSize = `${ballSize}px`
    
    // startingPoint.textContent = "⚽"
    return ball
}
function createBallOnField(ballSize){
    const startingPoint = document.querySelector("td")
    const ball = createBall(ballSize)
    startingPoint.appendChild(ball)
    
    // startingPoint.textContent = "⚽"
}

createField(size, aspectRatio)
createBallOnField(ballSize)

function moveBall(target){
    const currentPosition = document.querySelector("#ball")
    currentPosition.parentElement.removeChild(currentPosition)
    const newPosition = target
    const ball = createBall(ballSize)
    newPosition.appendChild(ball)
}

// const field = document.getElementById("field")
// field.addEventListener("click", ()=>moveBall({target}))
field.addEventListener("click", ({target})=>{moveBall(target)})