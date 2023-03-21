import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Gamekeyboard from './Keyboard/Gamekeyboard'
import './grid.css'
import WordleContext from './WordleContext'

function Grid(props) {
  // fetch the global variables in context
  const {
    gridDataObject,
    rows,
    cols,
    rowObject,
    colObject,
    answerObject,
    mode,
  } = useContext(WordleContext)

  const [gridData, setGridData] = gridDataObject
  //id:rowIndex*props.cols+colIndex value: 0,1,2
  const [boxStatus, setBoxStatus] = useState([])
  const [attempt, setAttempt] = useState(props.rows)
  const [answer, handleAnswer] = answerObject
  const [row, setRow] = rowObject
  const [col, setCol] = colObject

  function handleGridChange(newWord) {
    setGridData(newWord)
  }

  // each time we hit a button, process corresponding logic here
  function handleButton(e) {
    let curWord = [...gridData]
    switch (e) {
      // check the word
      case 'Enter':
        if (col === cols) {
          if (checkLetters(curWord, row, answer)) {
            // congraduate users and exit the program
            setTimeout(() => {
              const tryAgain = window.confirm(
                'Congratulations!  Would you like to try again?',
              )
              if (tryAgain) {
                // reset the program
                resetGame()
              } else {
                // exit the program
                window.stop()
              }
            }, 80)
          } else {
            // deduct user's attempt
            // if there are remaining attempts, reset the current row and col cursor
            if (attempt !== 1) {
              setRow((row) => row + 1)
              setCol((col) => 0)
              setAttempt((att) => att - 1)
            } else {
              // exit the program or reset the program
              window.stop()
            }
          }
          return
        } else {
          // prompt that user "not enough letters"
          toast.warning('not enough letters', {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
        return
      case 'Backspace':
        if (curWord.length > 0) {
          //delete the last character in current row
          curWord[row][col - 1] = ''
          setCol(col - 1)
        }
        break
      // english letters
      default:
        if (col === cols) {
          return
        }
        curWord[row][col] += e
        setCol((col) => col + 1)
        break
    }
    handleGridChange(curWord)
  }

  function resetGame() {
    // reset the program
    setGridData(createGridData(rows, cols))
    setBoxStatus((prevBoxStatus) => [])
    setAttempt((att) => rows)
    setRow((row) => 0)
    setCol((col) => 0)
    handleAnswer(mode)
  }

  // check the word in row of curWord board with the answer
  function checkLetters(curWord, row, answer) {
    const map = new Map()
    //items in the set have been compared
    const set = new Set()
    let flag = true
    let arrOfBox = []
    addItemInMap(map, answer)

    for (let i = 0; i < cols; i++) {
      if (curWord[row][i] === answer[i]) {
        if (map.get(answer[i]) > 0) {
          //key: rowIndex*props.cols+colIndex,  location and value correct
          arrOfBox.push({ id: row * cols + i, value: '2' })
          map.set(answer[i], map.get(answer[i]) - 1)
          set.add(i)
        }
      } else {
        flag = false
      }
    }
    for (let j = 0; j < cols; j++) {
      if (set.has(j)) continue
      for (let k = 0; k < answer.length; k++) {
        //values are same but location are different
        if (
          !set.has(j) &&
          curWord[row][j] === answer[k] &&
          map.get(answer[k]) > 0
        ) {
          arrOfBox.push({ id: row * cols + j, value: '1' })
          map.set(answer[k], map.get(answer[k]) - 1)
          set.add(j)
        }
      }
    }
    setBoxStatus((prevBoxStatus) => [...prevBoxStatus, ...arrOfBox])
    return flag
  }

  function updateColorOfBox(rowIndex, cols, colIndex) {
    let status = 'none'
    boxStatus.forEach((item) => {
      if (item.id === rowIndex * cols + colIndex) {
        status = item.value === '1' ? 'yellow' : 'green'
      }
    })
    return status
  }

  // Render the grid
  return (
    <div className="game-page">
      <h1 className="title"> Wordle</h1>
      <div className="grid">
        {gridData.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                className="rowItem"
                key={colIndex}
                data-state={updateColorOfBox(rowIndex, cols, colIndex)}
              >
                {gridData[rowIndex][colIndex]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <br />
      <div className="my-game-keyboard">
        <Gamekeyboard
          lines={gridData[row][col]}
          answer={answer}
          onClick={(e) => handleButton(e)}
        />
      </div>
      <button className="reset-btn" onClick={() => resetGame()}>
        RESET GAME
      </button>
      <ToastContainer />
    </div>
  )
}

function createGridData(rows, cols) {
  // Initialize grid data to empty strings
  const data = Array(rows)
    .fill()
    .map(() => Array(cols).fill(''))
  return data
}

function addItemInMap(map, answer) {
  for (let i = 0; i < answer.length; i++) {
    const key = answer[i]
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
}

export default Grid
