// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
    return /^chatbot/i.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
    let regex = new RegExp(/emoji\d+/, 'g');
    return message.replace(regex, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
    const result = /\(\+\d\d\)\s\d\d\d-\d\d\d-\d\d\d/.test(number);
    if (result) return 'Thanks! You can now download me to your phone.';
    else return 'Oops, it seems like I can\'t reach out to ' + number;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
    return userInput.match(/[a-z]+\.[a-z]+/g);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
    let names = fullName.match(/[A-Z][a-z]+/g);
    let str = "Nice to meet you, firstName Name";
    let result = str.replace(/firstName/, names[1]).replace(/Name/, names[0]);
    return result;
}
