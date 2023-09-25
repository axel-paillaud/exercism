//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
        this.matrix = matrix;
  }

  get rows() {
        //row.push([Number(this.matrix)]);
        let rows = [];

        const rawRows = this.matrix.split('\n');
        rawRows.forEach((row) => {
            let line = [];
            let numbers = row.split(' ');
            numbers.forEach((number) => {
                line.push(Number(number));
            });

            rows.push(line);
        });

        return rows;
  }

  get columns() {
        console.log(this.matrix);
  }
}
