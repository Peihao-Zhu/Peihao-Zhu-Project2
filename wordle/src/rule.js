import './rule.css'

function Rule() {
  return (
    <div className="Rule">
      <header className="Game-rule">
        <div className="Rule-container">
          <h1 className="headline">How to Play</h1>
          <div>Based on the game difficult mode</div>
          <ol>
            <li>
              <b>normal</b>: 6 opportunities to guess a 6 letter word.
            </li>
            <li>
              <b>hard</b>: 5 opportunities to guess a 7 letter word.
            </li>
          </ol>
          <hr className="separator-line"></hr>
          <p>
            User can hit the key showed in the screen, go back one cell by click
            the backspace button and verify the word with <b>ENTER</b> button.
            Of course, you can click <b>RESET GAME</b> button to reset
            everything with the same difficult mode.
          </p>
          <img
            className="wordle-game-rule"
            alt={'page of wordle game'}
            src={require('./img/wordle-game.png')}
          ></img>
          <div>
            <b>Case 1:</b> If you guess a word less than expected number of
            letters, system will prompt you and let you try again without
            deducting the attempts
          </div>
          <div>
            <b>Case 2:</b> If the length of the word is expected, the color of
            each cell will change to show how close your guess was to the word
          </div>
          <hr className="separator-line"></hr>
          <h3>Examples:</h3>
          <div>We have a word </div>
          <div className="words-container">
            <div className="letter">W</div>
            <div className="letter">I</div>
            <div className="letter">N</div>
            <div className="letter">N</div>
            <div className="letter">E</div>
            <div className="letter">R</div>
          </div>
          <p>Expected word: WINNER</p>
          <div className="words-container">
            <div className="letter">F</div>
            <div className="letter">U</div>
            <div className="letter">T</div>
            <div className="letter">U</div>
            <div className="letter-Yellow">R</div>
            <div className="letter-Yellow">E</div>
          </div>
          <p>
            Letters R and E exist in WINNER, but they are placed in wrong
            positions
          </p>
          <div className="words-container">
            <div className="letter">M</div>
            <div className="letter">O</div>
            <div className="letter">T</div>
            <div className="letter">H</div>
            <div className="letter-Green">E</div>
            <div className="letter-Green">R</div>
          </div>
          <p>Letters E and R are put in the right position</p>
        </div>
      </header>
    </div>
  )
}

export default Rule
