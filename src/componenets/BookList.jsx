import BookCard from "./BookCard";

function BookList({ books, toggleFavorite }) {
  return (
    <div>
      {books.length === 0 ? (
        <p className="no-results">No books found.</p>
      ) : (
        books.map((b) => (
          <BookCard key={b.id} {...b} toggleFavorite={toggleFavorite} />
        ))
      )}
    </div>
  );
}

export default BookList;
