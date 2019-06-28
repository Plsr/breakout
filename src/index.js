import Canvas from './Canvas'
import Ball from './Ball'
import Paddle from './Paddle'


const PlayingField = new Canvas()

const ballInitialX = PlayingField.width / 2
const ballInitialY = PlayingField.height - 30
const MainBall = new Ball(ballInitialX, ballInitialY, 10, PlayingField)

const paddleWidth = 75
const paddleInitialX = (PlayingField.width - paddleWidth) / 2
const MainPaddle = new Paddle(paddleInitialX, paddleWidth, 10, PlayingField)


function draw() {
  PlayingField.clear()
  MainBall.move()
  MainPaddle.update()
}

setInterval(draw, 10);
