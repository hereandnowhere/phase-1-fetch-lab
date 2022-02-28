function fetchBooks() {
  const fetchRequest = fetch("https://anapioficeandfire.com/api/books")
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    const books = data;
    return renderBooks(books);
  })
  return fetchRequest;
};

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
