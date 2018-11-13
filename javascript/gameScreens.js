// ### GAME SCREENS (game over, start screen) ###

const gameScreens = {

  gameOver: function() {
    if(!player.alive) {
      
      // game over
      ctx.fillStyle = 'red';
      ctx.fillText('Game Over!', 245, CANVAS_HEIGHT / 2);
      
      // play again button
      ctx.fillStyle = 'green'
      ctx.fillRect((CANVAS_WIDTH / 2) - 70, (CANVAS_HEIGHT / 2) + 10, 125, 40);

      // play again button text
      ctx.font = 'regular 50px VT323';
      ctx.fillStyle = 'white';
      ctx.fillText('Play Again?', 240, (CANVAS_HEIGHT / 2) + 35);

      sounds.gamePlayMusic.pause();

      // click listener
      canvas.addEventListener('click', continueButton, false);
    }
  },

  start: function() {
    if (!gameActions.status) {

      // game pic
      // ctx.drawImage('img/saturn-image.jpeg', CANVAS_WIDTH / 2 - 200, CANVAS_HEIGHT / 2 - 100)

      // game title
      ctx.font = '75px VT323';
      ctx.fillStyle = 'purple';
      ctx.fillText('Diamond Raider', CANVAS_WIDTH / 2 - 200, CANVAS_HEIGHT / 2 - 10);

      // game controls
      ctx.font = '30px VT323';
      ctx.fillStyle = 'white';
      ctx.fillText('Click to play', CANVAS_WIDTH / 2 - 75, CANVAS_HEIGHT / 2 + 30);
      ctx.fillText('Arrow keys to move', CANVAS_WIDTH / 2 - 105, CANVAS_HEIGHT / 2 + 60);
      ctx.fillText('Space to fire', CANVAS_WIDTH / 2 - 70, CANVAS_HEIGHT / 2 + 90);
    }
  
  }

}



// ### AFTER-DEATH CONTINUE ###

// continue button
const continueButton = (event) => {
  let cursorPos = getCursorPos(event);

  if (
    cursorPos.x > (CANVAS_WIDTH  / 2) - 53 &&
    cursorPos.x < (CANVAS_WIDTH  / 2) + 47 &&
    cursorPos.y > (CANVAS_HEIGHT / 2) + 10 &&
    cursorPos.y < (CANVAS_HEIGHT / 2) + 50
  )
  {
    player.alive = true;
    player.lives = 3;
    score.total = 0;
    gameActions.reset();
    sounds.backgroundMusic.pause();
    sounds.gamePlayMusic.replay();
    canvas.removeEventListener('click', continueButton, false);
  }

}

// get cursor position
const getCursorPos = (event) => {

  let x;
  let y;

  if (event.pageX || event.pageY) {
    x = event.pageX;
    y = event.pageY;
  }
  else {
    x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  let cursorPos = new CursorPosition(x, y);

  return cursorPos;
}

// cursor position coordinate Constructor
function CursorPosition(x,y) {
  this.x = x;
  this.y = y;
 }
