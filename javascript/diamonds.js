// ### DIAMOND COMPONENT ###
const diamond = {

  image: '',
  total: 3,
  diamonds: [],
  x: 100,
  y: -45,
  width: 50,
  height: 30,
  speed: 1,

  positionDiamonds: function() {
    for (let i = 0; i < this.total; i++) {
      this.diamonds.push([this.x, this.y, this.width, this.height, this.speed]);
      this.x += this.width + 150
    }
  },

  drawDiamonds: function() {
    for (let i = 0; i < this.diamonds.length; i++) {
      ctx.drawImage(this.image, this.diamonds[i][0], this.diamonds[i][1])
    }
  },

  moveDiamonds: function() {
    for (let i = 0; i < this.diamonds.length; i++) {
      if(this.diamonds[i][1] < CANVAS_HEIGHT) {
        this.diamonds[i][1] += this.diamonds[i][4];
      }
      else if (this.diamonds[i][1] > CANVAS_HEIGHT - 1){
        this.diamonds[i][1] = -45;
      }
    }
  },

  addRandomDiamond: function() {
    this.diamonds.push([
      (Math.floor(Math.random() * 500) + 50),
      diamond.y,
      diamond.width,
      diamond.height,
      diamond.speed
    ])
  }

}
