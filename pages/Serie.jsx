import React from 'react';

import Item from '../components/Item/Item';
import ListItems from '../components/ListItems/ListItems';

import DataItem from '../components/DataItem/DataItem';

const style = {
  textAlign: 'center',
};

function Serie() {
  return (
    <section name="Serie">
      <h1 className="Serie title" style={style}>One Piece</h1>
      <div className="Serie-container">
        <section className="Serie-sidebar">
          <Item size="Item-ms" />
          <div className="Serie-data">
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
        <section className="Serie-content">
          <h2 className="Serie-title">Description</h2>
          <div className="Serie-description">
          Gol D. Roger was known as the Pirate King, the strongest and most
          infamous being to have sailed the Grand Line. The capture and death
          of Roger by the World Government brought a change throughout the
          world. His last words before his death revealed the location of
          the greatest treasure in the world, One Piece. It was this
          revelation that brought about the Grand Age of Pirates, men
          who dreamed of finding One Piece (which promises an unlimited
          amount of riches and fame), and quite possibly the most coveted
          of titles for the person who found it, the title of the Pirate King.

          Enter Monkey D. Luffy, a 17-year-old boy that defies your
           standard definition of a pirate. Rather than the popular persona
           of a wicked, hardened, toothless pirate who ransacks villages
           for fun, Luffy’s reason for being a pirate is one of pure
           wonder; the thought of an exciting adventure and meeting new
           and intriguing people, along with finding One Piece, are his
           reasons of becoming a pirate. Following in the footsteps of
           his childhood hero, Luffy and his crew travel across the Grand
           Line, experiencing crazy adventures, unveiling dark mysteries
           and battling strong enemies, all in order to reach One Piece.
        </div>
          <h2 className="Serie-title">Characters</h2>
          <ListItems>
            <Item size="Item-ms" />

          </ListItems>
        </section>
      </div>
    </section>
  );
}


export default Serie;
