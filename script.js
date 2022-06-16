let myLibrary = [];

function Book(title, author, year, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return title + ' by ' + author + ' (' + year + ')\n' + pages + ' pages'}
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}