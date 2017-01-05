import React from 'react';
import {
  Match,
  Miss,
} from 'react-router';

import Home from './Home';
import Serie from './Serie';
import Character from './Character';

import Error404 from './Error404';

function Pages() {
  return (
    <main role="application">
      {/* Home search */}
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      {/* Single Serie */}
      <Match
        pattern="/serie/:id"
        exactly
        component={Serie}
      />
      {/* Single character */}
      <Match
        pattern="/characters/:id"
        exactly
        component={Character}
      />
      {/* Error 404 */}
      <Miss
        component={Error404}
      />
    </main>
  );
}

export default Pages;
