
// ### GAME ACTIONS ###
const gameActions = {

  status: false,

  start: function() {
    gameActions.status = true
    canvas.removeEventListener('click', gameActions.start)
    sounds.backgroundMusic.pause();
    sounds.gamePlayMusic.play();
  },

  reset: function() {

    let enemyResetX = 50;
    let diamondResetX = 100;

    ship.x = CANVAS_WIDTH / 2 - 25;
    ship.y = CANVAS_HEIGHT - 75;
  
    // reset enemy positions
    for (let i = 0; i < enemy.enemies.length; i++) {
      enemy.enemies[i][0] = enemyResetX;
      enemy.enemies[i][1] = -45;
      enemyResetX += enemy.width + 60;
    }

    // reset diamond positions
    for (let i = 0; i < diamond.diamonds.length; i++) {
      diamond.diamonds[i][0] = diamondResetX;
      diamond.diamonds[i][1] = -45;
      diamondResetX += diamond.width + 150;
    }

    // clear out all remaining lasers
    laser.lasers.splice(0)

  },

  clearCanvas: function() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
