//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// If I need only trim(), do it inside export hey function
function formatMessage(message) {
    return message.trim(); 
}

// Change function here to be onlyCapitalLetter (ignoring other char)
function isCapital(message) {
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
            return false 
        }
    }
    return true;
}

function isQuestion(message) {
    if (message[message.length - 1] === '?') return true;
}

export const hey = (message) => {
    message = formatMessage(message);
    if (message == '') return 'Fine. Be that way!';
    if (isCapital(message) && isQuestion(message)) return 'Calm down, I know what I\'m doing!';
    if (isCapital(message)) return 'Whoa, chill out!';
    if (isQuestion(message)) return 'Sure.';
    return 'Whatever.';
};

