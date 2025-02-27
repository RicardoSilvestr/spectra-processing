import { xyFilterMinYValue } from '../xyFilterMinYValue';

describe('xyFilterMinYValue', () => {
  const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const y = [10, 8, 6, 4, 2, 0, 2, 4, 6, 8, 10];
  it('no threshold', () => {
    const results = xyFilterMinYValue({ x, y });
    expect(results).toStrictEqual({ x, y });
    expect(results.x).toBe(x);
    expect(results.y).toBe(y);
  });
  it('threshold very low', () => {
    const results = xyFilterMinYValue({ x, y }, 0);
    expect(results).toStrictEqual({ x, y });
    expect(results.x).toBe(x);
    expect(results.y).toBe(y);
  });
  it('threshold', () => {
    const results = xyFilterMinYValue({ x, y }, 0.8);
    expect(results).toStrictEqual({ x: [0, 1, 9, 10], y: [10, 8, 8, 10] });
  });
  it('threshold 1.1', () => {
    const results = xyFilterMinYValue({ x, y }, 1.1);
    expect(results).toStrictEqual({ x: [], y: [] });
  });
});
