import React, { Fragment } from 'react';
function NotFound() {
  return (
  <React.Fragment>
  <div id="notfound">
  <img src="img/skin.png" alt="TheQuesing" />
  <h1>404</h1>
  <h3>Upss!! Parece que has introducido la url incorrecta</h3>
  <a id="notfound-button" href="/">Inicio</a>
  </div>
  </React.Fragment>
  );
}

export default NotFound;