import './navigationbar.css'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  let navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleGameClick = () => {
    navigate('/game')
  }

  const handleRuleClick = () => {
    navigate('/rule')
  }

  return (
    <div className="Navigation">
      <div className="navigation-box">
        <button className="game-btn" onClick={handleHomeClick}>
          Home
        </button>
        <button className="game-btn" onClick={handleGameClick}>
          Game
        </button>
        <button className="game-btn" onClick={handleRuleClick}>
          Rule
        </button>
      </div>
    </div>
  )
}

export default Navigation
