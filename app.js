import Book from "./Book.js";
import UI from "./UI.js";

// event listener for add, get form values
document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  // instantiating a book
  const book = new Book(title, author, isbn);
  // instantiating a UI object
  const ui = new UI();
  // validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // add book to list
    ui.addBookToList(book);
    // clear fields
    ui.clearFields();
    // show success
    ui.showAlert("Book successfully added", "success");
  }
  e.preventDefault();
});

// event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  // instantiate UI
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book successfully deleted", "success");
  e.preventDefault();
});
