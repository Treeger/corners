import Desc from '../desc/desc.js';
import Game from '../game/game.js';

window.addEventListener('DOMContentLoaded', () => {
    let desc = new Desc(document.querySelector('.js-desc'));


    let gameStartButton = document.querySelector('.new_game');
    gameStartButton.addEventListener('click', (ev) => {
        window.game = new Game();
    })

});

