import styled from 'styled-components';
import { Form as Unform } from '@rocketseat/unform';
import colors from '~/styles/colors';

export const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: 900px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Toolbar = styled.div`
  display: flex;

  * {
    margin-left: 10px;
  }
`;

export const Form = styled(Unform)`
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
    width: 100%;
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
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
`;
