import './gamekeyboard.css'
import Keyboardrow from './Keyboardrow'

// code related to Keyboard is referred from https://github.com/jeffreylederer/wordle
// but I made my own change
function Gamekeyboard({ lines, answer, onClick, className }) {
  return (
    <div className={`keyboard ${className}`}>
      <Keyboardrow
        letters="QWERTYUIOP"
        onClick={onClick}
        lines={lines}
        answer={answer}
      />
      <Keyboardrow
        letters="ASDFGHJKL"
        onClick={onClick}
        lines={lines}
        answer={answer}
      />
      <Keyboardrow
        letters="ZXCVBNM"
        onClick={onClick}
        lines={lines}
        answer={answer}
      />
    </div>
  )
}

export default Gamekeyboard
