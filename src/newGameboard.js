import arrayIncludes from "./arrayIncludes.js"

const newGameboard = ({
  height = 10,
  width = 10,
  unhit = "o",
  shipHere = "s",
  hitShip = "x",
  missShip = "~",
  id = null,
}) => {
  let boardArray = []
  let ships = []

  // I can't use the code below because placeShip will not work with it
  // const boardRow = Array(width).fill(unhit)
  for (let i = 0; i < height; i++) {
    boardArray.push(Array(width).fill(unhit))
  }

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

  const checkNeighborsUnhit = (boardArray, [row, column], unhit) => {
    const up = [row - 1, column]
    const down = [row + 1, column]
    const left = [row, column - 1]
    const right = [row, column + 1]
    const directions = [up, down, left, right]
    for (const [row, column] of directions) {
      if (boardArray[row] && boardArray[row][column]) {
        if (boardArray[row][column] != unhit) {
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
  const getUnhit = () => unhit
  const getShipHere = () => shipHere
  const getHitShip = () => hitShip
  const getMissShip = () => missShip
  const getHitArray = () => hitArray

  const consoleGameboard = () => {
    for (const row of boardArray) {
      console.log(row)
    }
    return boardArray
  }

  const placeShip = (ship, [row, column]) => {
    if (ship.getOrientation() == "vertical") {
      if (height < ship.getLength() || height - row < ship.getLength()) {
        return "Cannot place ship"
      } else {
        for (let i = 0; i < ship.getLength(); i++) {
          if (boardArray[row + i][column] != unhit) {
            return "Cannot place ship"
          } else if (
            !checkNeighborsUnhit(boardArray, [row + i, column], unhit)
          ) {
            return "Cannot place ship"
          }
        }
        for (let i = 0; i < ship.getLength(); i++) {
          boardArray[row + i][column] = shipHere
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
          if (boardArray[row][column + i] != unhit) {
            return "Cannot place ship"
          } else if (
            !checkNeighborsUnhit(boardArray, [row, column + i], unhit)
          ) {
            return "Cannot place ship"
          }
        }
        for (let i = 0; i < ship.getLength(); i++) {
          boardArray[row][column + i] = shipHere
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
    if (boardArray[row][column] == shipHere) {
      boardArray[row][column] = hitShip
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
    } else if (boardArray[row][column] == unhit) {
      boardArray[row][column] = missShip
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
    getUnhit,
    getHitShip,
    getMissShip,
    getShipHere,
    consoleGameboard,
    placeShip,
    receiveAttack,
    areAllShipsSunk,
    getShipsSunk,
    getShipsCoord,
    getShipsCoords,
    getHitArray,
    getHitArrays,
  }
}

export default newGameboard
