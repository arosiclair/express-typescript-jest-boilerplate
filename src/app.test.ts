function sum(a: number, b: number) {
  return a + b;
}

test('a placeholder test that passes', () => {
  expect(sum(1, 2)).toBe(3);
});
