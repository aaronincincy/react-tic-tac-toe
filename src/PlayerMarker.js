import styled from 'styled-components'

const markers = {
  1: 'x',
  2: 'o'
}

export default styled.div`
  &::before{
    font-family: 'Open Sans', sans-serif;
    content: ${props => `'${markers[props.player]}'`};
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 75px;
  }
`