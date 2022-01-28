import React, { useState, useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import Square from '../square'
import { Patterns } from '../patterns'
import { selectCell } from '../../store/actions/moves';

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

const getRandomCell = (i) => Math.floor(Math.random() * i)

export const Board = () => {
  const board = useSelector(selectBoard)
  const game = useSelector(selectGame)
  const dispatch = useDispatch()

  const [player, setPlayer] = useState(game.currentPlayer)
  const [result, setResult] = useState({ winner: "none", state: "none" })

  // useEffect(() => {
  //   checkWin()
  //   if (player === "X") {
  //     setPlayer("0")
  //   } else {
  //     setPlayer("X")
  //   }
  // }, [board])

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`)
    }
  }, [result])

  const chooseSquare = sqaure => {
    board.map((val, idx) => console.log(val))
  }


  // board.map((val) => {
  //   val.map((item, idx) => {
  //     if (idx === sqaure && item === "") {
  //       return player
  //     }
  //     return item
  //   })
  //   if (player === "X") {
  //     setPlayer("0")
  //   } else {
  //     setPlayer("X")
  //   }
  // })

  // const checkWin = () => {
  //   Patterns.forEach((currentPattern) => {
  //     const firstPlayer = board[currentPattern[0]];
  //     if (firstPlayer === "") return;
  //     let foundWinnerPattern = true;
  //     currentPattern.forEach((idx) => {
  //       if (board[idx] !== firstPlayer) {
  //         foundWinnerPattern = false
  //       }
  //     })
  //     if (foundWinnerPattern) {
  //       setResult({ winner: player, state: "won" })
  //     }
  //   })
  // }

  return (
    <div className="BoardContainer">
      <div className="Board">
        <div className="row">
          <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className="row">
          <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
        <button onClick={() => dispatch(
          selectCell(
            game.currentPlayer,
            getRandomCell(board.length),
            getRandomCell(board.length)
          )
        )}>
          {game.currentPlayer}
        </button>
      </div>

    </div>
  )
}