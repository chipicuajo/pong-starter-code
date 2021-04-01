let canvas = document.querySelector('canvas')
canvas.style.backgroundColor = "#302c2c"

// getting the paintbrush
let ctx = canvas.getContext('2d')

// The DOM of the start and the restart buttons
let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')

let circleX = 50, circleY = 50, circleRadius = 30;
let incrX = 5;
let incrY = 5;
let isGameOver = false;
let itervalId = 0;

function drawCircle() {
    ctx.beginPath()
    ctx.fillStyle = "#19fae0"
    ctx.arc(circleX, circleY, 30, 0, 2*Math.PI)
    ctx.fill()
    ctx.closePath()
}

function collision(){
    if(circleX >canvas.width - circleRadius){
        incrX = -5
    }
    if(circleY >canvas.height - circleRadius){
        incrY = -5
    }
    if(circleX<circleRadius){
        incrX = 5
    }
    if(circleY<circleRadius){
        incrY = 5
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawCircle()
    collision()
    circleX += incrX
    circleY += incrY
    requestAnimationFrame(animate)
    if(isGameOver){
        cancelAnimationFrame()

    }else{
        intervalId = requesAnimationFrame(animate)
    }
}

function start(){
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    animate()
}

function restart() {

}

 //Everything begins here
window.addEventListener('load', () => {
    canvas.style.display = 'none'
    restartBtn.style.display = 'none'
    start()
    startBtn.addEventListener('click', () => {
         start()
    })

    restartBtn.addEventListener('click', () => {
        restart()
    })
})