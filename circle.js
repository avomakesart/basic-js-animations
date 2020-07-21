let ol = 0
let isPLaying = false
let circleInterval
let element = document.getElementById('circle')
let scale = 1

const circleAnimation = (time) => {
  ol++
  scale++
  element.style.left = ol + 'px'
  element.style.width = scale + 'px'
  element.style.height = scale + 'px'
  element.style.borderRadius = scale * 100 + 'px'
  circleInterval = requestAnimationFrame(circleAnimation)
}

const mouseClicked = () => {
  if (isPLaying) {
    isPLaying = false
    document.getElementById('circle').style.backgroundColor = 'dimgrey'
    cancelAnimationFrame(circleInterval)
  } else {
    isPLaying = true
    document.getElementById('circle').style.backgroundColor = 'crimson'
    circleInterval = requestAnimationFrame(circleAnimation)
  }
}

document.getElementById('circle').addEventListener('click', mouseClicked)
document.getElementById('circle').style.backgroundColor = 'dimgrey'
