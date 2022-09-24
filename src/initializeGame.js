import renderer from "./renderer.js"
import newGame from "./newGame.js"
import newPlayer from "./newPlayer.js"

const initializeGame = () => {
  const myRenderer = renderer()

  const height = 10
  const width = 10

  const player1 = newPlayer({ name: "Player 1", ai: true })
  const player2 = newPlayer({ name: "Player 2", ai: true })

  const myGame = newGame([player1, player2], [height, width])

  myRenderer.showModal("modal3")

  myRenderer.playButtonListener(player1, player2, myGame)
}

export default initializeGame
