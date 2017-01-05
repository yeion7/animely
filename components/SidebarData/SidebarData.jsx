import React from 'react';

import Item from '../Item/Item';
import DataItem from '../DataItem/DataItem';

require('./SidebarData.styl');


function SidebarData() {
  return (
    <section className="SidebarData">
      <Item size="Item-ms" />
      <div className="SidebarData-data">
        <DataItem type="type" text="tv" />
        <DataItem type="status" text="Currenly Airing" />
        <DataItem type="Start" text="Oct 20, 1999" />
        <DataItem type="Avg Score" text=" 83.9%" />
        <DataItem type="Popularity" text=" 11064" />
        <DataItem type="Main Studio" text=" Toei Animation" />
        <DataItem type="Duration" text="24 mins" />
        <DataItem type="Japanese" text="ワンピース" />
      </div>
    </section>
  );
}

export default SidebarData;
