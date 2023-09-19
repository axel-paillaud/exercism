//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function findColor(color) {
    return COLORS.indexOf(color);
}

export const decodedValue = (colors) => {
    let onlyTwoColors = colors.splice(0, 2);
    return Number(onlyTwoColors.map(color => findColor(color)).join(''));
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
