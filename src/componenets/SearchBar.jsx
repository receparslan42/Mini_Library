function SearchBar({ searchText, setSearchText }) {
    return (
        <input
            type="text"
            placeholder="Search by title or author..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-bar"
        />
    );
}

export default SearchBar;
