import styled from 'styled-components';

export const AboutMeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  height: 100vh;

  .photoProfile {
    width: 30%;
  }

  .contPhoto {
    width: 18vw;
    height: 18vw;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: -20px -20px 0 ${props => props.theme.color.primary};
  }

  .contPhoto > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .infos {
    width: 40%;
  }

  .infos > h2 {
    font-size: 30px;
    color: ${props => props.theme.color.primary};
  }

  .infos > p {
    color: ${props => props.theme.color.textTitle};
    font-size: 20px;
  }

  .infos > span {
    display: inline-block;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.secondary};
    padding: 5px 10px;
    margin-right: 8px;
    margin-bottom: 10px;
    border-radius: 2px;
  }

  @media screen and (min-width: 1700px) {
    .photoProfile {
      width: 500px;
    }

    .contPhoto {
      width: 300px;
      height: 300px;
      box-shadow: -10px -10px 0 ${props => props.theme.color.primary};
    }

    .infos {
      width: 700px;
    }
  }

  @media screen and (max-width: 1500px) {
    .photoProfile {
      width: 30%;
    }

    .infos {
      width: 60%;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    text-align: center;

    .contPhoto {
      width: 200px;
      height: 200px;
      box-shadow: -10px -10px 0 ${props => props.theme.color.primary};
    }

    .photoProfile {
      width: 80%;
    }

    .infos {
      width: 80%;
    }
  }
`
