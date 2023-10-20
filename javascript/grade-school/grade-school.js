//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
    constructor () {
        this.studentsList = { '2': ['axel']};
    }

    set add(name) {
        console.log("hello");
    }

    roster() {
        return this.studentsList;
    }

    remove() {

    }

    add(name, grade) {
        if (!this.studentsList.hasOwnProperty(grade)) {
            this.studentsList[grade] = [];
        }
        this.studentsList[grade].push(name);   
    }

    grade() {
        throw new Error('Remove this statement and implement this function');
    }
}
