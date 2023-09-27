//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    parseRow(matrix) {
        return matrix.split('\n').map((row) => {
            return row.split(' ').map((number) => {
                return Number(number);
            })
        });
    }

    get rows() {
        return this.parseRow(this.matrix);
    }

    get columns() {
        let columns = [];

        this.parseRow(this.matrix).map((row, index) => {
            console.log(index);
            for (let i = 0; i < row.length; i++) {
                if (!columns[i]) {
                    columns[i] = []; 
                }
                columns[i].push(row[i]);
            }          
        });

        return columns;
    }
}
