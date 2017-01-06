import React, { PropTypes } from 'react';
import { Link } from 'react-router';

require('./Item.styl');

function Item(props) {
  const url = props.url === 'character'
                ? `/character/${props.id}`
                : `/serie/${props.id}`;

  return (
    <Link className="Item" id={props.id} to={url}>
      <div className="Item-container" >
        <img
          src={props.image_url_lge}
          alt={props.title_english}
          className="Item-image"
        />
        <div className="Item-content">
          <span className="Item-title">{props.title_english}</span>
          <span className="Item-date">
            {props.type && props.average_score &&
              (`${props.type}, ${props.average_score}%`)
            }
            {props.name_first && props.name_last &&
              (`${props.name_first} ${props.name_last}`)
            }
          </span>
        </div>
      </div>
    </Link>
  );
}

Item.propTypes = {
  image_url_lge: PropTypes.string,
  title_english: PropTypes.string,
  type: PropTypes.string,
  average_score: PropTypes.number,
  id: PropTypes.number,
  url: PropTypes.string,
  name_first: PropTypes.string,
  name_last: PropTypes.string,
};

export default Item;
