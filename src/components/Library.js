import React, { useState, useEffect } from "react";
import booksData from "../books.json";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import AddBookForm from "./AddBookForm";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [showForm, setShowForm] = useState(false); // Form visibility state

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
    setShowForm(false); // Hide form after adding a book
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "All" || book.genre === genre)
  );

  const genres = ["All", ...new Set(books.map((book) => book.genre))];

  return (
    <div className="min-h-screen p-6 transition-colors bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">📚 My Library</h1>
        <DarkModeToggle />
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-full sm:w-72 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white"
        />
        <select
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          className="px-4 py-2 w-full sm:w-48 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white"
        >
          {genres.map((g, index) => (
            <option key={index} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Add Book Button */}
      {/* <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all"
        >
          {showForm ? "❌ Close" : "➕ Add Book"}
        </button>
      </div> */}

      {/* Show AddBookForm only when button is clicked */}
      {/* {showForm && <AddBookForm addBook={addBook} />} */}

      {/* Book Display Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg  overflow-hidden transform hover:scale-105 transition-all"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-80 object-contain rounded-md"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm">{book.genre}</p>
                <a
                  href={book.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block  text-blue-500 hover:underline"
                >
                  Read Book →
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full">No books found</p>
        )}
      </div>
       
    </div>
  );
};

export default Library;