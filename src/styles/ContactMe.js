import styled from 'styled-components';

export const ContactMeSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.intermediary};
  justify-content: center;
  align-items: center;
  width: 100%;
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

  .socialLinks {
    margin-bottom: 20px;
  }

  .socialLinks > a {
    display: inline-block;
    font-size: 20px;
    text-decoration: none;
    color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.secondary};
    border-radius: 5px;
    padding: 15px 20px;
    padding-top: 20px;
    border: none;
  }

  .socialLinks > a:nth-child(2) {
    margin: 0 10px;
  }

  form {
    width: 600px;
  }

  form > input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    margin-bottom: 10px;
    color: ${(props) => props.theme.color.textTitle};
    padding: 10px;
    font-size: 18px;
    border: 2px solid ${(props) => props.theme.color.primary};
    border-radius: 5px;
  }

  form > input::placeholder {
    color: ${(props) => props.theme.color.textTitle};
  }

  form > input:focus {
    outline: none;
  }

  form > textarea {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background-color: transparent;
    box-sizing: border-box;
    color: ${(props) => props.theme.color.textTitle};
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: 2px solid ${(props) => props.theme.color.primary};
    border-radius: 5px;
    resize: none;
  }

  form > textarea::placeholder {
    color: ${(props) => props.theme.color.textTitle};
  }

  form > textarea:focus {
    outline: none;
  }

  form > button {
    float: right;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 25px;
    font-size: 16px;
  }

  @media screen and (max-width: 780px) {
    h2 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 700px) {
    form {
      width: 80%;
    }
  }
`;
