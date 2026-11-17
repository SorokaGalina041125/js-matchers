import { sortHeroes } from '../sort.js';

test('should sort heroes by health in descending order', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroes(input);

  // Используем toEqual для сравнения массивов и объектов по значению
  expect(result).toEqual(expected);
});