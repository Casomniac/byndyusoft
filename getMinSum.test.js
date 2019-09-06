const getMinSum = require('./getMinSum');

test('Массив [4, 0, 3, 19, 492, -10, 1] на выходе должен вернуть -10', () => {
  expect(getMinSum([4, 0, 3, 19, 492, -10, 1])).toBe(-10)
});

test('Массив ["gdfgdfg", "gfdhytjyjy", "hgfhfgh"] на выходе должен выбросить исключение', () => {
  expect(() => getMinSum(['gdfgdfg', 'gfdhytjyjy', 'hgfhfgh'])).toThrow()
});

test('Массив [4] на выходе должен выбросить исключение', () => {
  expect(() => getMinSum([4])).toThrow()
});

test('Массив [12, -10, 0, -9, 65, 43, -100] на выходе должен вернуть -110', () => {
  expect(getMinSum([12, -10, 0, -9, 65, 43, -100])).toBe(-110)
});

test('Массив [] на выходе должен выбросить исключение', () => {
  expect(() => getMinSum()).toThrow()
});