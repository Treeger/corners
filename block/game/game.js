(function () {
    const Figure = window.Figure;
    let whiteStarting = [
        [1,'a'],[1,'b'],[1,'c'],[1,'d'],
        [2,'a'],[2,'b'],[2,'c'],[2,'d'],
        [3,'a'],[3,'b'],[3,'c'],[3,'d'],
        [4,'a'],[4,'b'],[4,'c'],[4,'d'],
    ];


    class Game {

        constructor() {
            let all = document.querySelectorAll('img');

            //while(all){
              //  all[0].remove();
            //}
            console.log(typeof (all));
            this.spawnFigures();
        }

        makeMove() {

        }

        isValidMove() {
            return true
        }

        spawnFigures() {

            let figure = new Figure();

            for(let c of whiteStarting){
                figure.render(c[0], c[1]);
            }
        }
    }
    window.Game = Game;
})();