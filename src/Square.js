import styled from 'styled-components'

export default styled.div`
  display: flex;
  border-size: 1px;
  border-style: solid;
  border-color: ${props => props.selected ? 'red' : 'black'};
  background: ${({winningLine}) => winningLine ? 'green' : 'white'};
`