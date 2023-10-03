//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function sortBook(books, sortedBooks, index) {
    let set = new Set(books);

    set.forEach((sortedBook) =>  {
        books.splice(books.findIndex((book) => book === sortedBook), 1);
    });

    sortedBooks[index] = set;
    
    if (books.length === 0) return sortedBooks;

    else return sortBook(books, sortedBooks, ++index);
}

function computeDiscount(batch) {
    switch(batch.size) {
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

function computePrice(sortedBooks) {
    let price = 0;

    sortedBooks.forEach((batch) => {
        let discount = computeDiscount(batch);
        price += (batch.size * 800) - ((batch.size * 800) * discount);
    });

    return price;
}

export const cost = (books) => {
    let sortedBooks = sortBook(books, [], 0);
    let price = computePrice(sortedBooks);
    return price;
};
