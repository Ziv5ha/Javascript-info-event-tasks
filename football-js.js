const aspectRatio = "01:01"
const fieldSize = 500
const statiumSize = 15
const ballSize = 30



const field = document.getElementById("field")



function createField(size, aspectRatio){
    const h = parseInt(aspectRatio.slice(0,Math.floor(aspectRatio.length/2)))*size
    const w = parseInt(aspectRatio.slice(Math.ceil(aspectRatio.length/2)))*size
    field.style.width = `${w}px`
    field.style.height = `${h}px`
    field.style.borderWidth = `${statiumSize}px`
    return field
}

function createBall(ballSize){
    const ball = document.createElement("span")
    ball.setAttribute("id", "ball")
    ball.textContent = "⚽"
    ball.style.textAlign = "center"
    ball.style.fontSize = `${ballSize}px`
    ball.style.position = "absolute"
    return ball
}
function createBallOnField(ballSize){
    // const startingPoint = document.querySelector("#field")
    const ball = createBall(ballSize)
    field.appendChild(ball)
    
    // startingPoint.textContent = "⚽"
}

createField(fieldSize, aspectRatio)
createBallOnField(ballSize)

function moveBall({clientX, clientY}){
    const ball = document.getElementById("ball")
    let fieldCoords = field.getBoundingClientRect();
    let BallX = clientX - ball.clientWidth/2 
    let BallY = clientY - ball.clientHeight/2
    if (BallX > fieldCoords.width-statiumSize-(ball.clientWidth/2)-fieldCoords.x) BallX = fieldCoords.width-statiumSize-(ball.clientWidth/2)-fieldCoords.x
    if (BallX < fieldCoords.left+ball.clientWidth/2) BallX = fieldCoords.left/2+statiumSize
    if (BallY > fieldCoords.height-ball.clientHeight-statiumSize) BallY = fieldCoords.height-ball.clientHeight-fieldCoords.y
    if (BallY < fieldCoords.top+ball.clientHeight/2) BallY = fieldCoords.top/2+statiumSize
    ball.style.left = BallX + 'px';
    ball.style.top = BallY + 'px';
    console.log(fieldCoords)

}

field.addEventListener("click", moveBall)