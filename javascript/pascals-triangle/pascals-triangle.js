//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function computeRows(numberOfRows, pascalTriangle) {
    if (numberOfRows === 0) return pascalTriangle;

    const newRow = [];
    const previousRow = pascalTriangle[pascalTriangle.length - 1] || [];

    for (let i = 0; i <= previousRow.length; i++) {
        newRow.push((previousRow[i] + previousRow[i - 1]) || 1);
    }

    pascalTriangle.push(newRow);
    return computeRows(--numberOfRows, pascalTriangle);
}

export const rows = (numberOfRows) => {
    return computeRows(numberOfRows, [] );
};
