'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import kitty from './img/kitty.jpg';
import circle from './img/circle.svg';
import font from './fonts/Abibas.otf';
import './styles/main.css';

import App from './components/App/App';

class Game {
  name = `Bargamut's Webpack Boilerplate`;
  img = kitty;
  vector = circle;
  font = font;
}

const myGame = new Game();

console.log(`I like ${myGame.name} and ${myGame.img}.`);
console.log(`Also ${myGame.vector}.`);
console.log(`Also ${myGame.font}.`);

ReactDOM.render(
  <React.StrictMode>
    <App text={myGame.name} style={{fontFamily: font}} />

    <img src={kitty} />
  </React.StrictMode>,
  document.getElementById(`root`)
);
