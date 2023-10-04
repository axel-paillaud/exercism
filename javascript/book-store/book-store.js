//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BOOK_PRICE = 800;

function sortBook(books, sortedBooks, index) {
    let set = new Set(books);

    set.forEach((sortedBook) =>  {
        books.splice(books.findIndex((book) => book === sortedBook), 1);
    });

    sortedBooks[index] = [...set];
    
    if (books.length === 0) return sortedBooks;

    else return sortBook(books, sortedBooks, ++index);
}

function sortForBestDiscount(sortedBooks) {
    sortedBooks.forEach((batch) => {
        if (batch.length === 5) {
            sortedBooks.forEach((compareBatch) => {
                if (compareBatch.length === 3) {
                    compareBatch.push(batch.pop());
                }
            });
        }
    });
    return sortedBooks;
}

function computeDiscount(batch) {
    switch(batch.length) {
        case 1:
            return 0;
        case 2:
            return 0.05;
        case 3:
            return 0.10;
        case 4:
            return 0.20;
        case 5:
            return 0.25;
    }
}

function computePrice(sortedBooks, bookPrice) {
    let price = 0;

    sortedBooks.forEach((batch) => {
        let discount = computeDiscount(batch);
        price += (batch.length * bookPrice) - ((batch.length * bookPrice) * discount);
    });

    return price;
}

export const cost = (books) => {
    if (books.length === 0) return 0;
    let sortedBooks = sortForBestDiscount(sortBook(books, [], 0));
    return computePrice(sortedBooks, BOOK_PRICE); 
}
