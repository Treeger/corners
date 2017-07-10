import Figure from '../desc/figure/figure.js';

//x = numbers
//y = letters

const whiteStarting = [
    [1, 'a'], [1, 'b'], [1, 'c'], [1, 'd'],
    [2, 'a'], [2, 'b'], [2, 'c'], [2, 'd'],
    [3, 'a'], [3, 'b'], [3, 'c'], [3, 'd'],
    [4, 'a'], [4, 'b'], [4, 'c'], [4, 'd'],
];

const blackStarting = [
    [5, 'e'], [5, 'f'], [5, 'g'], [5, 'h'],
    [6, 'e'], [6, 'f'], [6, 'g'], [6, 'h'],
    [7, 'e'], [7, 'f'], [7, 'g'], [7, 'h'],
    [8, 'e'], [8, 'f'], [8, 'g'], [8, 'h'],
];


export default class Game {

    constructor() {
        this.turns = 0;
        this.isWhiteTurn = true;
        let figures = document.querySelectorAll('.figure');
        figures.forEach(figure => {
            figure.remove()
        });

        this.spawnFigures();
        this.updateStatusBar(`Current TURN: white`);
    }

    isValidMove(currentX, currentY, targetX, targetY) {
        let availableMoves = this.calculatePossible_moves(currentX, currentY);

        if (availableMoves.indexOf(targetX + targetY) >= 0) {
            return true
        } else {
            this.updateStatusBar("You can't move that way!");
            return false
        }
    }

    calculatePossible_moves(currentX, currentY) {

        let figures = document.querySelectorAll('.figure');
        let availableMoves = [];
        let fieldWithFigure = [];
        let calculatedFields = [];
        //checks if the are a figure on field or not
        //if Yes it returns a Figure, otherwise false
        function haveFigureOnField(x, y) {
            let result = false;
            for (let figure of figures) {
                if (figure.dataset.positionX === x && figure.dataset.positionY === y) {
                    result = figure;
                }
            }
            return result;
        }

        //returns left, right top and bottom coordinates of specific field
        function getCoordianatesOfNearbyFields(x, y) {

            let left = getNextFieldYCoordinates(y, '-');
            let right = getNextFieldYCoordinates(y, '+');
            let top = getNextFieldXCoordinates(x, '+');
            let bottom = getNextFieldXCoordinates(x, '-');

            return [[x, left], [x, right], [top, y], [bottom, y]];
        }

        //returns left and right coordinates of specific field
        function getNextFieldYCoordinates(y, operation) {
            let result,
                charY = y.charCodeAt(0);
            if (operation === '-') {
                if (y !== 'a') result = String.fromCharCode(charY - 1)
            } else if (operation === '+') {
                if (y !== 'h') result = String.fromCharCode(charY + 1)
            }
            return result || y
        }

        //returns top and bottom coordinates of specific field
        function getNextFieldXCoordinates(x, operation) {
            let result,
                xInt = parseInt(x);
            if (operation === '-') {
                if (x !== '1') result = (xInt - 1).toString()
            } else if (operation === '+') {
                if (x !== '8') result = (xInt + 1).toString()
            }
            return result || x
        }

        //Calculate possible moves without jumping from starting point
        (function startingNearbyCoordinates() {
            let nearbyCoordinates = getCoordianatesOfNearbyFields(currentX, currentY);
            for (let coord of nearbyCoordinates) {
                if (!haveFigureOnField(coord[0], coord[1])) {
                    availableMoves.push(coord[0] + coord[1])
                }
            }
        })();

        //calculating possible jumps from x and y
        function canYouJumpHere(x, y) {
            //temporary array for not calculating for same spot over and over again
            calculatedFields.push(x + y);
            // Step 1: detect coordinates of nearby fields
            let nearbyCoordinates = getCoordianatesOfNearbyFields(x, y);
            for (let coord of nearbyCoordinates) {
                if (haveFigureOnField(coord[0], coord[1])) {
                    fieldWithFigure.push(coord);
                }
            }
            // Step 2: detecting if the are any free fields after nearby fields
            for (let coord of fieldWithFigure) {
                //Coordinates of possible jumping field
                let newX, newY,
                    //figure on jumping field
                    busyField,
                    //coordinates of field with figure we want to jump over
                    figureX = coord[0],
                    figureY = coord[1];
                //detecting fields to the left and to the right
                if (x === figureX) {
                    if (y > figureY) {
                        newY = getNextFieldYCoordinates(figureY, '-')
                    } else {
                        newY = getNextFieldYCoordinates(figureY, '+')
                    }

                    // If the are free field we can jump in on Y axis
                    busyField = haveFigureOnField(figureX, newY);
                    if (!busyField) {
                        availableMoves.push(figureX + newY);
                        if (calculatedFields.indexOf(figureX + newY) < 0) {
                            // recursion, calculate next moves
                            canYouJumpHere(x, newY);
                        }

                    }
                    //detecting fields to the top and to bottom
                } else if (y === figureY) {

                    if (x > figureX) {
                        newX = getNextFieldXCoordinates(figureX, '-')
                    } else {
                        newX = getNextFieldXCoordinates(figureX, '+')
                    }
                    // If the are free field we can jump in on X axis
                    busyField = haveFigureOnField(newX, figureY);
                    if (!busyField) {

                        availableMoves.push(newX + figureY);

                        if (calculatedFields.indexOf(newX + figureY) < 0) {
                            // recursion, calculate next moves
                            canYouJumpHere(newX, figureY);
                        }


                    }
                }
            }


        }


        canYouJumpHere(currentX, currentY);

        return availableMoves
    }

    //updating status text banner
    updateStatusBar(msg) {
        let turnButton = document.querySelector('.turn');
        turnButton.innerText = msg;
    }
    //Making turns
    turn() {
        //remove Dng from all figures
        function removeDnDfromAll() {
            let figuresToRemoveDrag = document.querySelectorAll(`.figure`);
            figuresToRemoveDrag.forEach(figure => {
                figure.classList.remove('figure_grabbable');
            });
        }
        //add Dnd to all figures of specific colors
        function makeSpecificFiguresOfColorDraggable(self) {
            if (self.isWhiteTurn === true) {
                self.isWhiteTurn = false;
                color = 'black';
            } else {
                self.isWhiteTurn = true;
                color = 'white';
            }
            let figures = document.querySelectorAll(`.figure[data-color="${color}"]`);
            for (let figure of figures) {
                figure.classList.add('figure_grabbable')
            }

        }

        this.turns += 1;
        let color;
        removeDnDfromAll();
        makeSpecificFiguresOfColorDraggable(this);

        this.updateStatusBar(`Current TURN: ${color}`);


    }

    getIsWhiteTurn() {
        return this.isWhiteTurn
    }

    spawnFigures() {
        let figure = new Figure();
        //spawn white
        for (let w of whiteStarting) {
            figure.render(w[0], w[1], false);
        }
        //spawn black
        for (let b of blackStarting) {
            figure.render(b[0], b[1], true);
        }


    }
}
window.Game = Game;
