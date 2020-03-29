import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  padding: 0 30px;
  height: 64px;

  div {
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
      height: 26px;
      padding-right: 30px;
      border-right: 1px solid #ddd;
      margin-right: 30px;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    span {
      font-size: 14px;
      font-weight: bold;
      color: #666;
      margin-bottom: 5px;
    }

    button {
      font-size: 14px;
      color: #de3b3b;
      border: 0;
      background: none;
      margin-bottom: 15px;
    }
  }
`;

export const MenuItem = styled.li`
  display: inline;
  color: ${props => (props.active ? '#444' : '#999')};
  margin-right: 15px;
  font-size: 15px;
  font-weight: bold;
`;
