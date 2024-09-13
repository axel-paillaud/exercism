//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
    constructor () {
        this.studentsList = { };
    }

    roster() {
        return this.studentsList;
    }

    remove() {
        console.log("hello from remove()");
    }

    add(name, grade) {
        if (!Object.hasOwn(this.studentsList, grade)) {
            this.studentsList[grade] = [];
        }  

        this.studentsList[grade].push(name);
        // check sort() for alphabetic order
    }

    grade(grade) {
        return this.studentsList[grade];
    }
}
