import styled from 'styled-components'

export const Title = styled.h1`
  color: whitesmoke;
  font-size: 3em;
  text-shadow: 1px 3px 0 ${props => props.$colorPrimary};
  margin-bottom: 0;
  animation: fadeInUp;
  animation-duration: 1.2s;
`

export const Subtitle = styled.h2`
  color: ${props => props.$colorPrimary};
  margin: 30px;
  animation: fadeInUp;
  animation-duration: 1.4s;
`
