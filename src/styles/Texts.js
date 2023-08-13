import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.theme.color.textTitle};
  font-size: 3em;
  text-shadow: 1px 3px 0 ${props => props.theme.color.primary};
  margin-bottom: 0;
  animation: fadeInUp;
  animation-duration: 1.2s;
`

export const Subtitle = styled.h2`
  color: ${props => props.theme.color.primary};
  margin: 30px;
  animation: fadeInUp;
  animation-duration: 1.4s;
`
