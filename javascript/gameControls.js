const gameControls = {

  // holds object of all 'pressed' keys set to value of true / false if pressed / not-pressed
  keyMap: {},

  keyAction: function() {

    // arrow keys
    if(this.keyMap['37']) {
      ship.x -= 8
      ship.image.src = 'img/ship-thrust.png';
    }

    if(this.keyMap['39']) {
      ship.x += 8
      ship.image.src = 'img/ship-thrust.png';
    }
    
    if(this.keyMap['38']) {
      ship.y -= 8
      ship.image.src = 'img/ship-thrust.png';
    }

    if(this.keyMap['40']) {
      ship.y += 8
      ship.image.src = 'img/ship-thrust.png';
    }

    // lasers key
    if(this.keyMap['32'] && laser.lasers.length <= laser.total) {
      sounds.shipLaser.play();
      laser.lasers.push([ship.x + 29.5, ship.y - 20, 4, 20])
    }

  },

  clamp: function() {

    // stops ship on left x axis
    if(ship.x <= 0) {
      ship.x = 0
    }

    // stops ship on right x axis
    if(ship.x + ship.width >= CANVAS_WIDTH) {
      ship.x = CANVAS_WIDTH - ship.width
    }

    // stops ship on top y axis
    if(ship.y <= 0) {
      ship.y = 0
    }

    // stops ship on bottom y axis
    if(ship.y + ship.height >= CANVAS_HEIGHT) {
      ship.y = CANVAS_HEIGHT - ship.height
    }

  }

 }
