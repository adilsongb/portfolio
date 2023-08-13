import styled from 'styled-components'

export const ProjectsSection = styled.section`
  background-color: ${props => props.theme.color.intermediary};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h2 {
    font-size: 30px;
    background-color: #ffffff;
    color: ${props => props.theme.color.textBox};
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 40px;
    box-shadow: 10px 10px 0 ${props => props.theme.color.primary};
  }

  @media screen and (max-width: 780px) {
    h2 {
      font-size: 20px;
    }
  }
`

export const ProjectsList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  .project {
    border-radius: 5px;
    width: 300px;
    height: 200px;
    background-color: ${props => props.theme.color.primary};
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
`
