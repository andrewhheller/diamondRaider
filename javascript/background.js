const background = {

  image: '',
  imageX: 0,
  imageY: 0,
  imageY2: -600,

  drawBackground: function() {
    ctx.drawImage(this.image, this.imageX, this.imageY);
    ctx.drawImage(this.image, this.imageX, this.imageY2);

    if(this.imageY > 600) {
      this.imageY = -599
    }
  
    if(this.imageY2 > 600) {
      this.imageY2 = -599;
    }
  
    this.imageY += 1;
    this.imageY2 += 1;

  }

}
