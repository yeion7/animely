import React from 'react';

require('./Search.styl');

function Search() {
  return (
    <section className="Search">
      <form action="" className="Search-form">
        <select name="" id="" className="Search-select">
          <option value="">all</option>
          <option value="">anime</option>
          <option value="">characters</option>
        </select>
        <input
          type="text"
          className="Search-input"
          placeholder="Search anime and more"
        />
      </form>
    </section>
  );
}

export default Search;
