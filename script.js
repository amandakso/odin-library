let myLibrary = [];
const list = document.getElementById("cards");

class Book {
    constructor(title, author, year, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return title + ' by ' + author + ' (' + year + ')\n' + pages + ' pages'}
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('Dune', 'Frank Herbert', 1984, 687, "haven't read")
const book2 = new Book('The Amulet of Samarkand', 'Jonathan Stroud', 2003, 462, "haven't read")
const book3 = new Book('Pride & Prejudice', 'Jane Austen', 1813, 386, 'have read')

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

let books = myLibrary;
books.forEach(book => {
    let item = document.createElement("li");
    item.innerText = book.info();
    list.prepend(item);
})
