function FavoritePanel({ favorites, toggleFavorite }) {
    return (
        <div className="favorite-panel">
            <h3 className="favorite-title">Favorites ({favorites.length})</h3>
            {favorites.length === 0 ? (
                <p className="no-favorites">No favorites yet.</p>
            ) : (
                <ul className="favorite-list">
                    {favorites.map((b) => (
                        <li key={b.id} className="favorite-item">
                            <span>{b.title}</span>
                            <button
                                onClick={() => toggleFavorite(b.id)}
                                className="remove-button"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FavoritePanel;
