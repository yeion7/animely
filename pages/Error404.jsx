import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
  margin: '30px',
};

function Error404() {
  return (
    <section
      name="Error404"
      style={style}
    >
      <img
        src="http://www.404notfound.fr/assets/images/pages/img/androiddev101.jpg"
        alt="404"
      />
    </section>
  );
}


export default Error404;
