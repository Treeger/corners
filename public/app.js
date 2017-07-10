/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Desc = function () {
    function Desc(node) {
        _classCallCheck(this, Desc);

        this.node = node;
        this.render();
    }

    _createClass(Desc, [{
        key: 'render',
        value: function render() {
            var table = this.generateTable();
            this.node.appendChild(table);
        }
    }, {
        key: 'generateTable',
        value: function generateTable() {

            var cells = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            var rows = [8, 7, 6, 5, 4, 3, 2, 1];
            var table = document.createElement('table');
            table.className = 'desc';
            var even = true;

            function swapEven() {
                even ? even = false : even = true;
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var r = _step.value;

                    var tr = document.createElement('tr');
                    tr.dataset.row = r;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = cells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var c = _step2.value;

                            var td = document.createElement('td');
                            td.classList.add('desc__cell');
                            td.dataset.cell = c;
                            //odd or even? making black or white fields
                            even ? td.classList.add('white-field') : td.classList.add('black-field');
                            if (r === 1) {
                                var lettersSpan = document.createElement('span');
                                lettersSpan.innerText = c;
                                lettersSpan.className = 'index index-bottom';
                                td.appendChild(lettersSpan);
                            }
                            if (c === 'a') {
                                var numbersSpan = document.createElement('span');
                                numbersSpan.innerText = r;
                                numbersSpan.className = 'index index-left';
                                td.appendChild(numbersSpan);
                            }
                            tr.appendChild(td);
                            swapEven();
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    swapEven();
                    table.appendChild(tr);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return table;
        }
    }]);

    return Desc;
}();

exports.default = Desc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _figure = __webpack_require__(3);

var _figure2 = _interopRequireDefault(_figure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//x = numbers
//y = letters

var whiteStarting = [[1, 'a'], [1, 'b'], [1, 'c'], [1, 'd'], [2, 'a'], [2, 'b'], [2, 'c'], [2, 'd'], [3, 'a'], [3, 'b'], [3, 'c'], [3, 'd'], [4, 'a'], [4, 'b'], [4, 'c'], [4, 'd']];

var blackStarting = [[5, 'e'], [5, 'f'], [5, 'g'], [5, 'h'], [6, 'e'], [6, 'f'], [6, 'g'], [6, 'h'], [7, 'e'], [7, 'f'], [7, 'g'], [7, 'h'], [8, 'e'], [8, 'f'], [8, 'g'], [8, 'h']];

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.turns = 0;
        this.isWhiteTurn = true;
        var figures = document.querySelectorAll('.figure');
        figures.forEach(function (figure) {
            figure.remove();
        });

        this.spawnFigures();
        this.updateStatusBar('Current TURN: white');
    }

    _createClass(Game, [{
        key: 'isValidMove',
        value: function isValidMove(currentX, currentY, targetX, targetY) {
            var availableMoves = this.calculatePossible_moves(currentX, currentY);

            if (availableMoves.indexOf(targetX + targetY) >= 0) {
                return true;
            } else {
                this.updateStatusBar("You can't move that way!");
                return false;
            }
        }
    }, {
        key: 'calculatePossible_moves',
        value: function calculatePossible_moves(currentX, currentY) {

            var figures = document.querySelectorAll('.figure');
            var availableMoves = [];
            var fieldWithFigure = [];
            var calculatedFields = [];
            //checks if the are a figure on field or not
            //if Yes it returns a Figure, otherwise false
            function haveFigureOnField(x, y) {
                var result = false;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = figures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var figure = _step.value;

                        if (figure.dataset.positionX === x && figure.dataset.positionY === y) {
                            result = figure;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return result;
            }

            //returns left, right top and bottom coordinates of specific field
            function getCoordianatesOfNearbyFields(x, y) {

                var left = getNextFieldYCoordinates(y, '-');
                var right = getNextFieldYCoordinates(y, '+');
                var top = getNextFieldXCoordinates(x, '+');
                var bottom = getNextFieldXCoordinates(x, '-');

                return [[x, left], [x, right], [top, y], [bottom, y]];
            }

            //returns left and right coordinates of specific field
            function getNextFieldYCoordinates(y, operation) {
                var result = void 0,
                    charY = y.charCodeAt(0);
                if (operation === '-') {
                    if (y !== 'a') result = String.fromCharCode(charY - 1);
                } else if (operation === '+') {
                    if (y !== 'h') result = String.fromCharCode(charY + 1);
                }
                return result || y;
            }

            //returns top and bottom coordinates of specific field
            function getNextFieldXCoordinates(x, operation) {
                var result = void 0,
                    xInt = parseInt(x);
                if (operation === '-') {
                    if (x !== '1') result = (xInt - 1).toString();
                } else if (operation === '+') {
                    if (x !== '8') result = (xInt + 1).toString();
                }
                return result || x;
            }

            //Calculate possible moves without jumping from starting point
            (function startingNearbyCoordinates() {
                var nearbyCoordinates = getCoordianatesOfNearbyFields(currentX, currentY);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = nearbyCoordinates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var coord = _step2.value;

                        if (!haveFigureOnField(coord[0], coord[1])) {
                            availableMoves.push(coord[0] + coord[1]);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            })();

            //calculating possible jumps from x and y
            function canYouJumpHere(x, y) {
                //temporary array for not calculating for same spot over and over again
                calculatedFields.push(x + y);
                // Step 1: detect coordinates of nearby fields
                var nearbyCoordinates = getCoordianatesOfNearbyFields(x, y);
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = nearbyCoordinates[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var coord = _step3.value;

                        if (haveFigureOnField(coord[0], coord[1])) {
                            fieldWithFigure.push(coord);
                        }
                    }
                    // Step 2: detecting if the are any free fields after nearby fields
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = fieldWithFigure[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var _coord = _step4.value;

                        //Coordinates of possible jumping field
                        var newX = void 0,
                            newY = void 0,

                        //figure on jumping field
                        busyField = void 0,

                        //coordinates of field with figure we want to jump over
                        figureX = _coord[0],
                            figureY = _coord[1];
                        //detecting fields to the left and to the right
                        if (x === figureX) {
                            if (y > figureY) {
                                newY = getNextFieldYCoordinates(figureY, '-');
                            } else {
                                newY = getNextFieldYCoordinates(figureY, '+');
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
                                newX = getNextFieldXCoordinates(figureX, '-');
                            } else {
                                newX = getNextFieldXCoordinates(figureX, '+');
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
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            }

            canYouJumpHere(currentX, currentY);

            return availableMoves;
        }

        //updating status text banner

    }, {
        key: 'updateStatusBar',
        value: function updateStatusBar(msg) {
            var turnButton = document.querySelector('.turn');
            turnButton.innerText = msg;
        }
        //Making turns

    }, {
        key: 'turn',
        value: function turn() {
            //remove Dng from all figures
            function removeDnDfromAll() {
                var figuresToRemoveDrag = document.querySelectorAll('.figure');
                figuresToRemoveDrag.forEach(function (figure) {
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
                var figures = document.querySelectorAll('.figure[data-color="' + color + '"]');
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = figures[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var figure = _step5.value;

                        figure.classList.add('figure_grabbable');
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
            }

            this.turns += 1;
            var color = void 0;
            removeDnDfromAll();
            makeSpecificFiguresOfColorDraggable(this);

            this.updateStatusBar('Current TURN: ' + color);
        }
    }, {
        key: 'getIsWhiteTurn',
        value: function getIsWhiteTurn() {
            return this.isWhiteTurn;
        }
    }, {
        key: 'spawnFigures',
        value: function spawnFigures() {
            var figure = new _figure2.default();
            //spawn white
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = whiteStarting[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var w = _step6.value;

                    figure.render(w[0], w[1], false);
                }
                //spawn black
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = blackStarting[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var b = _step7.value;

                    figure.render(b[0], b[1], true);
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
        }
    }]);

    return Game;
}();

exports.default = Game;

window.Game = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _desc = __webpack_require__(0);

var _desc2 = _interopRequireDefault(_desc);

var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('DOMContentLoaded', function () {
    var desc = new _desc2.default(document.querySelector('.js-desc'));

    var gameStartButton = document.querySelector('.new_game');
    gameStartButton.addEventListener('click', function (ev) {
        window.game = new _game2.default();
    });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dragStart(ev) {
    var color = this.dataset.color;
    var isWhiteTurn = game.getIsWhiteTurn();
    if (color === 'white' && isWhiteTurn === true || color === 'black' && isWhiteTurn === false) {
        this.style.opacity = '0.4';
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
        return true;
    } else {
        ev.preventDefault();
        return false;
    }
}

function dragOver(ev) {
    if (ev.target.tagName === 'TD') {

        if (!ev.target.querySelector('img')) {
            ev.target.classList.add('hovered');
            ev.preventDefault();
        }
    }
}

function dragLeave(ev) {
    if (ev.target.tagName === 'TD') {
        ev.target.classList.remove('hovered');
    }
}

function dragDrop(ev) {

    if (this.childElementCount !== 1) {
        var data = ev.dataTransfer.getData("Text");
        var figure = document.getElementById(data);

        var targetX = this.parentNode.dataset.row,
            targetY = this.dataset.cell,
            currentX = figure.dataset.positionX,
            currentY = figure.dataset.positionY;

        if (window.game.isValidMove(currentX, currentY, targetX, targetY)) {
            ev.target.appendChild(figure);
            window.game.turn();

            figure.dataset.positionX = targetX;
            figure.dataset.positionY = targetY;
        }
    }
    ev.target.classList.remove('hovered');
    ev.stopPropagation();
    return false;
}

function imgDrop(ev) {
    this.style.opacity = '1';
}

var Figure = function () {
    function Figure(node) {
        _classCallCheck(this, Figure);

        this.node = node;
    }

    _createClass(Figure, [{
        key: 'render',
        value: function render(x, y, isBlack) {

            var img = document.createElement('img');
            img.classList.add('figure');

            if (isBlack) {
                img.src = 'images/black-checker.png';
                img.dataset.color = 'black';
            } else {
                img.src = 'images/white-checker.png';
                img.dataset.color = 'white';
                img.classList.add('figure_grabbable');
            }
            img.dataset.positionX = x;
            img.dataset.positionY = y;
            var spawnTo = document.querySelector('.desc tr[data-row="' + x + '"] > td[data-cell="' + y + '"]');
            img.id = x + y;

            spawnTo.appendChild(img);

            //add drag and drop
            img.addEventListener('dragstart', dragStart, false);
            img.addEventListener('dragend', imgDrop, false);

            var td = document.querySelectorAll('.desc__cell');

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = td[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var t = _step.value;

                    t.addEventListener('dragover', dragOver, false);
                    t.addEventListener('dragleave', dragLeave, false);
                    t.addEventListener('drop', dragDrop, false);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Figure;
}();

exports.default = Figure;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map