import newGameboard from "./newGameboard.js"
import newShip from "./newShip.js"

it("displays a gameboard", () => {
  const board = newGameboard({ height: 2, width: 2 })
  expect(board.consoleGameboard()).toEqual([
    ["o", "o"],
    ["o", "o"],
  ])
})

it("displays a very small gameboard", () => {
  const board = newGameboard({ height: 1, width: 1 })
  expect(board.consoleGameboard()).toEqual([["o"]])
})

it("displays a big gameboard", () => {
  const board = newGameboard({})
  expect(board.consoleGameboard()).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
})

it("displays a gameboard with different unknownTile", () => {
  const board = newGameboard({ height: 2, width: 2, unknownTile: "lmao" })
  expect(board.consoleGameboard()).toEqual([
    ["lmao", "lmao"],
    ["lmao", "lmao"],
  ])
})

it("places a ship", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 1 })
  expect(board.placeShip(ship, [0, 0])).toEqual([
    ["s", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
})

it("places a big ship", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 5 })
  expect(board.placeShip(ship, [0, 0])).toEqual([
    ["s", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["s", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["s", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["s", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["s", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
})

it("places a big ship horizontally", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 5, orientation: "horizontal" })
  expect(board.placeShip(ship, [9, 5])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "s", "s", "s", "s", "s"],
  ])
})

it("can't place a ship that doesn't fit", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 5 })
  const hShip = newShip({ length: 5, orientation: "horizontal" })
  expect(board.placeShip(ship, [9, 5])).toBe("Cannot place ship")
  expect(board.placeShip(ship, [6, 0])).toBe("Cannot place ship")
  expect(board.placeShip(hShip, [0, 6])).toBe("Cannot place ship")
  expect(board.placeShip(hShip, [5, 9])).toBe("Cannot place ship")
})

it("hits a ship", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 5, orientation: "horizontal" })
  expect(board.placeShip(ship, [9, 5])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "s", "s", "s", "s", "s"],
  ])
  expect(board.receiveAttack([9, 5])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "x", "s", "s", "s", "s"],
  ])
  expect(ship.getHitArray()).toEqual([true, false, false, false, false])
})

it("misses a ship", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 5, orientation: "horizontal" })
  expect(board.placeShip(ship, [9, 5])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "s", "s", "s", "s", "s"],
  ])
  expect(board.receiveAttack([3, 3])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "~", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "s", "s", "s", "s", "s"],
  ])
})

it("hits a ship", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 5, orientation: "horizontal" })
  expect(board.placeShip(ship, [4, 4])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "s", "s", "s", "s", "s", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
  expect(board.receiveAttack([4, 6])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "s", "s", "x", "s", "s", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
  expect(ship.getHitArray()).toEqual([false, false, true, false, false])
})

it("hits a ship", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 5})
  expect(board.placeShip(ship, [2, 6])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
  expect(ship.getCoords()).toEqual([[2, 6],[3, 6],[4, 6],[5, 6],[6, 6]])
  expect(board.receiveAttack([6, 6])).toEqual([
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "s", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "x", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
  expect(ship.getHitArray()).toEqual([false, false, false, false, true])
})

it("detects if all ships are sunk", () => {
  const board = newGameboard({})
  const ship = newShip({ length: 1 })
  expect(board.placeShip(ship, [0, 0])).toEqual([
    ["s", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
  expect(board.areAllShipsSunk()).toBe(false)
  expect(board.receiveAttack([0, 0])).toEqual([
    ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ])
  expect(board.areAllShipsSunk()).toBe(true)
})