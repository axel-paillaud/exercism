//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function noLowerCase(message) {
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
            return false 
        }
    }
    return true;
}

function noCapital(message) {
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            return false;
        }
    }
    return true;
}

function isQuestion(message) {
    if (message[message.length - 1] === '?') return true;
}

export const hey = (message) => {
    message = message.trim();
    if (message == '') return 'Fine. Be that way!';
    if (noLowerCase(message) && !noCapital(message) && isQuestion(message)) 
        return 'Calm down, I know what I\'m doing!';
    if (noLowerCase(message) && !noCapital(message)) return 'Whoa, chill out!';
    if (isQuestion(message)) return 'Sure.';
    return 'Whatever.';
};

