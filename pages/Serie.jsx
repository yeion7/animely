import React from 'react';

import ContentData from '../components/ContentData/ContentData';
import SidebarData from '../components/SidebarData/SidebarData';


const style = {
  textAlign: 'center',
};

function Serie() {
  return (
    <section name="Serie">
      <h1 className="Serie title" style={style}>One Piece</h1>
      <div className="Serie-container">
        <SidebarData />
        <ContentData />
      </div>
    </section>
  );
}


export default Serie;
