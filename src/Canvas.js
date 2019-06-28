// TODO: Could also be ganerated with a given widht and height dynamically
class Canvas {
  constructor() {
    this.canvas = document.getElementById("myCanvas")
    this.ctx = this.canvas.getContext("2d")
    
    this.width = this.canvas.width
    this.height = this.canvas.height
  }

  get dimensions() {
    return { width: this.width, height: this.height }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

export default Canvas
