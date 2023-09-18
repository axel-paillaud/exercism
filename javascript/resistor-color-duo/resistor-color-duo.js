//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Return only the first two values, 
 * and convert it to Number, in case we have string
*/
function keepOnlyTwo(codeValue) {
    return Number(codeValue.splice(0, 2).join(''));
}

export const decodedValue = (colors) => {
    return keepOnlyTwo(colors.map(color => COLORS.indexOf(color)));
};

const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
];
