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
let readPara;
let remove;

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
  addRemove();
  addReadToggle();
});

function showBooks() {
  div = document.createElement("div");
  div.setAttribute(
    "style",
    "background-color: aliceblue; border-radius: 16px; width: 250px; height: 250px; display: flex; flex-direction: column; gap: 10px; align-items: center; justify-content: center; margin: 20px;"
  );
  titleHeader = document.createElement("h2");
  titleHeader.textContent = bookList[bookList.length - 1].title;
  titleHeader.setAttribute(
    "style",
    "font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 22px;"
  );
  authorHeader = document.createElement("h2");
  authorHeader.textContent = bookList[bookList.length - 1].author;
  authorHeader.setAttribute(
    "style",
    "font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 22px;"
  );
  pagesNumber = document.createElement("h2");
  pagesNumber.textContent = "Pages: " + bookList[bookList.length - 1].pages;
  pagesNumber.setAttribute(
    "style",
    "font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 22px;"
  );
  readPara = document.createElement("p");
  readPara.textContent = bookList[bookList.length - 1].read;
  if (readPara.textContent === "Read") {
    readPara.setAttribute(
      "style",
      "font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 600; color: green;"
    );
  } else {
    readPara.setAttribute(
      "style",
      "font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 600; color: red;"
    );
  }
  div.appendChild(titleHeader);
  div.appendChild(authorHeader);
  div.appendChild(pagesNumber);
  div.appendChild(readPara);
  books.appendChild(div);
}

function addRemove() {
  remove = document.createElement("img");
  remove.setAttribute("src", "./img/close-circle-outline.svg");
  remove.setAttribute(
    "style",
    "align-self: flex-end; width: 20px; height: 20px; margin-top: 10px; margin-right: 10px;"
  );
  div.insertBefore(remove, div.firstChild);
  remove.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
}

function addReadToggle() {}

addBook.addEventListener("click", () => {
  if (bookInfo.style.display === "none") {
    bookInfo.style.display = "block";
  } else {
    bookInfo.style.display = "none";
  }
});
