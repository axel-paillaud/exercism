//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
        this.matrix = matrix;
  }

  get rows() {
        let rows = [];

        const rawRows = this.matrix.split('\n');
        rawRows.forEach((rawRow) => {
            let row = [];
            let numbers = rawRow.split(' ');
            numbers.forEach((number) => {
                row.push(Number(number));
            });

            rows.push(row);
        });

        return rows;
  }

  get columns() {
        console.log(this.matrix);
  }
}
