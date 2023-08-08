import styled from 'styled-components'

export const Intro = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`

export const ButtonsIntro = styled.div`
  a:nth-child(1) {
    border-radius: 5px 0 0 5px;
    border-right: 1px solid transparent;
  }

  a:nth-child(2) {
    border-radius: 0 5px 5px 0;
    border-left: 1px solid;
  }
`

export const Avatar = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${props => props.$colorPrimary};
  border-radius: 50%;
  overflow: hidden;
  animation: fadeInUp;
  animation-duration: 1s;
`
