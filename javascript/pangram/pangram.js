//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// I thinks there is 2 ways to solve this : one with classical array checking,
// and maybe one with regular expression. Let's try both ?

const ALPHABET = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

export const isPangram = (string) => {
    if (!string) return false;
    string.split('').forEach((letter) => {
        if (!ALPHABET.includes(letter)) return false;
    });
    return true;
};
