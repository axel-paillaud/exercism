//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
    constructor() {
        this.list = { next: null, prev: null };
    }
    
    getLast(list) {
        if (list) {
            while (list.next) {
                list = list.next;
            }
            return list;
        }
        return null;
    }

    push(station) {
        const last = this.getLast(this.list);
        this.list.next = { station, next: null, prev: last};
    }

    pop() {
        if (this.list) {
            while (this.list.next) {
                this.list = this.list.next;
            }
            const lastStation = this.list.station;
            this.list.station = null;
            console.log(lastStation);
            return lastStation;
        }
    }

    shift() {
        throw new Error('Remove this statement and implement this function');
    }

    unshift() {
        throw new Error('Remove this statement and implement this function');
    }

    delete() {
        throw new Error('Remove this statement and implement this function');
    }

    count() {
        throw new Error('Remove this statement and implement this function');
    }
}
