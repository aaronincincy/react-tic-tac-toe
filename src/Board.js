import React from 'react'
import styled from 'styled-components'

import Square from './Square'

const Board = ({className, squares, winners, onMove}) => (
  <div className={className}>
    {squares.map((square, index) => (
      <Square key={index} winningLine={(winners||[]).some(square => square-1 === index)} onClick={() => onMove(index)}>{square}</Square>
    ))}
  </div>
)

export default styled(Board)`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  width:300px;
  height:300px;
`