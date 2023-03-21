import './home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="Home">
      <div className="home-box">
        <h1>Welcome to Wordle Game</h1>
        <nav>
          <ul className="choice-box">
            <li>
              <Link to="/rule">Rules</Link>
              <Link to="/game">Play</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Home
