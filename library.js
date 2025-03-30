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

// adding toggleRead method to Book prototype;
Book.prototype.toggleRead = function () {
    this.read = this.read === "Yes" ? "No": "Yes";
}

function addBookToLibrary(author, title, pages, genre, read="No") {
    // take params, create a book then store it in the array

    let id = self.crypto.randomUUID();

    const book = new Book(id, author, title, pages, genre, read);
    myLibrary.push(book);
}

function displayBooks(arr) {
// Write code here to display books and add a `remove` button, and read/unread toggle
    let booksListDiv = document.querySelector(".book-list div");
    booksListDiv.innerHTML = "";
    
    arr.forEach((book, index) => {

        const newBookContainer = document.createElement('div');
        newBookContainer.style.display = 'flex';
        newBookContainer.style.flexDirection = 'row'; // Ensure horizontal layout
        newBookContainer.style.alignItems = 'center'; // Optional: Align items vertically in the center

        newBookContainer.innerText = `"${book.title}" by ${book.author}, ${book.pages} pages, Genre: ${book.genre}`;

        // Remove button code
        let removeButton = document.createElement('button');
        removeButton.innerText = "X";
        removeButton.style.marginLeft = "12px";

        removeButton.onclick = () => {
            arr.splice(index, 1); // Remove the item from myLibrary
            newBookContainer.remove(); // Remove from DOM
        }

        // Toggle button code
        let toggleButton = document.createElement('button');
        toggleButton.style.marginLeft = "12px";
        toggleButton.style.padding = "0px";
        toggleButton.style.width = "100px";
        updateToggleButton(toggleButton, book);
        
        toggleButton.onclick = () => {
            book.toggleRead();
            updateToggleButton(toggleButton, book);
            newBookContainer.innerText = `"${book.title}" by ${book.author}, ${book.pages} pages, Genre: ${book.genre}`;
            newBookContainer.appendChild(removeButton);
            newBookContainer.appendChild(toggleButton);    
        }

        newBookContainer.appendChild(removeButton);
        newBookContainer.appendChild(toggleButton);
        booksListDiv.appendChild(newBookContainer);
    });
}

function updateToggleButton(button, book) {
    button.innerText = book.read === "Yes" ? "Read" : "Un-read";
    button.style.backgroundColor = book.read === "Yes" ? "lightgreen" : "orange";
}

const submit = document.querySelector("#submit");
const form = document.querySelector("form");

submit.addEventListener("click", (event) => {
    event.preventDefault();

    const author = document.querySelector("#author").value;
    const title = document.querySelector("#title").value;
    const pages = document.querySelector("#pages").value;
    const genre = document.querySelector("#genre").value;

    if (author && title && pages && genre) {
        addBookToLibrary(author, title, pages, genre);
        form.reset();
        displayBooks(myLibrary);
    }
    else {
        alert("One of the fields is empty!");
    }
});