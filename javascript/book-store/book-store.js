//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function sortBook(books, sortedBooks, index) {
    let set = new Set(books);

    set.forEach((sortedBook) =>  {
        books.splice(books.findIndex((book) => book === sortedBook), 1);
    });

    sortedBooks[index] = [set];
    
    if (books.length === 0) return sortedBooks;

    else return sortBook(books, sortedBooks, ++index);
}

export const cost = (books) => {
    let sortedBooks = sortBook(books, [], 0);
    console.log(sortedBooks);
    return 800;
};
