// ### PLAYER COMPONENT ###
const ship = {

  image: '',
  x:  (CANVAS_WIDTH / 2) - 30,
  y:  CANVAS_HEIGHT - 75,
  width: 60,
  height: 57,

  getDistance: function(shipX, shipY, otherObjX, otherObjY) {
    let xDistance = otherObjX - shipX;
    let yDistance = otherObjY - shipY;
  
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
  },

  drawShip: function() {
    ctx.drawImage(this.image, this.x, this.y)
  },

  shipTouchEnemy: function() {
    for (let i = 0; i < enemy.enemies.length; i++) {

      if ( this.getDistance(this.x, this.y, enemy.enemies[i][0], enemy.enemies[i][1]) < 50 )
        {
          player.checkLives()
        }
    }
  },

  shipTouchDiamond: function() {
    for (let i = 0; i < diamond.diamonds.length; i++) {

      if ( this.getDistance(this.x, this.y, diamond.diamonds[i][0], diamond.diamonds[i][1]) < 40 )
        {
          this.handleShipTouchDiamonds(diamond.diamonds, i)
        }
  
    }
  },

  handleShipTouchDiamonds: function(diamonds, i) {
    // console.log('ship touch diamond')
    diamonds.splice(i, 1)
    diamond.addRandomDiamond();
    sounds.diamondScore.play();
    score.total += 50;
  }
  
}
