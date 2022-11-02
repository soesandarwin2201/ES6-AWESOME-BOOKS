import storeBook from './localStorage.js';

export default class showBook {
  static displayBooks() {
    const books = storeBook.getBook();
    books.forEach((book) => showBook.addedBooks(book));
  }

  // display booklist
  static addedBooks(book) {
    const bookListsContainer = document.getElementById('book-list-container');
    const bookLists = document.createElement('tr');

    bookLists.innerHTML = `
   <td class="title">${book.title}</td>
   <p> by </p>
   <td class="author">${book.author}</td>
    <td> <button class="remove-btn delete" data-id=${book.id} >Remove</button> </td>`;

    bookListsContainer.appendChild(bookLists);
  }

  static deleteBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }
}
