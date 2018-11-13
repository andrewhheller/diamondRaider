// ### MASTER INITIALIZATION FUNCTION ###
const init = () => {

  // start backround intro music
  sounds.backgroundMusic.play();

  // set background image
  background.image = new Image();
  background.image.src = 'img/starfield.jpg';

  // set player ship image
  ship.image = new Image();
  ship.image.src = 'img/ship.png'

  // set enemy image
  enemy.image = new Image();
  enemy.image.src = 'img/enemy.png';

  // set diamond image
  diamond.image = new Image();
  diamond.image.src = 'img/diamond.png';

  // game screen redraw
  setInterval(gameLoop, 25);

  // key controls event listeners
  window.addEventListener('keydown', function(event) {
    gameControls.keyMap[event.keyCode] = true
  })

  window.addEventListener('keyup', function(event) {
    gameControls.keyMap[event.keyCode] = false
    ship.image.src = 'img/ship.png'

  })

  // game start event listener
  canvas.addEventListener('click', gameActions.start)

}

// init()
