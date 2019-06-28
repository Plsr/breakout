class Ball {
  constructor(initialPosX, initialPosY, radius, playingField) {
    this.posX = initialPosX
    this.posY = initialPosY
    this.radius = radius

    // Fixed values
    this.fillColor = "#0095DD"
    this.movement = { dx: 2, dy: -2 }
    this.ctx = playingField.ctx
    this.fieldDimensions = playingField.dimensions
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI*2);
    this.ctx.fillStyle = this.fillColor;
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.checkBoundaryCollision()
    this.posX += this.movement.dx
    this.posY += this.movement.dy
    this.draw()
  }

  reverseXMovement() {
    this.movement.dx = -this.movement.dx
  }

  reverseYMovement() {
    this.movement.dy = -this.movement.dy
  }

  checkBoundaryCollision() {
    const nextXPos = this.posX + this.movement.dx
    const nextYPos = this.posY + this.movement.dy

    if(nextXPos > this.fieldDimensions.width - this.radius || nextXPos < this.radius) {
      this.reverseXMovement()
    }

    if(nextYPos > this.fieldDimensions.height - this.radius || nextYPos < this.radius) {
      this.reverseYMovement()
    }
  }
}

export default Ball
