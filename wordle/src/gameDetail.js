import React, { useState } from 'react'
import Grid from './grid'
import WordleContext from './WordleContext'

// Got these words from ChatGPT
const normalWords = [
  'NUMBER',
  'PEOPLE',
  'BEFORE',
  'LETTER',
  'LITTLE',
  'YELLOW',
  'WINDOW',
  'BOTTLE',
  'BUTTON',
  'BATTLE',
]
const hardWords = [
  'ABALONE',
  'BANDANA',
  'CHICKEN',
  'DOLPHIN',
  'ECLIPSE',
  'FURNACE',
  'GAZELLE',
  'HADDOCK',
  'INQUIRY',
  'JAVELIN',
]

function GameDetail(props) {
  const [gridData, setGridData] = useState(createGridData(props.row, props.col))
  const [row, setRow] = useState(0)
  const [col, setCol] = useState(0)
  const [answer, setAnswer] = useState(GenerateAnswer(props.mode))

  function createGridData(rows, cols) {
    // Initialize grid data to empty strings
    const data = Array(rows)
      .fill()
      .map(() => Array(cols).fill(''))
    return data
  }

  function GenerateAnswer(mode) {
    return mode === 'normal'
      ? normalWords[Math.floor(Math.random() * normalWords.length)]
      : hardWords[Math.floor(Math.random() * hardWords.length)]
  }

  function handleAnswer(mode) {
    setAnswer(GenerateAnswer(mode))
  }

  return (
    <WordleContext.Provider
      value={{
        gridDataObject: [gridData, setGridData],
        rows: props.row,
        cols: props.col,
        rowObject: [row, setRow],
        colObject: [col, setCol],
        answerObject: [answer, handleAnswer],
        mode: props.mode,
      }}
    >
      <Grid />
    </WordleContext.Provider>
  )
}

export default GameDetail
