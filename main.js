let canvas = document.getElementById('tankCanvas');
let game = new Game(canvas) 

window.requestAnimationFrame(runGame)
window.onkeypress = function(e){
  a = e.keyCode
  game.control(e.keyCode)
}

function runGame() {
 
  game.requestNextFrame()
  game.draw()
  
  window.requestAnimationFrame(runGame)
}