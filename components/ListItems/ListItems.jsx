import React from 'react';

import Item from '../Item/Item';

require('./LisItems.styl');

function ListItems() {
  return (
    <section className="ListItems">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </section>
  );
}

export default ListItems;
