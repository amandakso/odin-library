let myLibrary = [];
const list = document.getElementById("cards");

//class for books
function Book(title, author, year, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = Date.now();
    this.info = function() {
        return title + ' by ' + author + ' (' + year + ')\n' + pages + ' pages'}
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

function addBook(book) {
    let item = document.createElement("li");
    item.innerText = book.info();
    list.append(item);
}

let books = myLibrary;
books.forEach(book => {
    addBook(book);
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

//Submit new book info
const add1 = document.getElementById("add1");
add1.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("newForm").style.display = "none";
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newYear = document.getElementById("year").value;
    let newPages = document.getElementById("pages").value;
    let inputs = document.getElementsByTagName('input');
    let newRead = "";
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type.toLowerCase() == 'radio') {
            if (inputs[i].checked){
                newRead = inputs[i].value;
            }
        }
    }
    let newBook = new Book (newTitle, newAuthor, newYear, newPages, newRead)
    addBookToLibrary(newBook);
    addBook(newBook);
    console.log(myLibrary);
})
