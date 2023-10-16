//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { before } from "node:test";

export class LinkedList {
    constructor() {
        this.list = { 
            head: {
                next: null, 
            }
        };
    }

    getLast(list) {
        if (list) {
            list = list.head;
            while (list.next) {
                list = list.next;
            }
            return list;
        }
        return null;
    }

    getBeforeLast(list) {
        list = list.head;
        while (list.next) {
            if (!list.next.next) {
                return list;
            }
            list = list.next;
        }
        return null;
    }

    push(station) {
        const lastNode = this.getLast(this.list);
        lastNode.next = { station, next: null, prev: lastNode};
    }

    pop() {
        const lastNode = this.getLast(this.list);
        const lastStation = lastNode.station;
        lastNode.prev.next = null;
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
