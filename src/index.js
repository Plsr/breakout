import Canvas from './Canvas'
import Ball from './Ball'


const PlayingField = new Canvas()

const ballInitialX = PlayingField.width / 2
const ballInitialY = PlayingField.height - 30
const MainBall = new Ball(ballInitialX, ballInitialY, 10, PlayingField)


function draw() {
  PlayingField.clear()
  MainBall.move()
}

setInterval(draw, 10);
