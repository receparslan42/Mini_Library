# 📚 Mini Library

A simple React-based web library application that allows users to search for books, filter them by category, and add or remove favorites.  
Your favorites and search text are saved automatically — so everything is remembered even after you close the browser!

🔗 **Live Demo:** [https://mini-library-eight.vercel.app/](https://mini-library-eight.vercel.app/)

---

## ✨ Features

- 🔍 **Search** by book title or author  
- 🧭 **Filter** by category (Web, CS, Design, etc.)  
- ⭐ **Add / Remove Favorites** with instant UI updates  
- 💾 **Local Storage Persistence** (favorites and search text are saved)  
- 🎨 **Clean & Responsive Design** (custom CSS-based styling)  

---

## 🛠️ Tech Stack

- **React** (Vite or CRA compatible)
- **JavaScript (ES6+)**
- **CSS** for layout and styling
- **LocalStorage API** for data persistence

---

## 📂 Project Structure

```
src/
│
├── assets/
│   └── library.svg
│
├── components/
│   ├── BookCard.jsx
│   ├── BookList.jsx
│   ├── CategoryFilter.jsx
│   ├── FavoritePanel.jsx
│   └── SearchBar.jsx
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/receparslan42/Mini_Library.git
cd Mini_Library
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
(If using Create React App, use `npm start` instead.)

---

## 🌐 Deployment

The project is deployed on **Vercel**:  
👉 [https://mini-library-eight.vercel.app/](https://mini-library-eight.vercel.app/)

You can easily redeploy by connecting your GitHub repo to Vercel and pushing updates.

---

## 📸 Preview

Here’s what the app looks like:

![Mini Library Screenshot](https://github.com/receparslan42/Mini_Library/blob/main/preview.png)

---

## 🧩 Core Components

| Component | Description |
|------------|-------------|
| `App.jsx` | Root component managing state and logic |
| `BookCard.jsx` | Individual book card with favorite button |
| `BookList.jsx` | Displays filtered list of books |
| `CategoryFilter.jsx` | Controlled select dropdown for categories |
| `FavoritePanel.jsx` | Displays current favorites and allows removing |
| `SearchBar.jsx` | Controlled search input component |

---

## 🧠 Future Improvements

- Add backend API for dynamic book data  
- Allow user accounts and cloud-synced favorites  
- Dark mode toggle  
- Pagination or infinite scroll for larger book lists  

---

## 📝 License

This project is open-source under the [MIT License](LICENSE).

---

**Developed with ❤️ using React and JavaScript.**
