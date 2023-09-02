import styled from 'styled-components';
import { getTextColor } from '../utils/convertColor';

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.color.primary};
  background-color: ${props => props.theme.color.secondary};
  margin-bottom: 5px;
  color: ${props => getTextColor(props.theme.color.secondary)};
  font-size: 16px;
`
