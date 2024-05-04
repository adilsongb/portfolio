import styled from 'styled-components';
import { getTextColor } from '../utils/convertColor';

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
  display: inline-block;
  margin-bottom: 10px;

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => getTextColor(props.theme.color.intermediary)};
  }

  div {
    display: flex;
    align-items: center;

    input[type='text'] {
      box-sizing: border-box;
      border-radius: 0 5px 5px 0;
      font-size: 16px;
      padding-left: 10px;
      border: none;
      height: 40px;
      width: 10vw;
    }

    input[type='text']:focus {
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

export const SwitchManager = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 20px;

  span {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => getTextColor(props.theme.color.intermediary)};
  }

  label {
    margin-right: 10px;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;

      &::before {
        border-radius: 50%;
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
    }

    input:checked + span {
      background-color: #2196f3;
    }
    input:focus + span {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + span:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;
