// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const DAY_A_WEEK = 7;

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
	let count = 0;
	for (let i = 0; i < birdsPerDay.length; i++) {
		count += birdsPerDay[i];
	}
	return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
	// Here, I sort all days per week in an array. This is not necessary, but can be useful later,
	// if you need to access another week.
	let weeks = [];
	let weekIndex = 0;
	for (let j = 0; j < week; j++) {
		weeks.push([]);
		for (let i = 0; i < DAY_A_WEEK; i++) {
			weeks[j].push(birdsPerDay[i + weekIndex]);
		}
		weekIndex += DAY_A_WEEK;
	}

	let count = 0;
	for (let i = 0; i < DAY_A_WEEK; i++) {
		count += weeks[week - 1][i];
	}
	return count;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
	for (let i = 0; i < birdsPerDay.length; i++) {
		if (i % 2 === 0) {
			birdsPerDay[i] += 1;
		}
	}
	return birdsPerDay;
}
