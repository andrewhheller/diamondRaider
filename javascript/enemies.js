// ### ENEMY COMPONENT ###
const enemy = {

  image: '',
  total: 5,
  enemies: [],
  x: 50,
  y: -45,
  width: 50,
  height: 50,
  speed: 3,

  positionEnemies: function() {
    for (let i = 0; i < this.total; i++) {
      this.enemies.push([this.x, this.y, this.width, this.height, this.speed]);
      this.x += this.width + 60
    }
  },

  drawEnemies: function() {
    for (let i = 0; i < this.enemies.length; i++) {
      ctx.drawImage(this.image, this.enemies[i][0], this.enemies[i][1])
    }
  },

  moveEnemies: function() {
    for (let i = 0; i < this.enemies.length; i++) {
      if(this.enemies[i][1] < CANVAS_HEIGHT) {
        this.enemies[i][1] += this.enemies[i][4];
      }
      else if (this.enemies[i][1] > CANVAS_HEIGHT - 1){
        this.enemies[i][1] = -45;
      }
    }
  },

  addRandomEnemy: function() {
    this.enemies.push([
      (Math.floor(Math.random() * 500) + 50),
      enemy.y,
      enemy.width,
      enemy.height,
      enemy.speed
    ])
  }

}
