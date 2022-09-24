/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/arrayIncludes.js":
/*!******************************!*\
  !*** ./src/arrayIncludes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arraysEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arraysEqual.js */ "./src/arraysEqual.js");


const arrayIncludes = (bigArray, smallArray) => {
  for (const array of bigArray) {
    if ((0,_arraysEqual_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, smallArray)) {
      return true;
    }
  }

  return false;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayIncludes);

/***/ }),

/***/ "./src/arraysEqual.js":
/*!****************************!*\
  !*** ./src/arraysEqual.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false; // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arraysEqual);

/***/ }),

/***/ "./src/getRandomInt.js":
/*!*****************************!*\
  !*** ./src/getRandomInt.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getRandomInt = max => {
  return Math.floor(Math.random() * max); // Example
  // console.log(getRandomInt(3))
  // expected output: 0, 1 or 2
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomInt);

/***/ }),

/***/ "./src/initializeGame.js":
/*!*******************************!*\
  !*** ./src/initializeGame.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer.js */ "./src/renderer.js");
/* harmony import */ var _newGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newGame.js */ "./src/newGame.js");
/* harmony import */ var _newPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newPlayer.js */ "./src/newPlayer.js");




const initializeGame = () => {
  const myRenderer = (0,_renderer_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const height = 10;
  const width = 10;
  const player1 = (0,_newPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    name: "Player 1",
    ai: true
  });
  const player2 = (0,_newPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    name: "Player 2",
    ai: true
  });
  const myGame = (0,_newGame_js__WEBPACK_IMPORTED_MODULE_1__["default"])([player1, player2], [height, width]);
  myRenderer.showModal("modal3");
  myRenderer.playButtonListener(player1, player2, myGame);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeGame);

/***/ }),

/***/ "./src/newGame.js":
/*!************************!*\
  !*** ./src/newGame.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newGameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newGameboard.js */ "./src/newGameboard.js");
/* harmony import */ var _newShip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newShip.js */ "./src/newShip.js");
/* harmony import */ var _getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRandomInt.js */ "./src/getRandomInt.js");
/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer.js */ "./src/renderer.js");
/* harmony import */ var _newPlayer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newPlayer.js */ "./src/newPlayer.js");




 // Path goes like this:
// startGame -> player1PlaceShips -> placeShipsAI or placeShipsPlayer
// player2PlaceShips -> placeShipsAI or placeShipsPlayer
// -> startGameLoop -> playerTurnLoop
// -> gameEnds
// Note: myRenderer.draw removes event listeners

const newGame = (_ref, _ref2) => {
  let [player1, player2] = _ref;
  let [height, width] = _ref2;
  const board1 = (0,_newGameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    height: height,
    width: width,
    id: "grid1",
    player: player1
  });
  const board2 = (0,_newGameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    height: height,
    width: width,
    id: "grid2",
    player: player2
  });
  const myRenderer = (0,_renderer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  let winner = (0,_newPlayer_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    name: "NOBODY"
  });

  const gameEnds = () => {
    myRenderer.drawBoards(board1, board2);
    console.log(`${winner.getName()} wins`);
    console.log("Game Over");
    const turnText = `${winner.getName()} wins!`;
    myRenderer.changeTurnText(turnText);
  };

  const isGameOver = () => {
    if (board1.areAllShipsSunk()) {
      winner = player2;
      return true;
    }

    if (board2.areAllShipsSunk()) {
      winner = player1;
      return true;
    }

    return false;
  };

  const playerTurnLoop = (player, board) => {
    const boardAttacked = e => {
      let row = 0;
      let column = 0;

      if (!player.isAI()) {
        row = Number(e.target.dataset.row);
        column = Number(e.target.dataset.column);
      }

      player.takeTurn(board, [row, column]);

      if (isGameOver()) {
        gameEnds();
        return null;
      }

      myRenderer.drawBoard(board, board.getId());
      board.consoleGameboard();
      console.log(board.getHitArrays());
      console.log(board.getOrientations());
      let nextBoard;
      let nextPlayer;

      if (board.getId() == "grid1") {
        nextBoard = board2;
        nextPlayer = player1;
      } else {
        nextBoard = board1;
        nextPlayer = player2;
      }

      playerTurnLoop(nextPlayer, nextBoard);
    };

    const turnText = `Your turn, ${player.getName()}`;
    myRenderer.changeTurnText(turnText);

    if (player.isAI()) {
      boardAttacked();
    } else {
      myRenderer.tileListeners(boardAttacked, board.getId());
    }
  };

  const startGameLoop = () => {
    if (player1.isReady() && player2.isReady()) {
      playerTurnLoop(player1, board2);
    }
  };

  const placeShipsAI = (ships, gameBoard) => {
    for (const ship of ships) {
      if ((0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2) == 1) {
        ship.changeOrientation("horizontal");
      }

      let randRow = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(width);
      let randColumn = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(height);
      let whileCounter = 0;

      while (gameBoard.placeShip(ship, [randRow, randColumn]) == "Cannot place ship") {
        randRow = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(width);
        randColumn = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(height);
        whileCounter++;

        if (whileCounter >= height * width) {
          break;
        }
      }
    }

    myRenderer.drawBoard(gameBoard, gameBoard.getId());
    gameBoard.getPlayer().setToReady();

    if (!player2.isReady()) {
      player2PlaceShips();
    }

    startGameLoop();
    return gameBoard.getBoardArray();
  };

  let placeShipCounter = 0;

  const placeShipsLoop = (ships, gameBoard, modalId) => {
    const shipPlaced = e => {
      let row = Number(e.target.dataset.row);
      let column = Number(e.target.dataset.column);

      if (gameBoard.placeShip(ships[placeShipCounter], [row, column]) != "Cannot place ship") {
        placeShipCounter++;

        if (placeShipCounter == ships.length) {
          placeShipCounter = 0;
          myRenderer.hideModal(modalId);
          myRenderer.drawBoard(gameBoard, gameBoard.getId());
          gameBoard.getPlayer().setToReady();

          if (!player2.isReady()) {
            player2PlaceShips();
          }

          startGameLoop();
          return null;
        }

        placeShipsLoop(ships, gameBoard, modalId);
      }
    };

    myRenderer.drawPlacingBoard(modalId, gameBoard, "place" + gameBoard.getId());
    myRenderer.tileHoverListeners(ships[placeShipCounter], "place" + gameBoard.getId());
    myRenderer.shipButtonListener(ships[placeShipCounter], modalId);
    myRenderer.tileListeners(shipPlaced, "place" + gameBoard.getId());
  };

  const placeShipsPlayer = (ships, gameBoard, modalId) => {
    myRenderer.showModal(modalId);
    placeShipsLoop(ships, gameBoard, modalId);
  };

  const consoleBoards = () => {
    board1.consoleGameboard();
    console.log("----------------------------------------------------------------");
    board2.consoleGameboard();
  };

  const player1PlaceShips = () => {
    const ship1 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Carrier",
      length: 5
    });
    const ship2 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Battleship",
      length: 4
    });
    const ship3 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Destroyer",
      length: 3
    });
    const ship4 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Submarine",
      length: 3
    });
    const ship5 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Patrol Boat",
      length: 2
    });
    const ships1 = [ship1, ship2, ship3, ship4, ship5];
    const modalId1 = "modal1";

    if (player1.isAI()) {
      placeShipsAI(ships1, board1);
    } else {
      placeShipsPlayer(ships1, board1, modalId1);
    }
  };

  const player2PlaceShips = () => {
    const shippy1 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Carrier2",
      length: 5
    });
    const shippy2 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Battleship2",
      length: 4
    });
    const shippy3 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Destroyer2",
      length: 3
    });
    const shippy4 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Submarine2",
      length: 3
    });
    const shippy5 = (0,_newShip_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "Patrol Boat2",
      length: 2
    });
    const ships2 = [shippy1, shippy2, shippy3, shippy4, shippy5];
    const modalId2 = "modal2";

    if (player2.isAI()) {
      placeShipsAI(ships2, board2);
    } else {
      placeShipsPlayer(ships2, board2, modalId2);
    }
  };

  const startGame = () => {
    myRenderer.setPlayerNames(player1, player2);
    myRenderer.drawBoards(board1, board2);
    player1PlaceShips();
    consoleBoards();
    return [board1, board2];
  };

  return {
    startGame
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGame);

/***/ }),

/***/ "./src/newGameboard.js":
/*!*****************************!*\
  !*** ./src/newGameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayIncludes.js */ "./src/arrayIncludes.js");


const newGameboard = _ref => {
  let {
    height = 10,
    width = 10,
    unknownTile = "o",
    shipTile = "s",
    hitTile = "x",
    missTile = "~",
    id = null,
    player = null
  } = _ref;
  let boardArray = [];
  let ships = []; // I can't use the code below because placeShip will not work with it
  // const boardRow = Array(width).fill(unknownTile)

  for (let i = 0; i < height; i++) {
    boardArray.push(Array(width).fill(unknownTile));
  }

  const getPlayer = () => player;

  const getShipsSunk = () => {
    return ships.map(ship => {
      return ship.isSunk();
    });
  };

  const getShipsCoord = () => {
    return ships.map(ship => {
      return ship.getCoord();
    });
  };

  const getShipsCoords = () => {
    return ships.map(ship => {
      return ship.getCoords();
    });
  };

  const getHitArrays = () => {
    return ships.map(ship => {
      return ship.getHitArray();
    });
  };

  const getOrientations = () => {
    return ships.map(ship => {
      return ship.getOrientation();
    });
  };

  const checkNeighborsUnknownTile = (boardArray, _ref2, unknownTile) => {
    let [row, column] = _ref2;
    const up = [row - 1, column];
    const down = [row + 1, column];
    const left = [row, column - 1];
    const right = [row, column + 1];
    const directions = [up, down, left, right];

    for (const [row, column] of directions) {
      if (boardArray[row] && boardArray[row][column]) {
        if (boardArray[row][column] != unknownTile) {
          return false;
        }
      }
    }

    return true;
  };

  const getId = () => id;

  const changeId = value => {
    id = value;
  };

  const getHeight = () => height;

  const getWidth = () => width;

  const getBoardArray = () => boardArray;

  const getUnknownTile = () => unknownTile;

  const getShipTile = () => shipTile;

  const getHitTile = () => hitTile;

  const getMissTile = () => missTile;

  const getHitArray = () => hitArray;

  const consoleGameboard = () => {
    for (const row of boardArray) {
      console.log(row);
    }

    return boardArray;
  };

  const placeShip = (ship, _ref3) => {
    let [row, column] = _ref3;

    if (!ship) {
      return "Cannot place ship";
    }

    if (!Number.isInteger(row) || !Number.isInteger(column)) {
      return "Cannot place ship";
    }

    if (!boardArray[row] || !boardArray[row][column]) {
      return "Cannot place ship";
    }

    if (ship.getOrientation() == "vertical") {
      if (height < ship.getLength() || height - row < ship.getLength()) {
        return "Cannot place ship";
      } else {
        for (let i = 0; i < ship.getLength(); i++) {
          if (boardArray[row + i][column] != unknownTile) {
            return "Cannot place ship";
          } else if (!checkNeighborsUnknownTile(boardArray, [row + i, column], unknownTile)) {
            return "Cannot place ship";
          }
        }

        for (let i = 0; i < ship.getLength(); i++) {
          boardArray[row + i][column] = shipTile;
        }

        ship.changeCoord([row, column]);
        ships.push(ship);
        return boardArray;
      }
    } else if (ship.getOrientation() == "horizontal") {
      if (width < ship.getLength() || width - column < ship.getLength()) {
        return "Cannot place ship";
      } else {
        for (let i = 0; i < ship.getLength(); i++) {
          if (boardArray[row][column + i] != unknownTile) {
            return "Cannot place ship";
          } else if (!checkNeighborsUnknownTile(boardArray, [row, column + i], unknownTile)) {
            return "Cannot place ship";
          }
        }

        for (let i = 0; i < ship.getLength(); i++) {
          boardArray[row][column + i] = shipTile;
        }

        ship.changeCoord([row, column]);
        ships.push(ship);
        return boardArray;
      }
    } else {
      return "You're not supposed to be here";
    }
  };

  const receiveAttack = _ref4 => {
    let [row, column] = _ref4;

    if (boardArray[row][column] == shipTile) {
      boardArray[row][column] = hitTile;

      for (const ship of ships) {
        const hitCoord = [row, column];
        const shipCoords = ship.getCoords();

        if ((0,_arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(shipCoords, hitCoord)) {
          if (ship.getOrientation() == "vertical") {
            let num = row - ship.getCoord()[0];
            ship.hit(num);
            ship.isSunk();
          } else {
            let num = column - ship.getCoord()[1];
            ship.hit(num);
            ship.isSunk();
          }
        }
      }

      return boardArray;
    } else if (boardArray[row][column] == unknownTile) {
      boardArray[row][column] = missTile;
      return boardArray;
    } else {
      return "Area already hit";
    }
  };

  const areAllShipsSunk = () => {
    if (ships.length == 0) return false;

    for (const ship of ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }

    return true;
  };

  return {
    getId,
    changeId,
    getHeight,
    getWidth,
    getBoardArray,
    getUnknownTile,
    getHitTile,
    getMissTile,
    getShipTile,
    consoleGameboard,
    placeShip,
    receiveAttack,
    areAllShipsSunk,
    getShipsSunk,
    getShipsCoord,
    getShipsCoords,
    getHitArray,
    getHitArrays,
    getPlayer,
    getOrientations
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGameboard);

/***/ }),

/***/ "./src/newPlayer.js":
/*!**************************!*\
  !*** ./src/newPlayer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getRandomInt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomInt.js */ "./src/getRandomInt.js");


const newPlayer = _ref => {
  let {
    name = null,
    ai = false,
    ready = false
  } = _ref;

  if (!name && ai) {
    name = "Hal 9000";
  }

  const isAI = () => ai;

  const changeAI = value => {
    ai = value;
  };

  const getName = () => name;

  const changeName = value => {
    name = value;
  };

  const isReady = () => ready;

  const setToReady = () => {
    ready = true;
  };

  const takeTurn = (gameBoard, _ref2) => {
    let [row, column] = _ref2;

    if (ai) {
      const height = gameBoard.getHeight();
      const width = gameBoard.getWidth();
      const boardArray = gameBoard.getBoardArray();
      const unknownTile = gameBoard.getUnknownTile();
      const shipTile = gameBoard.getShipTile();
      let rowAi = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(width);
      let columnAi = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(height);
      let whileCounter = 0;

      while (boardArray[rowAi][columnAi] != unknownTile && boardArray[rowAi][columnAi] != shipTile) {
        rowAi = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(width);
        columnAi = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(height);
        whileCounter++;

        if (whileCounter >= height * width) {
          break;
        }
      }

      gameBoard.receiveAttack([rowAi, columnAi]);
    } else {
      gameBoard.receiveAttack([row, column]);
    }
  };

  return {
    takeTurn,
    getName,
    isAI,
    isReady,
    setToReady,
    changeName,
    changeAI
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newPlayer);

/***/ }),

/***/ "./src/newShip.js":
/*!************************!*\
  !*** ./src/newShip.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const newShip = _ref => {
  let {
    name = null,
    length = null,
    hitArray = Array(length).fill(false),
    sunk = false,
    orientation = "vertical",
    coord = null
  } = _ref;

  // if (!hitArray) {
  //   hitArray = Array(length).fill(false)
  //   // for example: [false, false, false, false]
  // }
  const getLength = () => length;

  const getOrientation = () => orientation;

  const getCoord = () => coord;

  const getHitArray = () => hitArray;

  const getName = () => name;

  const changeOrientation = value => {
    orientation = value;
  };

  const toggleOrientation = () => {
    if (orientation == "vertical") {
      orientation = "horizontal";
    } else {
      orientation = "vertical";
    }
  };

  const changeName = value => {
    name = value;
  };

  const changeCoord = value => {
    coord = value;
  };

  const getCoords = () => {
    if (!coord) return null;
    let coords = [];
    let [row, column] = coord;

    if (orientation == "vertical") {
      for (let i = 0; i < length; i++) {
        coords.push([row + i, column]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        coords.push([row, column + i]);
      }
    }

    return coords;
  };

  const hit = num => {
    if (Number.isInteger(num) && num >= 0 && num < length) {
      hitArray[num] = true;
      return hitArray;
    } else {
      return null;
    }
  };

  const isSunk = () => {
    for (const part of hitArray) {
      if (part == false) {
        return false;
      }
    }

    sunk = true;
    return true;
  };

  return {
    getLength,
    getOrientation,
    getCoord,
    getCoords,
    getName,
    changeName,
    changeOrientation,
    getHitArray,
    hit,
    isSunk,
    changeCoord,
    toggleOrientation
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newShip);

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderer = () => {
  const clearChildren = parent => {
    parent.innerHTML = "";
  };

  const drawBoard = (board, gridId) => {
    const height = board.getHeight();
    const width = board.getWidth();
    const grid = document.getElementById(gridId);
    grid.style.gridTemplateColumns = `repeat(${height},1fr)`;
    grid.style.gridTemplateRows = `repeat(${width},1fr)`;
    const boardArray = board.getBoardArray();
    clearChildren(grid);
    let rowCount = 0;
    boardArray.forEach(row => {
      let columnCount = 0;
      row.forEach(letter => {
        const boxDiv = document.createElement("div");
        boxDiv.dataset.row = rowCount;
        boxDiv.dataset.column = columnCount;
        columnCount++;
        boxDiv.classList.add("box");
        grid.appendChild(boxDiv);

        if (letter == board.getShipTile()) {
          boxDiv.classList.add("unknown-tile"); // Uncomment these two to see all ships
          // boxDiv.classList.add("ship-tile")
          // boxDiv.style.backgroundColor = "green"
        } else if (letter == board.getHitTile()) {
          boxDiv.classList.add("hit-tile");
        } else if (letter == board.getMissTile()) {
          boxDiv.classList.add("miss-tile");
        } else if (letter == board.getUnknownTile()) {
          boxDiv.classList.add("unknown-tile");
        }
      });
      rowCount++;
    });
  };

  const drawPlacingBoard = (modalId, board, gridId) => {
    const height = board.getHeight();
    const width = board.getWidth();
    const modalContent = document.querySelector(`#${modalId} .modal-content`);
    clearChildren(modalContent);
    const placeText = document.createElement("p");
    placeText.classList.add("placetext");
    placeText.id = "placetext" + modalId.slice(-1);
    placeText.textContent = `Place your ship, ${board.getPlayer().getName()}`;
    modalContent.appendChild(placeText);
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.id = gridId;
    grid.style.gridTemplateColumns = `repeat(${height},1fr)`;
    grid.style.gridTemplateRows = `repeat(${width},1fr)`;
    modalContent.appendChild(grid);
    const button = document.createElement("button");
    button.classList.add("change-orientation");
    button.textContent = "Change ship orientation";
    modalContent.appendChild(button);
    const boardArray = board.getBoardArray();
    clearChildren(grid);
    let rowCount = 0;
    boardArray.forEach(row => {
      let columnCount = 0;
      row.forEach(letter => {
        const boxDiv = document.createElement("div");
        boxDiv.dataset.row = rowCount;
        boxDiv.dataset.column = columnCount;
        columnCount++;
        boxDiv.classList.add("box");
        grid.appendChild(boxDiv);

        if (letter == board.getShipTile()) {
          boxDiv.classList.add("ship-tile");
          boxDiv.classList.add("unknown-tile");
          boxDiv.style.backgroundColor = "rgb(221, 149, 48)";
        } else if (letter == board.getHitTile()) {
          boxDiv.classList.add("hit-tile");
        } else if (letter == board.getMissTile()) {
          boxDiv.classList.add("miss-tile");
        } else if (letter == board.getUnknownTile()) {
          boxDiv.classList.add("unknown-tile");
        }
      });
      rowCount++;
    });
  };

  const drawBoards = (board1, board2) => {
    drawBoard(board1, "grid1");
    drawBoard(board2, "grid2");
  };

  const tileListeners = (func, id) => {
    const boxes = document.querySelectorAll(`#${id} > .unknown-tile`);
    boxes.forEach(box => {
      box.classList.add("clickable");
      box.addEventListener("click", func);
    });
  };

  const tileHoverListeners = (ship, id) => {
    const grid = document.getElementById(id);
    const gridChildren = grid.children;
    const boxes = document.querySelectorAll(`#${id} > .unknown-tile`);
    boxes.forEach(box => {
      box.addEventListener("mouseenter", e => {
        const orientation = ship.getOrientation();
        const length = ship.getLength();
        const targetRow = Number(e.target.dataset.row);
        const targetColumn = Number(e.target.dataset.column);

        if (orientation == "vertical") {
          if (targetRow + length - 1 <= 9) {
            for (let i = 0; i < gridChildren.length; i++) {
              if (Number(gridChildren[i].dataset.column) == targetColumn) {
                // Change this code to include the height and width of the board
                if (Number(gridChildren[i].dataset.row) >= targetRow && Number(gridChildren[i].dataset.row) <= targetRow + length - 1) {
                  gridChildren[i].classList.add("to-place");
                }
              }
            }
          }

          box.addEventListener("mouseleave", () => {
            if (targetRow + length - 1 <= 9) {
              for (let i = 0; i < gridChildren.length; i++) {
                if (Number(gridChildren[i].dataset.column) == targetColumn) {
                  // Change this code to include the height and width of the board
                  if (Number(gridChildren[i].dataset.row) >= targetRow && Number(gridChildren[i].dataset.row) <= targetRow + length - 1) {
                    gridChildren[i].classList.remove("to-place");
                  }
                }
              }
            }
          });
        } else {
          if (targetColumn + length - 1 <= 9) {
            for (let i = 0; i < gridChildren.length; i++) {
              if (Number(gridChildren[i].dataset.row) == targetRow) {
                // Change this code to include the height and width of the board
                if (Number(gridChildren[i].dataset.column) >= targetColumn && Number(gridChildren[i].dataset.column) <= targetColumn + length - 1) {
                  gridChildren[i].classList.add("to-place");
                }
              }
            }
          }

          box.addEventListener("mouseleave", () => {
            if (targetColumn + length - 1 <= 9) {
              for (let i = 0; i < gridChildren.length; i++) {
                if (Number(gridChildren[i].dataset.row) == targetRow) {
                  // Change this code to include the height and width of the board
                  if (Number(gridChildren[i].dataset.column) >= targetColumn && Number(gridChildren[i].dataset.column) <= targetColumn + length - 1) {
                    gridChildren[i].classList.remove("to-place");
                  }
                }
              }
            }
          });
        }
      });
    });
  };

  const showModal = modalId => {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  };

  const showPlacingBoard = (modalId, board, gridId) => {
    showModal(modalId);
    drawPlacingBoard(modalId, board, gridId);
  };

  const hideModal = modalId => {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  };

  const shipButtonListener = (ship, modalId) => {
    const button = document.querySelector(`#${modalId} .modal-content .change-orientation`);
    button.addEventListener("click", ship.toggleOrientation);
  };

  const setPlayerNames = (player1, player2) => {
    const playerName1 = document.getElementById("player1");
    playerName1.textContent = `${player1.getName()}`;
    const playerName2 = document.getElementById("player2");
    playerName2.textContent = `${player2.getName()}`;
  };

  const changeTurnText = text => {
    const turnDiv = document.getElementById("turn");
    turnDiv.textContent = text;
  };

  const playButtonListener = (player1, player2, myGame) => {
    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", e => {
      e.preventDefault();
      const form = document.getElementById("play-game-form");
      const formData = new FormData(form);
      const player1Name = formData.get("player-1-name");
      const player2Name = formData.get("player-2-name");
      const player1AI = formData.get("player-1-ai");
      const player2AI = formData.get("player-2-ai");
      form.reset();
      hideModal("modal3");

      if (player1Name != "") {
        player1.changeName(player1Name);
      }

      if (player2Name != "") {
        player2.changeName(player2Name);
      }

      player1.changeAI(player1AI);
      player2.changeAI(player2AI);
      myGame.startGame();
      return {
        player1Name,
        player2Name
      };
    });
  };

  return {
    drawBoards,
    drawBoard,
    drawPlacingBoard,
    tileListeners,
    showPlacingBoard,
    showModal,
    hideModal,
    shipButtonListener,
    tileHoverListeners,
    setPlayerNames,
    changeTurnText,
    playButtonListener
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modal.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modal.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Given this html: */\r\n\r\n/*\r\n<div class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <span class=\"close-modal\">&times;</span>\r\n  </div>\r\n</div>\r\n*/\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n  color: rgb(237, 237, 237);\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 3; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw; /* Full width */\r\n  height: 100vh; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  font-size: 1rem;\r\n  /* background-color: #fefefe; */\r\n  background-color: rgba(59, 18, 59, 0.61);\r\n  border-radius: 20px;\r\n  border: none;\r\n  margin: 15% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  /* border: 1px solid rgb(4, 4, 4); */\r\n  box-shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n  width: 320px; /* Could be more or less, depending on screen size */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.placetext {\r\n  margin-top: 0;\r\n}\r\n\r\nbutton {\r\n  all: unset;\r\n  font-size: 1rem;\r\n  font-family: \"Passion\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  margin-top: 16px;\r\n  background-color: #1e081e;\r\n  border-radius: 10px;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #611d61;\r\n}\r\n\r\nbutton:active {\r\n  background-color: #a030a0;\r\n}\r\n\r\n.to-place {\r\n  background-color: rgb(246, 200, 241);\r\n}\r\n\r\n/* For the form */\r\nlabel {\r\n  margin-top: 15px;\r\n  margin-bottom: 5px;\r\n  display: block;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  align-items: center;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n\r\n  font-size: 1rem;\r\n  /* margin-bottom: 20px; */\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  box-shadow: 3px 3px rgba(0, 0, 0, 0.148) inset;\r\n  background-color: rgb(236, 236, 236);\r\n  width: 93%;\r\n\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  accent-color: #a030a0;\r\n  margin-right: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/modal.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;;;;;;CAMC;;AAED,2BAA2B;AAC3B;EACE,yBAAyB;EACzB,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,YAAY,EAAE,eAAe;EAC7B,aAAa,EAAE,gBAAgB;EAC/B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,eAAe;EACf,+BAA+B;EAC/B,wCAAwC;EACxC,mBAAmB;EACnB,YAAY;EACZ,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,oCAAoC;EACpC,uCAAuC;EACvC,YAAY,EAAE,oDAAoD;EAClE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,eAAe;EACf,uEAAuE;EACvE,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,iBAAiB;;EAEjB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,8CAA8C;EAC9C,oCAAoC;EACpC,UAAU;;AAEZ;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB","sourcesContent":["/* Given this html: */\r\n\r\n/*\r\n<div class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <span class=\"close-modal\">&times;</span>\r\n  </div>\r\n</div>\r\n*/\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n  color: rgb(237, 237, 237);\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 3; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw; /* Full width */\r\n  height: 100vh; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  font-size: 1rem;\r\n  /* background-color: #fefefe; */\r\n  background-color: rgba(59, 18, 59, 0.61);\r\n  border-radius: 20px;\r\n  border: none;\r\n  margin: 15% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  /* border: 1px solid rgb(4, 4, 4); */\r\n  box-shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n  width: 320px; /* Could be more or less, depending on screen size */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.placetext {\r\n  margin-top: 0;\r\n}\r\n\r\nbutton {\r\n  all: unset;\r\n  font-size: 1rem;\r\n  font-family: \"Passion\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  margin-top: 16px;\r\n  background-color: #1e081e;\r\n  border-radius: 10px;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #611d61;\r\n}\r\n\r\nbutton:active {\r\n  background-color: #a030a0;\r\n}\r\n\r\n.to-place {\r\n  background-color: rgb(246, 200, 241);\r\n}\r\n\r\n/* For the form */\r\nlabel {\r\n  margin-top: 15px;\r\n  margin-bottom: 5px;\r\n  display: block;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  align-items: center;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n\r\n  font-size: 1rem;\r\n  /* margin-bottom: 20px; */\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  box-shadow: 3px 3px rgba(0, 0, 0, 0.148) inset;\r\n  background-color: rgb(236, 236, 236);\r\n  width: 93%;\r\n\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  accent-color: #a030a0;\r\n  margin-right: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg.jpg */ "./src/images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Passion+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  font-family: \"Passion\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  color: white;\r\n  --gap: 24px;\r\n  --radius: 15px;\r\n  --shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n\r\n  --light-color: rgba(255, 255, 255, 0.748);\r\n  --main-color: rgb(6, 31, 70);\r\n  --light-gray: rgb(65, 65, 65);\r\n  --dark-gray: rgb(34, 34, 34);\r\n  --theme-color: rgb(34, 34, 34);\r\n  --highlight-color: rgb(106, 46, 150);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  /* background-color: rgb(29, 29, 29); */\r\n}\r\n\r\n/* Usual background, change the URL */\r\nhtml {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* Usual header */\r\n/* header {\r\n  padding: 15px;\r\n  padding-left: 36px;\r\n  padding-right: 36px;\r\n  background-color: #fff8ebe1;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  box-shadow: var(--shadow);\r\n  z-index: 1;\r\n} */\r\n\r\nmain {\r\n  flex: 1;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0px;\r\n  align-items: center;\r\n  /* justify-content: center; */\r\n  background-color: rgba(0, 0, 0, 0.306);\r\n}\r\n\r\nh1 {\r\n  margin-top: 50px;\r\n}\r\n\r\n.grids {\r\n  display: flex;\r\n  gap: 100px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.player-mat {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.grid {\r\n  box-sizing: border-box;\r\n  height: 300px;\r\n  width: 300px;\r\n  background-color: rgba(255, 255, 255, 0.045);\r\n  display: grid;\r\n  border-radius: 5px;\r\n  border: none;\r\n  padding: 10px;\r\n  gap: 7px;\r\n}\r\n\r\n.box {\r\n  background-color: rgba(0, 0, 0, 0.186);\r\n  border-radius: 5px;\r\n  border: none;\r\n  opacity: 70%;\r\n  /* box-shadow: 2px 2px rgba(0, 0, 0, 0.505); */\r\n}\r\n\r\n.ship-tile {\r\n  background-color: rgb(221, 149, 48);\r\n  cursor: pointer;\r\n}\r\n\r\n.hit-tile {\r\n  background-color: rgb(221, 149, 48);\r\n}\r\n\r\n.miss-tile {\r\n  background-color: rgba(14, 6, 18, 0.913);\r\n}\r\n\r\n.clickable {\r\n  background-color: rgba(0, 0, 0, 0.186);\r\n  cursor: pointer;\r\n}\r\n\r\n.clickable:hover {\r\n  background-color: rgb(246, 200, 241);\r\n}\r\n\r\n.clickable:active {\r\n  background-color: rgb(255, 129, 240);\r\n}\r\n\r\n/* Usual footer */\r\nfooter {\r\n  font-size: 0.6rem;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  color: white;\r\n  padding-left: var(--gap);\r\n  padding-right: var(--gap);\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,uEAAuE;EACvE,YAAY;EACZ,WAAW;EACX,cAAc;EACd,qCAAqC;;EAErC,yCAAyC;EACzC,4BAA4B;EAC5B,6BAA6B;EAC7B,4BAA4B;EAC5B,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,UAAU;EACV,SAAS;EACT,uCAAuC;AACzC;;AAEA,qCAAqC;AACrC;EACE,iFAA8D;EAC9D,sBAAsB;EACtB,gBAAgB;EAChB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,iBAAiB;AACjB;;;;;;;;;;;;;;GAcG;;AAEH;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,4CAA4C;EAC5C,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;EACpC,YAAY;EACZ,wBAAwB;EACxB,yBAAyB;EACzB,iBAAiB;EACjB,oBAAoB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Passion+One&display=swap');\r\n\r\n:root {\r\n  font-family: \"Passion\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  color: white;\r\n  --gap: 24px;\r\n  --radius: 15px;\r\n  --shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n\r\n  --light-color: rgba(255, 255, 255, 0.748);\r\n  --main-color: rgb(6, 31, 70);\r\n  --light-gray: rgb(65, 65, 65);\r\n  --dark-gray: rgb(34, 34, 34);\r\n  --theme-color: rgb(34, 34, 34);\r\n  --highlight-color: rgb(106, 46, 150);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  /* background-color: rgb(29, 29, 29); */\r\n}\r\n\r\n/* Usual background, change the URL */\r\nhtml {\r\n  background: url(./images/bg.jpg) no-repeat center center fixed;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* Usual header */\r\n/* header {\r\n  padding: 15px;\r\n  padding-left: 36px;\r\n  padding-right: 36px;\r\n  background-color: #fff8ebe1;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  box-shadow: var(--shadow);\r\n  z-index: 1;\r\n} */\r\n\r\nmain {\r\n  flex: 1;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0px;\r\n  align-items: center;\r\n  /* justify-content: center; */\r\n  background-color: rgba(0, 0, 0, 0.306);\r\n}\r\n\r\nh1 {\r\n  margin-top: 50px;\r\n}\r\n\r\n.grids {\r\n  display: flex;\r\n  gap: 100px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.player-mat {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.grid {\r\n  box-sizing: border-box;\r\n  height: 300px;\r\n  width: 300px;\r\n  background-color: rgba(255, 255, 255, 0.045);\r\n  display: grid;\r\n  border-radius: 5px;\r\n  border: none;\r\n  padding: 10px;\r\n  gap: 7px;\r\n}\r\n\r\n.box {\r\n  background-color: rgba(0, 0, 0, 0.186);\r\n  border-radius: 5px;\r\n  border: none;\r\n  opacity: 70%;\r\n  /* box-shadow: 2px 2px rgba(0, 0, 0, 0.505); */\r\n}\r\n\r\n.ship-tile {\r\n  background-color: rgb(221, 149, 48);\r\n  cursor: pointer;\r\n}\r\n\r\n.hit-tile {\r\n  background-color: rgb(221, 149, 48);\r\n}\r\n\r\n.miss-tile {\r\n  background-color: rgba(14, 6, 18, 0.913);\r\n}\r\n\r\n.clickable {\r\n  background-color: rgba(0, 0, 0, 0.186);\r\n  cursor: pointer;\r\n}\r\n\r\n.clickable:hover {\r\n  background-color: rgb(246, 200, 241);\r\n}\r\n\r\n.clickable:active {\r\n  background-color: rgb(255, 129, 240);\r\n}\r\n\r\n/* Usual footer */\r\nfooter {\r\n  font-size: 0.6rem;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  color: white;\r\n  padding-left: var(--gap);\r\n  padding-right: var(--gap);\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modal.css":
/*!***********************!*\
  !*** ./src/modal.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f644683eeb2b53fe3f13.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.css */ "./src/modal.css");
/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer.js */ "./src/renderer.js");
/* harmony import */ var _initializeGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initializeGame.js */ "./src/initializeGame.js");



 // const height = 10
// const width = 10
// const player1 = newPlayer({ name: "Ace", ai: true })
// const player2 = newPlayer({ name: "Acebot", ai: true })
// const myGame = newGame([player1, player2], [height, width])
// myGame.startGame()

(0,_initializeGame_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBRyw4REFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXJyYXlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nZXRSYW5kb21JbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsaXplR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL25ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9uZXdHYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9uZXdQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9uZXdTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kYWwuY3NzPzNmZDkiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlzRXF1YWwgZnJvbSBcIi4vYXJyYXlzRXF1YWwuanNcIlxyXG5cclxuY29uc3QgYXJyYXlJbmNsdWRlcyA9IChiaWdBcnJheSwgc21hbGxBcnJheSkgPT4ge1xyXG4gIGZvciAoY29uc3QgYXJyYXkgb2YgYmlnQXJyYXkpIHtcclxuICAgIGlmIChhcnJheXNFcXVhbChhcnJheSwgc21hbGxBcnJheSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFycmF5SW5jbHVkZXNcclxuIiwiY29uc3QgYXJyYXlzRXF1YWwgPSAoYSwgYikgPT4ge1xyXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZVxyXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2VcclxuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgLy8gSWYgeW91IGRvbid0IGNhcmUgYWJvdXQgdGhlIG9yZGVyIG9mIHRoZSBlbGVtZW50cyBpbnNpZGVcclxuICAvLyB0aGUgYXJyYXksIHlvdSBzaG91bGQgc29ydCBib3RoIGFycmF5cyBoZXJlLlxyXG4gIC8vIFBsZWFzZSBub3RlIHRoYXQgY2FsbGluZyBzb3J0IG9uIGFuIGFycmF5IHdpbGwgbW9kaWZ5IHRoYXQgYXJyYXkuXHJcbiAgLy8geW91IG1pZ2h0IHdhbnQgdG8gY2xvbmUgeW91ciBhcnJheSBmaXJzdC5cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XHJcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFycmF5c0VxdWFsIiwiY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpXHJcblxyXG4gIC8vIEV4YW1wbGVcclxuICAvLyBjb25zb2xlLmxvZyhnZXRSYW5kb21JbnQoMykpXHJcbiAgLy8gZXhwZWN0ZWQgb3V0cHV0OiAwLCAxIG9yIDJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmFuZG9tSW50XHJcbiIsImltcG9ydCByZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlci5qc1wiXHJcbmltcG9ydCBuZXdHYW1lIGZyb20gXCIuL25ld0dhbWUuanNcIlxyXG5pbXBvcnQgbmV3UGxheWVyIGZyb20gXCIuL25ld1BsYXllci5qc1wiXHJcblxyXG5jb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcclxuICBjb25zdCBteVJlbmRlcmVyID0gcmVuZGVyZXIoKVxyXG5cclxuICBjb25zdCBoZWlnaHQgPSAxMFxyXG4gIGNvbnN0IHdpZHRoID0gMTBcclxuXHJcbiAgY29uc3QgcGxheWVyMSA9IG5ld1BsYXllcih7IG5hbWU6IFwiUGxheWVyIDFcIiwgYWk6IHRydWUgfSlcclxuICBjb25zdCBwbGF5ZXIyID0gbmV3UGxheWVyKHsgbmFtZTogXCJQbGF5ZXIgMlwiLCBhaTogdHJ1ZSB9KVxyXG5cclxuICBjb25zdCBteUdhbWUgPSBuZXdHYW1lKFtwbGF5ZXIxLCBwbGF5ZXIyXSwgW2hlaWdodCwgd2lkdGhdKVxyXG5cclxuICBteVJlbmRlcmVyLnNob3dNb2RhbChcIm1vZGFsM1wiKVxyXG5cclxuICBteVJlbmRlcmVyLnBsYXlCdXR0b25MaXN0ZW5lcihwbGF5ZXIxLCBwbGF5ZXIyLCBteUdhbWUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVHYW1lXHJcbiIsImltcG9ydCBuZXdHYW1lYm9hcmQgZnJvbSBcIi4vbmV3R2FtZWJvYXJkLmpzXCJcclxuaW1wb3J0IG5ld1NoaXAgZnJvbSBcIi4vbmV3U2hpcC5qc1wiXHJcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSBcIi4vZ2V0UmFuZG9tSW50LmpzXCJcclxuaW1wb3J0IHJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyLmpzXCJcclxuaW1wb3J0IG5ld1BsYXllciBmcm9tIFwiLi9uZXdQbGF5ZXIuanNcIlxyXG5cclxuLy8gUGF0aCBnb2VzIGxpa2UgdGhpczpcclxuLy8gc3RhcnRHYW1lIC0+IHBsYXllcjFQbGFjZVNoaXBzIC0+IHBsYWNlU2hpcHNBSSBvciBwbGFjZVNoaXBzUGxheWVyXHJcbi8vIHBsYXllcjJQbGFjZVNoaXBzIC0+IHBsYWNlU2hpcHNBSSBvciBwbGFjZVNoaXBzUGxheWVyXHJcbi8vIC0+IHN0YXJ0R2FtZUxvb3AgLT4gcGxheWVyVHVybkxvb3BcclxuLy8gLT4gZ2FtZUVuZHNcclxuXHJcbi8vIE5vdGU6IG15UmVuZGVyZXIuZHJhdyByZW1vdmVzIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuY29uc3QgbmV3R2FtZSA9IChbcGxheWVyMSwgcGxheWVyMl0sIFtoZWlnaHQsIHdpZHRoXSkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkMSA9IG5ld0dhbWVib2FyZCh7XHJcbiAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGlkOiBcImdyaWQxXCIsXHJcbiAgICBwbGF5ZXI6IHBsYXllcjEsXHJcbiAgfSlcclxuICBjb25zdCBib2FyZDIgPSBuZXdHYW1lYm9hcmQoe1xyXG4gICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICB3aWR0aDogd2lkdGgsXHJcbiAgICBpZDogXCJncmlkMlwiLFxyXG4gICAgcGxheWVyOiBwbGF5ZXIyLFxyXG4gIH0pXHJcbiAgY29uc3QgbXlSZW5kZXJlciA9IHJlbmRlcmVyKClcclxuICBsZXQgd2lubmVyID0gbmV3UGxheWVyKHsgbmFtZTogXCJOT0JPRFlcIiB9KVxyXG5cclxuICBjb25zdCBnYW1lRW5kcyA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgbXlSZW5kZXJlci5kcmF3Qm9hcmRzKGJvYXJkMSwgYm9hcmQyKVxyXG4gICAgY29uc29sZS5sb2coYCR7d2lubmVyLmdldE5hbWUoKX0gd2luc2ApXHJcbiAgICBjb25zb2xlLmxvZyhcIkdhbWUgT3ZlclwiKVxyXG4gICAgY29uc3QgdHVyblRleHQgPSBgJHt3aW5uZXIuZ2V0TmFtZSgpfSB3aW5zIWBcclxuICAgIG15UmVuZGVyZXIuY2hhbmdlVHVyblRleHQodHVyblRleHQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0dhbWVPdmVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGJvYXJkMS5hcmVBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICB3aW5uZXIgPSBwbGF5ZXIyXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAoYm9hcmQyLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIHdpbm5lciA9IHBsYXllcjFcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXllclR1cm5Mb29wID0gKHBsYXllciwgYm9hcmQpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkQXR0YWNrZWQgPSAoZSkgPT4ge1xyXG4gICAgICBsZXQgcm93ID0gMFxyXG4gICAgICBsZXQgY29sdW1uID0gMFxyXG4gICAgICBpZiAoIXBsYXllci5pc0FJKCkpIHtcclxuICAgICAgICByb3cgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5yb3cpXHJcbiAgICAgICAgY29sdW1uID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uKVxyXG4gICAgICB9XHJcbiAgICAgIHBsYXllci50YWtlVHVybihib2FyZCwgW3JvdywgY29sdW1uXSlcclxuICAgICAgaWYgKGlzR2FtZU92ZXIoKSkge1xyXG4gICAgICAgIGdhbWVFbmRzKClcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBteVJlbmRlcmVyLmRyYXdCb2FyZChib2FyZCwgYm9hcmQuZ2V0SWQoKSlcclxuICAgICAgYm9hcmQuY29uc29sZUdhbWVib2FyZCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKGJvYXJkLmdldEhpdEFycmF5cygpKVxyXG4gICAgICBjb25zb2xlLmxvZyhib2FyZC5nZXRPcmllbnRhdGlvbnMoKSlcclxuXHJcbiAgICAgIGxldCBuZXh0Qm9hcmRcclxuICAgICAgbGV0IG5leHRQbGF5ZXJcclxuXHJcbiAgICAgIGlmIChib2FyZC5nZXRJZCgpID09IFwiZ3JpZDFcIikge1xyXG4gICAgICAgIG5leHRCb2FyZCA9IGJvYXJkMlxyXG4gICAgICAgIG5leHRQbGF5ZXIgPSBwbGF5ZXIxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV4dEJvYXJkID0gYm9hcmQxXHJcbiAgICAgICAgbmV4dFBsYXllciA9IHBsYXllcjJcclxuICAgICAgfVxyXG4gICAgICBwbGF5ZXJUdXJuTG9vcChuZXh0UGxheWVyLCBuZXh0Qm9hcmQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHVyblRleHQgPSBgWW91ciB0dXJuLCAke3BsYXllci5nZXROYW1lKCl9YFxyXG4gICAgbXlSZW5kZXJlci5jaGFuZ2VUdXJuVGV4dCh0dXJuVGV4dClcclxuICAgIFxyXG4gICAgaWYgKHBsYXllci5pc0FJKCkpIHtcclxuICAgICAgYm9hcmRBdHRhY2tlZCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBteVJlbmRlcmVyLnRpbGVMaXN0ZW5lcnMoYm9hcmRBdHRhY2tlZCwgYm9hcmQuZ2V0SWQoKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0R2FtZUxvb3AgPSAoKSA9PiB7XHJcbiAgICBpZiAocGxheWVyMS5pc1JlYWR5KCkgJiYgcGxheWVyMi5pc1JlYWR5KCkpIHtcclxuICAgICAgcGxheWVyVHVybkxvb3AocGxheWVyMSwgYm9hcmQyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwc0FJID0gKHNoaXBzLCBnYW1lQm9hcmQpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBpZiAoZ2V0UmFuZG9tSW50KDIpID09IDEpIHtcclxuICAgICAgICBzaGlwLmNoYW5nZU9yaWVudGF0aW9uKFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmFuZFJvdyA9IGdldFJhbmRvbUludCh3aWR0aClcclxuICAgICAgbGV0IHJhbmRDb2x1bW4gPSBnZXRSYW5kb21JbnQoaGVpZ2h0KVxyXG5cclxuICAgICAgbGV0IHdoaWxlQ291bnRlciA9IDBcclxuICAgICAgd2hpbGUgKFxyXG4gICAgICAgIGdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCwgW3JhbmRSb3csIHJhbmRDb2x1bW5dKSA9PSBcIkNhbm5vdCBwbGFjZSBzaGlwXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmFuZFJvdyA9IGdldFJhbmRvbUludCh3aWR0aClcclxuICAgICAgICByYW5kQ29sdW1uID0gZ2V0UmFuZG9tSW50KGhlaWdodClcclxuICAgICAgICB3aGlsZUNvdW50ZXIrK1xyXG4gICAgICAgIGlmICh3aGlsZUNvdW50ZXIgPj0gaGVpZ2h0ICogd2lkdGgpIHtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbXlSZW5kZXJlci5kcmF3Qm9hcmQoZ2FtZUJvYXJkLCBnYW1lQm9hcmQuZ2V0SWQoKSlcclxuXHJcbiAgICBnYW1lQm9hcmQuZ2V0UGxheWVyKCkuc2V0VG9SZWFkeSgpXHJcbiAgICBpZiAoIXBsYXllcjIuaXNSZWFkeSgpKSB7XHJcbiAgICAgIHBsYXllcjJQbGFjZVNoaXBzKClcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZUxvb3AoKVxyXG4gICAgcmV0dXJuIGdhbWVCb2FyZC5nZXRCb2FyZEFycmF5KClcclxuICB9XHJcblxyXG4gIGxldCBwbGFjZVNoaXBDb3VudGVyID0gMFxyXG4gIGNvbnN0IHBsYWNlU2hpcHNMb29wID0gKHNoaXBzLCBnYW1lQm9hcmQsIG1vZGFsSWQpID0+IHtcclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSAoZSkgPT4ge1xyXG4gICAgICBsZXQgcm93ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucm93KVxyXG4gICAgICBsZXQgY29sdW1uID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uKVxyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcHNbcGxhY2VTaGlwQ291bnRlcl0sIFtyb3csIGNvbHVtbl0pICE9XHJcbiAgICAgICAgXCJDYW5ub3QgcGxhY2Ugc2hpcFwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHBsYWNlU2hpcENvdW50ZXIrK1xyXG5cclxuICAgICAgICBpZiAocGxhY2VTaGlwQ291bnRlciA9PSBzaGlwcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHBsYWNlU2hpcENvdW50ZXIgPSAwXHJcblxyXG4gICAgICAgICAgbXlSZW5kZXJlci5oaWRlTW9kYWwobW9kYWxJZClcclxuICAgICAgICAgIG15UmVuZGVyZXIuZHJhd0JvYXJkKGdhbWVCb2FyZCwgZ2FtZUJvYXJkLmdldElkKCkpXHJcblxyXG4gICAgICAgICAgZ2FtZUJvYXJkLmdldFBsYXllcigpLnNldFRvUmVhZHkoKVxyXG4gICAgICAgICAgaWYgKCFwbGF5ZXIyLmlzUmVhZHkoKSkge1xyXG4gICAgICAgICAgICBwbGF5ZXIyUGxhY2VTaGlwcygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGFydEdhbWVMb29wKClcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYWNlU2hpcHNMb29wKHNoaXBzLCBnYW1lQm9hcmQsIG1vZGFsSWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBteVJlbmRlcmVyLmRyYXdQbGFjaW5nQm9hcmQobW9kYWxJZCwgZ2FtZUJvYXJkLCBcInBsYWNlXCIgKyBnYW1lQm9hcmQuZ2V0SWQoKSlcclxuICAgIG15UmVuZGVyZXIudGlsZUhvdmVyTGlzdGVuZXJzKFxyXG4gICAgICBzaGlwc1twbGFjZVNoaXBDb3VudGVyXSxcclxuICAgICAgXCJwbGFjZVwiICsgZ2FtZUJvYXJkLmdldElkKClcclxuICAgIClcclxuXHJcbiAgICBteVJlbmRlcmVyLnNoaXBCdXR0b25MaXN0ZW5lcihzaGlwc1twbGFjZVNoaXBDb3VudGVyXSwgbW9kYWxJZClcclxuICAgIG15UmVuZGVyZXIudGlsZUxpc3RlbmVycyhzaGlwUGxhY2VkLCBcInBsYWNlXCIgKyBnYW1lQm9hcmQuZ2V0SWQoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcHNQbGF5ZXIgPSAoc2hpcHMsIGdhbWVCb2FyZCwgbW9kYWxJZCkgPT4ge1xyXG4gICAgbXlSZW5kZXJlci5zaG93TW9kYWwobW9kYWxJZClcclxuICAgIHBsYWNlU2hpcHNMb29wKHNoaXBzLCBnYW1lQm9hcmQsIG1vZGFsSWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb25zb2xlQm9hcmRzID0gKCkgPT4ge1xyXG4gICAgYm9hcmQxLmNvbnNvbGVHYW1lYm9hcmQoKVxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiXHJcbiAgICApXHJcbiAgICBib2FyZDIuY29uc29sZUdhbWVib2FyZCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGF5ZXIxUGxhY2VTaGlwcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNoaXAxID0gbmV3U2hpcCh7IG5hbWU6IFwiQ2FycmllclwiLCBsZW5ndGg6IDUgfSlcclxuICAgIGNvbnN0IHNoaXAyID0gbmV3U2hpcCh7IG5hbWU6IFwiQmF0dGxlc2hpcFwiLCBsZW5ndGg6IDQgfSlcclxuICAgIGNvbnN0IHNoaXAzID0gbmV3U2hpcCh7IG5hbWU6IFwiRGVzdHJveWVyXCIsIGxlbmd0aDogMyB9KVxyXG4gICAgY29uc3Qgc2hpcDQgPSBuZXdTaGlwKHsgbmFtZTogXCJTdWJtYXJpbmVcIiwgbGVuZ3RoOiAzIH0pXHJcbiAgICBjb25zdCBzaGlwNSA9IG5ld1NoaXAoeyBuYW1lOiBcIlBhdHJvbCBCb2F0XCIsIGxlbmd0aDogMiB9KVxyXG4gICAgY29uc3Qgc2hpcHMxID0gW3NoaXAxLCBzaGlwMiwgc2hpcDMsIHNoaXA0LCBzaGlwNV1cclxuICAgIGNvbnN0IG1vZGFsSWQxID0gXCJtb2RhbDFcIlxyXG5cclxuICAgIGlmIChwbGF5ZXIxLmlzQUkoKSkge1xyXG4gICAgICBwbGFjZVNoaXBzQUkoc2hpcHMxLCBib2FyZDEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZVNoaXBzUGxheWVyKHNoaXBzMSwgYm9hcmQxLCBtb2RhbElkMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXllcjJQbGFjZVNoaXBzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcHB5MSA9IG5ld1NoaXAoeyBuYW1lOiBcIkNhcnJpZXIyXCIsIGxlbmd0aDogNSB9KVxyXG4gICAgY29uc3Qgc2hpcHB5MiA9IG5ld1NoaXAoeyBuYW1lOiBcIkJhdHRsZXNoaXAyXCIsIGxlbmd0aDogNCB9KVxyXG4gICAgY29uc3Qgc2hpcHB5MyA9IG5ld1NoaXAoeyBuYW1lOiBcIkRlc3Ryb3llcjJcIiwgbGVuZ3RoOiAzIH0pXHJcbiAgICBjb25zdCBzaGlwcHk0ID0gbmV3U2hpcCh7IG5hbWU6IFwiU3VibWFyaW5lMlwiLCBsZW5ndGg6IDMgfSlcclxuICAgIGNvbnN0IHNoaXBweTUgPSBuZXdTaGlwKHsgbmFtZTogXCJQYXRyb2wgQm9hdDJcIiwgbGVuZ3RoOiAyIH0pXHJcbiAgICBjb25zdCBzaGlwczIgPSBbc2hpcHB5MSwgc2hpcHB5Miwgc2hpcHB5Mywgc2hpcHB5NCwgc2hpcHB5NV1cclxuICAgIGNvbnN0IG1vZGFsSWQyID0gXCJtb2RhbDJcIlxyXG5cclxuICAgIGlmIChwbGF5ZXIyLmlzQUkoKSkge1xyXG4gICAgICBwbGFjZVNoaXBzQUkoc2hpcHMyLCBib2FyZDIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZVNoaXBzUGxheWVyKHNoaXBzMiwgYm9hcmQyLCBtb2RhbElkMilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIG15UmVuZGVyZXIuc2V0UGxheWVyTmFtZXMocGxheWVyMSwgcGxheWVyMilcclxuICAgIG15UmVuZGVyZXIuZHJhd0JvYXJkcyhib2FyZDEsIGJvYXJkMilcclxuXHJcbiAgICBwbGF5ZXIxUGxhY2VTaGlwcygpXHJcblxyXG4gICAgY29uc29sZUJvYXJkcygpXHJcbiAgICByZXR1cm4gW2JvYXJkMSwgYm9hcmQyXVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3RhcnRHYW1lIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3R2FtZVxyXG4iLCJpbXBvcnQgYXJyYXlJbmNsdWRlcyBmcm9tIFwiLi9hcnJheUluY2x1ZGVzLmpzXCJcclxuXHJcbmNvbnN0IG5ld0dhbWVib2FyZCA9ICh7XHJcbiAgaGVpZ2h0ID0gMTAsXHJcbiAgd2lkdGggPSAxMCxcclxuICB1bmtub3duVGlsZSA9IFwib1wiLFxyXG4gIHNoaXBUaWxlID0gXCJzXCIsXHJcbiAgaGl0VGlsZSA9IFwieFwiLFxyXG4gIG1pc3NUaWxlID0gXCJ+XCIsXHJcbiAgaWQgPSBudWxsLFxyXG4gIHBsYXllciA9IG51bGwsXHJcbn0pID0+IHtcclxuICBsZXQgYm9hcmRBcnJheSA9IFtdXHJcbiAgbGV0IHNoaXBzID0gW11cclxuXHJcbiAgLy8gSSBjYW4ndCB1c2UgdGhlIGNvZGUgYmVsb3cgYmVjYXVzZSBwbGFjZVNoaXAgd2lsbCBub3Qgd29yayB3aXRoIGl0XHJcbiAgLy8gY29uc3QgYm9hcmRSb3cgPSBBcnJheSh3aWR0aCkuZmlsbCh1bmtub3duVGlsZSlcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgaSsrKSB7XHJcbiAgICBib2FyZEFycmF5LnB1c2goQXJyYXkod2lkdGgpLmZpbGwodW5rbm93blRpbGUpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyXHJcbiAgY29uc3QgZ2V0U2hpcHNTdW5rID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNoaXBzLm1hcCgoc2hpcCkgPT4ge1xyXG4gICAgICByZXR1cm4gc2hpcC5pc1N1bmsoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFNoaXBzQ29vcmQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcHMubWFwKChzaGlwKSA9PiB7XHJcbiAgICAgIHJldHVybiBzaGlwLmdldENvb3JkKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTaGlwc0Nvb3JkcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5tYXAoKHNoaXApID0+IHtcclxuICAgICAgcmV0dXJuIHNoaXAuZ2V0Q29vcmRzKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRIaXRBcnJheXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcHMubWFwKChzaGlwKSA9PiB7XHJcbiAgICAgIHJldHVybiBzaGlwLmdldEhpdEFycmF5KClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRPcmllbnRhdGlvbnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcHMubWFwKChzaGlwKSA9PiB7XHJcbiAgICAgIHJldHVybiBzaGlwLmdldE9yaWVudGF0aW9uKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja05laWdoYm9yc1Vua25vd25UaWxlID0gKGJvYXJkQXJyYXksIFtyb3csIGNvbHVtbl0sIHVua25vd25UaWxlKSA9PiB7XHJcbiAgICBjb25zdCB1cCA9IFtyb3cgLSAxLCBjb2x1bW5dXHJcbiAgICBjb25zdCBkb3duID0gW3JvdyArIDEsIGNvbHVtbl1cclxuICAgIGNvbnN0IGxlZnQgPSBbcm93LCBjb2x1bW4gLSAxXVxyXG4gICAgY29uc3QgcmlnaHQgPSBbcm93LCBjb2x1bW4gKyAxXVxyXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFt1cCwgZG93biwgbGVmdCwgcmlnaHRdXHJcbiAgICBmb3IgKGNvbnN0IFtyb3csIGNvbHVtbl0gb2YgZGlyZWN0aW9ucykge1xyXG4gICAgICBpZiAoYm9hcmRBcnJheVtyb3ddICYmIGJvYXJkQXJyYXlbcm93XVtjb2x1bW5dKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyYXlbcm93XVtjb2x1bW5dICE9IHVua25vd25UaWxlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRJZCA9ICgpID0+IGlkXHJcbiAgY29uc3QgY2hhbmdlSWQgPSAodmFsdWUpID0+IHtcclxuICAgIGlkID0gdmFsdWVcclxuICB9XHJcbiAgY29uc3QgZ2V0SGVpZ2h0ID0gKCkgPT4gaGVpZ2h0XHJcbiAgY29uc3QgZ2V0V2lkdGggPSAoKSA9PiB3aWR0aFxyXG4gIGNvbnN0IGdldEJvYXJkQXJyYXkgPSAoKSA9PiBib2FyZEFycmF5XHJcbiAgY29uc3QgZ2V0VW5rbm93blRpbGUgPSAoKSA9PiB1bmtub3duVGlsZVxyXG4gIGNvbnN0IGdldFNoaXBUaWxlID0gKCkgPT4gc2hpcFRpbGVcclxuICBjb25zdCBnZXRIaXRUaWxlID0gKCkgPT4gaGl0VGlsZVxyXG4gIGNvbnN0IGdldE1pc3NUaWxlID0gKCkgPT4gbWlzc1RpbGVcclxuICBjb25zdCBnZXRIaXRBcnJheSA9ICgpID0+IGhpdEFycmF5XHJcblxyXG4gIGNvbnN0IGNvbnNvbGVHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBib2FyZEFycmF5KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJvdylcclxuICAgIH1cclxuICAgIHJldHVybiBib2FyZEFycmF5XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgW3JvdywgY29sdW1uXSkgPT4ge1xyXG4gICAgaWYgKCFzaGlwKSB7XHJcbiAgICAgIHJldHVybiBcIkNhbm5vdCBwbGFjZSBzaGlwXCJcclxuICAgIH1cclxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihyb3cpIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKGNvbHVtbikpIHtcclxuICAgICAgcmV0dXJuIFwiQ2Fubm90IHBsYWNlIHNoaXBcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFib2FyZEFycmF5W3Jvd10gfHwgIWJvYXJkQXJyYXlbcm93XVtjb2x1bW5dKSB7XHJcbiAgICAgIHJldHVybiBcIkNhbm5vdCBwbGFjZSBzaGlwXCJcclxuICAgIH1cclxuICAgIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgIGlmIChoZWlnaHQgPCBzaGlwLmdldExlbmd0aCgpIHx8IGhlaWdodCAtIHJvdyA8IHNoaXAuZ2V0TGVuZ3RoKCkpIHtcclxuICAgICAgICByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcFwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgIGlmIChib2FyZEFycmF5W3JvdyArIGldW2NvbHVtbl0gIT0gdW5rbm93blRpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fubm90IHBsYWNlIHNoaXBcIlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgIWNoZWNrTmVpZ2hib3JzVW5rbm93blRpbGUoYm9hcmRBcnJheSwgW3JvdyArIGksIGNvbHVtbl0sIHVua25vd25UaWxlKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhbm5vdCBwbGFjZSBzaGlwXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgIGJvYXJkQXJyYXlbcm93ICsgaV1bY29sdW1uXSA9IHNoaXBUaWxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXAuY2hhbmdlQ29vcmQoW3JvdywgY29sdW1uXSlcclxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApXHJcbiAgICAgICAgcmV0dXJuIGJvYXJkQXJyYXlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzaGlwLmdldE9yaWVudGF0aW9uKCkgPT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgaWYgKHdpZHRoIDwgc2hpcC5nZXRMZW5ndGgoKSB8fCB3aWR0aCAtIGNvbHVtbiA8IHNoaXAuZ2V0TGVuZ3RoKCkpIHtcclxuICAgICAgICByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcFwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgIGlmIChib2FyZEFycmF5W3Jvd11bY29sdW1uICsgaV0gIT0gdW5rbm93blRpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fubm90IHBsYWNlIHNoaXBcIlxyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgIWNoZWNrTmVpZ2hib3JzVW5rbm93blRpbGUoYm9hcmRBcnJheSwgW3JvdywgY29sdW1uICsgaV0sIHVua25vd25UaWxlKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhbm5vdCBwbGFjZSBzaGlwXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgIGJvYXJkQXJyYXlbcm93XVtjb2x1bW4gKyBpXSA9IHNoaXBUaWxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXAuY2hhbmdlQ29vcmQoW3JvdywgY29sdW1uXSlcclxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApXHJcbiAgICAgICAgcmV0dXJuIGJvYXJkQXJyYXlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiWW91J3JlIG5vdCBzdXBwb3NlZCB0byBiZSBoZXJlXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoW3JvdywgY29sdW1uXSkgPT4ge1xyXG4gICAgaWYgKGJvYXJkQXJyYXlbcm93XVtjb2x1bW5dID09IHNoaXBUaWxlKSB7XHJcbiAgICAgIGJvYXJkQXJyYXlbcm93XVtjb2x1bW5dID0gaGl0VGlsZVxyXG4gICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgICAgICBjb25zdCBoaXRDb29yZCA9IFtyb3csIGNvbHVtbl1cclxuICAgICAgICBjb25zdCBzaGlwQ29vcmRzID0gc2hpcC5nZXRDb29yZHMoKVxyXG4gICAgICAgIGlmIChhcnJheUluY2x1ZGVzKHNoaXBDb29yZHMsIGhpdENvb3JkKSkge1xyXG4gICAgICAgICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgbGV0IG51bSA9IHJvdyAtIHNoaXAuZ2V0Q29vcmQoKVswXVxyXG4gICAgICAgICAgICBzaGlwLmhpdChudW0pXHJcbiAgICAgICAgICAgIHNoaXAuaXNTdW5rKClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSBjb2x1bW4gLSBzaGlwLmdldENvb3JkKClbMV1cclxuICAgICAgICAgICAgc2hpcC5oaXQobnVtKVxyXG4gICAgICAgICAgICBzaGlwLmlzU3VuaygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBib2FyZEFycmF5XHJcbiAgICB9IGVsc2UgaWYgKGJvYXJkQXJyYXlbcm93XVtjb2x1bW5dID09IHVua25vd25UaWxlKSB7XHJcbiAgICAgIGJvYXJkQXJyYXlbcm93XVtjb2x1bW5dID0gbWlzc1RpbGVcclxuICAgICAgcmV0dXJuIGJvYXJkQXJyYXlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIkFyZWEgYWxyZWFkeSBoaXRcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJlQWxsU2hpcHNTdW5rID0gKCkgPT4ge1xyXG4gICAgaWYgKHNoaXBzLmxlbmd0aCA9PSAwKSByZXR1cm4gZmFsc2VcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGdldElkLFxyXG4gICAgY2hhbmdlSWQsXHJcbiAgICBnZXRIZWlnaHQsXHJcbiAgICBnZXRXaWR0aCxcclxuICAgIGdldEJvYXJkQXJyYXksXHJcbiAgICBnZXRVbmtub3duVGlsZSxcclxuICAgIGdldEhpdFRpbGUsXHJcbiAgICBnZXRNaXNzVGlsZSxcclxuICAgIGdldFNoaXBUaWxlLFxyXG4gICAgY29uc29sZUdhbWVib2FyZCxcclxuICAgIHBsYWNlU2hpcCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBhcmVBbGxTaGlwc1N1bmssXHJcbiAgICBnZXRTaGlwc1N1bmssXHJcbiAgICBnZXRTaGlwc0Nvb3JkLFxyXG4gICAgZ2V0U2hpcHNDb29yZHMsXHJcbiAgICBnZXRIaXRBcnJheSxcclxuICAgIGdldEhpdEFycmF5cyxcclxuICAgIGdldFBsYXllcixcclxuICAgIGdldE9yaWVudGF0aW9ucyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld0dhbWVib2FyZFxyXG4iLCJpbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gXCIuL2dldFJhbmRvbUludC5qc1wiXHJcblxyXG5jb25zdCBuZXdQbGF5ZXIgPSAoeyBuYW1lID0gbnVsbCwgYWkgPSBmYWxzZSwgcmVhZHkgPSBmYWxzZSB9KSA9PiB7XHJcbiAgaWYgKCFuYW1lICYmIGFpKSB7XHJcbiAgICBuYW1lID0gXCJIYWwgOTAwMFwiXHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0FJID0gKCkgPT4gYWlcclxuICBjb25zdCBjaGFuZ2VBSSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgYWkgPSB2YWx1ZVxyXG4gIH1cclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZVxyXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAodmFsdWUpID0+IHtcclxuICAgIG5hbWUgPSB2YWx1ZVxyXG4gIH1cclxuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4gcmVhZHlcclxuICBjb25zdCBzZXRUb1JlYWR5ID0gKCkgPT4ge1xyXG4gICAgcmVhZHkgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCB0YWtlVHVybiA9IChnYW1lQm9hcmQsIFtyb3csIGNvbHVtbl0pID0+IHtcclxuICAgIGlmIChhaSkge1xyXG4gICAgICBjb25zdCBoZWlnaHQgPSBnYW1lQm9hcmQuZ2V0SGVpZ2h0KClcclxuICAgICAgY29uc3Qgd2lkdGggPSBnYW1lQm9hcmQuZ2V0V2lkdGgoKVxyXG4gICAgICBjb25zdCBib2FyZEFycmF5ID0gZ2FtZUJvYXJkLmdldEJvYXJkQXJyYXkoKVxyXG4gICAgICBjb25zdCB1bmtub3duVGlsZSA9IGdhbWVCb2FyZC5nZXRVbmtub3duVGlsZSgpXHJcbiAgICAgIGNvbnN0IHNoaXBUaWxlID0gZ2FtZUJvYXJkLmdldFNoaXBUaWxlKClcclxuXHJcbiAgICAgIGxldCByb3dBaSA9IGdldFJhbmRvbUludCh3aWR0aClcclxuICAgICAgbGV0IGNvbHVtbkFpID0gZ2V0UmFuZG9tSW50KGhlaWdodClcclxuXHJcbiAgICAgIGxldCB3aGlsZUNvdW50ZXIgPSAwXHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBib2FyZEFycmF5W3Jvd0FpXVtjb2x1bW5BaV0gIT0gdW5rbm93blRpbGUgJiZcclxuICAgICAgICBib2FyZEFycmF5W3Jvd0FpXVtjb2x1bW5BaV0gIT0gc2hpcFRpbGVcclxuICAgICAgKSB7XHJcbiAgICAgICAgcm93QWkgPSBnZXRSYW5kb21JbnQod2lkdGgpXHJcbiAgICAgICAgY29sdW1uQWkgPSBnZXRSYW5kb21JbnQoaGVpZ2h0KVxyXG4gICAgICAgIHdoaWxlQ291bnRlcisrXHJcbiAgICAgICAgaWYgKHdoaWxlQ291bnRlciA+PSBoZWlnaHQgKiB3aWR0aCkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soW3Jvd0FpLCBjb2x1bW5BaV0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhbcm93LCBjb2x1bW5dKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgdGFrZVR1cm4sIGdldE5hbWUsIGlzQUksIGlzUmVhZHksIHNldFRvUmVhZHksIGNoYW5nZU5hbWUsIGNoYW5nZUFJIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3UGxheWVyXHJcbiIsImNvbnN0IG5ld1NoaXAgPSAoe1xyXG4gIG5hbWUgPSBudWxsLFxyXG4gIGxlbmd0aCA9IG51bGwsXHJcbiAgaGl0QXJyYXkgPSBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpLFxyXG4gIHN1bmsgPSBmYWxzZSxcclxuICBvcmllbnRhdGlvbiA9IFwidmVydGljYWxcIixcclxuICBjb29yZCA9IG51bGwsXHJcbn0pID0+IHtcclxuICAvLyBpZiAoIWhpdEFycmF5KSB7XHJcbiAgLy8gICBoaXRBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSlcclxuICAvLyAgIC8vIGZvciBleGFtcGxlOiBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGhcclxuICBjb25zdCBnZXRPcmllbnRhdGlvbiA9ICgpID0+IG9yaWVudGF0aW9uXHJcbiAgY29uc3QgZ2V0Q29vcmQgPSAoKSA9PiBjb29yZFxyXG4gIGNvbnN0IGdldEhpdEFycmF5ID0gKCkgPT4gaGl0QXJyYXlcclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZVxyXG4gIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKHZhbHVlKSA9PiB7XHJcbiAgICBvcmllbnRhdGlvbiA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVPcmllbnRhdGlvbiA9ICgpID0+IHtcclxuICAgIGlmIChvcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAodmFsdWUpID0+IHtcclxuICAgIG5hbWUgPSB2YWx1ZVxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VDb29yZCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29vcmQgPSB2YWx1ZVxyXG4gIH1cclxuICBjb25zdCBnZXRDb29yZHMgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNvb3JkKSByZXR1cm4gbnVsbFxyXG4gICAgbGV0IGNvb3JkcyA9IFtdXHJcbiAgICBsZXQgW3JvdywgY29sdW1uXSA9IGNvb3JkXHJcbiAgICBpZiAob3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb29yZHMucHVzaChbcm93ICsgaSwgY29sdW1uXSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvb3Jkcy5wdXNoKFtyb3csIGNvbHVtbiArIGldKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29vcmRzXHJcbiAgfVxyXG5cclxuICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihudW0pICYmIG51bSA+PSAwICYmIG51bSA8IGxlbmd0aCkge1xyXG4gICAgICBoaXRBcnJheVtudW1dID0gdHJ1ZVxyXG4gICAgICByZXR1cm4gaGl0QXJyYXlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgaGl0QXJyYXkpIHtcclxuICAgICAgaWYgKHBhcnQgPT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3VuayA9IHRydWVcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0TGVuZ3RoLFxyXG4gICAgZ2V0T3JpZW50YXRpb24sXHJcbiAgICBnZXRDb29yZCxcclxuICAgIGdldENvb3JkcyxcclxuICAgIGdldE5hbWUsXHJcbiAgICBjaGFuZ2VOYW1lLFxyXG4gICAgY2hhbmdlT3JpZW50YXRpb24sXHJcbiAgICBnZXRIaXRBcnJheSxcclxuICAgIGhpdCxcclxuICAgIGlzU3VuayxcclxuICAgIGNoYW5nZUNvb3JkLFxyXG4gICAgdG9nZ2xlT3JpZW50YXRpb24sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdTaGlwXHJcbiIsImNvbnN0IHJlbmRlcmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsZWFyQ2hpbGRyZW4gPSAocGFyZW50KSA9PiB7XHJcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd0JvYXJkID0gKGJvYXJkLCBncmlkSWQpID0+IHtcclxuICAgIGNvbnN0IGhlaWdodCA9IGJvYXJkLmdldEhlaWdodCgpXHJcbiAgICBjb25zdCB3aWR0aCA9IGJvYXJkLmdldFdpZHRoKClcclxuXHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ3JpZElkKVxyXG4gICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2hlaWdodH0sMWZyKWBcclxuICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHt3aWR0aH0sMWZyKWBcclxuICAgIGNvbnN0IGJvYXJkQXJyYXkgPSBib2FyZC5nZXRCb2FyZEFycmF5KClcclxuXHJcbiAgICBjbGVhckNoaWxkcmVuKGdyaWQpXHJcbiAgICBsZXQgcm93Q291bnQgPSAwXHJcbiAgICBib2FyZEFycmF5LmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICBsZXQgY29sdW1uQ291bnQgPSAwXHJcbiAgICAgIHJvdy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcclxuICAgICAgICBjb25zdCBib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgYm94RGl2LmRhdGFzZXQucm93ID0gcm93Q291bnRcclxuICAgICAgICBib3hEaXYuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW5Db3VudFxyXG4gICAgICAgIGNvbHVtbkNvdW50KytcclxuXHJcbiAgICAgICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJib3hcIilcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGJveERpdilcclxuICAgICAgICBpZiAobGV0dGVyID09IGJvYXJkLmdldFNoaXBUaWxlKCkpIHtcclxuICAgICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKFwidW5rbm93bi10aWxlXCIpXHJcblxyXG4gICAgICAgICAgLy8gVW5jb21tZW50IHRoZXNlIHR3byB0byBzZWUgYWxsIHNoaXBzXHJcbiAgICAgICAgICAvLyBib3hEaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtdGlsZVwiKVxyXG4gICAgICAgICAgLy8gYm94RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIlxyXG4gICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09IGJvYXJkLmdldEhpdFRpbGUoKSkge1xyXG4gICAgICAgICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJoaXQtdGlsZVwiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09IGJvYXJkLmdldE1pc3NUaWxlKCkpIHtcclxuICAgICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKFwibWlzcy10aWxlXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT0gYm9hcmQuZ2V0VW5rbm93blRpbGUoKSkge1xyXG4gICAgICAgICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ1bmtub3duLXRpbGVcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJvd0NvdW50KytcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3UGxhY2luZ0JvYXJkID0gKG1vZGFsSWQsIGJvYXJkLCBncmlkSWQpID0+IHtcclxuICAgIGNvbnN0IGhlaWdodCA9IGJvYXJkLmdldEhlaWdodCgpXHJcbiAgICBjb25zdCB3aWR0aCA9IGJvYXJkLmdldFdpZHRoKClcclxuXHJcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbElkfSAubW9kYWwtY29udGVudGApXHJcblxyXG4gICAgY2xlYXJDaGlsZHJlbihtb2RhbENvbnRlbnQpXHJcblxyXG4gICAgY29uc3QgcGxhY2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIHBsYWNlVGV4dC5jbGFzc0xpc3QuYWRkKFwicGxhY2V0ZXh0XCIpXHJcbiAgICBwbGFjZVRleHQuaWQgPSBcInBsYWNldGV4dFwiICsgbW9kYWxJZC5zbGljZSgtMSlcclxuICAgIHBsYWNlVGV4dC50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyIHNoaXAsICR7Ym9hcmQuZ2V0UGxheWVyKCkuZ2V0TmFtZSgpfWBcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGFjZVRleHQpXHJcblxyXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIilcclxuICAgIGdyaWQuaWQgPSBncmlkSWRcclxuICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtoZWlnaHR9LDFmcilgXHJcbiAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7d2lkdGh9LDFmcilgXHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZ3JpZClcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNoYW5nZS1vcmllbnRhdGlvblwiKVxyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGFuZ2Ugc2hpcCBvcmllbnRhdGlvblwiXHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cclxuICAgIGNvbnN0IGJvYXJkQXJyYXkgPSBib2FyZC5nZXRCb2FyZEFycmF5KClcclxuXHJcbiAgICBjbGVhckNoaWxkcmVuKGdyaWQpXHJcbiAgICBsZXQgcm93Q291bnQgPSAwXHJcbiAgICBib2FyZEFycmF5LmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICBsZXQgY29sdW1uQ291bnQgPSAwXHJcbiAgICAgIHJvdy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcclxuICAgICAgICBjb25zdCBib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgYm94RGl2LmRhdGFzZXQucm93ID0gcm93Q291bnRcclxuICAgICAgICBib3hEaXYuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW5Db3VudFxyXG4gICAgICAgIGNvbHVtbkNvdW50KytcclxuXHJcbiAgICAgICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJib3hcIilcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGJveERpdilcclxuICAgICAgICBpZiAobGV0dGVyID09IGJvYXJkLmdldFNoaXBUaWxlKCkpIHtcclxuICAgICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC10aWxlXCIpXHJcbiAgICAgICAgICBib3hEaXYuY2xhc3NMaXN0LmFkZChcInVua25vd24tdGlsZVwiKVxyXG4gICAgICAgICAgYm94RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIyMSwgMTQ5LCA0OClcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09IGJvYXJkLmdldEhpdFRpbGUoKSkge1xyXG4gICAgICAgICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJoaXQtdGlsZVwiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09IGJvYXJkLmdldE1pc3NUaWxlKCkpIHtcclxuICAgICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKFwibWlzcy10aWxlXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT0gYm9hcmQuZ2V0VW5rbm93blRpbGUoKSkge1xyXG4gICAgICAgICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ1bmtub3duLXRpbGVcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJvd0NvdW50KytcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3Qm9hcmRzID0gKGJvYXJkMSwgYm9hcmQyKSA9PiB7XHJcbiAgICBkcmF3Qm9hcmQoYm9hcmQxLCBcImdyaWQxXCIpXHJcbiAgICBkcmF3Qm9hcmQoYm9hcmQyLCBcImdyaWQyXCIpXHJcbiAgfVxyXG5cclxuICBjb25zdCB0aWxlTGlzdGVuZXJzID0gKGZ1bmMsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2lkfSA+IC51bmtub3duLXRpbGVgKVxyXG4gICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY2xpY2thYmxlXCIpXHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuYylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB0aWxlSG92ZXJMaXN0ZW5lcnMgPSAoc2hpcCwgaWQpID0+IHtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAgIGNvbnN0IGdyaWRDaGlsZHJlbiA9IGdyaWQuY2hpbGRyZW5cclxuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7aWR9ID4gLnVua25vd24tdGlsZWApXHJcbiAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwLmdldE9yaWVudGF0aW9uKClcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmdldExlbmd0aCgpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Um93ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucm93KVxyXG4gICAgICAgIGNvbnN0IHRhcmdldENvbHVtbiA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmNvbHVtbilcclxuXHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgaWYgKHRhcmdldFJvdyArIGxlbmd0aCAtIDEgPD0gOSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGlmIChOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQuY29sdW1uKSA9PSB0YXJnZXRDb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSB0aGlzIGNvZGUgdG8gaW5jbHVkZSB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgYm9hcmRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5yb3cpID49IHRhcmdldFJvdyAmJlxyXG4gICAgICAgICAgICAgICAgICBOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQucm93KSA8PSB0YXJnZXRSb3cgKyBsZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgZ3JpZENoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoXCJ0by1wbGFjZVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRSb3cgKyBsZW5ndGggLSAxIDw9IDkpIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5jb2x1bW4pID09IHRhcmdldENvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgdGhpcyBjb2RlIHRvIGluY2x1ZGUgdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgdGhlIGJvYXJkXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGdyaWRDaGlsZHJlbltpXS5kYXRhc2V0LnJvdykgPj0gdGFyZ2V0Um93ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGdyaWRDaGlsZHJlbltpXS5kYXRhc2V0LnJvdykgPD1cclxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFJvdyArIGxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ0by1wbGFjZVwiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0Q29sdW1uICsgbGVuZ3RoIC0gMSA8PSA5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZENoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5yb3cpID09IHRhcmdldFJvdykge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIHRoaXMgY29kZSB0byBpbmNsdWRlIHRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoZSBib2FyZFxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgTnVtYmVyKGdyaWRDaGlsZHJlbltpXS5kYXRhc2V0LmNvbHVtbikgPj0gdGFyZ2V0Q29sdW1uICYmXHJcbiAgICAgICAgICAgICAgICAgIE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5jb2x1bW4pIDw9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q29sdW1uICsgbGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWRDaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwidG8tcGxhY2VcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Q29sdW1uICsgbGVuZ3RoIC0gMSA8PSA5KSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQucm93KSA9PSB0YXJnZXRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlIHRoaXMgY29kZSB0byBpbmNsdWRlIHRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoZSBib2FyZFxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5jb2x1bW4pID49IHRhcmdldENvbHVtbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5jb2x1bW4pIDw9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDb2x1bW4gKyBsZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRDaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwidG8tcGxhY2VcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKG1vZGFsSWQpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxJZClcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dQbGFjaW5nQm9hcmQgPSAobW9kYWxJZCwgYm9hcmQsIGdyaWRJZCkgPT4ge1xyXG4gICAgc2hvd01vZGFsKG1vZGFsSWQpXHJcbiAgICBkcmF3UGxhY2luZ0JvYXJkKG1vZGFsSWQsIGJvYXJkLCBncmlkSWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoaWRlTW9kYWwgPSAobW9kYWxJZCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbElkKVxyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaGlwQnV0dG9uTGlzdGVuZXIgPSAoc2hpcCwgbW9kYWxJZCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke21vZGFsSWR9IC5tb2RhbC1jb250ZW50IC5jaGFuZ2Utb3JpZW50YXRpb25gXHJcbiAgICApXHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaGlwLnRvZ2dsZU9yaWVudGF0aW9uKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0UGxheWVyTmFtZXMgPSAocGxheWVyMSwgcGxheWVyMikgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyTmFtZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFcIilcclxuICAgIHBsYXllck5hbWUxLnRleHRDb250ZW50ID0gYCR7cGxheWVyMS5nZXROYW1lKCl9YFxyXG4gICAgY29uc3QgcGxheWVyTmFtZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJcIilcclxuICAgIHBsYXllck5hbWUyLnRleHRDb250ZW50ID0gYCR7cGxheWVyMi5nZXROYW1lKCl9YFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlVHVyblRleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVyblwiKVxyXG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9IHRleHRcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlCdXR0b25MaXN0ZW5lciA9IChwbGF5ZXIxLCBwbGF5ZXIyLCBteUdhbWUpID0+IHtcclxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXktYnV0dG9uXCIpXHJcblxyXG4gICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXktZ2FtZS1mb3JtXCIpXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXHJcbiAgICAgIGNvbnN0IHBsYXllcjFOYW1lID0gZm9ybURhdGEuZ2V0KFwicGxheWVyLTEtbmFtZVwiKVxyXG4gICAgICBjb25zdCBwbGF5ZXIyTmFtZSA9IGZvcm1EYXRhLmdldChcInBsYXllci0yLW5hbWVcIilcclxuICAgICAgY29uc3QgcGxheWVyMUFJID0gZm9ybURhdGEuZ2V0KFwicGxheWVyLTEtYWlcIilcclxuICAgICAgY29uc3QgcGxheWVyMkFJID0gZm9ybURhdGEuZ2V0KFwicGxheWVyLTItYWlcIilcclxuICAgICAgZm9ybS5yZXNldCgpXHJcbiAgICAgIGhpZGVNb2RhbChcIm1vZGFsM1wiKVxyXG5cclxuICAgICAgaWYgKHBsYXllcjFOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICBwbGF5ZXIxLmNoYW5nZU5hbWUocGxheWVyMU5hbWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwbGF5ZXIyTmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgcGxheWVyMi5jaGFuZ2VOYW1lKHBsYXllcjJOYW1lKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwbGF5ZXIxLmNoYW5nZUFJKHBsYXllcjFBSSlcclxuICAgICAgcGxheWVyMi5jaGFuZ2VBSShwbGF5ZXIyQUkpXHJcbiAgICAgIG15R2FtZS5zdGFydEdhbWUoKVxyXG5cclxuICAgICAgcmV0dXJuIHsgcGxheWVyMU5hbWUsIHBsYXllcjJOYW1lIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZHJhd0JvYXJkcyxcclxuICAgIGRyYXdCb2FyZCxcclxuICAgIGRyYXdQbGFjaW5nQm9hcmQsXHJcbiAgICB0aWxlTGlzdGVuZXJzLFxyXG4gICAgc2hvd1BsYWNpbmdCb2FyZCxcclxuICAgIHNob3dNb2RhbCxcclxuICAgIGhpZGVNb2RhbCxcclxuICAgIHNoaXBCdXR0b25MaXN0ZW5lcixcclxuICAgIHRpbGVIb3Zlckxpc3RlbmVycyxcclxuICAgIHNldFBsYXllck5hbWVzLFxyXG4gICAgY2hhbmdlVHVyblRleHQsXHJcbiAgICBwbGF5QnV0dG9uTGlzdGVuZXIsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJlclxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdpdmVuIHRoaXMgaHRtbDogKi9cXHJcXG5cXHJcXG4vKlxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiY2xvc2UtbW9kYWxcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4qL1xcclxcblxcclxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXHJcXG4ubW9kYWwge1xcclxcbiAgY29sb3I6IHJnYigyMzcsIDIzNywgMjM3KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gIHotaW5kZXg6IDM7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAxOCwgNTksIDAuNjEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDQsIDQsIDQpOyAqL1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xcclxcbiAgd2lkdGg6IDMyMHB4OyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZXRleHQge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGFsbDogdW5zZXQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBhc3Npb25cXFwiLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUwODFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTFkNjE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzBhMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLXBsYWNlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDIwMCwgMjQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9yIHRoZSBmb3JtICovXFxyXFxubGFiZWwge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0OCkgaW5zZXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICB3aWR0aDogOTMlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGFjY2VudC1jb2xvcjogI2EwMzBhMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCOzs7Ozs7Q0FNQzs7QUFFRCwyQkFBMkI7QUFDM0I7RUFDRSx5QkFBeUI7RUFDekIsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWSxFQUFFLGVBQWU7RUFDN0IsYUFBYSxFQUFFLGdCQUFnQjtFQUMvQixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7QUFDN0Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsWUFBWSxFQUFFLG9EQUFvRDtFQUNsRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLHVFQUF1RTtFQUN2RSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw4Q0FBOEM7RUFDOUMsb0NBQW9DO0VBQ3BDLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdpdmVuIHRoaXMgaHRtbDogKi9cXHJcXG5cXHJcXG4vKlxcclxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiY2xvc2UtbW9kYWxcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4qL1xcclxcblxcclxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXHJcXG4ubW9kYWwge1xcclxcbiAgY29sb3I6IHJnYigyMzcsIDIzNywgMjM3KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gIHotaW5kZXg6IDM7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKi9cXHJcXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAxOCwgNTksIDAuNjEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDQsIDQsIDQpOyAqL1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xcclxcbiAgd2lkdGg6IDMyMHB4OyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZXRleHQge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGFsbDogdW5zZXQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBhc3Npb25cXFwiLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUwODFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTFkNjE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwMzBhMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLXBsYWNlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDIwMCwgMjQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9yIHRoZSBmb3JtICovXFxyXFxubGFiZWwge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0OCkgaW5zZXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICB3aWR0aDogOTMlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGFjY2VudC1jb2xvcjogI2EwMzBhMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhc3Npb24rT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBhc3Npb25cXFwiLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tZ2FwOiAyNHB4O1xcclxcbiAgLS1yYWRpdXM6IDE1cHg7XFxyXFxuICAtLXNoYWRvdzogNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xcclxcblxcclxcbiAgLS1saWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0OCk7XFxyXFxuICAtLW1haW4tY29sb3I6IHJnYig2LCAzMSwgNzApO1xcclxcbiAgLS1saWdodC1ncmF5OiByZ2IoNjUsIDY1LCA2NSk7XFxyXFxuICAtLWRhcmstZ3JheTogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgLS10aGVtZS1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgLS1oaWdobGlnaHQtY29sb3I6IHJnYigxMDYsIDQ2LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAyOSwgMjkpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVc3VhbCBiYWNrZ3JvdW5kLCBjaGFuZ2UgdGhlIFVSTCAqL1xcclxcbmh0bWwge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogVXN1YWwgaGVhZGVyICovXFxyXFxuLyogaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlYmUxO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufSAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgZmxleDogMTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzA2KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLW1hdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNDUpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBnYXA6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTg2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDcwJTtcXHJcXG4gIC8qIGJveC1zaGFkb3c6IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjUwNSk7ICovXFxyXFxufVxcclxcblxcclxcbi5zaGlwLXRpbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMTQ5LCA0OCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oaXQtdGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAxNDksIDQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3MtdGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCA2LCAxOCwgMC45MTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xODYpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDIwMCwgMjQxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTI5LCAyNDApO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVc3VhbCBmb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcCk7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nYXApO1xcclxcbiAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVFQUF1RTtFQUN2RSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxxQ0FBcUM7O0VBRXJDLHlDQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCx1Q0FBdUM7QUFDekM7O0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsaUZBQThEO0VBQzlELHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUEsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIO0VBQ0UsT0FBTzs7RUFFUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFzc2lvbitPbmUmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXNzaW9uXFxcIiwgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICAtLWdhcDogMjRweDtcXHJcXG4gIC0tcmFkaXVzOiAxNXB4O1xcclxcbiAgLS1zaGFkb3c6IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcXHJcXG5cXHJcXG4gIC0tbGlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NDgpO1xcclxcbiAgLS1tYWluLWNvbG9yOiByZ2IoNiwgMzEsIDcwKTtcXHJcXG4gIC0tbGlnaHQtZ3JheTogcmdiKDY1LCA2NSwgNjUpO1xcclxcbiAgLS1kYXJrLWdyYXk6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG4gIC0tdGhlbWUtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG4gIC0taGlnaGxpZ2h0LWNvbG9yOiByZ2IoMTA2LCA0NiwgMTUwKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVXN1YWwgYmFja2dyb3VuZCwgY2hhbmdlIHRoZSBVUkwgKi9cXHJcXG5odG1sIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVc3VhbCBoZWFkZXIgKi9cXHJcXG4vKiBoZWFkZXIge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzZweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGViZTE7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59ICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBmbGV4OiAxO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItbWF0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0NSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGdhcDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xODYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3BhY2l0eTogNzAlO1xcclxcbiAgLyogYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNTA1KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtdGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAxNDksIDQ4KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdC10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDE0OSwgNDgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzcy10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDYsIDE4LCAwLjkxMyk7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE4Nik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjAwLCAyNDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMjksIDI0MCk7XFxyXFxufVxcclxcblxcclxcbi8qIFVzdWFsIGZvb3RlciAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tZ2FwKTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWdhcCk7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kYWwuY3NzXCJcclxuaW1wb3J0IHJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyLmpzXCJcclxuaW1wb3J0IGluaXRpYWxpemVHYW1lIGZyb20gXCIuL2luaXRpYWxpemVHYW1lLmpzXCJcclxuXHJcbi8vIGNvbnN0IGhlaWdodCA9IDEwXHJcbi8vIGNvbnN0IHdpZHRoID0gMTBcclxuXHJcbi8vIGNvbnN0IHBsYXllcjEgPSBuZXdQbGF5ZXIoeyBuYW1lOiBcIkFjZVwiLCBhaTogdHJ1ZSB9KVxyXG4vLyBjb25zdCBwbGF5ZXIyID0gbmV3UGxheWVyKHsgbmFtZTogXCJBY2Vib3RcIiwgYWk6IHRydWUgfSlcclxuXHJcbi8vIGNvbnN0IG15R2FtZSA9IG5ld0dhbWUoW3BsYXllcjEsIHBsYXllcjJdLCBbaGVpZ2h0LCB3aWR0aF0pXHJcbi8vIG15R2FtZS5zdGFydEdhbWUoKVxyXG5cclxuaW5pdGlhbGl6ZUdhbWUoKSJdLCJuYW1lcyI6WyJhcnJheXNFcXVhbCIsImFycmF5SW5jbHVkZXMiLCJiaWdBcnJheSIsInNtYWxsQXJyYXkiLCJhcnJheSIsImEiLCJiIiwibGVuZ3RoIiwiaSIsImdldFJhbmRvbUludCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlbmRlcmVyIiwibmV3R2FtZSIsIm5ld1BsYXllciIsImluaXRpYWxpemVHYW1lIiwibXlSZW5kZXJlciIsImhlaWdodCIsIndpZHRoIiwicGxheWVyMSIsIm5hbWUiLCJhaSIsInBsYXllcjIiLCJteUdhbWUiLCJzaG93TW9kYWwiLCJwbGF5QnV0dG9uTGlzdGVuZXIiLCJuZXdHYW1lYm9hcmQiLCJuZXdTaGlwIiwiYm9hcmQxIiwiaWQiLCJwbGF5ZXIiLCJib2FyZDIiLCJ3aW5uZXIiLCJnYW1lRW5kcyIsImRyYXdCb2FyZHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0TmFtZSIsInR1cm5UZXh0IiwiY2hhbmdlVHVyblRleHQiLCJpc0dhbWVPdmVyIiwiYXJlQWxsU2hpcHNTdW5rIiwicGxheWVyVHVybkxvb3AiLCJib2FyZCIsImJvYXJkQXR0YWNrZWQiLCJlIiwicm93IiwiY29sdW1uIiwiaXNBSSIsIk51bWJlciIsInRhcmdldCIsImRhdGFzZXQiLCJ0YWtlVHVybiIsImRyYXdCb2FyZCIsImdldElkIiwiY29uc29sZUdhbWVib2FyZCIsImdldEhpdEFycmF5cyIsImdldE9yaWVudGF0aW9ucyIsIm5leHRCb2FyZCIsIm5leHRQbGF5ZXIiLCJ0aWxlTGlzdGVuZXJzIiwic3RhcnRHYW1lTG9vcCIsImlzUmVhZHkiLCJwbGFjZVNoaXBzQUkiLCJzaGlwcyIsImdhbWVCb2FyZCIsInNoaXAiLCJjaGFuZ2VPcmllbnRhdGlvbiIsInJhbmRSb3ciLCJyYW5kQ29sdW1uIiwid2hpbGVDb3VudGVyIiwicGxhY2VTaGlwIiwiZ2V0UGxheWVyIiwic2V0VG9SZWFkeSIsInBsYXllcjJQbGFjZVNoaXBzIiwiZ2V0Qm9hcmRBcnJheSIsInBsYWNlU2hpcENvdW50ZXIiLCJwbGFjZVNoaXBzTG9vcCIsIm1vZGFsSWQiLCJzaGlwUGxhY2VkIiwiaGlkZU1vZGFsIiwiZHJhd1BsYWNpbmdCb2FyZCIsInRpbGVIb3Zlckxpc3RlbmVycyIsInNoaXBCdXR0b25MaXN0ZW5lciIsInBsYWNlU2hpcHNQbGF5ZXIiLCJjb25zb2xlQm9hcmRzIiwicGxheWVyMVBsYWNlU2hpcHMiLCJzaGlwMSIsInNoaXAyIiwic2hpcDMiLCJzaGlwNCIsInNoaXA1Iiwic2hpcHMxIiwibW9kYWxJZDEiLCJzaGlwcHkxIiwic2hpcHB5MiIsInNoaXBweTMiLCJzaGlwcHk0Iiwic2hpcHB5NSIsInNoaXBzMiIsIm1vZGFsSWQyIiwic3RhcnRHYW1lIiwic2V0UGxheWVyTmFtZXMiLCJ1bmtub3duVGlsZSIsInNoaXBUaWxlIiwiaGl0VGlsZSIsIm1pc3NUaWxlIiwiYm9hcmRBcnJheSIsInB1c2giLCJBcnJheSIsImZpbGwiLCJnZXRTaGlwc1N1bmsiLCJtYXAiLCJpc1N1bmsiLCJnZXRTaGlwc0Nvb3JkIiwiZ2V0Q29vcmQiLCJnZXRTaGlwc0Nvb3JkcyIsImdldENvb3JkcyIsImdldEhpdEFycmF5IiwiZ2V0T3JpZW50YXRpb24iLCJjaGVja05laWdoYm9yc1Vua25vd25UaWxlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZGlyZWN0aW9ucyIsImNoYW5nZUlkIiwidmFsdWUiLCJnZXRIZWlnaHQiLCJnZXRXaWR0aCIsImdldFVua25vd25UaWxlIiwiZ2V0U2hpcFRpbGUiLCJnZXRIaXRUaWxlIiwiZ2V0TWlzc1RpbGUiLCJoaXRBcnJheSIsImlzSW50ZWdlciIsImdldExlbmd0aCIsImNoYW5nZUNvb3JkIiwicmVjZWl2ZUF0dGFjayIsImhpdENvb3JkIiwic2hpcENvb3JkcyIsIm51bSIsImhpdCIsInJlYWR5IiwiY2hhbmdlQUkiLCJjaGFuZ2VOYW1lIiwicm93QWkiLCJjb2x1bW5BaSIsInN1bmsiLCJvcmllbnRhdGlvbiIsImNvb3JkIiwidG9nZ2xlT3JpZW50YXRpb24iLCJjb29yZHMiLCJwYXJ0IiwiY2xlYXJDaGlsZHJlbiIsInBhcmVudCIsImlubmVySFRNTCIsImdyaWRJZCIsImdyaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsInJvd0NvdW50IiwiZm9yRWFjaCIsImNvbHVtbkNvdW50IiwibGV0dGVyIiwiYm94RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwibW9kYWxDb250ZW50IiwicXVlcnlTZWxlY3RvciIsInBsYWNlVGV4dCIsInNsaWNlIiwidGV4dENvbnRlbnQiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmdW5jIiwiYm94ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdyaWRDaGlsZHJlbiIsImNoaWxkcmVuIiwidGFyZ2V0Um93IiwidGFyZ2V0Q29sdW1uIiwicmVtb3ZlIiwibW9kYWwiLCJkaXNwbGF5Iiwic2hvd1BsYWNpbmdCb2FyZCIsInBsYXllck5hbWUxIiwicGxheWVyTmFtZTIiLCJ0ZXh0IiwidHVybkRpdiIsInBsYXlCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicGxheWVyMU5hbWUiLCJnZXQiLCJwbGF5ZXIyTmFtZSIsInBsYXllcjFBSSIsInBsYXllcjJBSSIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==