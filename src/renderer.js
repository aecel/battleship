const renderer = () => {
  const clearChildren = (parent) => {
    parent.innerHTML = ""
  }

  const drawBoard = (board) => {
    // board.changeId(gridId)
    const height = board.getHeight()
    const width = board.getWidth()

    const grid = document.getElementById(board.getId())
    grid.style.gridTemplateColumns = `repeat(${height},1fr)`
    grid.style.gridTemplateRows = `repeat(${width},1fr)`
    const boardArray = board.getBoardArray()

    clearChildren(grid)
    let rowCount = 0
    boardArray.forEach((row) => {
      let columnCount = 0
      row.forEach((letter) => {
        const boxDiv = document.createElement("div")
        boxDiv.dataset.row = rowCount
        boxDiv.dataset.column = columnCount
        columnCount++

        boxDiv.classList.add("box")
        grid.appendChild(boxDiv)
        if (letter == board.getShipHere()) {
          boxDiv.classList.add("ship-here")
          boxDiv.classList.add("unhit")
        } else if (letter == board.getHitShip()) {
          boxDiv.classList.add("hit-ship")
        } else if (letter == board.getMissShip()) {
          boxDiv.classList.add("miss-ship")
        } else if (letter == board.getUnhit()) {
          boxDiv.classList.add("unhit")
        }
      })
      rowCount++
    })
  }

  const drawBoards = (board1, board2) => {
    drawBoard(board1)
    drawBoard(board2)
  }

  return { drawBoards, drawBoard }
}

export default renderer
