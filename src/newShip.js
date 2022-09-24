const newShip = ({
  name = null,
  length = null,
  hitArray = Array(length).fill(false),
  sunk = false,
  orientation = "vertical",
  coord = null,
}) => {
  // if (!hitArray) {
  //   hitArray = Array(length).fill(false)
  //   // for example: [false, false, false, false]
  // }

  const getLength = () => length
  const getOrientation = () => orientation
  const getCoord = () => coord
  const getHitArray = () => hitArray
  const getName = () => name
  const changeOrientation = (value) => {
    orientation = value
  }

  const toggleOrientation = () => {
    if (orientation == "vertical") {
      orientation = "horizontal"
    } else {
      orientation = "vertical"
    }
  }

  const changeName = (value) => {
    name = value
  }
  const changeCoord = (value) => {
    coord = value
  }
  const getCoords = () => {
    if (!coord) return null
    let coords = []
    let [row, column] = coord
    if (orientation == "vertical") {
      for (let i = 0; i < length; i++) {
        coords.push([row + i, column])
      }
    } else {
      for (let i = 0; i < length; i++) {
        coords.push([row, column + i])
      }
    }
    return coords
  }

  const hit = (num) => {
    if (Number.isInteger(num) && num >= 0 && num < length) {
      hitArray[num] = true
      return hitArray
    } else {
      return null
    }
  }

  const isSunk = () => {
    for (const part of hitArray) {
      if (part == false) {
        return false
      }
    }
    sunk = true
    return true
  }

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
    toggleOrientation,
  }
}

export default newShip
