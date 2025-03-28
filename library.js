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
}

function displayBooks(arr) {

}