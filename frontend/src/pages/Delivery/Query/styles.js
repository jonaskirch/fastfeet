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
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Status = styled.div`
  position: relative;
  display: inline;
  /* margin: auto; */
  border-radius: 15px;
  font-weight: bold;
  padding: 5px 10px 5px 20px;
  color: #2ca42b;
  background: ${lighten(0.4, '#2ca42b')};

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    left: 5px;
    background: #2ca42b;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
