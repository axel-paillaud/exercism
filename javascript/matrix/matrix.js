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

        this.matrix.split('\n').forEach((rawRow) => {
            let row = [];
            rawRow.split(' ').forEach((number) => {
                row.push(Number(number));
            });

            rows.push(row);
        });

        return rows;
  }

  get columns() {
        let columns = [];

        const rawRows = this.matrix.split('\n');
        // for each rawRows, do
        for (let i = 0; i < rawRows.length; i++) {
            let numbers = rawRows[i].split(' ');

            //for each numbers in rawRows, do
            for (let j = 0; j < numbers.length; j++) {
                if (!columns[j]) {
                    columns[j] = []; 
                }
                columns[j].push(Number(numbers[j]));
            }
        }

        return columns;
    }
}
