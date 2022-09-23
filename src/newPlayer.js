import getRandomInt from "./getRandomInt.js"

const newPlayer = ({ name = null, ai = false, ready = false }) => {
  if (!name && ai) {
    name = "Hal 9000"
  }

  const isAI = () => ai
  const getName = () => name
  const isReady = () => ready
  const setToReady = () => {
    ready = true
  }

  const takeTurn = (gameBoard, [row, column]) => {
    if (ai) {
      const height = gameBoard.getHeight()
      const width = gameBoard.getWidth()
      const boardArray = gameBoard.getBoardArray()
      const unhit = gameBoard.getUnhit()
      const shipHere = gameBoard.getShipHere()

      let rowAi = getRandomInt(width)
      let columnAi = getRandomInt(height)

      let whileCounter = 0
      while (
        boardArray[rowAi][columnAi] != unhit &&
        boardArray[rowAi][columnAi] != shipHere
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

  return { takeTurn, getName, isAI, isReady, setToReady }
}

export default newPlayer
