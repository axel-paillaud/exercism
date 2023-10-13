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
            console.dir(list);
            while (list.next) {
                list = list.next;
            }
            console.dir(list);
            return list;
        }
        return null;
    }

    push(station) {
        const last = this.getLast(this.list);
        //this.list.next = { station, next: null,  prev: last};
        this.list.next = { station, next: null, prev: last};
    }

    pop() {
        const lastNode = this.getLast(this.list);
        // console.log(`next node : ${lastNode.next}`);
        // console.log(`prev node : ${lastNode.prev}`);
        // console.log(`prev station node : ${lastNode.prev.station}`);
        // console.log(`last station : ${lastNode.station}`);

        return lastNode.station;
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
