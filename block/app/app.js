(function () {

    window.addEventListener('DOMContentLoaded', () => {
        let Desc = window.Desc;
        let desc = new Desc(document.querySelector('.js-desc'));
        const Game = window.Game;


        gameStartButton = document.querySelector('.new_game');
        gameStartButton.addEventListener('click', (e) =>{

            let game = new Game();
        })

    });


})();