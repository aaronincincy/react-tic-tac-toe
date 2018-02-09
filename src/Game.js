import React from 'react'
import Board from './Board'

const initialState = {
  squares: Array.from({length: 9}, (_, index) => null),
  player: 1,
  winners: null,
  draw: false
}

const winningCombinations = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

export default class Game extends React.Component{
  state = initialState

  setStateAsync(state){
    return new Promise(resolve => this.setState(state, resolve))
  }

  async changePlayer(){
    await this.setStateAsync(state => {
      return {
        player: state.player === 1 ? 2 : 1
      }
    })
  }

  async setSquare(index){
    await this.setStateAsync(state => {
      const newSquares = [...state.squares];
      newSquares[index] = state.player;
      return {
        squares: newSquares
      }
    })
  }

  async checkWinners(){
    const playerPickedSquare = cell => this.state.squares[cell-1] === this.state.player
    const combinationIsWinner = combination => combination.every(playerPickedSquare)
    const winningCombination = winningCombinations.find(combinationIsWinner)

    if (winningCombination !== null){
      await this.setStateAsync({
        winners: winningCombination
      })
    }

    return winningCombination !== null;
  }

  async checkDraw(){
    await this.setStateAsync(state => {
      return {
        draw: !state.winners && state.squares.every(square => square !== null)
      }
    })
  }

  async checkGameState(){
    await this.checkWinners();
    await this.checkDraw();
  }

  handleSquareSelect = async (index) => {
    if (this.state.squares[index] === null && !this.state.winners){
      await this.setSquare(index)
      await this.checkGameState()
      if (!this.state.winners && !this.state.draw){
        await this.changePlayer()
      }
    }
  }

  reset = () => {
    this.setState(initialState)
  }

  render(){
    
    return (
      <div>
        <Board draw={this.state.draw} winners={this.state.winners} squares={this.state.squares} onMove={this.handleSquareSelect} />
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}