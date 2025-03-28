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

}

const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#pages");
const genreInput = document.querySelector("#genre");
const submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    // const author = authorInput.value;
    // const title = titleInput.value;
    // const pages = pagesInput.value;
    // const genre = genreInput.value;
    addBookToLibrary(authorInput.value, 
        titleInput.value, 
        pagesInput.value, 
        genreInput.value);
    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    genreInput.value = "";
});