import Book from './modules/books.js';
import showBook from './modules/displayBook.js';
import storeBook from './modules/localStorage.js';
import { alertMessage } from './modules/alert.js';
import {
  listLink,
  addFromLink,
  contactLink,
  navbar1,
  navbar2,
  navbar3,
} from './modules/navbar.js';
import { DateTime } from './modules/luxon.js';

const bookListsContainer = document.getElementById('book-list-container');
const form = document.getElementById('form');

window.addEventListener('DOMContentLoaded', showBook.displayBooks);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title === '' || author === '') {
    alertMessage('error', '<b>Error: </b> Please fill the empty filed!', 4000);
  } else {
    const book = new Book(title, author);
    showBook.addedBooks(book);
    storeBook.addBook(book);
    alertMessage('success', '<b>Success:</b> Book saved successfully', 4000);
    title.value = '';
    author.value = '';
  }
});

bookListsContainer.addEventListener('click', (e) => {
  showBook.deleteBook(e.target);
  storeBook.removeBook(parseInt(e.target.dataset.id, 10));
  alertMessage('remove', '<b>Remove:</b> Book Removed successfully', 3000);
});

listLink.addEventListener('click', navbar1);
addFromLink.addEventListener('click', navbar2);
contactLink.addEventListener('click', navbar3);

const time = document.getElementById('time');
const date = new Date();
time.textContent = `${date.toDateString()}`;

setInterval(() => {
  const date = DateTime.now().toLocaleString(
    DateTime.DateTime_FULL_WITH_SECONDS,
  );
  time.textContent = `${date}`;
}, 1000);
