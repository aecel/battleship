import newShip from "./newShip.js"

it("hits at array 0", () => {
  const ship = newShip({ length: 5 })
  expect(ship.hit(0)).toEqual([true, false, false, false, false])
})

it("does not hit at negatives and non-integers", () => {
  const ship = newShip({ length: 5 })
  expect(ship.hit(-1)).toBeNull()
  expect(ship.hit(1.5)).toBeNull()
  expect(ship.hit(true)).toBeNull()
  expect(ship.hit(undefined)).toBeNull()
  expect(ship.hit(null)).toBeNull()
})

it("detects if ship is sunk", () => {
  const ship = newShip({ length: 1, hitArray: [true] })
  expect(ship.isSunk()).toBe(true)
})

it("detects if ship is not sunk", () => {
  const ship = newShip({ length: 1 })
  expect(ship.isSunk()).toBe(false)
})
