import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Rule from './rule.js'
import Home from './home'
import Game from './game'
import GameDetail from './gameDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rule" element={<Rule />} />
        <Route path="game" element={<Game />} />
        <Route
          path="/game/normal"
          element={<GameDetail row={6} col={6} mode="normal" />}
        />
        <Route
          path="/game/hard"
          element={<GameDetail row={5} col={7} mode="hard" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
