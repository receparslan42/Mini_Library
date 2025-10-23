import React, { useState, useEffect } from "react";
import SearchBar from "./componenets/SearchBar";
import CategoryFilter from "./componenets/CategoryFilter";
import BookList from "./componenets/BookList";
import FavoritePanel from "./componenets/FavoritePanel";
import "./index.css";
import './App.css'

function App() {
  const booksData = [
    { id: 1, title: "React'a Giriş", author: "D. Usta", category: "Web" },
    { id: 2, title: "İleri JavaScript", author: "S. Kılıç", category: "Web" },
    { id: 3, title: "Veri Yapıları", author: "A. Demir", category: "CS" },
    { id: 4, title: "Algoritmalar", author: "E. Kaya", category: "CS" },
    { id: 5, title: "UI/UX Temelleri", author: "N. Akın", category: "Design" },
  ];

  const [searchText, setSearchText] = useState(localStorage.getItem("searchText") || "");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("searchText", searchText);
  }, [searchText]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    const book = booksData.find((b) => b.id === id);
    const isFav = favorites.some((f) => f.id === id);

    setFavorites((prev) =>
      isFav ? prev.filter((f) => f.id !== id) : [...prev, book]
    );
  };

  const filteredBooks = booksData
    .filter(
      (b) =>
        b.title.toLowerCase().includes(searchText.toLowerCase()) ||
        b.author.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((b) => (category === "All" ? true : b.category === category))
    .map((b) => ({
      ...b,
      isFavorite: favorites.some((f) => f.id === b.id),
    }));

  return (
    <div className="app-container">
      <h1 className="app-title">Mini Library</h1>

      <div className="top-bar">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>

      <div className="main-grid">
        <div className="book-list-container">
          <BookList books={filteredBooks} toggleFavorite={toggleFavorite} />
        </div>
        <div className="favorite-panel-container">
          <FavoritePanel favorites={favorites} toggleFavorite={toggleFavorite} />
        </div>
      </div>
    </div>
  )
}

export default App
