const bookInfo = document.querySelector(".book-info");
const addBook = document.querySelector(".add");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submit = document.querySelector("#submit");
const books = document.querySelector(".books");

let bookList = [];
let div;
let titleHeader;
let authorHeader;
let pagesNumber;
let readpara;

function isRead() {
  if (read.checked) {
    return "Read";
  } else {
    return "Not read";
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead();
}

submit.addEventListener("click", () => {
  bookList.push(new Book(title.value, author.value, pages.value, read.checked));
  showBooks();
});

function showBooks() {
  div = document.createElement("div");
  titleHeader = document.createElement("h2");
  titleHeader.textContent = bookList[bookList.length - 1].title;
  div.appendChild(titleHeader);
  books.appendChild(div);
}

addBook.addEventListener("click", () => {
  if (bookInfo.style.display === "none") {
    bookInfo.style.display = "block";
  } else {
    bookInfo.style.display = "none";
  }
});
