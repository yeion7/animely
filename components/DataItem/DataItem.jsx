import React, { PropTypes } from 'react';

require('./DataItem.styl');

function DataItem(props) {
  return (
    <div className="DataItem">
      <span className="DataItem-title">{props.type}</span>
      <span className="DataItem-text">{props.text}</span>
    </div>
  );
}

DataItem.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default DataItem;
