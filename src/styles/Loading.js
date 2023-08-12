import styled from 'styled-components'

export const Loading = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  border:8px solid;
  border-color: ${props => props.theme.color.intermediary};
  border-right-color: ${props => props.theme.color.primary};
  animation: loading 1s infinite linear;

  @keyframes loading { to { transform: rotate(1turn) } }
`
