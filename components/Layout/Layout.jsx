import React, { PropTypes } from 'react';

require('./Layout.styl');

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,minimum-scale=1.0"
        />
        <link
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <link
          type="text/css"
          href="http://localhost:3001/styles.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div
          id="app"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
        <script src="http://localhost:3001/app.js" />
      </body>

    </html>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Layout;
