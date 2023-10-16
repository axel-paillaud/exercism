//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { before } from "node:test";

export class LinkedList {
    constructor() {
        this.list = { 
            head: {
                next: null, prev: null }
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
        //this.list.next = { station, next: null,  prev: last};
        lastNode.next = { station, next: null};
    }

    pop() {
        const lastStation = this.getLast(this.list).station;
        this.getBeforeLast(this.list).next = null;
        return lastStation;
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
