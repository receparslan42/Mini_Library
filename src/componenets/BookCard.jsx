function BookCard({ id, title, author, category, isFavorite, toggleFavorite }) {
    return (
        <div className="book-card">
            <div>
                <h3 className="book-title">{title}</h3>
                <p className="book-meta">
                    {author} • {category}
                </p>
            </div>
            <button
                onClick={() => toggleFavorite(id)}
                className={isFavorite ? "fav-button active" : "fav-button"}
            >
                {isFavorite ? "★ In Favorites" : "☆ Add to Favorites"}
            </button>
        </div>
    );
}

export default BookCard;
