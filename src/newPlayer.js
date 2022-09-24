import getRandomInt from "./getRandomInt.js"

const newPlayer = ({ name = null, ai = false, ready = false }) => {
  if (!name && ai) {
    name = "Hal 9000"
  }

  const isAI = () => ai
  const changeAI = (value) => {
    ai = value
  }
  const getName = () => name
  const changeName = (value) => {
    name = value
  }
  const isReady = () => ready
  const setToReady = () => {
    ready = true
  }

  const takeTurn = (gameBoard, [row, column]) => {
    if (ai) {
      const height = gameBoard.getHeight()
      const width = gameBoard.getWidth()
      const boardArray = gameBoard.getBoardArray()
      const unknownTile = gameBoard.getUnknownTile()
      const shipTile = gameBoard.getShipTile()

      let rowAi = getRandomInt(width)
      let columnAi = getRandomInt(height)

      let whileCounter = 0
      while (
        boardArray[rowAi][columnAi] != unknownTile &&
        boardArray[rowAi][columnAi] != shipTile
      ) {
        rowAi = getRandomInt(width)
        columnAi = getRandomInt(height)
        whileCounter++
        if (whileCounter >= height * width) {
          break
        }
      }
      gameBoard.receiveAttack([rowAi, columnAi])
    } else {
      gameBoard.receiveAttack([row, column])
    }
  }

  return { takeTurn, getName, isAI, isReady, setToReady, changeName, changeAI }
}

export default newPlayer
