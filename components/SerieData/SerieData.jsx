import React, { PropTypes } from 'react';

import Item from '../Item/Item';
import DataItem from '../DataItem/DataItem';
import ListItems from '../ListItems/ListItems';

require('./SerieData.styl');

function SerieData(props) {
  const date = new Date(props.start_date).toLocaleDateString();

  return (
    <div className="SerieData-container">
      <section className="SerieData-sidebar">
        <Item {...props} />
        <div className="SerieData-items">
          <DataItem type="type" text={props.type} />
          <DataItem type="status" text={props.airing_status} />
          <DataItem type="Start" text={date} />
          <DataItem type="Avg Score" text={`${props.average_score}%`} />
          <DataItem type="Popularity" text={props.popularity} />
          <DataItem type="Episodes" text={props.total_episodes} />
          <DataItem type="Duration" text={`${props.duration} min`} />
          <DataItem type="Japanese" text={props.title_japanese} />
        </div>
      </section>
      <section className="SerieData-content">
        <h2 className="SerieData-title">Description</h2>
        <div className="SerieData-description">
          {props.description}
        </div>
        <h2 className="SerieData-title">Characters</h2>
        <div className="SerieData-list">
          <ListItems>
            {props.characters
                .map(item =>
                  <Item
                    key={item.id}
                    {...item}
                    url="character"
                  />,
                )}
          </ListItems>
        </div>
      </section>
    </div>
  );
}

SerieData.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
  airing_status: PropTypes.string,
  title_japanese: PropTypes.string,
  type: PropTypes.string,
  total_episodes: PropTypes.number,
  duration: PropTypes.number,
  average_score: PropTypes.number,
  popularity: PropTypes.number,
  start_date: PropTypes.string,
};

export default SerieData;
