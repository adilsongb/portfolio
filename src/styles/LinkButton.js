import styled, { css } from 'styled-components'

export const LinkButton = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.color.primary};
  color: ${props => props.theme.color.primary};
  font-weight: 600;
  padding: 10px 15px;
  animation: fadeInUp;
  animation-duration: 1.6s;
  text-decoration: none;

  ${props => props.$isPrimary && css`
    background: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.secondary};
  `}
`
