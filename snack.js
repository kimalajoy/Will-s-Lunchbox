class Snack {
  constructor (type){
    this.deliciousLevel = 'extra';
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.healthy = this.type.includes('Fruit');
  }
  getEaten() {
    this.amount -= 10;

    if (this.amount <= 20) {
      this.cuttingItClose = true;
    } else {
      this.cuttingItClose = false;
    }
  }
}

module.exports = Snack;
