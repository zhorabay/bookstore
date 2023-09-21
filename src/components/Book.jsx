import React from 'react';
import PropTypes from 'prop-types';
import prgrs from '../images/prgrs.png';
import '../styles/ListBooks.css';

const Book = ({
  id, title, author, category, removeBook,
}) => {
  const handleRemoveClick = () => {
    removeBook(id);
  };

  return (
    <div className="list-container">
      <div className="description">
        <ul className="book-main">
          <li className="book-id">
            ID:
            {' '}
            {id}
          </li>
          <li className="book-category">
            Category:
            {' '}
            {category}
          </li>
          <li className="book-title">
            Title:
            {' '}
            {title}
          </li>
          <li className="book-author">
            Author:
            {' '}
            {author}
          </li>
        </ul>
        <ul className="book-additional">
          <li>Comments</li>
          <li className="remove-book">
            <button type="button" onClick={handleRemoveClick}>Remove</button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="progress-container">
        <div className="percentage">
          <img src={prgrs} alt="here should be progress" className="img" />
          <div className="percentage-text">
            <p className="number">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-display">Chapter 17</p>
          <button type="button" className="list-button">UPGRADE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
