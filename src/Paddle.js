class Paddle {
  constructor(initialPosX, width, height, playingField) {
    this.posX = initialPosX
    this.width = width
    this.height = height

    this.fillColor = '#0095DD'
    this.ctx = playingField.ctx
    this.playingFieldDimensions = playingField.dimensions

    this.rightPressed = false
    this.leftPressed = false
    document.addEventListener("keydown", e => this.keyDownHandler(e), false)
    document.addEventListener("keyup", e => this.keyUpHandler(e), false)
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.posX, this.playingFieldDimensions.height - this.height, this.width, this.height);
    this.ctx.fillStyle = this.fillColor;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    if(this.rightPressed && this.posX < this.playingFieldDimensions.width - this.width) {
      this.posX += 7;
    }
    else if(this.leftPressed && this.posX > 0) {
      this.posX -= 7;
    }
    this.draw()
  }

  keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = true
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = true
    }
  }

  keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
      this.rightPressed = false
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
      this.leftPressed = false
    }
  }
}

export default Paddle
