const { generatePastelColor } = require('../js/app.js');

describe('generatePastelColor', () => {
  test('returns an HSL string starting with hsl', () => {
    const color = generatePastelColor();
    expect(typeof color).toBe('string');
    expect(color.startsWith('hsl')).toBe(true);
  });
});
