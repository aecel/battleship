import newGameboard from "./newGameboard.js"
import newShip from "./newShip.js"
import getRandomInt from "./getRandomInt.js"
import renderer from "./renderer.js"
import newPlayer from "./newPlayer.js"

// Path goes like this:
// startGame -> placeShipsAI or placeShipsPlayer
// -> startGameLoop -> playerTurnLoop
// -> gameEnds

const newGame = ([player1, player2], [height, width]) => {
  const board1 = newGameboard({
    height: height,
    width: width,
    id: "grid1",
    player: player1,
  })
  const board2 = newGameboard({
    height: height,
    width: width,
    id: "grid2",
    player: player2,
  })
  const myRenderer = renderer()
  let winner = newPlayer({ name: "NOBODY" })

  const gameEnds = () => {
    myRenderer.drawBoards(board1, board2)
    console.log("Game Over")
  }

  const isGameOver = () => {
    if (board1.areAllShipsSunk()) {
      winner = player2
      return true
    }
    if (board2.areAllShipsSunk()) {
      winner = player1
      return true
    }

    return false
  }

  const playerTurnLoop = (player, board) => {
    const boardAttacked = (e) => {
      let row = 0
      let column = 0
      if (!player.isAI()) {
        row = Number(e.target.dataset.row)
        column = Number(e.target.dataset.column)
      }
      player.takeTurn(board, [row, column])
      if (isGameOver()) {
        console.log(`${winner.getName()} wins`)
        gameEnds()
        return null
      }

      myRenderer.drawBoard(board, board.getId())
      board.consoleGameboard()
      console.log(board.getHitArrays())
      console.log(board.getOrientations())

      let nextBoard
      let nextPlayer

      if (board.getId() == "grid1") {
        nextBoard = board2
        nextPlayer = player1
      } else {
        nextBoard = board1
        nextPlayer = player2
      }
      playerTurnLoop(nextPlayer, nextBoard)
    }

    console.log(`${player.getName()}'s turn`)
    if (player.isAI()) {
      boardAttacked()
    } else {
      myRenderer.tileListeners(boardAttacked, board.getId())
    }
  }

  const startGameLoop = () => {
    if (player1.isReady() && player2.isReady()) {
      playerTurnLoop(player1, board2)
    }
  }

  const placeShipsAI = (ships, gameBoard) => {
    for (const ship of ships) {
      if (getRandomInt(2) == 1) {
        ship.changeOrientation("horizontal")
      }

      let randRow = getRandomInt(width)
      let randColumn = getRandomInt(height)

      let whileCounter = 0
      while (
        gameBoard.placeShip(ship, [randRow, randColumn]) == "Cannot place ship"
      ) {
        randRow = getRandomInt(width)
        randColumn = getRandomInt(height)
        whileCounter++
        if (whileCounter >= height * width) {
          break
        }
      }
    }

    myRenderer.drawBoard(gameBoard, gameBoard.getId())

    gameBoard.getPlayer().setToReady()
    if (!player2.isReady()) {
      placeShips2()
    }
    startGameLoop()
    return gameBoard.getBoardArray()
  }

  let placeShipCounter = 0
  const placeShipsLoop = (ships, gameBoard, modalId) => {
    const shipPlaced = (e) => {
      let row = Number(e.target.dataset.row)
      let column = Number(e.target.dataset.column)

      if (
        gameBoard.placeShip(ships[placeShipCounter], [row, column]) !=
        "Cannot place ship"
      ) {
        myRenderer.drawPlacingBoard(
          modalId,
          gameBoard,
          "place" + gameBoard.getId()
        )
        placeShipCounter++
        if (placeShipCounter == ships.length) {
          placeShipCounter = 0

          myRenderer.hideModal(modalId)
          myRenderer.drawBoard(gameBoard, gameBoard.getId())

          gameBoard.getPlayer().setToReady()
          if (!player2.isReady()) {
            placeShips2()
          }
          startGameLoop()
          return null
        }
        placeShipsLoop(ships, gameBoard, modalId)
      }
    }

    myRenderer.shipButtonListener(ships[placeShipCounter], modalId)

    myRenderer.tileListeners(shipPlaced, "place" + gameBoard.getId())
    myRenderer.tileHoverListeners(
      ships[placeShipCounter],
      "place" + gameBoard.getId()
    )
  }

  const placeShipsPlayer = (ships, gameBoard, modalId) => {
    myRenderer.showPlacingBoard(modalId, gameBoard, "place" + gameBoard.getId())
    placeShipsLoop(ships, gameBoard, modalId)
  }

  const consoleBoards = () => {
    board1.consoleGameboard()
    console.log(
      "----------------------------------------------------------------"
    )
    board2.consoleGameboard()
  }

  const placeShips1 = () => {
    const ship1 = newShip({ name: "Carrier", length: 5 })
    const ship2 = newShip({ name: "Battleship", length: 4 })
    const ship3 = newShip({ name: "Destroyer", length: 3 })
    const ship4 = newShip({ name: "Submarine", length: 3 })
    const ship5 = newShip({ name: "Patrol Boat", length: 2 })
    const ships1 = [ship1, ship2, ship3, ship4, ship5]
    const modalId1 = "modal1"

    if (player1.isAI()) {
      placeShipsAI(ships1, board1)
    } else {
      placeShipsPlayer(ships1, board1, modalId1)
    }
  }

  const placeShips2 = () => {
    const shippy1 = newShip({ name: "Carrier2", length: 5 })
    const shippy2 = newShip({ name: "Battleship2", length: 4 })
    const shippy3 = newShip({ name: "Destroyer2", length: 3 })
    const shippy4 = newShip({ name: "Submarine2", length: 3 })
    const shippy5 = newShip({ name: "Patrol Boat2", length: 2 })
    const ships2 = [shippy1, shippy2, shippy3, shippy4, shippy5]
    const modalId2 = "modal2"

    if (player2.isAI()) {
      placeShipsAI(ships2, board2)
    } else {
      placeShipsPlayer(ships2, board2, modalId2)
    }
  }

  const startGame = () => {
    myRenderer.drawBoards(board1, board2)

    placeShips1()

    consoleBoards()
    return [board1, board2]
  }

  return { startGame }
}

export default newGame
