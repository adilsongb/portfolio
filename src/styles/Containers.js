import styled from 'styled-components';
import { adjustColorBrightness } from '../utils/convertColor';

export const FullScreen = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-inline: 1em;
  }
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.color.header};
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  .title-home {
    font-size: 1.5em;
  }

  h1 > a,
  li > a {
    text-decoration: none;
    color: ${(props) => props.theme.color.headerText};
  }

  nav > ul {
    display: flex;
    list-style: none;
    padding: 0;
    align-items: center;

    @media screen and (max-width: 580px) {
      align-items: normal;
    }
  }

  nav > ul > li {
    margin-left: 2vw;
    font-weight: bold;
  }

  nav a {
    transition: 0.3s ease-out;

    @media screen and (max-width: 580px) {
      color: ${(props) => props.theme.color.textTitle};
    }
  }

  .buttonMenuMobile {
    display: none;
    background: none;
    border: none;
    position: relative;
    z-index: 1;
  }

  .iconMenu {
    width: 30px;
    height: 4px;
    background-color: ${(props) => props.theme.color.headerText};
    border-radius: 5px;
    margin: 6px 0;
    transition: 0.2s;
  }

  /* Rotate first bar */
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-6px, 6px);
    transform: rotate(-45deg) translate(-6px, 6px);
  }

  /* Fade out the second bar */
  .change .bar2 {
    opacity: 0;
  }

  /* Rotate last bar */
  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }

  @media screen and (max-width: 580px) {
    header {
      justify-content: space-between;
      padding: 0 20px;
      position: relative;
    }

    .buttonMenuMobile {
      display: block;
    }

    nav {
      background-color: ${(props) => props.theme.color.intermediary};
      position: absolute;
      right: 20px;
      top: 70px;
      width: 180px;
      height: 0;
      border-radius: 5px;
      transition: 0.5s;
      overflow: hidden;
    }

    nav > ul {
      flex-direction: column;
      justify-content: space-around;
      height: 150px;
      margin: 0;
    }
  }
`;

export const Intro = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);

  @media screen and (max-width: 1024px) {
    width: 100%;

    h1 {
      font-size: 2.5em;
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    h1 {
      font-size: 2em;
    }
  }
`;

export const ButtonsIntro = styled.div`
  a:nth-child(1) {
    border-radius: 5px 0 0 5px;
    border-right: 1px solid transparent;
  }

  a:nth-child(2) {
    border-radius: 0 5px 5px 0;
    border-left: 1px solid;
  }
`;

export const Avatar = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 50%;
  overflow: hidden;
  animation: fadeInUp;
  animation-duration: 1s;
`;

export const BoxContent = styled.div`
  margin: 5px 0;
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.color.intermediary};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.primary};
  }
`;

export const Card = styled.div`
  background-color: ${(props) =>
    adjustColorBrightness(props.theme.color.intermediary, 20)};
  border-radius: 2px;
  display: flex;
  margin-bottom: 10px;
  overflow: hidden;
  height: 5rem;

  #card-img {
    background-color: ${(props) =>
      adjustColorBrightness(props.theme.color.intermediary, 50)};
    width: 30%;
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  #card-content {
    display: flex;
    padding: 10px;
    align-items: center;
  }

  &:hover {
    background-color: ${(props) =>
      adjustColorBrightness(props.theme.color.intermediary, 50)};
  }
`;

export const ListWrap = styled.div`
  flex-direction: row;
`;

export const DivisorLine = styled.hr`
  border: 1px solid
    ${(props) => adjustColorBrightness(props.theme.color.intermediary, 50)};
`;
