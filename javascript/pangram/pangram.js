//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// I thinks there is 2 ways to solve this : one with classical array checking,
// and maybe one with regular expression. Let's try both ?

const REGEX = /[a-z]/gmi;
const ALPHABET_LENGTH = 26;

export const isPangram = (string) => {
    const UniqueLetters = new Set(string.toLowerCase().match(REGEX));
    return UniqueLetters.size === ALPHABET_LENGTH;
}

const ALPHABET = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

export const isPangram2 = (string) => {
    if (!string) return false;
    for (let i = 0; i < 24; i++) {
        if (!string.toLowerCase().includes(ALPHABET[i])) return false;
    }
    return true;
};
