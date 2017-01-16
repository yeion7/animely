import React, { PropTypes } from 'react';

import Item from '../Item/Item';
import DataItem from '../DataItem/DataItem';

require('./CharacterData.styl');

function CharacterData(props) {
  return (
    <div className="SerieData-container">
      <section className="SerieData-sidebar">
        <Item {...props} />
        <div className="SerieData-items">
          <DataItem type="Name" text={props.name_first} />
          <DataItem type="Last" text={props.name_last} />
        </div>
      </section>
      <section className="SerieData-content">
        <h2 className="SerieData-title">Description</h2>
        <div className="SerieData-description">
          {props.info}
        </div>
      </section>
    </div>
  );
}

CharacterData.propTypes = {
  info: PropTypes.string,
  name_last: PropTypes.string,
  name_first: PropTypes.string,
};

export default CharacterData;
