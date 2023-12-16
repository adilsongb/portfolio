import styled from "styled-components";
import { getTextColor } from "../utils/convertColor";

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.secondary};
  margin-bottom: 5px;
  color: ${(props) => getTextColor(props.theme.color.secondary)};
  font-size: 16px;
`;

export const ColorManager = styled.div`
  flex-grow: 1;
  margin-bottom: 10px;

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => getTextColor(props.theme.color.intermediary)};
  }

  div {
    display: flex;
    align-items: center;

    input[type="text"] {
      box-sizing: border-box;
      border-radius: 0 5px 5px 0;
      font-size: 16px;
      padding-left: 10px;
      border: none;
      height: 40px;
      width: 10vw;
    }

    input[type="text"]:focus {
      outline: none;
    }
  }

  #color-picker {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: -4px;
  }
  #color-picker::-webkit-color-swatch {
    border-radius: 5px 0 0 5px;
    border: 2px solid #eee;
  }
  #color-picker::-moz-color-swatch {
    border-radius: 5px 0 0 5px;
    border: 2px solid #eee;
  }
`;
