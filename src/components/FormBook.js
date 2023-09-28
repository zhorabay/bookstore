import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/FormBook.css';
import { addBooksData } from '../features/book/bookSlice';

const FormBook = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Category',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title, author, category,
    } = formData;

    if (title.trim() === '' || author.trim() === '' || category === 'Category') {
      return;
    }

    dispatch(addBooksData(formData));

    setFormData({
      title: '',
      author: '',
      category: 'Category',
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form-flex" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="title"
          placeholder="Book title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          name="author"
          placeholder="Book author"
          value={formData.author}
          onChange={handleInputChange}
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="form-button">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default FormBook;
