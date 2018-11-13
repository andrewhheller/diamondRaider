// ### SCOREBOX COMPONENT ###

const score = {
  
  total: 0,

  scoreBox: function() {
    ctx.font = '25px VT323';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Score: ', 470, 30);
    ctx.fillText(this.total, 545, 30);
  
    ctx.fillText('Lives: ', 30, 30);
    ctx.fillText(player.lives, 105, 30)
  },

  positiveScore: function() {
    if(this.total < 0) {
      this.total = 0
    }
  }

}



// ### PLAYER / LIVES ###

const player = {

  // triggers game over / continue operations
  alive: true,
  
  // life count
  lives: 3,

  checkLives: function() {
    this.lives -= 1;
    sounds.alienCollide.play();

    if(this.lives > 0){
      gameActions.reset();
    }
    else if(this.lives === 0) {
      this.alive = false;
      sounds.gamePlayMusic.pause();
      sounds.backgroundMusic.replay();
    }
  }

}
