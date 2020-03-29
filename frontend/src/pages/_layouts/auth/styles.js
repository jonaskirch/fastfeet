import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  padding: 40px 20px;
  border-radius: 5px;

  img {
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    label {
      color: #444;
      text-align: left;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 9px;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      margin-bottom: 15px;
      font-size: 16px;
      color: #999;
    }

    span {
      color: ${colors.error};
      margin-bottom: 15px;
      font-weight: bold;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 0;
    padding: 10px 20px;
    height: 45px;
    background: ${colors.primary};
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${colors.primaryDark};
    }

    & > * {
      margin: auto;
      margin-right: 10px;
    }
  }
`;
