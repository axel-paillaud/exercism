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
        list = list.head;
        while (list.next) {
            list = list.next;
        }
        return list;
    }

    find(list, station) {
       list = list.head; 
        while (list.next) {
            if (list.next.station === station) {
                return list.next;
            }
            list = list.next;
        }
        return null;
    }

    push(station) {
        const lastNode = this.getLast(this.list);
        lastNode.next = { station, next: null, prev: lastNode};
    }

    // Maybe refacto here : how handle when we have only one item and we pop() ?
    pop() {
        const lastNode = this.getLast(this.list);
        if (lastNode.prev) {
            lastNode.prev.next = null;
        }
        else {
            this.list.head.next = null;
        }
        return lastNode.station;
    }

    shift() {
        const firstNode = this.list.head.next;
        const secondNode = firstNode.next;
        this.list.head.next = secondNode;
        if (secondNode) {
            secondNode.prev = null;
        }
        return firstNode.station;
    }

    unshift(station) {
        const firstNode = this.list.head.next;
        const newNode = { next: firstNode, station };
        this.list.head.next = newNode;
        if (firstNode) {
            firstNode.prev = newNode;
        }
    }

    delete(station) {
        const node = this.find(this.list, station);
        if (!node) return null;
        if (node.prev && node.next) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        else if (node.prev) {
            node.prev.next = null;
        }
        else {
            this.list.head.next = null;
        }
    }

    count() {
        let count = 0;
        let list = this.list.head; 
        while (list.next) {
            count++;
            list = list.next;
        }
        return count;
    }
}
