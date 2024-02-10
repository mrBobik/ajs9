import Character from './app';
import PowerCalculate from './PowerCalculate';

export default class Daemon extends PowerCalculate {
  constructor(name, type) {
    super(name, type);
    // this.attack = 10;
    this.defence = 40;
  }
}
