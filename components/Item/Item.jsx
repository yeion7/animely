import React, { PropTypes } from 'react';

require('./Item.styl');

function Item(props) {
  return (
    <a className="Item" id={props.id}>
      <div className="Item-container" >
        <img
          src={props.image_url_lge}
          alt={props.title_english}
          className="Item-image"
        />
        <div className="Item-content">
          <span className="Item-title">{props.title_english}</span>
          <span className="Item-date">
            ({props.type}, {props.average_score}%)
          </span>
        </div>
      </div>
    </a>
  );
}

Item.propTypes = {
  image_url_lge: PropTypes.string,
  title_english: PropTypes.string,
  type: PropTypes.string,
  average_score: PropTypes.number,
  id: PropTypes.number,
};

export default Item;
