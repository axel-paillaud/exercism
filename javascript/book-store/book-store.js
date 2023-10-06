//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BOOK_PRICE = 800;
const DISCOUNT_PER_COUNT = { 0: 0, 1: 0, 2: 0.05, 3: 0.10, 4: 0.20, 5: 0.25 };

/**
 * Split all books by packs of unique books.
 * @param {array} books - The original array of books to sort
 * @param {array} sortedBooks - The book array once sorted
 * @param {number} packIndex -  The index to add current sorted book's pack.
 * @return {array} An array containing arrays of packs with unique books.
 */
function splitBooks(books, packedBooks, packIndex = 0) {
    let set = new Set(books);

    set.forEach((packedBooks) =>  {
        books.splice(books.indexOf(packedBooks), 1);
    });

    packedBooks[packIndex] = [...set];

    if (books.length === 0) return packedBooks;

    else return splitBooks(books, packedBooks, ++packIndex);
}

function sortForBestDiscount(packedBooks) {
    packedBooks.forEach((pack) => {
        if (pack.length === 5) {
            packedBooks.forEach((comparePack) => {
                if (comparePack.length === 3) {
                    comparePack.push(pack.pop());
                }
            });
        }
    });
    return packedBooks;
}

function computePrice(sortedBooks, bookPrice) {
    return sortedBooks.reduce((accumulator, pack) => {
        let discount = DISCOUNT_PER_COUNT[pack.length];
        return accumulator + (pack.length * bookPrice) * (1 - discount);
    }, 0);
}

export const cost = (books) => {
    return computePrice(sortForBestDiscount(splitBooks(books, [])), BOOK_PRICE);
}
