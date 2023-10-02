//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function sortBook(books) {
    const set = new Set(books);
    console.log(books);
    console.log(set);
    return set;
}

export const cost = (books) => {
    const sortedBook = sortBook(books);
    return 800;
};
