import { DataXReIm } from '../types/DataXReIm';
/**
 * Sort object of array, x has to be monotone.
 *
 * @param data - object of kind {x:[], re:[], im:[]}
 * @returns - sorted array
 */
export function xreimSortX(data: DataXReIm): DataXReIm {
  const { x, re, im } = data;

  if (x.length !== re.length || x.length !== im.length) {
    throw new TypeError('xreimSortX: length of x, re and im must be identical');
  }

  if (x.length < 2 || x[0] < x[1]) return data;

  return {
    x: x.slice(0).reverse(),
    re: re.slice(0).reverse(),
    im: im.slice(0).reverse(),
  };
}
