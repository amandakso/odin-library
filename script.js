let myLibrary = [];
const list = document.getElementById("cards");

//class for books
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

// add book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('Dune', 'Frank Herbert', 1984, 687, "haven't read")
const book2 = new Book('The Amulet of Samarkand', 'Jonathan Stroud', 2003, 462, "haven't read")
const book3 = new Book('Pride & Prejudice', 'Jane Austen', 1813, 386, 'have read')

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// display books in list
let books = myLibrary;
books.forEach(book => {
    let item = document.createElement("li");
    item.innerText = book.info();
    list.prepend(item);
})


//Button event listeners for adding books

//Show popup form
const add = document.getElementById("add");
add.addEventListener("click", () => {
    document.getElementById("newForm").style.display = "block";
});

//Hide popup form
const closed = document.getElementById("close");
closed.addEventListener("click", () => {
    document.getElementById("newForm").style.display = "none";
})

