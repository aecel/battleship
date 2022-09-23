import style from "./style.css"
import modal from "./modal.css"
import newGame from "./newGame.js"
import newPlayer from "./newPlayer.js"
import renderer from "./renderer.js"

const height = 10
const width = 10

const player1 = newPlayer({ name: "Ace" })
const player2 = newPlayer({ name: "AceBot"})

const myGame = newGame([player1, player2], [height, width])
myGame.startGame()
// myGame.gameLoop()
