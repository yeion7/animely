import React from 'react';

import Item from '../Item/Item';
import ListItems from '../ListItems/ListItems';

require('./ContentData.styl');

function ContentData() {
  return (
    <section className="ContentData">
      <h2 className="ContentData-title">Description</h2>
      <div className="ContentData-description">
        <p>
      Gol D. Roger was known as the Pirate King, the strongest and most
      infamous being to have sailed the Grand Line. The capture and death
      of Roger by the World Government brought a change throughout the
      world. His last words before his death revealed the location of
      the greatest treasure in the world, One Piece. It was this
      revelation that brought about the Grand Age of Pirates, men
      who dreamed of finding One Piece (which promises an unlimited
      amount of riches and fame), and quite possibly the most coveted
      of titles for the person who found it, the title of the Pirate King.
        </p>
        <p>
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
        </p>
      </div>
      <h2 className="ContentData-title">Characters</h2>
      <div className="ContentData-list">
        <ListItems>
          <Item size="Item-ms" />

        </ListItems>
      </div>
    </section>

  );
}

export default ContentData;
