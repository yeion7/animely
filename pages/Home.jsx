import React from 'react';

import Search from '../components/Search/Search';
import ListItems from '../components/ListItems/ListItems';
import Item from '../components/Item/Item';

function Home() {
  return (
    <section name="Home">
      <Search />
      <ListItems>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ListItems>
    </section>
  );
}

export default Home;
