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

    const book = new Book(id, author, title, pages, genre, read);
    myLibrary.push(book);
}

function displayBooks(arr) {
// Write code here to display books and add a `remove` button, and read/unread toggle
    let booksListDiv = document.querySelector(".book-list div");
    booksListDiv.innerHTML = "";
    
    for (let i=0; i<myLibrary.length; i++) {
        const newBookContainer = document.createElement('div');
        newBookContainer.style.display = 'flex';
        newBookContainer.style.flexDirection = 'row'; // Ensure horizontal layout
        newBookContainer.style.alignItems = 'center'; // Optional: Align items vertically in the center

        // const newBook = document.createElement("div");
        newBookContainer.innerText = `"${myLibrary[i].title}" by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, Genre: ${myLibrary[i].genre}, Read: ${myLibrary[i].read}  `;
        // newBookContainer.appendChild(newBook);

        let removeButton = document.createElement('button');
        removeButton.innerText = "X";
        removeButton.style.marginLeft = "12px";

        removeButton.onclick = () => {
            myLibrary.splice(i, 1); // Remove the item from myLibrary
            newBookContainer.remove(); // Remove from DOM
        }

        removeButton.onclick = () => {
            myLibrary.splice(i, 1); // Remove the item from myLibrary
            newBookContainer.remove(); // Remove from DOM
        }

        let toggleRead = document.createElement('button');
        toggleRead.style.marginLeft = "12px";

        if (myLibrary[i].read=="Yes") {
            toggleRead.innerText = "Read";
            toggleRead.style.backgroundColor = "green";    
        }
        else {
            toggleRead.innerText = "Unread";
            toggleRead.style.backgroundColor = "red";
        }
        
        toggleRead.onclick = () => {
            if (myLibrary[i].read == "No") {
                myLibrary[i].read = "Yes";
                toggleRead.innerText = "Read";
                toggleRead.style.backgroundColor = "green";
            }
            else {
                myLibrary[i].read = "No";
                toggleRead.innerText = "Unread";
                toggleRead.style.backgroundColor = "red";
            }
        }

        newBookContainer.appendChild(removeButton);
        newBookContainer.appendChild(toggleRead);
        booksListDiv.appendChild(newBookContainer);
    }
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