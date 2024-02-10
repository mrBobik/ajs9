import Character from './app';

export default class PowerCalculate extends Character {
  constructor(name, type, stoned = false, damagePower = 10) {
    super(name, type);
    // this.attack = 10;
    this.stoned = stoned;
    this.damagePower = damagePower;
  }

  setStoned() {
    this.stoned = true;
  }

  resetStoned() {
    this.stoned = false;
  }

  setDamagePower(cell) {
    if (typeof cell !== 'number' || !Number.isInteger(cell) || cell < 1 || cell > 5) {
      throw new Error('Аттака c такой позиции невозможна');
    }
    this.damagePower = this.calculateDamagePower(cell); // ??
  }

  calculateDamagePower(cell) {
    let damagePower = this.damagePower * ((10 - (cell - 1)) / 10);

    if (this.stoned) {
      damagePower -= Math.round(Math.log2(cell) * 5);
    }

    return damagePower;
  }
}
