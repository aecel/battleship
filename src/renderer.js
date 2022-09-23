const renderer = () => {
  const clearChildren = (parent) => {
    parent.innerHTML = ""
  }

  const drawBoard = (board, gridId) => {
    // board.changeId(gridId)
    const height = board.getHeight()
    const width = board.getWidth()

    const grid = document.getElementById(gridId)
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
          boxDiv.classList.add("unhit")
          
          // Uncomment these to see all ships
          boxDiv.classList.add("ship-here")
          boxDiv.style.backgroundColor = "green"
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

  const drawPlacingBoard = (board, gridId) => {
    // board.changeId(gridId)
    const height = board.getHeight()
    const width = board.getWidth()

    const grid = document.getElementById(gridId)
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
          boxDiv.style.backgroundColor = "green"
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
    drawBoard(board1, "grid1")
    drawBoard(board2, "grid2")
  }

  const tileListeners = (board, func, id) => {
    console.log("I am in tileListeners")
    // const id = board.getId()
    const boxes = document.querySelectorAll(`#${id} > .unhit`)
    boxes.forEach((box) => {
      box.classList.add("clickable")
      box.addEventListener("click", func)
    })
  }

  const showModal = (modalId) => {
    const modal = document.getElementById(modalId)
    modal.style.display = "block"
  }

  const showPlacingBoard = (modalId, board, gridId) => {
    showModal(modalId)
    drawPlacingBoard(board, gridId)
  }

  const hideModal = (modalId) => {
    const modal = document.getElementById(modalId)
    modal.style.display = "none"
  }

  return {
    drawBoards,
    drawBoard,
    drawPlacingBoard,
    tileListeners,
    showPlacingBoard,
    showModal,
    hideModal,
  }
}

export default renderer
