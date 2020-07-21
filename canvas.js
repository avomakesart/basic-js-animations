let canvas = document.getElementById('animated-canvas')
let context = canvas.getContext('2d')
let canvasInterval = requestAnimationFrame(canvasAnimation)
let circleX = 60
let velocity = 1
let acceleration = 0.5
let posY = canvas.height / 2

function makeRandom(n) {
  return Math.floor(Math.random() * Math.floor(n))
}

function canvasAnimation() {
  circleX++
  drawCircle(circleX, posY, 25)
  canvasInterval = requestAnimationFrame(canvasAnimation)
}

function drawCircle(x, y, s) {
  //   clearCanvas()
  context.globalCompositeOperation = 'screen'
  context.fillStyle = 'crimson'
  context.beginPath()
  context.arc(x, y, s, 0, 2 * Math.PI)
  context.fill()
  velocity += acceleration
  circleX += velocity

  if (circleX > canvas.width) {
    circleX = makeRandom(canvas.width)
    velocity = makeRandom(3)
    posY = makeRandom(canvas.height)
  }
}

const clearCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)
}
drawCircle()
