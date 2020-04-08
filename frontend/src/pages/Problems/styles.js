import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 120px;

  table button {
    display: flex;
    border: 0;
    background: none;
    color: #999;
    height: 100%;
    width: 100%;

    &:hover {
      color: #666;
      font-weight: bold;
    }
  }

  table a {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #444;
  font-weight: bold;
  margin-bottom: 35px;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ModalStyle = styled.div`
  min-width: 600px;
  span {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
    font-size: 12px;
  }

  p {
    margin-bottom: 10px;
    color: #666;
  }
`;
