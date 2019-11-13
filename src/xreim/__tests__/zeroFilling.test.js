import { zeroFilling } from '../zeroFilling.js';

describe('zeroFilling', function() {
  it('test zeroFilling over', () => {
    let x = [0, 0.1, 0.2, 0.3];
    let re = [0, 1, 2, 3];
    let im = [4, 5, 6, 7];
    let result = zeroFilling({ x, re, im }, 6);
    let newX = Array.from(result.x).map((x) => Math.round(x * 10) / 10);

    let newRe = Array.from(result.re);
    let newIm = Array.from(result.im);

    expect({ x: newX, re: newRe, im: newIm }).toStrictEqual({
      x: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      re: [0, 1, 2, 3, 0, 0],
      im: [4, 5, 6, 7, 0, 0],
    });
  });

  it('test zeroFilling equal', () => {
    let x = [0, 0.1, 0.2, 0.3];
    let re = [0, 1, 2, 3];
    let im = [4, 5, 6, 7];
    let result = zeroFilling({ x, re, im }, 4);
    let newX = Array.from(result.x);
    let newRe = Array.from(result.re);
    let newIm = Array.from(result.im);

    expect({ x: newX, re: newRe, im: newIm }).toStrictEqual({
      x: [0, 0.1, 0.2, 0.3],
      re: [0, 1, 2, 3],
      im: [4, 5, 6, 7],
    });
  });

  it('test zeroFilling under', () => {
    let x = [0, 0.1, 0.2, 0.3];
    let re = [0, 1, 2, 3];
    let im = [4, 5, 6, 7];
    let result = zeroFilling({ x, re, im }, 2);
    let newX = Array.from(result.x);
    let newRe = Array.from(result.re);
    let newIm = Array.from(result.im);

    expect({ x: newX, re: newRe, im: newIm }).toStrictEqual({
      x: [0, 0.1],
      re: [0, 1],
      im: [4, 5],
    });
  });
});
