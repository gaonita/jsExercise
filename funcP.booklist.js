let bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) {
    let newList = [...list];
        newList.push(bookName);
    return newList;
}

let newBookList = add(bookList, 'A Brief History of Time');

console.log(newBookList);

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove (booklist, bookName) {
    let newList = [...booklist];
    if (newList.indexOf(bookName) >= 0) {
     newList.splice(newList.indexOf(bookName), 1);
     return newList;
    }
}

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
