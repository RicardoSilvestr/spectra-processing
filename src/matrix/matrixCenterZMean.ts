import { DoubleMatrix } from '..';

import { matrixCreateEmpty } from './matrixCreateEmpty';
/**
 * Center mean of columns
 *
 * @param matrix - matrix [rows][cols]
 */
export function matrixCenterZMean(matrix: DoubleMatrix): DoubleMatrix {
  const nbColumns = matrix[0].length;
  const nbRows = matrix.length;
  const newMatrix = matrixCreateEmpty({ nbColumns, nbRows });
  for (let column = 0; column < nbColumns; column++) {
    let mean = 0;
    for (let row = 0; row < nbRows; row++) {
      mean += matrix[row][column];
    }
    mean /= nbRows;
    for (let row = 0; row < nbRows; row++) {
      newMatrix[row][column] = matrix[row][column] - mean;
    }
  }
  return newMatrix;
}
