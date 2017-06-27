(function () {
     class Figure {
        constructor(node) {
            this.node = node;
        }

        render(x, y) {


            let img = document.createElement('img');
            img.className = 'figure';
            img.src = 'images/white-checker.png';

            let spawnTo = document.querySelector(`tr[data-row="${x}"] > td[data-cell="${y}"]`);
            console.log(spawnTo);
            spawnTo.appendChild(img)

        }


    }

    window.Figure = Figure;
})();
