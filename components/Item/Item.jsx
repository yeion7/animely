import React from 'react';

require('./Item.styl');

function Item() {
  return (
    <a className="Item">
      <div className="Item-container">
        <img
          src="https://cdn.anilist.co/img/dir/anime/reg/21.jpg"
          alt="One Piece"
          className="Item-image"
        />
        <div className="Item-content">
          <span className="Item-title">One Piece</span>
          <span className="Item-date">(TV, 1999)</span>
        </div>
      </div>
    </a>
  );
}

export default Item;
