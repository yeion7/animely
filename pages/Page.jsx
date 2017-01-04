import React from 'react';
import {
  Match,
  Miss,
} from 'react-router';

import Home from './Home';
import Series from './Series';
import Characters from './Characters';

import Error404 from './Error404';

function Pages() {
  return (
    <main role="application">
      {/* List of animes */}
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      {/* Single Serie */}
      <Match
        pattern="/serie/:id"
        exactly
        component={Series}
      />
      {/* Single character */}
      <Match
        pattern="/characters/:id"
        exactly
        component={Characters}
      />
      {/* Error 404 */}
      <Miss
        component={Error404}
      />
    </main>
  );
}

export default Pages;
