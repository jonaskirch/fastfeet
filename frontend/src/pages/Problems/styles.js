import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 80px;

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

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ModalStyle = styled.div`
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
