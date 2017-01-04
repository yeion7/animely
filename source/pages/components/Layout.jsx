import React from 'react';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
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
  title: React.propTypes.string,
  content: React.propTypes.string,
};

export default Layout;
