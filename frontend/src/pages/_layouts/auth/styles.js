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
    margin-top: 30px;

    label {
      color: #333;
      text-align: left;
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 8px;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      margin-bottom: 20px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: ${colors.error};
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
`;
