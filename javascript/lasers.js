// ### LASER COMPONENT ###
const laser = {

  total: 5,
  lasers: [],
  remove: false,

  drawLaser: function() {
    if(this.lasers.length) {
      for (let i = 0; i < this.lasers.length; i++) {
        ctx.fillStyle = 'red';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'red'
        ctx.fillRect(this.lasers[i][0], this.lasers[i][1], this.lasers[i][2], this.lasers[i][3]);
        ctx.shadowBlur = 0;
        ctx.shadowColor = ''
      }
    }
  },

  moveLaser: function() {
    for (let i = 0; i < this.lasers.length; i++) {
      if(this.lasers[i][1] > -11) {
        this.lasers[i][1] -= 10;
      }
      else if(this.lasers[i][1] < -10) {
        this.lasers.splice(i, 1)
      }
    }
  },

  hitEnemy: function() {
    for (let i = 0; i < this.lasers.length; i++) {

      for (let j = 0; j < enemy.enemies.length; j++) {
        
        if (
            this.lasers[i][1] <= (enemy.enemies[j][1] + enemy.enemies[j][3]) &&
            this.lasers[i][0] >= enemy.enemies[j][0] && 
            this.lasers[i][0] <= (enemy.enemies[j][0] + enemy.enemies[j][2])
          )
          {
            this.remove = true;
            enemy.enemies.splice(j, 1);
            enemy.addRandomEnemy();
            sounds.alienScore.play();
            score.total += 10;
          }
      }
  
      if(this.remove) {
        this.lasers.splice(0); // cannot remove individual laser, removing all!
        this.remove = false;
      }
    }
  },

  hitDiamond: function() {
    for (let i = 0; i < this.lasers.length; i++) {

      for (let j = 0; j < diamond.diamonds.length; j++) {
        
        if (
            this.lasers[i][1] <= (diamond.diamonds[j][1] + diamond.diamonds[j][3]) &&
            this.lasers[i][0] >= diamond.diamonds[j][0] && 
            this.lasers[i][0] <= (diamond.diamonds[j][0] + diamond.diamonds[j][2])
          )
          {
            this.remove = true;
            diamond.diamonds.splice(j, 1);
            diamond.addRandomDiamond();
            sounds.diamondDestroy.play();
            score.total -= 50;
          }
      }
  
      if(this.remove) {
        this.lasers.splice(0); // cannot remove individual laser, removing all!
        this.remove = false;
      }
    }
  }

}
