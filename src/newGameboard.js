import arrayIncludes from "./arrayIncludes.js"

const newGameboard = ({
  height = 10,
  width = 10,
  unknownTile = "o",
  shipTile = "s",
  hitTile = "x",
  missTile = "~",
  id = null,
  player = null,
}) => {
  let boardArray = []
  let ships = []

  // I can't use the code below because placeShip will not work with it
  // const boardRow = Array(width).fill(unknownTile)
  for (let i = 0; i < height; i++) {
    boardArray.push(Array(width).fill(unknownTile))
  }

  const getPlayer = () => player
  const getShipsSunk = () => {
    return ships.map((ship) => {
      return ship.isSunk()
    })
  }

  const getShipsCoord = () => {
    return ships.map((ship) => {
      return ship.getCoord()
    })
  }

  const getShipsCoords = () => {
    return ships.map((ship) => {
      return ship.getCoords()
    })
  }

  const getHitArrays = () => {
    return ships.map((ship) => {
      return ship.getHitArray()
    })
  }

  const getOrientations = () => {
    return ships.map((ship) => {
      return ship.getOrientation()
    })
  }

  const checkNeighborsUnknownTile = (boardArray, [row, column], unknownTile) => {
    const up = [row - 1, column]
    const down = [row + 1, column]
    const left = [row, column - 1]
    const right = [row, column + 1]
    const directions = [up, down, left, right]
    for (const [row, column] of directions) {
      if (boardArray[row] && boardArray[row][column]) {
        if (boardArray[row][column] != unknownTile) {
          return false
        }
      }
    }
    return true
  }

  const getId = () => id
  const changeId = (value) => {
    id = value
  }
  const getHeight = () => height
  const getWidth = () => width
  const getBoardArray = () => boardArray
  const getUnknownTile = () => unknownTile
  const getShipTile = () => shipTile
  const getHitTile = () => hitTile
  const getMissTile = () => missTile
  const getHitArray = () => hitArray

  const consoleGameboard = () => {
    for (const row of boardArray) {
      console.log(row)
    }
    return boardArray
  }

  const placeShip = (ship, [row, column]) => {
    if (!ship) {
      return "Cannot place ship"
    }
    if (!Number.isInteger(row) || !Number.isInteger(column)) {
      return "Cannot place ship"
    }
    if (!boardArray[row] || !boardArray[row][column]) {
      return "Cannot place ship"
    }
    if (ship.getOrientation() == "vertical") {
      if (height < ship.getLength() || height - row < ship.getLength()) {
        return "Cannot place ship"
      } else {
        for (let i = 0; i < ship.getLength(); i++) {
          if (boardArray[row + i][column] != unknownTile) {
            return "Cannot place ship"
          } else if (
            !checkNeighborsUnknownTile(boardArray, [row + i, column], unknownTile)
          ) {
            return "Cannot place ship"
          }
        }
        for (let i = 0; i < ship.getLength(); i++) {
          boardArray[row + i][column] = shipTile
        }
        ship.changeCoord([row, column])
        ships.push(ship)
        return boardArray
      }
    } else if (ship.getOrientation() == "horizontal") {
      if (width < ship.getLength() || width - column < ship.getLength()) {
        return "Cannot place ship"
      } else {
        for (let i = 0; i < ship.getLength(); i++) {
          if (boardArray[row][column + i] != unknownTile) {
            return "Cannot place ship"
          } else if (
            !checkNeighborsUnknownTile(boardArray, [row, column + i], unknownTile)
          ) {
            return "Cannot place ship"
          }
        }
        for (let i = 0; i < ship.getLength(); i++) {
          boardArray[row][column + i] = shipTile
        }
        ship.changeCoord([row, column])
        ships.push(ship)
        return boardArray
      }
    } else {
      return "You're not supposed to be here"
    }
  }

  const receiveAttack = ([row, column]) => {
    if (boardArray[row][column] == shipTile) {
      boardArray[row][column] = hitTile
      for (const ship of ships) {
        const hitCoord = [row, column]
        const shipCoords = ship.getCoords()
        if (arrayIncludes(shipCoords, hitCoord)) {
          if (ship.getOrientation() == "vertical") {
            let num = row - ship.getCoord()[0]
            ship.hit(num)
            ship.isSunk()
          } else {
            let num = column - ship.getCoord()[1]
            ship.hit(num)
            ship.isSunk()
          }
        }
      }
      return boardArray
    } else if (boardArray[row][column] == unknownTile) {
      boardArray[row][column] = missTile
      return boardArray
    } else {
      return "Area already hit"
    }
  }

  const areAllShipsSunk = () => {
    if (ships.length == 0) return false
    for (const ship of ships) {
      if (!ship.isSunk()) {
        return false
      }
    }
    return true
  }
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
  }
}

export default newGameboard
