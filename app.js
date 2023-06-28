function handleFormSubmit(event) {
    event.preventDefault();
 

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;


    let book = {
      title: title,
      author: author,
      pages: pages
    };

    // Store the book details in local storage
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));

    // Display the book details
    displayBookDetails();

    // Reset the form
    document.getElementById("bookForm").reset();
  }

  function displayBookDetails() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(function (book) {
      let listItem = document.createElement("li");
      listItem.textContent =
        "Title: " +
        book.title +
        ", Author: " +
        book.author +
        ", Pages: " +
        book.pages;
      bookList.appendChild(listItem);
    });
  }