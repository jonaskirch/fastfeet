import styled from 'styled-components';
import { Form as Unform } from '@rocketseat/unform';
import colors from '~/styles/colors';

export const Container = styled.div`
  margin: 30px auto;
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
  font-size: 24px;
  color: #444;
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
    color: #444;
    text-align: left;
    font-weight: bold;
    margin-bottom: 9px;
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
  padding: 25px;
  border-radius: 4px;
`;
