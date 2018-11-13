// ### MAIN GAME UPDATE / LOOP ###

// position enemies above canvas area (just one call needed)
enemy.positionEnemies();

// position diamonds above canvas area (just one call needed)
diamond.positionDiamonds();

// game update loop
const gameLoop = () => {

  gameActions.clearCanvas();
  background.drawBackground();

  if(player.alive && gameActions.status && player.lives > 0) {

    ship.drawShip();
    ship.shipTouchEnemy();
    ship.shipTouchDiamond();
  
    enemy.drawEnemies();
    enemy.moveEnemies();

    diamond.drawDiamonds();
    diamond.moveDiamonds();

    laser.drawLaser();
    laser.moveLaser();
    laser.hitEnemy();
    laser.hitDiamond();

    gameControls.keyAction();
    gameControls.clamp();
  }

  score.positiveScore();
  score.scoreBox();
  gameScreens.gameOver();
  gameScreens.start();
}
