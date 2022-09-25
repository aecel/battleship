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
        if (letter == board.getShipTile()) {
          boxDiv.classList.add("unknown-tile")

          // Uncomment these two to see all ships
          // boxDiv.classList.add("ship-tile")
          // boxDiv.style.backgroundColor = "green"
        } else if (letter == board.getHitTile()) {
          boxDiv.classList.add("hit-tile")
        } else if (letter == board.getMissTile()) {
          boxDiv.classList.add("miss-tile")
        } else if (letter == board.getUnknownTile()) {
          boxDiv.classList.add("unknown-tile")
        }
      })
      rowCount++
    })
  }

  const drawPlacingBoard = (modalId, board, gridId) => {
    const height = board.getHeight()
    const width = board.getWidth()

    const modalContent = document.querySelector(`#${modalId} .modal-content`)

    clearChildren(modalContent)

    const placeText = document.createElement("p")
    placeText.classList.add("placetext")
    placeText.id = "placetext" + modalId.slice(-1)
    placeText.textContent = `Place your ships, ${board.getPlayer().getName()}`
    modalContent.appendChild(placeText)

    const grid = document.createElement("div")
    grid.classList.add("grid")
    grid.id = gridId
    grid.style.gridTemplateColumns = `repeat(${height},1fr)`
    grid.style.gridTemplateRows = `repeat(${width},1fr)`
    modalContent.appendChild(grid)

    const button = document.createElement("button")
    button.classList.add("change-orientation")
    button.textContent = "Change ship orientation"
    modalContent.appendChild(button)

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
        if (letter == board.getShipTile()) {
          boxDiv.classList.add("ship-tile")
          boxDiv.classList.add("unknown-tile")
          boxDiv.style.backgroundColor = "rgb(221, 149, 48)"
        } else if (letter == board.getHitTile()) {
          boxDiv.classList.add("hit-tile")
        } else if (letter == board.getMissTile()) {
          boxDiv.classList.add("miss-tile")
        } else if (letter == board.getUnknownTile()) {
          boxDiv.classList.add("unknown-tile")
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
    const boxes = document.querySelectorAll(`#${id} > .unknown-tile`)
    boxes.forEach((box) => {
      box.classList.add("clickable")
      box.addEventListener("click", func)
    })
  }

  const tileHoverListeners = (ship, id) => {
    const grid = document.getElementById(id)
    const gridChildren = grid.children
    const boxes = document.querySelectorAll(`#${id} > .unknown-tile`)
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

    button.addEventListener("click", ship.toggleOrientation)
  }

  const setPlayerNames = (player1, player2) => {
    const playerName1 = document.getElementById("player1")
    playerName1.textContent = `${player1.getName()}`
    const playerName2 = document.getElementById("player2")
    playerName2.textContent = `${player2.getName()}`
  }

  const changeTurnText = (text) => {
    const turnDiv = document.getElementById("turn")
    turnDiv.textContent = text
  }

  const playButtonListener = (player1, player2, myGame) => {
    const playButton = document.getElementById("play-button")

    playButton.addEventListener("click", (e) => {
      e.preventDefault()
      const form = document.getElementById("play-game-form")
      const formData = new FormData(form)
      const player1Name = formData.get("player-1-name")
      const player2Name = formData.get("player-2-name")
      const player1AI = formData.get("player-1-ai")
      const player2AI = formData.get("player-2-ai")
      form.reset()
      hideModal("modal3")

      if (player1Name != "") {
        player1.changeName(player1Name)
      }

      if (player2Name != "") {
        player2.changeName(player2Name)
      }

      player1.changeAI(player1AI)
      player2.changeAI(player2AI)
      myGame.startGame()

      return { player1Name, player2Name }
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
    setPlayerNames,
    changeTurnText,
    playButtonListener,
  }
}

export default renderer
