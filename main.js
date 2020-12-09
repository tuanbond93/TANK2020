let canvas = document.getElementById('tankCanvas');
let game = new Game(canvas) 

window.requestAnimationFrame(runGame)

function runGame() {
  
  game.requestNextFrame()
  game.draw()

  window.requestAnimationFrame(runGame)
}