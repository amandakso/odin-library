let myLibrary = [];
const list = document.getElementById("cards");

//class for books
function Book(title, author, year, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = " ";
    this.info = function() {
        return title + ' by ' + author + ' (' + year + ')\n' + pages + ' pages'}
    this.addId = function() {
        newId = myLibrary.length;
        this.id = newId;
    }
}

// add book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('Dune', 'Frank Herbert', 1984, 687, "haven't read")
book1.addId();
addBookToLibrary(book1);
const book2 = new Book('The Amulet of Samarkand', 'Jonathan Stroud', 2003, 462, "haven't read")
book2.addId();
addBookToLibrary(book2);
const book3 = new Book('Pride & Prejudice', 'Jane Austen', 1813, 386, 'have read')
book3.addId();
addBookToLibrary(book3);




// display books in list

function addBook(book) {

    let item = document.createElement("li");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let btn = document.createElement("BUTTON");
    let btntxt = document.createTextNode("Delete")
    btn.classList.add("trash");
    btn.appendChild(btntxt);
    btn.addEventListener("click", () => {
        let val = btn.value;
        //verify button value
        if (Number.isInteger(parseInt(val))) {
            let checkLibrary = myLibrary;
            checkLibrary = parseInt(checkLibrary.length);
            if (0 <= val && val < checkLibrary) {
                deleteBook(val);
                console.log("success");
            } else {
                console.log("fail");
            }
        }
        else {
            console.log("error");
        };
    });
    let p = document.createElement("p");
    p.innerText = book.info();
    btn.value = book.id;
    let btn2txt;
    let btn2 = document.createElement("BUTTON");
    if (book.haveRead == "have read") {
        btn2txt = document.createTextNode("Have Read");
    }
    else {
        btn2txt = document.createTextNode("Haven't Read");
    }
    btn2.classList.add("toggle");
    btn2.appendChild(btn2txt);
    btn2.addEventListener("click", () => {
        if (btn2.innerText == "Have Read") {
            btn2.innerText = "Haven't Read";
        } else {
            btn2.innerText = "Have Read";
        };
    });
    div1.appendChild(p);
    div2.appendChild(btn);
    div3.appendChild(btn2);
    item.appendChild(div1).appendChild(div2).appendChild(div3);
    item.classList.add("item");
    list.append(item);

}

function displayBooks() {
    let books = myLibrary;
    books.forEach(book => {
        addBook(book);
    });
}

displayBooks();


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
    form1 = document.getElementById("form1");
    form1.reset();
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

    //verify submissions
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type.toLowerCase() == 'radio') {
            if (inputs[i].checked){
                newRead = inputs[i].value;
            }
        }
    }
    let newBook = new Book (newTitle, newAuthor, newYear, newPages, newRead)
    newBook.addId();
    addBookToLibrary(newBook);
    addBook(newBook);
    form1 = document.getElementById("form1");
    form1.reset();
})


// Delete Books From Library

function clearLibrary() {
    let items = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++) {
        l = items[i];
        l.remove();
    };
}

function updateIds() {
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].id = i;
    }
}

function deleteBook(val) {
    myLibrary.splice(val, 1);
    updateIds();
    clearLibrary();
    displayBooks();
}


