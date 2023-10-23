//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
    constructor () {
        this.studentsList = { };

        const handler = {
            get(target, prop, receiver) {
                if (!target.hasOwnProperty(prop)) {
                    target[prop] = [];
                }
            }
        };
        this.proxy = new Proxy(this.studentsList, handler);
    }

    roster() {
        return this.studentsList;
    }

    remove() {
        console.log("hello from remove()");
    }

    add(name, grade) {
        this.proxy[grade];
        this.studentsList[grade].push(name);
    }

    grade() {
        throw new Error('Remove this statement and implement this function');
    }
}
