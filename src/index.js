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

function checkLoseCondition() {
  if (MainBall.posY >= PlayingField.height - MainBall.radius) {
    if (MainBall.posX >= MainPaddle.posX && MainBall.posX <= MainPaddle.posX + MainPaddle.width) {
      return MainBall.reverseYMovement()
    }

    alert('Game Over')
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
  }
}

function draw() {
  PlayingField.clear()
  checkLoseCondition()
  MainBall.move()
  MainPaddle.update()
}

var interval = setInterval(draw, 10);
