import React, { PropTypes } from 'react';

require('./LisItems.styl');

function ListItems(props) {
  console.log(props.children);
  return (
    <section className="ListItems">
      {props.children}
    </section>
  );
}

ListItems.propTypes = {
  children: PropTypes.obj,
};

export default ListItems;
