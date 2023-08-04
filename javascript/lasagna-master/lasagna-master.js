/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTimer) {
    switch(remainingTimer) {
        case 0:
            return 'Lasagna is done.';
        case Number(remainingTimer):
            return 'Not done, please wait.';
        default:
            return 'You forgot to set the timer.';
    }
}
