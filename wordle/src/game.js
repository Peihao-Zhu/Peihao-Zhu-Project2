import './game.css'
import { useNavigate } from 'react-router-dom'

function Game() {
  let navigate = useNavigate()

  const handleNormalClick = () => {
    navigate('/game/normal')
  }

  const handleHardClick = () => {
    navigate('/game/hard')
  }

  return (
    <div className="Game">
      <div className="game-box">
        <h1 className="difficulty">Game Mode Select</h1>
        <div className="difficult-mode">
          <button className="game-btn" onClick={handleNormalClick}>
            Normal
          </button>
          <button className="game-btn" onClick={handleHardClick}>
            Hard
          </button>
        </div>
      </div>
    </div>
  )
}

export default Game
