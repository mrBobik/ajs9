export default class Character {
  constructor(name, type) {
    if (name && typeof (name) === 'string' && name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('Имя не соответствует критериям');
    }

    const typeList = ['Magician', 'Daemon'];
    const declaredType = typeList.find((element) => element === type);
    if (type && typeof (type) === 'string' && declaredType) {
      this.type = type;
    } else {
      throw new Error('Неизвестный тип');
    }

    this.health = 100;
    this.level = 1;

    this.attack = null;
    this.defence = null;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Персонаж мертв');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж мертв');
    }
  }
}
