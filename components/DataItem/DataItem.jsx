import React, { PropTypes } from 'react';

function DataItem(props) {
  return (
    <div>
      <span className="Series-datatype">{props.type}</span>
      <span className="Series-datatext">{props.text}</span>
    </div>
  );
}

DataItem.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default DataItem;
