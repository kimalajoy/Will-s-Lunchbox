class LunchBox {
  constructor (lunchbox){
    this.owner = lunchbox.owner;
    this.material = lunchbox.madeOf;
    this.shape = lunchbox.shape;
    this.color = lunchbox.color;
    this.handle = true;
    this.snacks = [];

  }
  acquireSnack (snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks () {
    var h = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].healthy == true) {
        h.push(this.snacks[i]);
      }
    }

    return h;
  }
}

module.exports = LunchBox;
