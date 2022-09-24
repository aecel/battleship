const renderer = () => {
  const clearChildren = (parent) => {
    parent.innerHTML = ""
  }

  const drawBoard = (board, gridId) => {
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

          // Uncomment these two to see all ships
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

  const drawPlacingBoard = (modalId, board, gridId) => {
    const height = board.getHeight()
    const width = board.getWidth()

    const placeText = document.querySelector(
      `#${modalId} .modal-content .placetext`
    )
    placeText.textContent = `Place your ship, ${board.getPlayer().getName()}`

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

  const tileListeners = (func, id) => {
    const boxes = document.querySelectorAll(`#${id} > .unhit`)
    boxes.forEach((box) => {
      box.classList.add("clickable")
      box.addEventListener("click", func)
    })
  }

  const tileHoverListeners = (ship, id) => {
    const grid = document.getElementById(id)
    const gridChildren = grid.children
    const boxes = document.querySelectorAll(`#${id} > .unhit`)
    boxes.forEach((box) => {
      box.addEventListener("mouseenter", (e) => {
        const orientation = ship.getOrientation()
        const length = ship.getLength()
        const targetRow = Number(e.target.dataset.row)
        const targetColumn = Number(e.target.dataset.column)

        if (orientation == "vertical") {
          if (targetRow + length - 1 <= 9) {
            for (let i = 0; i < gridChildren.length; i++) {
              if (Number(gridChildren[i].dataset.column) == targetColumn) {
                // Change this code to include the height and width of the board

                if (
                  Number(gridChildren[i].dataset.row) >= targetRow &&
                  Number(gridChildren[i].dataset.row) <= targetRow + length - 1
                ) {

                  gridChildren[i].classList.add("to-place")
                }
              }
            }
          }

          box.addEventListener("mouseleave", () => {
            if (targetRow + length - 1 <= 9) {
              for (let i = 0; i < gridChildren.length; i++) {
                if (Number(gridChildren[i].dataset.column) == targetColumn) {
                  // Change this code to include the height and width of the board

                  if (
                    Number(gridChildren[i].dataset.row) >= targetRow &&
                    Number(gridChildren[i].dataset.row) <=
                      targetRow + length - 1
                  ) {
                    gridChildren[i].classList.remove("to-place")
                  }
                }
              }
            }
          })
        } else {
          if (targetColumn + length - 1 <= 9) {
            for (let i = 0; i < gridChildren.length; i++) {
              if (Number(gridChildren[i].dataset.row) == targetRow) {
                // Change this code to include the height and width of the board

                if (
                  Number(gridChildren[i].dataset.column) >= targetColumn &&
                  Number(gridChildren[i].dataset.column) <=
                    targetColumn + length - 1
                ) {
                  gridChildren[i].classList.add("to-place")
                }
              }
            }
          }

          box.addEventListener("mouseleave", () => {
            if (targetColumn + length - 1 <= 9) {
              for (let i = 0; i < gridChildren.length; i++) {
                if (Number(gridChildren[i].dataset.row) == targetRow) {
                  // Change this code to include the height and width of the board

                  if (
                    Number(gridChildren[i].dataset.column) >= targetColumn &&
                    Number(gridChildren[i].dataset.column) <=
                      targetColumn + length - 1
                  ) {
                    gridChildren[i].classList.remove("to-place")
                  }
                }
              }
            }
          })
        }
      })
    })
  }

  const showModal = (modalId) => {
    const modal = document.getElementById(modalId)
    modal.style.display = "block"
  }

  const showPlacingBoard = (modalId, board, gridId) => {
    showModal(modalId)
    drawPlacingBoard(modalId, board, gridId)
  }

  const hideModal = (modalId) => {
    const modal = document.getElementById(modalId)
    modal.style.display = "none"
  }

  const shipButtonListener = (ship, modalId) => {
    const button = document.querySelector(
      `#${modalId} .modal-content .change-orientation`
    )

    button.addEventListener("click", () => {
      ship.toggleOrientation()
    })
  }

  return {
    drawBoards,
    drawBoard,
    drawPlacingBoard,
    tileListeners,
    showPlacingBoard,
    showModal,
    hideModal,
    shipButtonListener,
    tileHoverListeners,
  }
}

export default renderer
