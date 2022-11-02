const list = document.getElementById('list');
const addForm = document.getElementById('add_book');
const contact = document.getElementById('contact');
const listLink = document.getElementById('List-link');
const addFromLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

function navbar1() {
  list.style.display = 'block';
  addForm.style.display = 'none';
  contact.style.display = 'none';
}

function navbar2() {
  list.style.display = 'none';
  addForm.style.display = 'block';
  contact.style.display = 'none';
}

function navbar3() {
  list.style.display = 'none';
  addForm.style.display = 'none';
  contact.style.display = 'block';
}

export {
  list, listLink, addForm, addFromLink, contact, contactLink, navbar1, navbar2, navbar3,
};
