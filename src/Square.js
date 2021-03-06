import styled from 'styled-components'
import PlayerMarker from './PlayerMarker'

const backgrounds = {
  unselected: 'lightgray',
  player1: '#d9edf7',
  player2: '#f2dede',
  draw: '#fcf8e3',
  win: '#dff0d8',
}

const colors = {
  unselected: 'gray',
  player1: '#31708f',
  player2: '#a94442',
  draw: '#8a6d3b',
  win: '#3c763d',
}

export default styled.div`
  border-radius: 10px;
  background: ${({status}) => backgrounds[status]};
  color: ${({status}) => colors[status]};
  cursor: pointer;

  & ${PlayerMarker} {
    opacity: ${({status}) => status === 'unselected' ? 0 : 1};
    transition: 500ms;
  }
  &:hover ${PlayerMarker} {
    opacity: 1;
  }
`