import Character from './app';
import PowerCalculate from './PowerCalculate';
// import Math from './PowerCalculate';

export default class Magician extends PowerCalculate {
  constructor(name, type) {
    super(name, type);
    // this.attack = 10;
    this.defence = 40;
  }
}
