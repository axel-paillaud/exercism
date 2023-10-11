//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
 * Calculate the new Pascals Row based on the last Pascals Row
 * @param {array} lastRow - The last Pascals Triangle Row
 * @param {array} newRow - The new row to compute
 * @return {array} newRow
 */
function computeRow(lastRow, newRow) {
    for (let i = 0; i <= lastRow.length; i++) {
        newRow.push((lastRow[i] + lastRow[i - 1]) || 1);
    }
    return newRow;
}

/*
 * Create Pascal's Triangle recursively based on the number of rows provided
 * @param {number} numberOfRows - The number of Pascal's Triangle row
 * @param {array} pascalTriangle - The Pascal's Triangle
 */
function computePascalTriangle(numberOfRows, pascalTriangle) {
    if (numberOfRows === 0) return pascalTriangle;

    const lastRow = pascalTriangle[pascalTriangle.length - 1] || [];
    pascalTriangle.push(computeRow(lastRow, []));

    return computePascalTriangle(--numberOfRows, pascalTriangle);
}

export const rows = (numberOfRows) => computePascalTriangle(numberOfRows, []);

