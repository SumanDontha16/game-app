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
  const dispatch = useDispatch();

  // console.log('..........',JSON.stringify(board));

  const [player, setPlayer] = useState(game.currentPlayer)
  const [result, setResult] = useState({ winner: "none", state: "none" })

  // useEffect(() => {
  //   checkWin()
  //   if (player === "X") {
  //     setPlayer("0")
  //   } else {
  //     setPlayer("X")
  //   }
  // }, [board[0]])

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (row, cell) => {
    console.log('ROW:', row);
    console.log("CELL:", cell)
    dispatch(selectCell(game.currentPlayer, row, cell));
    checkWin();
  }

  const restartGame = () => {
    setPlayer("O");
  };


  const checkWin1 = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const allEqual = currentPattern => currentPattern.every(v => v === currentPattern[0])


  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      currentPattern.forEach((patternCell) => {
        board.forEach((boardCell) => {

        })
      });

      const status = allEqual(currentPattern);
      console.log('Status:', status);
      if (status) {
        setResult({ winner: currentPattern[0], state: "won" });
        return;
      }

    });
  }

  return (
    <div className="BoardContainer">
      <div className="Board">
        <div className="row">
          <Square val={board[0][0]} chooseSquare={() => chooseSquare(0, 0)} />
          <Square val={board[0][1]} chooseSquare={() => chooseSquare(0, 1)} />
          <Square val={board[0][2]} chooseSquare={() => chooseSquare(0, 2)} />
        </div>
        <div className="row">
          <Square val={board[1][0]} chooseSquare={() => chooseSquare(1, 0)} />
          <Square val={board[1][1]} chooseSquare={() => chooseSquare(1, 1)} />
          <Square val={board[1][2]} chooseSquare={() => chooseSquare(1, 2)} />
        </div>
        <div className="row">
          <Square val={board[2][0]} chooseSquare={() => chooseSquare(2, 0)} />
          <Square val={board[2][1]} chooseSquare={() => chooseSquare(2, 1)} />
          <Square val={board[2][2]} chooseSquare={() => chooseSquare(2, 2)} />
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