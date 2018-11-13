// sounds
function Sound(src, volume = "1.0", loop = false) {

  // create DOM element
  this.sound = document.createElement('audio');

  // configure source
  this.sound.src = src;

  // volume
  this.sound.volume = volume;

  // loop
  this.sound.loop = loop;

  // set attributes
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');

  // hide
  this.sound.style.display = 'none';

  // add to DOM
  document.body.appendChild(this.sound);

  // play
  this.play = function() {
    this.sound.play()
  }

  // stop-pause
  this.pause = function() {
    this.sound.pause();
  }

  this.replay = function(){
    this.sound.currentTime = 0;
    this.sound.play();
  }
}

const sounds = {

  backgroundMusic:  new Sound('sounds/background-music.mp3', "0.5"),
  shipLaser: new Sound('sounds/fire.wav', "0.2"),
  alienScore: new Sound('sounds/alienScore.wav', "0.3"),
  alienCollide: new Sound('sounds/alienCollide.wav', "0.3"),
  diamondScore: new Sound('sounds/diamondScore.wav', "0.3"),
  diamondDestroy: new Sound('sounds/diamondDestroy.wav', "0.3"),
  gamePlayMusic: new Sound('sounds/gamePlayMusic.mp3', "0.2", true)
  
}
