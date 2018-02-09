import React from 'react'
import styled from 'styled-components'
import PlayerMarker from './PlayerMarker'
import Square from './Square'

const getSquareStatus = (winners, draw, square, index) =>{
  if ((winners||[]).some(square => square-1 === index)) return 'win'
  else if (draw) return 'draw'
  else if (square === 1) return 'player1'
  else if (square === 2) return 'player2'
  return 'unselected'
}

const Board = ({className, currentPlayer, squares, winners, draw, onMove}) => (
  <div className={className}>
    {squares.map((square, index) => (
      <Square key={index} status={getSquareStatus(winners, draw, square, index)} onClick={() => onMove(index)}>
        <PlayerMarker player={square || currentPlayer} />
      </Square>
    ))}
  </div>
)

export default styled(Board)`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-gap: 10px;
  width:300px;
  height:300px;
  margin: 10px auto;
`