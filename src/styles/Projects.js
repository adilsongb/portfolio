import styled from 'styled-components';
import { hexToRgbWithOpacity } from '../utils/convertColor';

export const ProjectsSection = styled.section`
  background-color: ${(props) => props.theme.color.intermediary};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;

  h2 {
    font-size: 30px;
    background-color: #ffffff;
    color: ${(props) => props.theme.color.textBox};
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 40px;
    box-shadow: 10px 10px 0 ${(props) => props.theme.color.primary};
  }

  @media screen and (max-width: 780px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const ProjectsList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  .project {
    border-radius: 5px;
    width: 300px;
    height: 200px;
    background-color: ${(props) => props.theme.color.primary};
    overflow: hidden;
    cursor: pointer;
  }

  .project > div {
    height: 100%;
  }

  .project > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s ease-in-out;
  }

  .project > div:hover > img {
    transform: scale(1.1);
  }

  .project > div:hover > .details {
    visibility: visible;
    opacity: 1;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 980px) {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    .project {
      box-sizing: border-box;
      scroll-snap-align: center center;
      scroll-margin: 65px;
      flex-shrink: 0;
      margin-right: 1vw;
      width: 66vw;
      height: 40vw;
    }

    .project:first-child {
      margin-left: 20em;
    }

    .project:last-child {
      margin-right: 10em;
    }
  }
`;

export const ProjectModal = styled.div`
  background-color: ${(props) =>
    hexToRgbWithOpacity(props.theme.color.intermediary, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  animation: fadeIn;
  animation-duration: 0.5s;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  .projectDetail {
    background-color: ${(props) => props.theme.color.secondary};
    border-radius: 5px;
    overflow: hidden;
    width: 500px;
    height: min-content;
    padding-bottom: 5px;
    bottom: 0;
    animation: fadeInUpBig;
    animation-duration: 0.5s;
  }

  .projectDetail > .thumb {
    width: 100%;
    height: 300px;
    background-color: ${(props) => props.theme.color.primary};
    position: relative;
  }

  .projectDetail > .thumb > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumb > .close-btn {
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 10px;
    font-size: 30px;
    background-color: whitesmoke;
    color: #3d3d3d;
    border: none;
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }

  .content-infos {
    color: ${(props) => props.theme.color.primary};
    padding: 5px 10px;
    position: relative;
  }

  .content-infos > h3 {
    font-size: 30px;
    margin: 15px 0;
  }

  .content-infos > p {
    color: ${(props) => props.theme.color.textTitle};
    font-size: 20px;
    margin-top: 30px;
  }

  .content-infos > span {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    margin-right: 8px;
    padding: 5px 10px;
    border-radius: 2px;
    margin-bottom: 10px;
    display: inline-block;
  }

  .links {
    display: flex;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .links > a {
    text-decoration: none;
    font-size: 20px;
    color: ${(props) => props.theme.color.primary};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${(props) => props.theme.color.primary};
    transition: 0.2s ease-in-out;
  }

  .links > a:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    border: 2px solid ${(props) => props.theme.color.primary};
  }

  .links > a:nth-child(1) {
    border-radius: 5px 0 0 5px;
    border-right: 1px solid;
  }

  .links > a:nth-child(1):hover {
    border-right: 1px solid ${(props) => props.theme.color.primary};
  }

  .links > a:nth-child(2) {
    border-radius: 0 5px 5px 0;
    border-left: 1px solid;
  }

  .links > a:nth-child(2):hover {
    border-left: 1px solid ${(props) => props.theme.color.primary};
  }

  @media screen and (max-width: 780px) {
    .cont-projectDetail {
      justify-content: center;
      align-items: flex-end;
    }

    .projectDetail {
      width: 80%;
      position: absolute;
      border-radius: 5px 5px 0 0;
    }
  }

  @media screen and (max-width: 650px) {
    .projectDetail {
      border-radius: 20px 20px 0 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    .links > a {
      font-size: 4vw;
    }
  }
`;
