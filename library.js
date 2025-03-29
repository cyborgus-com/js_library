const myLibrary = [];

function Book(id, author, title, pages, genre, read) {
    // the constructor...

    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary(author, title, pages, genre, read="No") {
    // take params, create a book then store it in the array

    let id = self.crypto.randomUUID();

    const book_temp = new Book(id, author, title, pages, genre, read);
    myLibrary.push(book_temp);
    // console.log(myLibrary);
}

function displayBooks(arr) {
// Write code here to display books and add a `remove` button, and read/unread toggle
    let booksListDiv = document.querySelector(".book-list div");
    booksListDiv.innerHTML = "";
    for (let i=0; i<myLibrary.length; i++) {
        const newBook = document.createElement("div");
        newBook.innerText = `"${myLibrary[i].title}" by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, Genre: ${myLibrary[i].genre}`;
        booksListDiv.appendChild(newBook);
    }
}

const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#pages");
const genreInput = document.querySelector("#genre");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");


submit.addEventListener("click", (event) => {
    event.preventDefault();

    addBookToLibrary(authorInput.value, 
        titleInput.value, 
        pagesInput.value, 
        genreInput.value);

    form.reset();
    displayBooks(myLibrary);
});

// add event listener for remove button next to books and call removal function
