import Character from '../app';
import PowerCalculate from '../PowerCalculate';
import Daemon from '../Daemon';
import Magician from '../Magician';

// Тесты для класса Daemon

test.each([
  ['1 cell', 1, 10],
  ['2 cell', 2, 9],
  ['3 cell', 3, 8],
  ['4 cell', 4, 7],
  ['5 cell', 5, 6],
])('Should be correct attack with %s, without stoned', (_, cell, expected) => {
  const player = new Daemon('Boomer', 'Daemon');
  player.resetStoned();
  player.setDamagePower(cell);
  expect(player.damagePower).toBe(expected);
});

test.each([
  ['1 cell', 1, 10],
  ['2 cell', 2, 4],
  ['3 cell', 3, 0],
  ['4 cell', 4, -3],
  ['5 cell', 5, -6],
])('Should be correct attack with %s, with stoned', (_, cell, expected) => {
  const player = new Daemon('Boomer', 'Daemon');
  player.setStoned();
  player.setDamagePower(cell);
  expect(player.damagePower).toBe(expected);
});

test.each([
  ['-1 cell', -1],
  ['0 cell', 0],
  ['6 cell', 6],
  ['5.1 cell', 5.1],
])('Should be trown error with %s', (_, cell) => {
  expect(() => {
    const player = new Daemon('Boomer', 'Daemon');
    player.setDamagePower(cell);
  }).toThrow('Аттака c такой позиции невозможна');
});

// Тесты для класса Magician

test.each([
  ['1 cell', 1, 10],
  ['2 cell', 2, 9],
  ['3 cell', 3, 8],
  ['4 cell', 4, 7],
  ['5 cell', 5, 6],
])('Should be correct attack with %s, without stoned', (_, cell, expected) => {
  const player = new Magician('Boomer', 'Magician');
  player.resetStoned();
  player.setDamagePower(cell);
  expect(player.damagePower).toBe(expected);
});

test.each([
  ['1 cell', 1, 10],
  ['2 cell', 2, 4],
  ['3 cell', 3, 0],
  ['4 cell', 4, -3],
  ['5 cell', 5, -6],
])('Should be correct attack with %s, with stoned', (_, cell, expected) => {
  const player = new Magician('Boomer', 'Magician');
  player.setStoned();
  player.setDamagePower(cell);
  expect(player.damagePower).toBe(expected);
});

test.each([
  ['-1 cell', -1],
  ['0 cell', 0],
  ['6 cell', 6],
  ['5.1 cell', 5.1],
])('Should be trown error with %s', (_, cell) => {
  expect(() => {
    const player = new Magician('Boomer', 'Magician');
    player.setDamagePower(cell);
  }).toThrow('Аттака c такой позиции невозможна');
});
