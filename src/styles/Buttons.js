import styled from 'styled-components';
import { adjustColorBrightness, getTextColor } from '../utils/convertColor';

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  font-size: 30px;
  background-color: transparent;
  border: none;
  height: 40px;
  width: 40px;

  svg {
    fill: ${props => getTextColor(props.theme.color.secondary)} !important;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.color.primary};
  color: ${props => getTextColor(props.theme.color.primary)};
  border: none;
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;

  &:disabled {
    background-color: ${props => props.theme.color.intermediary};
    color: ${props => adjustColorBrightness(props.theme.color.intermediary, 20)};
    cursor: default;
  }
`
