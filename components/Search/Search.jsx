import React from 'react';

require('./Search.styl');

function Search() {
  return (
    <section className="Search">
      <form action="" className="Search-form">
        <input
          type="text"
          className="Search-input"
          placeholder="Search anime and more"
        />
        <input
          type="submit"
          className="Search-submit"
          value="🔎"
        />
      </form>
    </section>
  );
}

export default Search;
