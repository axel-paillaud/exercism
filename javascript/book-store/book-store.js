//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function sortBook(books, sortedBooks = [], index) {
    let set = new Set(books);
    set.forEach((sortedBook) =>  {
        let index = books.findIndex((book) => book === sortedBook);
        books.splice(index, 1);
    });
    sortedBooks[index] = [];
    sortedBooks[index].push(set);
    if (books.length === 0) return;
    else {
        index++;
        return sortBook(books, sortedBooks, index);
    }
}

export const cost = (books) => {
    let sortedBooks = [];
    let index = 0;
    sortBook(books, sortedBooks, index);
    console.log(sortedBooks);
    return 800;
};
