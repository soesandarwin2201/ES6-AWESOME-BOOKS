export default class StoreBook {
  static getBook = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook = (book) => {
    const books = this.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook = (id) => {
    let books = this.getBook();
    books = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
