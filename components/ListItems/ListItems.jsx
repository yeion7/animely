import React, { PropTypes } from 'react';
import Item from '../Item/Item';

require('./LisItems.styl');


function ListItems(props) {
  return (
    <section className="ListItems">
      {props.items && props.items
        .map(item => <Item key={item.id} {...item} />)
        }
    </section>
  );
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ListItems;
