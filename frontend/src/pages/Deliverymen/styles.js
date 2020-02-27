import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  padding: 30px 80px;
  /* display: flex; */
  /* flex-direction: column; */
  /* margin: auto; */
  /* align-items: center; */
  /* justify-content: center; */

  > div {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  table button {
    display: flex;
    border: 0;
    background: none;
    color: #999;

    & > * {
      margin-right: 5px;
    }

    &:hover {
      color: #666;
      font-weight: bold;
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Avatar = styled.img`
  background: red;
  color: red;
  border-color: red;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
`;
