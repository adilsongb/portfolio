import styled, { css } from 'styled-components';
import { adjustColorBrightness, getTextColor } from '../utils/convertColor'

export const AdminPainel = styled.div`
  --adjust-primary: ${props => adjustColorBrightness(props.theme.color.primary, 20)};
  --intermediary: ${props => props.theme.color.intermediary};
  --adjust-intermediary: ${props => adjustColorBrightness(props.theme.color.intermediary, 20)};

  position: fixed;
  width: 80px;
  height: 80px;
  background-color: var(--adjust-intermediary);
  bottom: 10vh;
  right: 10vh;
  border-radius: 5px;
  transition: 0.3s;
  
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  section {
    opacity: 0;
  }

  svg {
    fill: var(--adjust-primary);
    font-size: 2em;
  }

  .closeButton {
    fill: var(--adjust-intermediary);
  }

  @media screen and (max-width: 1024px) {
    bottom: 2vh;
    right: 2vh;
  }

  ${props => props.$showPainel && css`
    display: block;
    padding: 10px;
    width: 30vw;
    height: 50vh;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: auto;

    section {
      height: 100%;
      opacity: 0;
      animation: fadeIn 0.5s 0.2s forwards;
    }

    svg {
      display: none;
    }

    .closeButton {
      display: block;
    }

    .tabs {
      background-color: var(--intermediary);
      display: inline-block;
      padding: 10px;
      border-radius: 5px;
      height: 5%;
    }

    .content {
      margin: 5px 0;
      width: 100%;
      height: 80%;
      background-color: var(--intermediary);
      border-radius: 5px;
      padding: 10px;
      box-sizing: border-box;
      overflow-y: scroll;
      display: flex;
      flex-wrap: wrap;

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

      .color-manager {
        flex-grow: 1;
        margin-bottom: 10px;

        span {
          font-size: 18px;
          font-weight: 600;
          color: ${getTextColor(props.theme.color.intermediary)};
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
      }

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: ${props => props.theme.color.secondary};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.primary};
      }
    }

    .actions {
      display: flex;

      button:first-child {
        margin-right: 5px;
      }
    }
  `}

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const TabNav = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: ${props => getTextColor(props.theme.color.intermediary)};
  font-weight: 600;

  ${props => props.$selected && css`
    background-color: var(--adjust-intermediary);
    color: ${getTextColor(adjustColorBrightness(props.theme.color.intermediary, 20))};
  `}

  :not(:first-child):not(:last-child) {
    margin: 10px;
  }   
`
