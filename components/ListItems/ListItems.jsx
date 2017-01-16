import React, { PropTypes } from 'react';

require('./LisItems.styl');

function ListItems(props) {
  return (
    <section className="ListItems">
      {props.children}
    </section>
  );
}

ListItems.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

export default ListItems;
