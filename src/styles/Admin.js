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
  transition: height 0.3s, width 0.3s;
  
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

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
    box-sizing: border-box;
    width: 30vw;
    height: 50vh;
    border-radius: 5px;
    cursor: auto;

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
    }

    .tab {
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      color: ${getTextColor(props.theme.color.intermediary)};
      font-weight: 600;
    }

    .tab:nth-child(1) {
      background-color: var(--adjust-intermediary);
      color: ${getTextColor(adjustColorBrightness(props.theme.color.intermediary, 20))};
    }

    .tab:not(:first-child):not(:last-child) {
      margin: 10px;
    }

    .content {
      margin-top: 10px;
      width: 100%;
      height: 80%;
      background-color: var(--intermediary);
      border-radius: 5px;
      padding: 10px;
      box-sizing: border-box;
      overflow-y: scroll;

      #color-picker {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      #color-picker::-webkit-color-swatch {
        border-radius: 8px;
        border: 2px solid var(--adjust-primary);
      }
      #color-picker::-moz-color-swatch {
        border-radius: 8px;
        border: none;
      }

      .color-manager {
        margin-bottom: 10px;

        span {
          font-size: 20px;
          font-weight: 600;
          color: ${getTextColor(props.theme.color.intermediary)};
        }

        div {
          display: flex;
          align-items: center;

          input[type="text"] {
            box-sizing: border-box;
            border-radius: 5px;
            font-size: 16px;
            padding-left: 10px;
            border: none;
            height: 40px;
          }

          input[type="text"]:focus {
            outline: none;
          }
        }
      }
    }

    .actions {
      display: flex;
    }
  `}
`
