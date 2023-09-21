//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA_TO_RNA = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
}

export const toRna = (input) => {
    let rna = [];
    input.split('').forEach((letter) => {
        rna.push(DNA_TO_RNA[letter]);
    });
    return rna.join('');
};
