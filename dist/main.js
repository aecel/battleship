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
    setTimeout(() => {
      myRenderer.drawBoards(board1, board2);
    }, 500);
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

  const AIChooseCoord = gameBoard => {
    const height = gameBoard.getHeight();
    const width = gameBoard.getWidth();
    const boardArray = gameBoard.getBoardArray();
    const unknownTile = gameBoard.getUnknownTile();
    const shipTile = gameBoard.getShipTile();
    let rowAi = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(width);
    let columnAi = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(height);
    let whileCounter = 0;

    while (boardArray[rowAi][columnAi] != unknownTile && boardArray[rowAi][columnAi] != shipTile) {
      rowAi = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(width);
      columnAi = (0,_getRandomInt_js__WEBPACK_IMPORTED_MODULE_2__["default"])(height);
      whileCounter++;

      if (whileCounter >= height * width) {
        break;
      }
    }

    return [rowAi, columnAi];
  };

  const playerTurnLoop = (player, board) => {
    const boardAttacked = e => {
      let row;
      let column;

      if (!player.isAI()) {
        row = Number(e.target.dataset.row);
        column = Number(e.target.dataset.column);
      } else {
        ;
        [row, column] = AIChooseCoord(board);
      }

      player.takeTurn(board, [row, column]);
      myRenderer.drawBoard(board, board.getId());
      myRenderer.animateTile("hit-tile", board, [row, column]);
      board.consoleGameboard();
      console.log(board.getHitArrays());
      console.log(board.getOrientations());

      if (isGameOver()) {
        gameEnds();
        return null;
      }

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
      return null;
    } else {
      myRenderer.tileListeners(boardAttacked, board.getId());
      return null;
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
    myRenderer.randButtonListener(modalId, () => {
      gameBoard.emptyShips();
      placeShipsAI(ships, gameBoard);
      myRenderer.hideModal(modalId);
    });
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
  let emptyBoardArray = [];
  let ships = []; // I can't use the code below because placeShip will not work with it
  // const boardRow = Array(width).fill(unknownTile)

  for (let i = 0; i < height; i++) {
    boardArray.push(Array(width).fill(unknownTile));
    emptyBoardArray.push(Array(width).fill(unknownTile));
  }

  const emptyShips = () => {
    ships = [];
    boardArray = emptyBoardArray;
  };

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
    getOrientations,
    emptyShips
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
 // import renderer from "./renderer.js"

const newPlayer = _ref => {
  let {
    name = null,
    ai = false,
    ready = false
  } = _ref;

  // const myRenderer = renderer()
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
    // if (ai) {
    //   const height = gameBoard.getHeight()
    //   const width = gameBoard.getWidth()
    //   const boardArray = gameBoard.getBoardArray()
    //   const unknownTile = gameBoard.getUnknownTile()
    //   const shipTile = gameBoard.getShipTile()
    //   let rowAi = getRandomInt(width)
    //   let columnAi = getRandomInt(height)
    //   let whileCounter = 0
    //   while (
    //     boardArray[rowAi][columnAi] != unknownTile &&
    //     boardArray[rowAi][columnAi] != shipTile
    //   ) {
    //     rowAi = getRandomInt(width)
    //     columnAi = getRandomInt(height)
    //     whileCounter++
    //     if (whileCounter >= height * width) {
    //       break
    //     }
    //   }
    //   gameBoard.receiveAttack([rowAi, columnAi])
    // myRenderer.animateTile("hit-tile", gameBoard, [rowAi, columnAi])
    // } else {
    gameBoard.receiveAttack([row, column]); // myRenderer.animateTile("hit-tile", gameBoard, [row, column])
    // }
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
          boxDiv.classList.add("hit-tile"); // boxDiv.classList.add("shake")
          // boxDiv.classList.add("enlarge")
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
    placeText.textContent = `Place your ships, ${board.getPlayer().getName()}`;
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
    const randButton = document.createElement("button");
    randButton.classList.add("randomize");
    randButton.textContent = "Randomize and Start";
    modalContent.appendChild(randButton);
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

  const randButtonListener = (modalId, func) => {
    const button = document.querySelector(`#${modalId} .modal-content .randomize`);
    button.addEventListener("click", func);
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

  const animateTile = (tileClass, board, _ref) => {
    let [row, column] = _ref;
    const boxes = document.querySelectorAll(`#${board.getId()} > .${tileClass}`);
    boxes.forEach(box => {
      if (box.dataset.row == row && box.dataset.column == column) {
        box.classList.toggle("shake");
        box.classList.toggle("enlarge"); // box.classList.remove("shake")
        // box.classList.remove("enlarge")
      }
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
    playButtonListener,
    animateTile,
    randButtonListener
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/animations.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/animations.css ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* .shake {\r\n  animation-name: shakeIt;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n  animation-duration: 100ms;\r\n  animation-fill-mode: forwards;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes shakeIt {\r\n  from {\r\n    transform: rotate(5 deg);\r\n  }\r\n  to {\r\n    transform: rotate(-2deg);\r\n  }\r\n} */\r\n\r\n.enlarge {\r\n  animation-name: plungeIt;\r\n  animation-iteration-count: 1;\r\n  animation-direction: normal;\r\n  animation-duration: 600ms;\r\n  animation-fill-mode: forwards;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes plungeIt {\r\n  0% {\r\n    transform: scale(0.3) rotate(0deg);\r\n    background-color: rgba(0, 0, 0, 0.186);\r\n  }\r\n\r\n  20% {\r\n    transform: scale(3) rotate(1turn);\r\n    background-color: orangered;\r\n  }\r\n\r\n  40% {\r\n    transform: scale(0.3) rotate(0deg);\r\n    background-color: rgb(221, 149, 48);\r\n  }\r\n\r\n  60% {\r\n    transform: scale(2) rotate(1turn);\r\n    background-color: white;\r\n  }\r\n\r\n  80% {\r\n    transform: scale(0.3) rotate(1turn);\r\n    background-color: rgb(221, 149, 48);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1) rotate(0deg);\r\n    background-color: rgb(221, 149, 48);\r\n  }\r\n}\r\n\r\n/* @keyframes plungeIt {\r\n  0% {\r\n    transform: scale(3) rotate(50 deg);\r\n  }\r\n\r\n  30% {\r\n    transform: scale(0.3) rotate(-50 deg);\r\n  }\r\n\r\n  60% {\r\n    transform: scale(2) rotate(50 deg);\r\n  }\r\n\r\n  80% {\r\n    transform: scale(0.3) rotate(-50 deg);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1) rotate(50 deg);\r\n  }\r\n} */\r\n", "",{"version":3,"sources":["webpack://./src/animations.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;GAgBG;;AAEH;EACE,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE;IACE,kCAAkC;IAClC,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;IACjC,2BAA2B;EAC7B;;EAEA;IACE,kCAAkC;IAClC,mCAAmC;EACrC;;EAEA;IACE,iCAAiC;IACjC,uBAAuB;EACzB;;EAEA;IACE,mCAAmC;IACnC,mCAAmC;EACrC;;EAEA;IACE,gCAAgC;IAChC,mCAAmC;EACrC;AACF;;AAEA;;;;;;;;;;;;;;;;;;;;GAoBG","sourcesContent":["/* .shake {\r\n  animation-name: shakeIt;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n  animation-duration: 100ms;\r\n  animation-fill-mode: forwards;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes shakeIt {\r\n  from {\r\n    transform: rotate(5 deg);\r\n  }\r\n  to {\r\n    transform: rotate(-2deg);\r\n  }\r\n} */\r\n\r\n.enlarge {\r\n  animation-name: plungeIt;\r\n  animation-iteration-count: 1;\r\n  animation-direction: normal;\r\n  animation-duration: 600ms;\r\n  animation-fill-mode: forwards;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes plungeIt {\r\n  0% {\r\n    transform: scale(0.3) rotate(0deg);\r\n    background-color: rgba(0, 0, 0, 0.186);\r\n  }\r\n\r\n  20% {\r\n    transform: scale(3) rotate(1turn);\r\n    background-color: orangered;\r\n  }\r\n\r\n  40% {\r\n    transform: scale(0.3) rotate(0deg);\r\n    background-color: rgb(221, 149, 48);\r\n  }\r\n\r\n  60% {\r\n    transform: scale(2) rotate(1turn);\r\n    background-color: white;\r\n  }\r\n\r\n  80% {\r\n    transform: scale(0.3) rotate(1turn);\r\n    background-color: rgb(221, 149, 48);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1) rotate(0deg);\r\n    background-color: rgb(221, 149, 48);\r\n  }\r\n}\r\n\r\n/* @keyframes plungeIt {\r\n  0% {\r\n    transform: scale(3) rotate(50 deg);\r\n  }\r\n\r\n  30% {\r\n    transform: scale(0.3) rotate(-50 deg);\r\n  }\r\n\r\n  60% {\r\n    transform: scale(2) rotate(50 deg);\r\n  }\r\n\r\n  80% {\r\n    transform: scale(0.3) rotate(-50 deg);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1) rotate(50 deg);\r\n  }\r\n} */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Passion+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Given this html: */\r\n\r\n/*\r\n<div class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <span class=\"close-modal\">&times;</span>\r\n  </div>\r\n</div>\r\n*/\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n  color: rgb(237, 237, 237);\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 3; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw; /* Full width */\r\n  height: 100vh; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  font-size: 1rem;\r\n  /* background-color: #fefefe; */\r\n  background-color: rgba(59, 18, 59, 0.719);\r\n  border-radius: 20px;\r\n  border: none;\r\n  margin: 10% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  /* border: 1px solid rgb(4, 4, 4); */\r\n  box-shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n  width: 320px; /* Could be more or less, depending on screen size */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.placetext {\r\n  margin-top: 0;\r\n  font-weight: bold;\r\n}\r\n\r\nbutton {\r\n  /* all: unset; */\r\n  font-family: inherit;\r\n  /* font-family: \"Passion\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif; */\r\n  margin-top: 16px;\r\n  font-weight: bold;\r\n  background-color: #1e081e;\r\n  border-radius: 10px;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n#play-button {\r\n  font-size: 0.7rem;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #611d61;\r\n}\r\n\r\nbutton:active {\r\n  background-color: #a030a0;\r\n}\r\n\r\n.to-place {\r\n  background-color: rgb(246, 200, 241);\r\n}\r\n\r\n/* For the form */\r\nlabel {\r\n  margin-top: 15px;\r\n  margin-bottom: 5px;\r\n  display: block;\r\n  font-size: 0.7rem;\r\n  font-weight: bold;\r\n\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  align-items: center;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-size: 1rem;\r\n  /* margin-bottom: 20px; */\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  box-shadow: 3px 3px rgba(0, 0, 0, 0.148) inset;\r\n  background-color: rgb(236, 236, 236);\r\n  width: 93%;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  border: none;\r\n  accent-color: #a030a0;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\nlabel[for=\"player-1-ai\"],\r\nlabel[for=\"player-2-ai\"] {\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/modal.css"],"names":[],"mappings":"AACA,qBAAqB;;AAErB;;;;;;CAMC;;AAED,2BAA2B;AAC3B;EACE,yBAAyB;EACzB,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,YAAY,EAAE,eAAe;EAC7B,aAAa,EAAE,gBAAgB;EAC/B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,eAAe;EACf,+BAA+B;EAC/B,yCAAyC;EACzC,mBAAmB;EACnB,YAAY;EACZ,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,oCAAoC;EACpC,uCAAuC;EACvC,YAAY,EAAE,oDAAoD;EAClE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,6EAA6E;EAC7E,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;;EAEjB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,8CAA8C;EAC9C,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,mBAAmB;AACrB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Passion+One&display=swap\");\r\n/* Given this html: */\r\n\r\n/*\r\n<div class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <span class=\"close-modal\">&times;</span>\r\n  </div>\r\n</div>\r\n*/\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n  color: rgb(237, 237, 237);\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 3; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw; /* Full width */\r\n  height: 100vh; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  font-size: 1rem;\r\n  /* background-color: #fefefe; */\r\n  background-color: rgba(59, 18, 59, 0.719);\r\n  border-radius: 20px;\r\n  border: none;\r\n  margin: 10% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  /* border: 1px solid rgb(4, 4, 4); */\r\n  box-shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n  width: 320px; /* Could be more or less, depending on screen size */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.placetext {\r\n  margin-top: 0;\r\n  font-weight: bold;\r\n}\r\n\r\nbutton {\r\n  /* all: unset; */\r\n  font-family: inherit;\r\n  /* font-family: \"Passion\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif; */\r\n  margin-top: 16px;\r\n  font-weight: bold;\r\n  background-color: #1e081e;\r\n  border-radius: 10px;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n#play-button {\r\n  font-size: 0.7rem;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #611d61;\r\n}\r\n\r\nbutton:active {\r\n  background-color: #a030a0;\r\n}\r\n\r\n.to-place {\r\n  background-color: rgb(246, 200, 241);\r\n}\r\n\r\n/* For the form */\r\nlabel {\r\n  margin-top: 15px;\r\n  margin-bottom: 5px;\r\n  display: block;\r\n  font-size: 0.7rem;\r\n  font-weight: bold;\r\n\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  align-items: center;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-size: 1rem;\r\n  /* margin-bottom: 20px; */\r\n  padding: 5px 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  box-shadow: 3px 3px rgba(0, 0, 0, 0.148) inset;\r\n  background-color: rgb(236, 236, 236);\r\n  width: 93%;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  border: none;\r\n  accent-color: #a030a0;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\nlabel[for=\"player-1-ai\"],\r\nlabel[for=\"player-2-ai\"] {\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  font-family: \"Passion\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  color: white;\r\n  /* font-weight: bold; */\r\n  --gap: 24px;\r\n  --radius: 15px;\r\n  --shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n\r\n  --light-color: rgba(255, 255, 255, 0.748);\r\n  --main-color: rgb(6, 31, 70);\r\n  --light-gray: rgb(65, 65, 65);\r\n  --dark-gray: rgb(34, 34, 34);\r\n  --theme-color: rgb(34, 34, 34);\r\n  --highlight-color: rgb(106, 46, 150);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  /* background-color: rgb(29, 29, 29); */\r\n}\r\n\r\n/* Usual background, change the URL */\r\nhtml {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* Usual header */\r\n/* header {\r\n  padding: 15px;\r\n  padding-left: 36px;\r\n  padding-right: 36px;\r\n  background-color: #fff8ebe1;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  box-shadow: var(--shadow);\r\n  z-index: 1;\r\n} */\r\n\r\nmain {\r\n  flex: 1;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0px;\r\n  align-items: center;\r\n  /* justify-content: center; */\r\n  background-color: rgba(0, 0, 0, 0.306);\r\n}\r\n\r\nh1 {\r\n  margin-top: 50px;\r\n}\r\n\r\n.grids {\r\n  display: flex;\r\n  gap: 100px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.player-mat {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.grid {\r\n  box-sizing: border-box;\r\n  height: 300px;\r\n  width: 300px;\r\n  background-color: rgba(255, 255, 255, 0.045);\r\n  display: grid;\r\n  border-radius: 5px;\r\n  border: none;\r\n  padding: 10px;\r\n  gap: 7px;\r\n}\r\n\r\n.box {\r\n  background-color: rgba(0, 0, 0, 0.186);\r\n  border-radius: 5px;\r\n  border: none;\r\n  opacity: 70%;\r\n  /* box-shadow: 2px 2px rgba(0, 0, 0, 0.505); */\r\n}\r\n\r\n.ship-tile {\r\n  background-color: rgb(221, 149, 48);\r\n  cursor: pointer;\r\n}\r\n\r\n.hit-tile {\r\n  background-color: rgb(221, 149, 48);\r\n}\r\n\r\n.miss-tile {\r\n  background-color: rgba(14, 6, 18, 0.913);\r\n}\r\n\r\n.clickable {\r\n  background-color: rgba(0, 0, 0, 0.186);\r\n  cursor: pointer;\r\n}\r\n\r\n.clickable:hover {\r\n  background-color: rgb(246, 200, 241);\r\n}\r\n\r\n.clickable:active {\r\n  background-color: rgb(255, 129, 240);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n/* Usual footer */\r\nfooter {\r\n  font-size: 0.6rem;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  color: white;\r\n  padding-left: var(--gap);\r\n  padding-right: var(--gap);\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,uEAAuE;EACvE,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,cAAc;EACd,qCAAqC;;EAErC,yCAAyC;EACzC,4BAA4B;EAC5B,6BAA6B;EAC7B,4BAA4B;EAC5B,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,UAAU;EACV,SAAS;EACT,uCAAuC;AACzC;;AAEA,qCAAqC;AACrC;EACE,iFAA8D;EAC9D,sBAAsB;EACtB,gBAAgB;EAChB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,iBAAiB;AACjB;;;;;;;;;;;;;;GAcG;;AAEH;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,4CAA4C;EAC5C,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;EACpC,YAAY;EACZ,wBAAwB;EACxB,yBAAyB;EACzB,iBAAiB;EACjB,oBAAoB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Passion+One&display=swap');\r\n\r\n:root {\r\n  font-family: \"Passion\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  color: white;\r\n  /* font-weight: bold; */\r\n  --gap: 24px;\r\n  --radius: 15px;\r\n  --shadow: 5px 5px rgba(0, 0, 0, 0.27);\r\n\r\n  --light-color: rgba(255, 255, 255, 0.748);\r\n  --main-color: rgb(6, 31, 70);\r\n  --light-gray: rgb(65, 65, 65);\r\n  --dark-gray: rgb(34, 34, 34);\r\n  --theme-color: rgb(34, 34, 34);\r\n  --highlight-color: rgb(106, 46, 150);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  /* background-color: rgb(29, 29, 29); */\r\n}\r\n\r\n/* Usual background, change the URL */\r\nhtml {\r\n  background: url(./images/bg.jpg) no-repeat center center fixed;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* Usual header */\r\n/* header {\r\n  padding: 15px;\r\n  padding-left: 36px;\r\n  padding-right: 36px;\r\n  background-color: #fff8ebe1;\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  box-shadow: var(--shadow);\r\n  z-index: 1;\r\n} */\r\n\r\nmain {\r\n  flex: 1;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0px;\r\n  align-items: center;\r\n  /* justify-content: center; */\r\n  background-color: rgba(0, 0, 0, 0.306);\r\n}\r\n\r\nh1 {\r\n  margin-top: 50px;\r\n}\r\n\r\n.grids {\r\n  display: flex;\r\n  gap: 100px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.player-mat {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.grid {\r\n  box-sizing: border-box;\r\n  height: 300px;\r\n  width: 300px;\r\n  background-color: rgba(255, 255, 255, 0.045);\r\n  display: grid;\r\n  border-radius: 5px;\r\n  border: none;\r\n  padding: 10px;\r\n  gap: 7px;\r\n}\r\n\r\n.box {\r\n  background-color: rgba(0, 0, 0, 0.186);\r\n  border-radius: 5px;\r\n  border: none;\r\n  opacity: 70%;\r\n  /* box-shadow: 2px 2px rgba(0, 0, 0, 0.505); */\r\n}\r\n\r\n.ship-tile {\r\n  background-color: rgb(221, 149, 48);\r\n  cursor: pointer;\r\n}\r\n\r\n.hit-tile {\r\n  background-color: rgb(221, 149, 48);\r\n}\r\n\r\n.miss-tile {\r\n  background-color: rgba(14, 6, 18, 0.913);\r\n}\r\n\r\n.clickable {\r\n  background-color: rgba(0, 0, 0, 0.186);\r\n  cursor: pointer;\r\n}\r\n\r\n.clickable:hover {\r\n  background-color: rgb(246, 200, 241);\r\n}\r\n\r\n.clickable:active {\r\n  background-color: rgb(255, 129, 240);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n/* Usual footer */\r\nfooter {\r\n  font-size: 0.6rem;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  color: white;\r\n  padding-left: var(--gap);\r\n  padding-right: var(--gap);\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/animations.css":
/*!****************************!*\
  !*** ./src/animations.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./animations.css */ "./node_modules/css-loader/dist/cjs.js!./src/animations.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_animations_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _animations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations.css */ "./src/animations.css");
/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer.js */ "./src/renderer.js");
/* harmony import */ var _initializeGame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initializeGame.js */ "./src/initializeGame.js");




 // const height = 10
// const width = 10
// const player1 = newPlayer({ name: "Ace", ai: true })
// const player2 = newPlayer({ name: "Acebot", ai: true })
// const myGame = newGame([player1, player2], [height, width])
// myGame.startGame()

(0,_initializeGame_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YmF0dGxlc2hpcC8uL3NyYy9hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXJyYXlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nZXRSYW5kb21JbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsaXplR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL25ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9uZXdHYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9uZXdQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9uZXdTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hbmltYXRpb25zLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hbmltYXRpb25zLmNzcz9kZTI2Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kYWwuY3NzPzNmZDkiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlzRXF1YWwgZnJvbSBcIi4vYXJyYXlzRXF1YWwuanNcIlxyXG5cclxuY29uc3QgYXJyYXlJbmNsdWRlcyA9IChiaWdBcnJheSwgc21hbGxBcnJheSkgPT4ge1xyXG4gIGZvciAoY29uc3QgYXJyYXkgb2YgYmlnQXJyYXkpIHtcclxuICAgIGlmIChhcnJheXNFcXVhbChhcnJheSwgc21hbGxBcnJheSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFycmF5SW5jbHVkZXNcclxuIiwiY29uc3QgYXJyYXlzRXF1YWwgPSAoYSwgYikgPT4ge1xyXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZVxyXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2VcclxuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgLy8gSWYgeW91IGRvbid0IGNhcmUgYWJvdXQgdGhlIG9yZGVyIG9mIHRoZSBlbGVtZW50cyBpbnNpZGVcclxuICAvLyB0aGUgYXJyYXksIHlvdSBzaG91bGQgc29ydCBib3RoIGFycmF5cyBoZXJlLlxyXG4gIC8vIFBsZWFzZSBub3RlIHRoYXQgY2FsbGluZyBzb3J0IG9uIGFuIGFycmF5IHdpbGwgbW9kaWZ5IHRoYXQgYXJyYXkuXHJcbiAgLy8geW91IG1pZ2h0IHdhbnQgdG8gY2xvbmUgeW91ciBhcnJheSBmaXJzdC5cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XHJcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFycmF5c0VxdWFsIiwiY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpXHJcblxyXG4gIC8vIEV4YW1wbGVcclxuICAvLyBjb25zb2xlLmxvZyhnZXRSYW5kb21JbnQoMykpXHJcbiAgLy8gZXhwZWN0ZWQgb3V0cHV0OiAwLCAxIG9yIDJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmFuZG9tSW50XHJcbiIsImltcG9ydCByZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlci5qc1wiXHJcbmltcG9ydCBuZXdHYW1lIGZyb20gXCIuL25ld0dhbWUuanNcIlxyXG5pbXBvcnQgbmV3UGxheWVyIGZyb20gXCIuL25ld1BsYXllci5qc1wiXHJcblxyXG5jb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcclxuICBjb25zdCBteVJlbmRlcmVyID0gcmVuZGVyZXIoKVxyXG5cclxuICBjb25zdCBoZWlnaHQgPSAxMFxyXG4gIGNvbnN0IHdpZHRoID0gMTBcclxuXHJcbiAgY29uc3QgcGxheWVyMSA9IG5ld1BsYXllcih7IG5hbWU6IFwiUGxheWVyIDFcIiwgYWk6IHRydWUgfSlcclxuICBjb25zdCBwbGF5ZXIyID0gbmV3UGxheWVyKHsgbmFtZTogXCJQbGF5ZXIgMlwiLCBhaTogdHJ1ZSB9KVxyXG5cclxuICBjb25zdCBteUdhbWUgPSBuZXdHYW1lKFtwbGF5ZXIxLCBwbGF5ZXIyXSwgW2hlaWdodCwgd2lkdGhdKVxyXG5cclxuICBteVJlbmRlcmVyLnNob3dNb2RhbChcIm1vZGFsM1wiKVxyXG5cclxuICBteVJlbmRlcmVyLnBsYXlCdXR0b25MaXN0ZW5lcihwbGF5ZXIxLCBwbGF5ZXIyLCBteUdhbWUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVHYW1lXHJcbiIsImltcG9ydCBuZXdHYW1lYm9hcmQgZnJvbSBcIi4vbmV3R2FtZWJvYXJkLmpzXCJcclxuaW1wb3J0IG5ld1NoaXAgZnJvbSBcIi4vbmV3U2hpcC5qc1wiXHJcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSBcIi4vZ2V0UmFuZG9tSW50LmpzXCJcclxuaW1wb3J0IHJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyLmpzXCJcclxuaW1wb3J0IG5ld1BsYXllciBmcm9tIFwiLi9uZXdQbGF5ZXIuanNcIlxyXG5cclxuLy8gUGF0aCBnb2VzIGxpa2UgdGhpczpcclxuLy8gc3RhcnRHYW1lIC0+IHBsYXllcjFQbGFjZVNoaXBzIC0+IHBsYWNlU2hpcHNBSSBvciBwbGFjZVNoaXBzUGxheWVyXHJcbi8vIHBsYXllcjJQbGFjZVNoaXBzIC0+IHBsYWNlU2hpcHNBSSBvciBwbGFjZVNoaXBzUGxheWVyXHJcbi8vIC0+IHN0YXJ0R2FtZUxvb3AgLT4gcGxheWVyVHVybkxvb3BcclxuLy8gLT4gZ2FtZUVuZHNcclxuXHJcbi8vIE5vdGU6IG15UmVuZGVyZXIuZHJhdyByZW1vdmVzIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuY29uc3QgbmV3R2FtZSA9IChbcGxheWVyMSwgcGxheWVyMl0sIFtoZWlnaHQsIHdpZHRoXSkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkMSA9IG5ld0dhbWVib2FyZCh7XHJcbiAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGlkOiBcImdyaWQxXCIsXHJcbiAgICBwbGF5ZXI6IHBsYXllcjEsXHJcbiAgfSlcclxuICBjb25zdCBib2FyZDIgPSBuZXdHYW1lYm9hcmQoe1xyXG4gICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICB3aWR0aDogd2lkdGgsXHJcbiAgICBpZDogXCJncmlkMlwiLFxyXG4gICAgcGxheWVyOiBwbGF5ZXIyLFxyXG4gIH0pXHJcbiAgY29uc3QgbXlSZW5kZXJlciA9IHJlbmRlcmVyKClcclxuICBsZXQgd2lubmVyID0gbmV3UGxheWVyKHsgbmFtZTogXCJOT0JPRFlcIiB9KVxyXG5cclxuICBjb25zdCBnYW1lRW5kcyA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBteVJlbmRlcmVyLmRyYXdCb2FyZHMoYm9hcmQxLCBib2FyZDIpXHJcbiAgICB9LCA1MDApXHJcbiAgICBjb25zb2xlLmxvZyhgJHt3aW5uZXIuZ2V0TmFtZSgpfSB3aW5zYClcclxuICAgIGNvbnNvbGUubG9nKFwiR2FtZSBPdmVyXCIpXHJcbiAgICBjb25zdCB0dXJuVGV4dCA9IGAke3dpbm5lci5nZXROYW1lKCl9IHdpbnMhYFxyXG4gICAgbXlSZW5kZXJlci5jaGFuZ2VUdXJuVGV4dCh0dXJuVGV4dClcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoYm9hcmQxLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIHdpbm5lciA9IHBsYXllcjJcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmIChib2FyZDIuYXJlQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgd2lubmVyID0gcGxheWVyMVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgQUlDaG9vc2VDb29yZCA9IChnYW1lQm9hcmQpID0+IHtcclxuICAgIGNvbnN0IGhlaWdodCA9IGdhbWVCb2FyZC5nZXRIZWlnaHQoKVxyXG4gICAgY29uc3Qgd2lkdGggPSBnYW1lQm9hcmQuZ2V0V2lkdGgoKVxyXG4gICAgY29uc3QgYm9hcmRBcnJheSA9IGdhbWVCb2FyZC5nZXRCb2FyZEFycmF5KClcclxuICAgIGNvbnN0IHVua25vd25UaWxlID0gZ2FtZUJvYXJkLmdldFVua25vd25UaWxlKClcclxuICAgIGNvbnN0IHNoaXBUaWxlID0gZ2FtZUJvYXJkLmdldFNoaXBUaWxlKClcclxuXHJcbiAgICBsZXQgcm93QWkgPSBnZXRSYW5kb21JbnQod2lkdGgpXHJcbiAgICBsZXQgY29sdW1uQWkgPSBnZXRSYW5kb21JbnQoaGVpZ2h0KVxyXG5cclxuICAgIGxldCB3aGlsZUNvdW50ZXIgPSAwXHJcbiAgICB3aGlsZSAoXHJcbiAgICAgIGJvYXJkQXJyYXlbcm93QWldW2NvbHVtbkFpXSAhPSB1bmtub3duVGlsZSAmJlxyXG4gICAgICBib2FyZEFycmF5W3Jvd0FpXVtjb2x1bW5BaV0gIT0gc2hpcFRpbGVcclxuICAgICkge1xyXG4gICAgICByb3dBaSA9IGdldFJhbmRvbUludCh3aWR0aClcclxuICAgICAgY29sdW1uQWkgPSBnZXRSYW5kb21JbnQoaGVpZ2h0KVxyXG4gICAgICB3aGlsZUNvdW50ZXIrK1xyXG4gICAgICBpZiAod2hpbGVDb3VudGVyID49IGhlaWdodCAqIHdpZHRoKSB7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbcm93QWksIGNvbHVtbkFpXVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheWVyVHVybkxvb3AgPSAocGxheWVyLCBib2FyZCkgPT4ge1xyXG4gICAgY29uc3QgYm9hcmRBdHRhY2tlZCA9IChlKSA9PiB7XHJcbiAgICAgIGxldCByb3dcclxuICAgICAgbGV0IGNvbHVtblxyXG4gICAgICBpZiAoIXBsYXllci5pc0FJKCkpIHtcclxuICAgICAgICByb3cgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5yb3cpXHJcbiAgICAgICAgY29sdW1uID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIDtbcm93LCBjb2x1bW5dID0gQUlDaG9vc2VDb29yZChib2FyZClcclxuICAgICAgfVxyXG4gICAgICBwbGF5ZXIudGFrZVR1cm4oYm9hcmQsIFtyb3csIGNvbHVtbl0pXHJcblxyXG4gICAgICBteVJlbmRlcmVyLmRyYXdCb2FyZChib2FyZCwgYm9hcmQuZ2V0SWQoKSlcclxuICAgICAgbXlSZW5kZXJlci5hbmltYXRlVGlsZShcImhpdC10aWxlXCIsIGJvYXJkLCBbcm93LCBjb2x1bW5dKVxyXG4gICAgICBib2FyZC5jb25zb2xlR2FtZWJvYXJkKClcclxuICAgICAgY29uc29sZS5sb2coYm9hcmQuZ2V0SGl0QXJyYXlzKCkpXHJcbiAgICAgIGNvbnNvbGUubG9nKGJvYXJkLmdldE9yaWVudGF0aW9ucygpKVxyXG5cclxuICAgICAgaWYgKGlzR2FtZU92ZXIoKSkge1xyXG4gICAgICAgIGdhbWVFbmRzKClcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbmV4dEJvYXJkXHJcbiAgICAgIGxldCBuZXh0UGxheWVyXHJcblxyXG4gICAgICBpZiAoYm9hcmQuZ2V0SWQoKSA9PSBcImdyaWQxXCIpIHtcclxuICAgICAgICBuZXh0Qm9hcmQgPSBib2FyZDJcclxuICAgICAgICBuZXh0UGxheWVyID0gcGxheWVyMVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5leHRCb2FyZCA9IGJvYXJkMVxyXG4gICAgICAgIG5leHRQbGF5ZXIgPSBwbGF5ZXIyXHJcbiAgICAgIH1cclxuICAgICAgcGxheWVyVHVybkxvb3AobmV4dFBsYXllciwgbmV4dEJvYXJkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHR1cm5UZXh0ID0gYFlvdXIgdHVybiwgJHtwbGF5ZXIuZ2V0TmFtZSgpfWBcclxuICAgIG15UmVuZGVyZXIuY2hhbmdlVHVyblRleHQodHVyblRleHQpXHJcblxyXG4gICAgaWYgKHBsYXllci5pc0FJKCkpIHtcclxuICAgICAgYm9hcmRBdHRhY2tlZCgpXHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBteVJlbmRlcmVyLnRpbGVMaXN0ZW5lcnMoYm9hcmRBdHRhY2tlZCwgYm9hcmQuZ2V0SWQoKSlcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0R2FtZUxvb3AgPSAoKSA9PiB7XHJcbiAgICBpZiAocGxheWVyMS5pc1JlYWR5KCkgJiYgcGxheWVyMi5pc1JlYWR5KCkpIHtcclxuICAgICAgcGxheWVyVHVybkxvb3AocGxheWVyMSwgYm9hcmQyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwc0FJID0gKHNoaXBzLCBnYW1lQm9hcmQpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICBpZiAoZ2V0UmFuZG9tSW50KDIpID09IDEpIHtcclxuICAgICAgICBzaGlwLmNoYW5nZU9yaWVudGF0aW9uKFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmFuZFJvdyA9IGdldFJhbmRvbUludCh3aWR0aClcclxuICAgICAgbGV0IHJhbmRDb2x1bW4gPSBnZXRSYW5kb21JbnQoaGVpZ2h0KVxyXG5cclxuICAgICAgbGV0IHdoaWxlQ291bnRlciA9IDBcclxuICAgICAgd2hpbGUgKFxyXG4gICAgICAgIGdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCwgW3JhbmRSb3csIHJhbmRDb2x1bW5dKSA9PSBcIkNhbm5vdCBwbGFjZSBzaGlwXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmFuZFJvdyA9IGdldFJhbmRvbUludCh3aWR0aClcclxuICAgICAgICByYW5kQ29sdW1uID0gZ2V0UmFuZG9tSW50KGhlaWdodClcclxuICAgICAgICB3aGlsZUNvdW50ZXIrK1xyXG4gICAgICAgIGlmICh3aGlsZUNvdW50ZXIgPj0gaGVpZ2h0ICogd2lkdGgpIHtcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbXlSZW5kZXJlci5kcmF3Qm9hcmQoZ2FtZUJvYXJkLCBnYW1lQm9hcmQuZ2V0SWQoKSlcclxuXHJcbiAgICBnYW1lQm9hcmQuZ2V0UGxheWVyKCkuc2V0VG9SZWFkeSgpXHJcbiAgICBpZiAoIXBsYXllcjIuaXNSZWFkeSgpKSB7XHJcbiAgICAgIHBsYXllcjJQbGFjZVNoaXBzKClcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZUxvb3AoKVxyXG4gICAgcmV0dXJuIGdhbWVCb2FyZC5nZXRCb2FyZEFycmF5KClcclxuICB9XHJcblxyXG4gIGxldCBwbGFjZVNoaXBDb3VudGVyID0gMFxyXG4gIGNvbnN0IHBsYWNlU2hpcHNMb29wID0gKHNoaXBzLCBnYW1lQm9hcmQsIG1vZGFsSWQpID0+IHtcclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSAoZSkgPT4ge1xyXG4gICAgICBsZXQgcm93ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQucm93KVxyXG4gICAgICBsZXQgY29sdW1uID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uKVxyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcHNbcGxhY2VTaGlwQ291bnRlcl0sIFtyb3csIGNvbHVtbl0pICE9XHJcbiAgICAgICAgXCJDYW5ub3QgcGxhY2Ugc2hpcFwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHBsYWNlU2hpcENvdW50ZXIrK1xyXG5cclxuICAgICAgICBpZiAocGxhY2VTaGlwQ291bnRlciA9PSBzaGlwcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHBsYWNlU2hpcENvdW50ZXIgPSAwXHJcblxyXG4gICAgICAgICAgbXlSZW5kZXJlci5oaWRlTW9kYWwobW9kYWxJZClcclxuICAgICAgICAgIG15UmVuZGVyZXIuZHJhd0JvYXJkKGdhbWVCb2FyZCwgZ2FtZUJvYXJkLmdldElkKCkpXHJcblxyXG4gICAgICAgICAgZ2FtZUJvYXJkLmdldFBsYXllcigpLnNldFRvUmVhZHkoKVxyXG4gICAgICAgICAgaWYgKCFwbGF5ZXIyLmlzUmVhZHkoKSkge1xyXG4gICAgICAgICAgICBwbGF5ZXIyUGxhY2VTaGlwcygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGFydEdhbWVMb29wKClcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYWNlU2hpcHNMb29wKHNoaXBzLCBnYW1lQm9hcmQsIG1vZGFsSWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBteVJlbmRlcmVyLmRyYXdQbGFjaW5nQm9hcmQobW9kYWxJZCwgZ2FtZUJvYXJkLCBcInBsYWNlXCIgKyBnYW1lQm9hcmQuZ2V0SWQoKSlcclxuICAgIG15UmVuZGVyZXIudGlsZUhvdmVyTGlzdGVuZXJzKFxyXG4gICAgICBzaGlwc1twbGFjZVNoaXBDb3VudGVyXSxcclxuICAgICAgXCJwbGFjZVwiICsgZ2FtZUJvYXJkLmdldElkKClcclxuICAgIClcclxuXHJcbiAgICBteVJlbmRlcmVyLnNoaXBCdXR0b25MaXN0ZW5lcihzaGlwc1twbGFjZVNoaXBDb3VudGVyXSwgbW9kYWxJZClcclxuICAgIG15UmVuZGVyZXIucmFuZEJ1dHRvbkxpc3RlbmVyKG1vZGFsSWQsICgpID0+IHtcclxuICAgICAgZ2FtZUJvYXJkLmVtcHR5U2hpcHMoKVxyXG4gICAgICBwbGFjZVNoaXBzQUkoc2hpcHMsIGdhbWVCb2FyZClcclxuICAgICAgbXlSZW5kZXJlci5oaWRlTW9kYWwobW9kYWxJZClcclxuICAgIH0pXHJcbiAgICBteVJlbmRlcmVyLnRpbGVMaXN0ZW5lcnMoc2hpcFBsYWNlZCwgXCJwbGFjZVwiICsgZ2FtZUJvYXJkLmdldElkKCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZVNoaXBzUGxheWVyID0gKHNoaXBzLCBnYW1lQm9hcmQsIG1vZGFsSWQpID0+IHtcclxuICAgIG15UmVuZGVyZXIuc2hvd01vZGFsKG1vZGFsSWQpXHJcbiAgICBwbGFjZVNoaXBzTG9vcChzaGlwcywgZ2FtZUJvYXJkLCBtb2RhbElkKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29uc29sZUJvYXJkcyA9ICgpID0+IHtcclxuICAgIGJvYXJkMS5jb25zb2xlR2FtZWJvYXJkKClcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIlxyXG4gICAgKVxyXG4gICAgYm9hcmQyLmNvbnNvbGVHYW1lYm9hcmQoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheWVyMVBsYWNlU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwMSA9IG5ld1NoaXAoeyBuYW1lOiBcIkNhcnJpZXJcIiwgbGVuZ3RoOiA1IH0pXHJcbiAgICBjb25zdCBzaGlwMiA9IG5ld1NoaXAoeyBuYW1lOiBcIkJhdHRsZXNoaXBcIiwgbGVuZ3RoOiA0IH0pXHJcbiAgICBjb25zdCBzaGlwMyA9IG5ld1NoaXAoeyBuYW1lOiBcIkRlc3Ryb3llclwiLCBsZW5ndGg6IDMgfSlcclxuICAgIGNvbnN0IHNoaXA0ID0gbmV3U2hpcCh7IG5hbWU6IFwiU3VibWFyaW5lXCIsIGxlbmd0aDogMyB9KVxyXG4gICAgY29uc3Qgc2hpcDUgPSBuZXdTaGlwKHsgbmFtZTogXCJQYXRyb2wgQm9hdFwiLCBsZW5ndGg6IDIgfSlcclxuICAgIGNvbnN0IHNoaXBzMSA9IFtzaGlwMSwgc2hpcDIsIHNoaXAzLCBzaGlwNCwgc2hpcDVdXHJcbiAgICBjb25zdCBtb2RhbElkMSA9IFwibW9kYWwxXCJcclxuXHJcbiAgICBpZiAocGxheWVyMS5pc0FJKCkpIHtcclxuICAgICAgcGxhY2VTaGlwc0FJKHNoaXBzMSwgYm9hcmQxKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGxhY2VTaGlwc1BsYXllcihzaGlwczEsIGJvYXJkMSwgbW9kYWxJZDEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGF5ZXIyUGxhY2VTaGlwcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNoaXBweTEgPSBuZXdTaGlwKHsgbmFtZTogXCJDYXJyaWVyMlwiLCBsZW5ndGg6IDUgfSlcclxuICAgIGNvbnN0IHNoaXBweTIgPSBuZXdTaGlwKHsgbmFtZTogXCJCYXR0bGVzaGlwMlwiLCBsZW5ndGg6IDQgfSlcclxuICAgIGNvbnN0IHNoaXBweTMgPSBuZXdTaGlwKHsgbmFtZTogXCJEZXN0cm95ZXIyXCIsIGxlbmd0aDogMyB9KVxyXG4gICAgY29uc3Qgc2hpcHB5NCA9IG5ld1NoaXAoeyBuYW1lOiBcIlN1Ym1hcmluZTJcIiwgbGVuZ3RoOiAzIH0pXHJcbiAgICBjb25zdCBzaGlwcHk1ID0gbmV3U2hpcCh7IG5hbWU6IFwiUGF0cm9sIEJvYXQyXCIsIGxlbmd0aDogMiB9KVxyXG4gICAgY29uc3Qgc2hpcHMyID0gW3NoaXBweTEsIHNoaXBweTIsIHNoaXBweTMsIHNoaXBweTQsIHNoaXBweTVdXHJcbiAgICBjb25zdCBtb2RhbElkMiA9IFwibW9kYWwyXCJcclxuXHJcbiAgICBpZiAocGxheWVyMi5pc0FJKCkpIHtcclxuICAgICAgcGxhY2VTaGlwc0FJKHNoaXBzMiwgYm9hcmQyKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGxhY2VTaGlwc1BsYXllcihzaGlwczIsIGJvYXJkMiwgbW9kYWxJZDIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgICBteVJlbmRlcmVyLnNldFBsYXllck5hbWVzKHBsYXllcjEsIHBsYXllcjIpXHJcbiAgICBteVJlbmRlcmVyLmRyYXdCb2FyZHMoYm9hcmQxLCBib2FyZDIpXHJcblxyXG4gICAgcGxheWVyMVBsYWNlU2hpcHMoKVxyXG5cclxuICAgIGNvbnNvbGVCb2FyZHMoKVxyXG4gICAgcmV0dXJuIFtib2FyZDEsIGJvYXJkMl1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IHN0YXJ0R2FtZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld0dhbWVcclxuIiwiaW1wb3J0IGFycmF5SW5jbHVkZXMgZnJvbSBcIi4vYXJyYXlJbmNsdWRlcy5qc1wiXHJcblxyXG5jb25zdCBuZXdHYW1lYm9hcmQgPSAoe1xyXG4gIGhlaWdodCA9IDEwLFxyXG4gIHdpZHRoID0gMTAsXHJcbiAgdW5rbm93blRpbGUgPSBcIm9cIixcclxuICBzaGlwVGlsZSA9IFwic1wiLFxyXG4gIGhpdFRpbGUgPSBcInhcIixcclxuICBtaXNzVGlsZSA9IFwiflwiLFxyXG4gIGlkID0gbnVsbCxcclxuICBwbGF5ZXIgPSBudWxsLFxyXG59KSA9PiB7XHJcbiAgbGV0IGJvYXJkQXJyYXkgPSBbXVxyXG4gIGxldCBlbXB0eUJvYXJkQXJyYXkgPSBbXVxyXG4gIGxldCBzaGlwcyA9IFtdXHJcblxyXG4gIC8vIEkgY2FuJ3QgdXNlIHRoZSBjb2RlIGJlbG93IGJlY2F1c2UgcGxhY2VTaGlwIHdpbGwgbm90IHdvcmsgd2l0aCBpdFxyXG4gIC8vIGNvbnN0IGJvYXJkUm93ID0gQXJyYXkod2lkdGgpLmZpbGwodW5rbm93blRpbGUpXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xyXG4gICAgYm9hcmRBcnJheS5wdXNoKEFycmF5KHdpZHRoKS5maWxsKHVua25vd25UaWxlKSlcclxuICAgIGVtcHR5Qm9hcmRBcnJheS5wdXNoKEFycmF5KHdpZHRoKS5maWxsKHVua25vd25UaWxlKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGVtcHR5U2hpcHMgPSAoKSA9PiB7XHJcbiAgICBzaGlwcyA9IFtdXHJcbiAgICBib2FyZEFycmF5ID0gZW1wdHlCb2FyZEFycmF5XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiBwbGF5ZXJcclxuICBjb25zdCBnZXRTaGlwc1N1bmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcHMubWFwKChzaGlwKSA9PiB7XHJcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2hpcHNDb29yZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5tYXAoKHNoaXApID0+IHtcclxuICAgICAgcmV0dXJuIHNoaXAuZ2V0Q29vcmQoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFNoaXBzQ29vcmRzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNoaXBzLm1hcCgoc2hpcCkgPT4ge1xyXG4gICAgICByZXR1cm4gc2hpcC5nZXRDb29yZHMoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEhpdEFycmF5cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5tYXAoKHNoaXApID0+IHtcclxuICAgICAgcmV0dXJuIHNoaXAuZ2V0SGl0QXJyYXkoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE9yaWVudGF0aW9ucyA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwcy5tYXAoKHNoaXApID0+IHtcclxuICAgICAgcmV0dXJuIHNoaXAuZ2V0T3JpZW50YXRpb24oKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrTmVpZ2hib3JzVW5rbm93blRpbGUgPSAoYm9hcmRBcnJheSwgW3JvdywgY29sdW1uXSwgdW5rbm93blRpbGUpID0+IHtcclxuICAgIGNvbnN0IHVwID0gW3JvdyAtIDEsIGNvbHVtbl1cclxuICAgIGNvbnN0IGRvd24gPSBbcm93ICsgMSwgY29sdW1uXVxyXG4gICAgY29uc3QgbGVmdCA9IFtyb3csIGNvbHVtbiAtIDFdXHJcbiAgICBjb25zdCByaWdodCA9IFtyb3csIGNvbHVtbiArIDFdXHJcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW3VwLCBkb3duLCBsZWZ0LCByaWdodF1cclxuICAgIGZvciAoY29uc3QgW3JvdywgY29sdW1uXSBvZiBkaXJlY3Rpb25zKSB7XHJcbiAgICAgIGlmIChib2FyZEFycmF5W3Jvd10gJiYgYm9hcmRBcnJheVtyb3ddW2NvbHVtbl0pIHtcclxuICAgICAgICBpZiAoYm9hcmRBcnJheVtyb3ddW2NvbHVtbl0gIT0gdW5rbm93blRpbGUpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWRcclxuICBjb25zdCBjaGFuZ2VJZCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWQgPSB2YWx1ZVxyXG4gIH1cclxuICBjb25zdCBnZXRIZWlnaHQgPSAoKSA9PiBoZWlnaHRcclxuICBjb25zdCBnZXRXaWR0aCA9ICgpID0+IHdpZHRoXHJcbiAgY29uc3QgZ2V0Qm9hcmRBcnJheSA9ICgpID0+IGJvYXJkQXJyYXlcclxuICBjb25zdCBnZXRVbmtub3duVGlsZSA9ICgpID0+IHVua25vd25UaWxlXHJcbiAgY29uc3QgZ2V0U2hpcFRpbGUgPSAoKSA9PiBzaGlwVGlsZVxyXG4gIGNvbnN0IGdldEhpdFRpbGUgPSAoKSA9PiBoaXRUaWxlXHJcbiAgY29uc3QgZ2V0TWlzc1RpbGUgPSAoKSA9PiBtaXNzVGlsZVxyXG4gIGNvbnN0IGdldEhpdEFycmF5ID0gKCkgPT4gaGl0QXJyYXlcclxuXHJcbiAgY29uc3QgY29uc29sZUdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGZvciAoY29uc3Qgcm93IG9mIGJvYXJkQXJyYXkpIHtcclxuICAgICAgY29uc29sZS5sb2cocm93KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvYXJkQXJyYXlcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBbcm93LCBjb2x1bW5dKSA9PiB7XHJcbiAgICBpZiAoIXNoaXApIHtcclxuICAgICAgcmV0dXJuIFwiQ2Fubm90IHBsYWNlIHNoaXBcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHJvdykgfHwgIU51bWJlci5pc0ludGVnZXIoY29sdW1uKSkge1xyXG4gICAgICByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcFwiXHJcbiAgICB9XHJcbiAgICBpZiAoIWJvYXJkQXJyYXlbcm93XSB8fCAhYm9hcmRBcnJheVtyb3ddW2NvbHVtbl0pIHtcclxuICAgICAgcmV0dXJuIFwiQ2Fubm90IHBsYWNlIHNoaXBcIlxyXG4gICAgfVxyXG4gICAgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgaWYgKGhlaWdodCA8IHNoaXAuZ2V0TGVuZ3RoKCkgfHwgaGVpZ2h0IC0gcm93IDwgc2hpcC5nZXRMZW5ndGgoKSkge1xyXG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBwbGFjZSBzaGlwXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGJvYXJkQXJyYXlbcm93ICsgaV1bY29sdW1uXSAhPSB1bmtub3duVGlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcFwiXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAhY2hlY2tOZWlnaGJvcnNVbmtub3duVGlsZShib2FyZEFycmF5LCBbcm93ICsgaSwgY29sdW1uXSwgdW5rbm93blRpbGUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fubm90IHBsYWNlIHNoaXBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgYm9hcmRBcnJheVtyb3cgKyBpXVtjb2x1bW5dID0gc2hpcFRpbGVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcC5jaGFuZ2VDb29yZChbcm93LCBjb2x1bW5dKVxyXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcClcclxuICAgICAgICByZXR1cm4gYm9hcmRBcnJheVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSA9PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICBpZiAod2lkdGggPCBzaGlwLmdldExlbmd0aCgpIHx8IHdpZHRoIC0gY29sdW1uIDwgc2hpcC5nZXRMZW5ndGgoKSkge1xyXG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBwbGFjZSBzaGlwXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGJvYXJkQXJyYXlbcm93XVtjb2x1bW4gKyBpXSAhPSB1bmtub3duVGlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcFwiXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAhY2hlY2tOZWlnaGJvcnNVbmtub3duVGlsZShib2FyZEFycmF5LCBbcm93LCBjb2x1bW4gKyBpXSwgdW5rbm93blRpbGUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fubm90IHBsYWNlIHNoaXBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgYm9hcmRBcnJheVtyb3ddW2NvbHVtbiArIGldID0gc2hpcFRpbGVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hpcC5jaGFuZ2VDb29yZChbcm93LCBjb2x1bW5dKVxyXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcClcclxuICAgICAgICByZXR1cm4gYm9hcmRBcnJheVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJZb3UncmUgbm90IHN1cHBvc2VkIHRvIGJlIGhlcmVcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChbcm93LCBjb2x1bW5dKSA9PiB7XHJcbiAgICBpZiAoYm9hcmRBcnJheVtyb3ddW2NvbHVtbl0gPT0gc2hpcFRpbGUpIHtcclxuICAgICAgYm9hcmRBcnJheVtyb3ddW2NvbHVtbl0gPSBoaXRUaWxlXHJcbiAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICAgIGNvbnN0IGhpdENvb3JkID0gW3JvdywgY29sdW1uXVxyXG4gICAgICAgIGNvbnN0IHNoaXBDb29yZHMgPSBzaGlwLmdldENvb3JkcygpXHJcbiAgICAgICAgaWYgKGFycmF5SW5jbHVkZXMoc2hpcENvb3JkcywgaGl0Q29vcmQpKSB7XHJcbiAgICAgICAgICBpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gcm93IC0gc2hpcC5nZXRDb29yZCgpWzBdXHJcbiAgICAgICAgICAgIHNoaXAuaGl0KG51bSlcclxuICAgICAgICAgICAgc2hpcC5pc1N1bmsoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG51bSA9IGNvbHVtbiAtIHNoaXAuZ2V0Q29vcmQoKVsxXVxyXG4gICAgICAgICAgICBzaGlwLmhpdChudW0pXHJcbiAgICAgICAgICAgIHNoaXAuaXNTdW5rKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJvYXJkQXJyYXlcclxuICAgIH0gZWxzZSBpZiAoYm9hcmRBcnJheVtyb3ddW2NvbHVtbl0gPT0gdW5rbm93blRpbGUpIHtcclxuICAgICAgYm9hcmRBcnJheVtyb3ddW2NvbHVtbl0gPSBtaXNzVGlsZVxyXG4gICAgICByZXR1cm4gYm9hcmRBcnJheVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiQXJlYSBhbHJlYWR5IGhpdFwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XHJcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09IDApIHJldHVybiBmYWxzZVxyXG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XHJcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SWQsXHJcbiAgICBjaGFuZ2VJZCxcclxuICAgIGdldEhlaWdodCxcclxuICAgIGdldFdpZHRoLFxyXG4gICAgZ2V0Qm9hcmRBcnJheSxcclxuICAgIGdldFVua25vd25UaWxlLFxyXG4gICAgZ2V0SGl0VGlsZSxcclxuICAgIGdldE1pc3NUaWxlLFxyXG4gICAgZ2V0U2hpcFRpbGUsXHJcbiAgICBjb25zb2xlR2FtZWJvYXJkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGFyZUFsbFNoaXBzU3VuayxcclxuICAgIGdldFNoaXBzU3VuayxcclxuICAgIGdldFNoaXBzQ29vcmQsXHJcbiAgICBnZXRTaGlwc0Nvb3JkcyxcclxuICAgIGdldEhpdEFycmF5LFxyXG4gICAgZ2V0SGl0QXJyYXlzLFxyXG4gICAgZ2V0UGxheWVyLFxyXG4gICAgZ2V0T3JpZW50YXRpb25zLFxyXG4gICAgZW1wdHlTaGlwcyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld0dhbWVib2FyZFxyXG4iLCJpbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gXCIuL2dldFJhbmRvbUludC5qc1wiXHJcbi8vIGltcG9ydCByZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlci5qc1wiXHJcblxyXG5jb25zdCBuZXdQbGF5ZXIgPSAoeyBuYW1lID0gbnVsbCwgYWkgPSBmYWxzZSwgcmVhZHkgPSBmYWxzZSB9KSA9PiB7XHJcbiAgLy8gY29uc3QgbXlSZW5kZXJlciA9IHJlbmRlcmVyKClcclxuICBpZiAoIW5hbWUgJiYgYWkpIHtcclxuICAgIG5hbWUgPSBcIkhhbCA5MDAwXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzQUkgPSAoKSA9PiBhaVxyXG4gIGNvbnN0IGNoYW5nZUFJID0gKHZhbHVlKSA9PiB7XHJcbiAgICBhaSA9IHZhbHVlXHJcbiAgfVxyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lXHJcbiAgY29uc3QgY2hhbmdlTmFtZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgbmFtZSA9IHZhbHVlXHJcbiAgfVxyXG4gIGNvbnN0IGlzUmVhZHkgPSAoKSA9PiByZWFkeVxyXG4gIGNvbnN0IHNldFRvUmVhZHkgPSAoKSA9PiB7XHJcbiAgICByZWFkeSA9IHRydWVcclxuICB9XHJcblxyXG4gIGNvbnN0IHRha2VUdXJuID0gKGdhbWVCb2FyZCwgW3JvdywgY29sdW1uXSkgPT4ge1xyXG4gICAgLy8gaWYgKGFpKSB7XHJcbiAgICAvLyAgIGNvbnN0IGhlaWdodCA9IGdhbWVCb2FyZC5nZXRIZWlnaHQoKVxyXG4gICAgLy8gICBjb25zdCB3aWR0aCA9IGdhbWVCb2FyZC5nZXRXaWR0aCgpXHJcbiAgICAvLyAgIGNvbnN0IGJvYXJkQXJyYXkgPSBnYW1lQm9hcmQuZ2V0Qm9hcmRBcnJheSgpXHJcbiAgICAvLyAgIGNvbnN0IHVua25vd25UaWxlID0gZ2FtZUJvYXJkLmdldFVua25vd25UaWxlKClcclxuICAgIC8vICAgY29uc3Qgc2hpcFRpbGUgPSBnYW1lQm9hcmQuZ2V0U2hpcFRpbGUoKVxyXG5cclxuICAgIC8vICAgbGV0IHJvd0FpID0gZ2V0UmFuZG9tSW50KHdpZHRoKVxyXG4gICAgLy8gICBsZXQgY29sdW1uQWkgPSBnZXRSYW5kb21JbnQoaGVpZ2h0KVxyXG5cclxuICAgIC8vICAgbGV0IHdoaWxlQ291bnRlciA9IDBcclxuICAgIC8vICAgd2hpbGUgKFxyXG4gICAgLy8gICAgIGJvYXJkQXJyYXlbcm93QWldW2NvbHVtbkFpXSAhPSB1bmtub3duVGlsZSAmJlxyXG4gICAgLy8gICAgIGJvYXJkQXJyYXlbcm93QWldW2NvbHVtbkFpXSAhPSBzaGlwVGlsZVxyXG4gICAgLy8gICApIHtcclxuICAgIC8vICAgICByb3dBaSA9IGdldFJhbmRvbUludCh3aWR0aClcclxuICAgIC8vICAgICBjb2x1bW5BaSA9IGdldFJhbmRvbUludChoZWlnaHQpXHJcbiAgICAvLyAgICAgd2hpbGVDb3VudGVyKytcclxuICAgIC8vICAgICBpZiAod2hpbGVDb3VudGVyID49IGhlaWdodCAqIHdpZHRoKSB7XHJcbiAgICAvLyAgICAgICBicmVha1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhbcm93QWksIGNvbHVtbkFpXSlcclxuXHJcbiAgICAgIC8vIG15UmVuZGVyZXIuYW5pbWF0ZVRpbGUoXCJoaXQtdGlsZVwiLCBnYW1lQm9hcmQsIFtyb3dBaSwgY29sdW1uQWldKVxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soW3JvdywgY29sdW1uXSlcclxuXHJcbiAgICAgIC8vIG15UmVuZGVyZXIuYW5pbWF0ZVRpbGUoXCJoaXQtdGlsZVwiLCBnYW1lQm9hcmQsIFtyb3csIGNvbHVtbl0pXHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB0YWtlVHVybiwgZ2V0TmFtZSwgaXNBSSwgaXNSZWFkeSwgc2V0VG9SZWFkeSwgY2hhbmdlTmFtZSwgY2hhbmdlQUkgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdQbGF5ZXJcclxuIiwiY29uc3QgbmV3U2hpcCA9ICh7XHJcbiAgbmFtZSA9IG51bGwsXHJcbiAgbGVuZ3RoID0gbnVsbCxcclxuICBoaXRBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSksXHJcbiAgc3VuayA9IGZhbHNlLFxyXG4gIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiLFxyXG4gIGNvb3JkID0gbnVsbCxcclxufSkgPT4ge1xyXG4gIC8vIGlmICghaGl0QXJyYXkpIHtcclxuICAvLyAgIGhpdEFycmF5ID0gQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKVxyXG4gIC8vICAgLy8gZm9yIGV4YW1wbGU6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV1cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aFxyXG4gIGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4gb3JpZW50YXRpb25cclxuICBjb25zdCBnZXRDb29yZCA9ICgpID0+IGNvb3JkXHJcbiAgY29uc3QgZ2V0SGl0QXJyYXkgPSAoKSA9PiBoaXRBcnJheVxyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lXHJcbiAgY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSAodmFsdWUpID0+IHtcclxuICAgIG9yaWVudGF0aW9uID0gdmFsdWVcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9yaWVudGF0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKG9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xyXG4gICAgICBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcmllbnRhdGlvbiA9IFwidmVydGljYWxcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlTmFtZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgbmFtZSA9IHZhbHVlXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZUNvb3JkID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb29yZCA9IHZhbHVlXHJcbiAgfVxyXG4gIGNvbnN0IGdldENvb3JkcyA9ICgpID0+IHtcclxuICAgIGlmICghY29vcmQpIHJldHVybiBudWxsXHJcbiAgICBsZXQgY29vcmRzID0gW11cclxuICAgIGxldCBbcm93LCBjb2x1bW5dID0gY29vcmRcclxuICAgIGlmIChvcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvb3Jkcy5wdXNoKFtyb3cgKyBpLCBjb2x1bW5dKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29vcmRzLnB1c2goW3JvdywgY29sdW1uICsgaV0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb29yZHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKG51bSkgJiYgbnVtID49IDAgJiYgbnVtIDwgbGVuZ3RoKSB7XHJcbiAgICAgIGhpdEFycmF5W251bV0gPSB0cnVlXHJcbiAgICAgIHJldHVybiBoaXRBcnJheVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgIGZvciAoY29uc3QgcGFydCBvZiBoaXRBcnJheSkge1xyXG4gICAgICBpZiAocGFydCA9PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzdW5rID0gdHJ1ZVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRMZW5ndGgsXHJcbiAgICBnZXRPcmllbnRhdGlvbixcclxuICAgIGdldENvb3JkLFxyXG4gICAgZ2V0Q29vcmRzLFxyXG4gICAgZ2V0TmFtZSxcclxuICAgIGNoYW5nZU5hbWUsXHJcbiAgICBjaGFuZ2VPcmllbnRhdGlvbixcclxuICAgIGdldEhpdEFycmF5LFxyXG4gICAgaGl0LFxyXG4gICAgaXNTdW5rLFxyXG4gICAgY2hhbmdlQ29vcmQsXHJcbiAgICB0b2dnbGVPcmllbnRhdGlvbixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld1NoaXBcclxuIiwiY29uc3QgcmVuZGVyZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xlYXJDaGlsZHJlbiA9IChwYXJlbnQpID0+IHtcclxuICAgIHBhcmVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgfVxyXG5cclxuICBjb25zdCBkcmF3Qm9hcmQgPSAoYm9hcmQsIGdyaWRJZCkgPT4ge1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gYm9hcmQuZ2V0SGVpZ2h0KClcclxuICAgIGNvbnN0IHdpZHRoID0gYm9hcmQuZ2V0V2lkdGgoKVxyXG5cclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncmlkSWQpXHJcbiAgICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7aGVpZ2h0fSwxZnIpYFxyXG4gICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3dpZHRofSwxZnIpYFxyXG4gICAgY29uc3QgYm9hcmRBcnJheSA9IGJvYXJkLmdldEJvYXJkQXJyYXkoKVxyXG5cclxuICAgIGNsZWFyQ2hpbGRyZW4oZ3JpZClcclxuICAgIGxldCByb3dDb3VudCA9IDBcclxuICAgIGJvYXJkQXJyYXkuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIGxldCBjb2x1bW5Db3VudCA9IDBcclxuICAgICAgcm93LmZvckVhY2goKGxldHRlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBib3hEaXYuZGF0YXNldC5yb3cgPSByb3dDb3VudFxyXG4gICAgICAgIGJveERpdi5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbkNvdW50XHJcbiAgICAgICAgY29sdW1uQ291bnQrK1xyXG5cclxuICAgICAgICBib3hEaXYuY2xhc3NMaXN0LmFkZChcImJveFwiKVxyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYm94RGl2KVxyXG4gICAgICAgIGlmIChsZXR0ZXIgPT0gYm9hcmQuZ2V0U2hpcFRpbGUoKSkge1xyXG4gICAgICAgICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ1bmtub3duLXRpbGVcIilcclxuXHJcbiAgICAgICAgICAvLyBVbmNvbW1lbnQgdGhlc2UgdHdvIHRvIHNlZSBhbGwgc2hpcHNcclxuICAgICAgICAgIC8vIGJveERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC10aWxlXCIpXHJcbiAgICAgICAgICAvLyBib3hEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiXHJcbiAgICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT0gYm9hcmQuZ2V0SGl0VGlsZSgpKSB7XHJcbiAgICAgICAgICBib3hEaXYuY2xhc3NMaXN0LmFkZChcImhpdC10aWxlXCIpXHJcbiAgICAgICAgICAvLyBib3hEaXYuY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpXHJcbiAgICAgICAgICAvLyBib3hEaXYuY2xhc3NMaXN0LmFkZChcImVubGFyZ2VcIilcclxuICAgICAgICB9IGVsc2UgaWYgKGxldHRlciA9PSBib2FyZC5nZXRNaXNzVGlsZSgpKSB7XHJcbiAgICAgICAgICBib3hEaXYuY2xhc3NMaXN0LmFkZChcIm1pc3MtdGlsZVwiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09IGJvYXJkLmdldFVua25vd25UaWxlKCkpIHtcclxuICAgICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKFwidW5rbm93bi10aWxlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByb3dDb3VudCsrXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd1BsYWNpbmdCb2FyZCA9IChtb2RhbElkLCBib2FyZCwgZ3JpZElkKSA9PiB7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBib2FyZC5nZXRIZWlnaHQoKVxyXG4gICAgY29uc3Qgd2lkdGggPSBib2FyZC5nZXRXaWR0aCgpXHJcblxyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxJZH0gLm1vZGFsLWNvbnRlbnRgKVxyXG5cclxuICAgIGNsZWFyQ2hpbGRyZW4obW9kYWxDb250ZW50KVxyXG5cclxuICAgIGNvbnN0IHBsYWNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBwbGFjZVRleHQuY2xhc3NMaXN0LmFkZChcInBsYWNldGV4dFwiKVxyXG4gICAgcGxhY2VUZXh0LmlkID0gXCJwbGFjZXRleHRcIiArIG1vZGFsSWQuc2xpY2UoLTEpXHJcbiAgICBwbGFjZVRleHQudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciBzaGlwcywgJHtib2FyZC5nZXRQbGF5ZXIoKS5nZXROYW1lKCl9YFxyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHBsYWNlVGV4dClcclxuXHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKVxyXG4gICAgZ3JpZC5pZCA9IGdyaWRJZFxyXG4gICAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2hlaWdodH0sMWZyKWBcclxuICAgIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHt3aWR0aH0sMWZyKWBcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChncmlkKVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLW9yaWVudGF0aW9uXCIpXHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkNoYW5nZSBzaGlwIG9yaWVudGF0aW9uXCJcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG4gICAgY29uc3QgcmFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIHJhbmRCdXR0b24uY2xhc3NMaXN0LmFkZChcInJhbmRvbWl6ZVwiKVxyXG4gICAgcmFuZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmFuZG9taXplIGFuZCBTdGFydFwiXHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocmFuZEJ1dHRvbilcclxuXHJcbiAgICBjb25zdCBib2FyZEFycmF5ID0gYm9hcmQuZ2V0Qm9hcmRBcnJheSgpXHJcblxyXG4gICAgY2xlYXJDaGlsZHJlbihncmlkKVxyXG4gICAgbGV0IHJvd0NvdW50ID0gMFxyXG4gICAgYm9hcmRBcnJheS5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgbGV0IGNvbHVtbkNvdW50ID0gMFxyXG4gICAgICByb3cuZm9yRWFjaCgobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGJveERpdi5kYXRhc2V0LnJvdyA9IHJvd0NvdW50XHJcbiAgICAgICAgYm94RGl2LmRhdGFzZXQuY29sdW1uID0gY29sdW1uQ291bnRcclxuICAgICAgICBjb2x1bW5Db3VudCsrXHJcblxyXG4gICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKFwiYm94XCIpXHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChib3hEaXYpXHJcbiAgICAgICAgaWYgKGxldHRlciA9PSBib2FyZC5nZXRTaGlwVGlsZSgpKSB7XHJcbiAgICAgICAgICBib3hEaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtdGlsZVwiKVxyXG4gICAgICAgICAgYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJ1bmtub3duLXRpbGVcIilcclxuICAgICAgICAgIGJveERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMjEsIDE0OSwgNDgpXCJcclxuICAgICAgICB9IGVsc2UgaWYgKGxldHRlciA9PSBib2FyZC5nZXRIaXRUaWxlKCkpIHtcclxuICAgICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKFwiaGl0LXRpbGVcIilcclxuICAgICAgICB9IGVsc2UgaWYgKGxldHRlciA9PSBib2FyZC5nZXRNaXNzVGlsZSgpKSB7XHJcbiAgICAgICAgICBib3hEaXYuY2xhc3NMaXN0LmFkZChcIm1pc3MtdGlsZVwiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09IGJvYXJkLmdldFVua25vd25UaWxlKCkpIHtcclxuICAgICAgICAgIGJveERpdi5jbGFzc0xpc3QuYWRkKFwidW5rbm93bi10aWxlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByb3dDb3VudCsrXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJhd0JvYXJkcyA9IChib2FyZDEsIGJvYXJkMikgPT4ge1xyXG4gICAgZHJhd0JvYXJkKGJvYXJkMSwgXCJncmlkMVwiKVxyXG4gICAgZHJhd0JvYXJkKGJvYXJkMiwgXCJncmlkMlwiKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGlsZUxpc3RlbmVycyA9IChmdW5jLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtpZH0gPiAudW5rbm93bi10aWxlYClcclxuICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICBib3guY2xhc3NMaXN0LmFkZChcImNsaWNrYWJsZVwiKVxyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmMpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGlsZUhvdmVyTGlzdGVuZXJzID0gKHNoaXAsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcbiAgICBjb25zdCBncmlkQ2hpbGRyZW4gPSBncmlkLmNoaWxkcmVuXHJcbiAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2lkfSA+IC51bmtub3duLXRpbGVgKVxyXG4gICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc2hpcC5nZXRPcmllbnRhdGlvbigpXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKVxyXG4gICAgICAgIGNvbnN0IHRhcmdldFJvdyA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnJvdylcclxuICAgICAgICBjb25zdCB0YXJnZXRDb2x1bW4gPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5jb2x1bW4pXHJcblxyXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgIGlmICh0YXJnZXRSb3cgKyBsZW5ndGggLSAxIDw9IDkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBpZiAoTnVtYmVyKGdyaWRDaGlsZHJlbltpXS5kYXRhc2V0LmNvbHVtbikgPT0gdGFyZ2V0Q29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgdGhpcyBjb2RlIHRvIGluY2x1ZGUgdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgdGhlIGJvYXJkXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQucm93KSA+PSB0YXJnZXRSb3cgJiZcclxuICAgICAgICAgICAgICAgICAgTnVtYmVyKGdyaWRDaGlsZHJlbltpXS5kYXRhc2V0LnJvdykgPD0gdGFyZ2V0Um93ICsgbGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWRDaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwidG8tcGxhY2VcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Um93ICsgbGVuZ3RoIC0gMSA8PSA5KSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQuY29sdW1uKSA9PSB0YXJnZXRDb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlIHRoaXMgY29kZSB0byBpbmNsdWRlIHRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoZSBib2FyZFxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5yb3cpID49IHRhcmdldFJvdyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5yb3cpIDw9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRSb3cgKyBsZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRDaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwidG8tcGxhY2VcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRhcmdldENvbHVtbiArIGxlbmd0aCAtIDEgPD0gOSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGlmIChOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQucm93KSA9PSB0YXJnZXRSb3cpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSB0aGlzIGNvZGUgdG8gaW5jbHVkZSB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgYm9hcmRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIE51bWJlcihncmlkQ2hpbGRyZW5baV0uZGF0YXNldC5jb2x1bW4pID49IHRhcmdldENvbHVtbiAmJlxyXG4gICAgICAgICAgICAgICAgICBOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQuY29sdW1uKSA8PVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbHVtbiArIGxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBncmlkQ2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcInRvLXBsYWNlXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldENvbHVtbiArIGxlbmd0aCAtIDEgPD0gOSkge1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZENoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGdyaWRDaGlsZHJlbltpXS5kYXRhc2V0LnJvdykgPT0gdGFyZ2V0Um93KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIENoYW5nZSB0aGlzIGNvZGUgdG8gaW5jbHVkZSB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgYm9hcmRcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQuY29sdW1uKSA+PSB0YXJnZXRDb2x1bW4gJiZcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZ3JpZENoaWxkcmVuW2ldLmRhdGFzZXQuY29sdW1uKSA8PVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q29sdW1uICsgbGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkQ2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcInRvLXBsYWNlXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dNb2RhbCA9IChtb2RhbElkKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSWQpXHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93UGxhY2luZ0JvYXJkID0gKG1vZGFsSWQsIGJvYXJkLCBncmlkSWQpID0+IHtcclxuICAgIHNob3dNb2RhbChtb2RhbElkKVxyXG4gICAgZHJhd1BsYWNpbmdCb2FyZChtb2RhbElkLCBib2FyZCwgZ3JpZElkKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGlkZU1vZGFsID0gKG1vZGFsSWQpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxJZClcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hpcEJ1dHRvbkxpc3RlbmVyID0gKHNoaXAsIG1vZGFsSWQpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjJHttb2RhbElkfSAubW9kYWwtY29udGVudCAuY2hhbmdlLW9yaWVudGF0aW9uYFxyXG4gICAgKVxyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hpcC50b2dnbGVPcmllbnRhdGlvbilcclxuICB9XHJcblxyXG4gIGNvbnN0IHJhbmRCdXR0b25MaXN0ZW5lciA9IChtb2RhbElkLCBmdW5jKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7bW9kYWxJZH0gLm1vZGFsLWNvbnRlbnQgLnJhbmRvbWl6ZWBcclxuICAgIClcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRQbGF5ZXJOYW1lcyA9IChwbGF5ZXIxLCBwbGF5ZXIyKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJOYW1lMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMVwiKVxyXG4gICAgcGxheWVyTmFtZTEudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIxLmdldE5hbWUoKX1gXHJcbiAgICBjb25zdCBwbGF5ZXJOYW1lMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMlwiKVxyXG4gICAgcGxheWVyTmFtZTIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIyLmdldE5hbWUoKX1gXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VUdXJuVGV4dCA9ICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCB0dXJuRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJuXCIpXHJcbiAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gdGV4dFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheUJ1dHRvbkxpc3RlbmVyID0gKHBsYXllcjEsIHBsYXllcjIsIG15R2FtZSkgPT4ge1xyXG4gICAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idXR0b25cIilcclxuXHJcbiAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1nYW1lLWZvcm1cIilcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgY29uc3QgcGxheWVyMU5hbWUgPSBmb3JtRGF0YS5nZXQoXCJwbGF5ZXItMS1uYW1lXCIpXHJcbiAgICAgIGNvbnN0IHBsYXllcjJOYW1lID0gZm9ybURhdGEuZ2V0KFwicGxheWVyLTItbmFtZVwiKVxyXG4gICAgICBjb25zdCBwbGF5ZXIxQUkgPSBmb3JtRGF0YS5nZXQoXCJwbGF5ZXItMS1haVwiKVxyXG4gICAgICBjb25zdCBwbGF5ZXIyQUkgPSBmb3JtRGF0YS5nZXQoXCJwbGF5ZXItMi1haVwiKVxyXG4gICAgICBmb3JtLnJlc2V0KClcclxuICAgICAgaGlkZU1vZGFsKFwibW9kYWwzXCIpXHJcblxyXG4gICAgICBpZiAocGxheWVyMU5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgIHBsYXllcjEuY2hhbmdlTmFtZShwbGF5ZXIxTmFtZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBsYXllcjJOYW1lICE9IFwiXCIpIHtcclxuICAgICAgICBwbGF5ZXIyLmNoYW5nZU5hbWUocGxheWVyMk5hbWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsYXllcjEuY2hhbmdlQUkocGxheWVyMUFJKVxyXG4gICAgICBwbGF5ZXIyLmNoYW5nZUFJKHBsYXllcjJBSSlcclxuICAgICAgbXlHYW1lLnN0YXJ0R2FtZSgpXHJcblxyXG4gICAgICByZXR1cm4geyBwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWUgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVUaWxlID0gKHRpbGVDbGFzcywgYm9hcmQsIFtyb3csIGNvbHVtbl0pID0+IHtcclxuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7Ym9hcmQuZ2V0SWQoKX0gPiAuJHt0aWxlQ2xhc3N9YClcclxuICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICBpZiAoYm94LmRhdGFzZXQucm93ID09IHJvdyAmJiBib3guZGF0YXNldC5jb2x1bW4gPT0gY29sdW1uKSB7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC50b2dnbGUoXCJzaGFrZVwiKVxyXG4gICAgICAgIGJveC5jbGFzc0xpc3QudG9nZ2xlKFwiZW5sYXJnZVwiKVxyXG4gICAgICAgIC8vIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIilcclxuICAgICAgICAvLyBib3guY2xhc3NMaXN0LnJlbW92ZShcImVubGFyZ2VcIilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkcmF3Qm9hcmRzLFxyXG4gICAgZHJhd0JvYXJkLFxyXG4gICAgZHJhd1BsYWNpbmdCb2FyZCxcclxuICAgIHRpbGVMaXN0ZW5lcnMsXHJcbiAgICBzaG93UGxhY2luZ0JvYXJkLFxyXG4gICAgc2hvd01vZGFsLFxyXG4gICAgaGlkZU1vZGFsLFxyXG4gICAgc2hpcEJ1dHRvbkxpc3RlbmVyLFxyXG4gICAgdGlsZUhvdmVyTGlzdGVuZXJzLFxyXG4gICAgc2V0UGxheWVyTmFtZXMsXHJcbiAgICBjaGFuZ2VUdXJuVGV4dCxcclxuICAgIHBsYXlCdXR0b25MaXN0ZW5lcixcclxuICAgIGFuaW1hdGVUaWxlLFxyXG4gICAgcmFuZEJ1dHRvbkxpc3RlbmVyLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXJcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAuc2hha2Uge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlSXQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlSXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDUgZGVnKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcclxcbiAgfVxcclxcbn0gKi9cXHJcXG5cXHJcXG4uZW5sYXJnZSB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogcGx1bmdlSXQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcGx1bmdlSXQge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgcm90YXRlKDBkZWcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTg2KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDIwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMykgcm90YXRlKDF0dXJuKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgNDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMTQ5LCA0OCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA2MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHJvdGF0ZSgxdHVybik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgODAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHJvdGF0ZSgxdHVybik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDE0OSwgNDgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAxNDksIDQ4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQGtleWZyYW1lcyBwbHVuZ2VJdCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMykgcm90YXRlKDUwIGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAzMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgcm90YXRlKC01MCBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNjAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKSByb3RhdGUoNTAgZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSByb3RhdGUoLTUwIGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNTAgZGVnKTtcXHJcXG4gIH1cXHJcXG59ICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FuaW1hdGlvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHOztBQUVIO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLGtDQUFrQztJQUNsQyxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLG1DQUFtQztFQUNyQztBQUNGOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAuc2hha2Uge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlSXQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlSXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDUgZGVnKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcclxcbiAgfVxcclxcbn0gKi9cXHJcXG5cXHJcXG4uZW5sYXJnZSB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogcGx1bmdlSXQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcGx1bmdlSXQge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgcm90YXRlKDBkZWcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTg2KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDIwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMykgcm90YXRlKDF0dXJuKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgNDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMTQ5LCA0OCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA2MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHJvdGF0ZSgxdHVybik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgODAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHJvdGF0ZSgxdHVybik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDE0OSwgNDgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAxNDksIDQ4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQGtleWZyYW1lcyBwbHVuZ2VJdCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMykgcm90YXRlKDUwIGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAzMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgcm90YXRlKC01MCBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNjAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKSByb3RhdGUoNTAgZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSByb3RhdGUoLTUwIGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNTAgZGVnKTtcXHJcXG4gIH1cXHJcXG59ICovXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFzc2lvbitPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2l2ZW4gdGhpcyBodG1sOiAqL1xcclxcblxcclxcbi8qXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJjbG9zZS1tb2RhbFxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbiovXFxyXFxuXFxyXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcclxcbi5tb2RhbCB7XFxyXFxuICBjb2xvcjogcmdiKDIzNywgMjM3LCAyMzcpO1xcclxcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgei1pbmRleDogMzsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dzsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxufVxcclxcblxcclxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDE4LCA1OSwgMC43MTkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMTAlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDQsIDQsIDQpOyAqL1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xcclxcbiAgd2lkdGg6IDMyMHB4OyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZXRleHQge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgLyogYWxsOiB1bnNldDsgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgLyogZm9udC1mYW1pbHk6IFxcXCJQYXNzaW9uXFxcIiwgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7ICovXFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUwODFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXktYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxMWQ2MTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAzMGEwO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tcGxhY2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjAwLCAyNDEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3IgdGhlIGZvcm0gKi9cXHJcXG5sYWJlbCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC8qIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNDgpIGluc2V0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgd2lkdGg6IDkzJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBhY2NlbnQtY29sb3I6ICNhMDMwYTA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxhYmVsW2Zvcj1cXFwicGxheWVyLTEtYWlcXFwiXSxcXHJcXG5sYWJlbFtmb3I9XFxcInBsYXllci0yLWFpXFxcIl0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQSxxQkFBcUI7O0FBRXJCOzs7Ozs7Q0FNQzs7QUFFRCwyQkFBMkI7QUFDM0I7RUFDRSx5QkFBeUI7RUFDekIsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWSxFQUFFLGVBQWU7RUFDN0IsYUFBYSxFQUFFLGdCQUFnQjtFQUMvQixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7QUFDN0Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsWUFBWSxFQUFFLG9EQUFvRDtFQUNsRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw2RUFBNkU7RUFDN0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osOENBQThDO0VBQzlDLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFzc2lvbitPbmUmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuLyogR2l2ZW4gdGhpcyBodG1sOiAqL1xcclxcblxcclxcbi8qXFxyXFxuPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJjbG9zZS1tb2RhbFxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbiovXFxyXFxuXFxyXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcclxcbi5tb2RhbCB7XFxyXFxuICBjb2xvcjogcmdiKDIzNywgMjM3LCAyMzcpO1xcclxcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcclxcbiAgei1pbmRleDogMzsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dzsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxyXFxufVxcclxcblxcclxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDE4LCA1OSwgMC43MTkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMTAlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDQsIDQsIDQpOyAqL1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xcclxcbiAgd2lkdGg6IDMyMHB4OyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZXRleHQge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgLyogYWxsOiB1bnNldDsgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgLyogZm9udC1mYW1pbHk6IFxcXCJQYXNzaW9uXFxcIiwgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7ICovXFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUwODFlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXktYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxMWQ2MTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAzMGEwO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tcGxhY2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjAwLCAyNDEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3IgdGhlIGZvcm0gKi9cXHJcXG5sYWJlbCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC8qIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNDgpIGluc2V0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgd2lkdGg6IDkzJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBhY2NlbnQtY29sb3I6ICNhMDMwYTA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxhYmVsW2Zvcj1cXFwicGxheWVyLTEtYWlcXFwiXSxcXHJcXG5sYWJlbFtmb3I9XFxcInBsYXllci0yLWFpXFxcIl0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhc3Npb24rT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBhc3Npb25cXFwiLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcclxcbiAgLS1nYXA6IDI0cHg7XFxyXFxuICAtLXJhZGl1czogMTVweDtcXHJcXG4gIC0tc2hhZG93OiA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XFxyXFxuXFxyXFxuICAtLWxpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQ4KTtcXHJcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDYsIDMxLCA3MCk7XFxyXFxuICAtLWxpZ2h0LWdyYXk6IHJnYig2NSwgNjUsIDY1KTtcXHJcXG4gIC0tZGFyay1ncmF5OiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxuICAtLXRoZW1lLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxuICAtLWhpZ2hsaWdodC1jb2xvcjogcmdiKDEwNiwgNDYsIDE1MCk7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDI5LCAyOSk7ICovXFxyXFxufVxcclxcblxcclxcbi8qIFVzdWFsIGJhY2tncm91bmQsIGNoYW5nZSB0aGUgVVJMICovXFxyXFxuaHRtbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVc3VhbCBoZWFkZXIgKi9cXHJcXG4vKiBoZWFkZXIge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzZweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGViZTE7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59ICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBmbGV4OiAxO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMDYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItbWF0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0NSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGdhcDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xODYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3BhY2l0eTogNzAlO1xcclxcbiAgLyogYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNTA1KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtdGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAxNDksIDQ4KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdC10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDE0OSwgNDgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzcy10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDYsIDE4LCAwLjkxMyk7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE4Nik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjAwLCAyNDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMjksIDI0MCk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVc3VhbCBmb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdhcCk7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1nYXApO1xcclxcbiAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVFQUF1RTtFQUN2RSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxjQUFjO0VBQ2QscUNBQXFDOztFQUVyQyx5Q0FBeUM7RUFDekMsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsdUNBQXVDO0FBQ3pDOztBQUVBLHFDQUFxQztBQUNyQztFQUNFLGlGQUE4RDtFQUM5RCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDtFQUNFLE9BQU87O0VBRVAsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osNENBQTRDO0VBQzVDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFzc2lvbitPbmUmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXNzaW9uXFxcIiwgXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cXHJcXG4gIC0tZ2FwOiAyNHB4O1xcclxcbiAgLS1yYWRpdXM6IDE1cHg7XFxyXFxuICAtLXNoYWRvdzogNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xcclxcblxcclxcbiAgLS1saWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0OCk7XFxyXFxuICAtLW1haW4tY29sb3I6IHJnYig2LCAzMSwgNzApO1xcclxcbiAgLS1saWdodC1ncmF5OiByZ2IoNjUsIDY1LCA2NSk7XFxyXFxuICAtLWRhcmstZ3JheTogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgLS10aGVtZS1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgLS1oaWdobGlnaHQtY29sb3I6IHJnYigxMDYsIDQ2LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAyOSwgMjkpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVc3VhbCBiYWNrZ3JvdW5kLCBjaGFuZ2UgdGhlIFVSTCAqL1xcclxcbmh0bWwge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi8qIFVzdWFsIGhlYWRlciAqL1xcclxcbi8qIGhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMzZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZWJlMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMwNik7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMDBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1tYXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQ1KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5ib3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE4Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiA3MCU7XFxyXFxuICAvKiBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC41MDUpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC10aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDE0OSwgNDgpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0LXRpbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMTQ5LCA0OCk7XFxyXFxufVxcclxcblxcclxcbi5taXNzLXRpbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgNiwgMTgsIDAuOTEzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTg2KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyMDAsIDI0MSk7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGU6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEyOSwgMjQwKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFVzdWFsIGZvb3RlciAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tZ2FwKTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWdhcCk7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0aW9ucy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGlvbnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL21vZGFsLmNzc1wiXHJcbmltcG9ydCBhbmltYXRpb25zIGZyb20gXCIuL2FuaW1hdGlvbnMuY3NzXCJcclxuaW1wb3J0IHJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyLmpzXCJcclxuaW1wb3J0IGluaXRpYWxpemVHYW1lIGZyb20gXCIuL2luaXRpYWxpemVHYW1lLmpzXCJcclxuXHJcbi8vIGNvbnN0IGhlaWdodCA9IDEwXHJcbi8vIGNvbnN0IHdpZHRoID0gMTBcclxuXHJcbi8vIGNvbnN0IHBsYXllcjEgPSBuZXdQbGF5ZXIoeyBuYW1lOiBcIkFjZVwiLCBhaTogdHJ1ZSB9KVxyXG4vLyBjb25zdCBwbGF5ZXIyID0gbmV3UGxheWVyKHsgbmFtZTogXCJBY2Vib3RcIiwgYWk6IHRydWUgfSlcclxuXHJcbi8vIGNvbnN0IG15R2FtZSA9IG5ld0dhbWUoW3BsYXllcjEsIHBsYXllcjJdLCBbaGVpZ2h0LCB3aWR0aF0pXHJcbi8vIG15R2FtZS5zdGFydEdhbWUoKVxyXG5cclxuaW5pdGlhbGl6ZUdhbWUoKSJdLCJuYW1lcyI6WyJhcnJheXNFcXVhbCIsImFycmF5SW5jbHVkZXMiLCJiaWdBcnJheSIsInNtYWxsQXJyYXkiLCJhcnJheSIsImEiLCJiIiwibGVuZ3RoIiwiaSIsImdldFJhbmRvbUludCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlbmRlcmVyIiwibmV3R2FtZSIsIm5ld1BsYXllciIsImluaXRpYWxpemVHYW1lIiwibXlSZW5kZXJlciIsImhlaWdodCIsIndpZHRoIiwicGxheWVyMSIsIm5hbWUiLCJhaSIsInBsYXllcjIiLCJteUdhbWUiLCJzaG93TW9kYWwiLCJwbGF5QnV0dG9uTGlzdGVuZXIiLCJuZXdHYW1lYm9hcmQiLCJuZXdTaGlwIiwiYm9hcmQxIiwiaWQiLCJwbGF5ZXIiLCJib2FyZDIiLCJ3aW5uZXIiLCJnYW1lRW5kcyIsInNldFRpbWVvdXQiLCJkcmF3Qm9hcmRzIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJ0dXJuVGV4dCIsImNoYW5nZVR1cm5UZXh0IiwiaXNHYW1lT3ZlciIsImFyZUFsbFNoaXBzU3VuayIsIkFJQ2hvb3NlQ29vcmQiLCJnYW1lQm9hcmQiLCJnZXRIZWlnaHQiLCJnZXRXaWR0aCIsImJvYXJkQXJyYXkiLCJnZXRCb2FyZEFycmF5IiwidW5rbm93blRpbGUiLCJnZXRVbmtub3duVGlsZSIsInNoaXBUaWxlIiwiZ2V0U2hpcFRpbGUiLCJyb3dBaSIsImNvbHVtbkFpIiwid2hpbGVDb3VudGVyIiwicGxheWVyVHVybkxvb3AiLCJib2FyZCIsImJvYXJkQXR0YWNrZWQiLCJlIiwicm93IiwiY29sdW1uIiwiaXNBSSIsIk51bWJlciIsInRhcmdldCIsImRhdGFzZXQiLCJ0YWtlVHVybiIsImRyYXdCb2FyZCIsImdldElkIiwiYW5pbWF0ZVRpbGUiLCJjb25zb2xlR2FtZWJvYXJkIiwiZ2V0SGl0QXJyYXlzIiwiZ2V0T3JpZW50YXRpb25zIiwibmV4dEJvYXJkIiwibmV4dFBsYXllciIsInRpbGVMaXN0ZW5lcnMiLCJzdGFydEdhbWVMb29wIiwiaXNSZWFkeSIsInBsYWNlU2hpcHNBSSIsInNoaXBzIiwic2hpcCIsImNoYW5nZU9yaWVudGF0aW9uIiwicmFuZFJvdyIsInJhbmRDb2x1bW4iLCJwbGFjZVNoaXAiLCJnZXRQbGF5ZXIiLCJzZXRUb1JlYWR5IiwicGxheWVyMlBsYWNlU2hpcHMiLCJwbGFjZVNoaXBDb3VudGVyIiwicGxhY2VTaGlwc0xvb3AiLCJtb2RhbElkIiwic2hpcFBsYWNlZCIsImhpZGVNb2RhbCIsImRyYXdQbGFjaW5nQm9hcmQiLCJ0aWxlSG92ZXJMaXN0ZW5lcnMiLCJzaGlwQnV0dG9uTGlzdGVuZXIiLCJyYW5kQnV0dG9uTGlzdGVuZXIiLCJlbXB0eVNoaXBzIiwicGxhY2VTaGlwc1BsYXllciIsImNvbnNvbGVCb2FyZHMiLCJwbGF5ZXIxUGxhY2VTaGlwcyIsInNoaXAxIiwic2hpcDIiLCJzaGlwMyIsInNoaXA0Iiwic2hpcDUiLCJzaGlwczEiLCJtb2RhbElkMSIsInNoaXBweTEiLCJzaGlwcHkyIiwic2hpcHB5MyIsInNoaXBweTQiLCJzaGlwcHk1Iiwic2hpcHMyIiwibW9kYWxJZDIiLCJzdGFydEdhbWUiLCJzZXRQbGF5ZXJOYW1lcyIsImhpdFRpbGUiLCJtaXNzVGlsZSIsImVtcHR5Qm9hcmRBcnJheSIsInB1c2giLCJBcnJheSIsImZpbGwiLCJnZXRTaGlwc1N1bmsiLCJtYXAiLCJpc1N1bmsiLCJnZXRTaGlwc0Nvb3JkIiwiZ2V0Q29vcmQiLCJnZXRTaGlwc0Nvb3JkcyIsImdldENvb3JkcyIsImdldEhpdEFycmF5IiwiZ2V0T3JpZW50YXRpb24iLCJjaGVja05laWdoYm9yc1Vua25vd25UaWxlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZGlyZWN0aW9ucyIsImNoYW5nZUlkIiwidmFsdWUiLCJnZXRIaXRUaWxlIiwiZ2V0TWlzc1RpbGUiLCJoaXRBcnJheSIsImlzSW50ZWdlciIsImdldExlbmd0aCIsImNoYW5nZUNvb3JkIiwicmVjZWl2ZUF0dGFjayIsImhpdENvb3JkIiwic2hpcENvb3JkcyIsIm51bSIsImhpdCIsInJlYWR5IiwiY2hhbmdlQUkiLCJjaGFuZ2VOYW1lIiwic3VuayIsIm9yaWVudGF0aW9uIiwiY29vcmQiLCJ0b2dnbGVPcmllbnRhdGlvbiIsImNvb3JkcyIsInBhcnQiLCJjbGVhckNoaWxkcmVuIiwicGFyZW50IiwiaW5uZXJIVE1MIiwiZ3JpZElkIiwiZ3JpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwicm93Q291bnQiLCJmb3JFYWNoIiwiY29sdW1uQ291bnQiLCJsZXR0ZXIiLCJib3hEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJtb2RhbENvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2VUZXh0Iiwic2xpY2UiLCJ0ZXh0Q29udGVudCIsImJ1dHRvbiIsInJhbmRCdXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmdW5jIiwiYm94ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdyaWRDaGlsZHJlbiIsImNoaWxkcmVuIiwidGFyZ2V0Um93IiwidGFyZ2V0Q29sdW1uIiwicmVtb3ZlIiwibW9kYWwiLCJkaXNwbGF5Iiwic2hvd1BsYWNpbmdCb2FyZCIsInBsYXllck5hbWUxIiwicGxheWVyTmFtZTIiLCJ0ZXh0IiwidHVybkRpdiIsInBsYXlCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicGxheWVyMU5hbWUiLCJnZXQiLCJwbGF5ZXIyTmFtZSIsInBsYXllcjFBSSIsInBsYXllcjJBSSIsInJlc2V0IiwidGlsZUNsYXNzIiwidG9nZ2xlIiwiYW5pbWF0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=