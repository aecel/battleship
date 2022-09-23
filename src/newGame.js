import newGameboard from "./newGameboard.js"
import newShip from "./newShip.js"
import getRandomInt from "./getRandomInt.js"
import renderer from "./renderer.js"
import newPlayer from "./newPlayer.js"

const newGame = ([player1, player2], [height, width]) => {
  const board1 = newGameboard({ height: height, width: width, id: "grid1" })
  const board2 = newGameboard({ height: height, width: width, id: "grid2" })
  const myRenderer = renderer()
  let winner = newPlayer({ name: "NOBODY" })

  const placeShipsRand = (ships, gameBoard) => {
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
    return gameBoard.getBoardArray()
  }

  const consoleBoards = () => {
    board1.consoleGameboard()
    console.log(
      "----------------------------------------------------------------"
    )
    board2.consoleGameboard()
  }

  const setupGame = () => {
    const ship1 = newShip({ name: "Carrier", length: 5 })
    const ship2 = newShip({ name: "Battleship", length: 4 })
    const ship3 = newShip({ name: "Destroyer", length: 3 })
    const ship4 = newShip({ name: "Submarine", length: 3 })
    const ship5 = newShip({ name: "Patrol Boat", length: 2 })
    const ships1 = [ship1, ship2, ship3, ship4, ship5]

    const shippy1 = newShip({ name: "Carrier2", length: 5 })
    const shippy2 = newShip({ name: "Battleship2", length: 4 })
    const shippy3 = newShip({ name: "Destroyer2", length: 3 })
    const shippy4 = newShip({ name: "Submarine2", length: 3 })
    const shippy5 = newShip({ name: "Patrol Boat2", length: 2 })
    const ships2 = [shippy1, shippy2, shippy3, shippy4, shippy5]

    placeShipsRand(ships1, board1)
    placeShipsRand(ships2, board2)

    myRenderer.drawBoards(board1, board2)
    return [board1, board2]
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

  const turnListeners = (board, func) => {
    const id = board.getId()
    const boxes = document.querySelectorAll(`#${id} > .unhit`)
    boxes.forEach((box) => {
      box.classList.add("clickable")
      box.addEventListener("click", func)
    })
  }

  const playerTurn = (player, board) => {
    const boxClicked = (e) => {
      let row = 0
      let column = 0
      if (player.getAi()) {
        // console.log(`Player ${player.getName()} is an AI`)
      } else {
        row = Number(e.target.dataset.row)
        column = Number(e.target.dataset.column)
      }
      player.takeTurn(board, [row, column])
      // board.consoleGameboard()
      // console.log(board.getShipsSunk())
      // console.log(board.getShipsCoords())
      // console.log(board.getHitArrays())
      if (isGameOver()) {
        console.log(`${winner.getName()} wins`)
        gameEnds()
        return null
      }

      myRenderer.drawBoard(board)

      let nextBoard
      let nextPlayer

      if (board.getId() == "grid1") {
        nextBoard = board2
        nextPlayer = player1
      } else {
        nextBoard = board1
        nextPlayer = player2
      }
      playerTurn(nextPlayer, nextBoard)
    }

    if (player.getAi()) {
      boxClicked()
    } else {
      turnListeners(board, boxClicked)
    }
  }

  const gameLoop = () => {
    playerTurn(player1, board2)
    // let player = player1
    // let board = board2

    // let whileCounter = 0
    // while (!isGameOver()) {
    //   playerTurn(player, board)
    //   if (board.getId() == "grid1") {
    //     player = player1
    //     board = board2
    //   } else {
    //     player = player2
    //     board = board1
    //   }
    //   whileCounter++
    //   if (whileCounter > height * width * 2) {
    //     break
    //   }
    // }

    // console.log(whileCounter)
    // console.log(`${winner.getName()} wins`)
  }

  const gameEnds = () => {
    myRenderer.drawBoards(board1, board2)
    console.log("Game Over")
  }

  return { setupGame, consoleBoards, isGameOver, gameLoop }
}

export default newGame
