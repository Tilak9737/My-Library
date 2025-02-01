import React, { useState } from "react";

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [github, setGithub] = useState("");
  const [cover, setCover] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !github || !cover || !genre) return; // Check for empty fields

    const newBook = {
      title,
      github,
      cover,
      genre,
    };
    addBook(newBook);
    setTitle("");
    setGithub("");
    setCover("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2">Title</label>
        <input
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2">GitHub Link</label>
        <input
          type="url"
          placeholder="Enter GitHub link"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2">Cover Image URL</label>
        <input
          type="url"
          placeholder="Enter cover image URL"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2">Genre</label>
        <input
          type="text"
          placeholder="Enter genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;