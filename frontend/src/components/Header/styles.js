import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #ddd;
  padding: 0 20px;

  div {
    padding: 15px;
    display: flex;
    align-items: center;

    img {
      width: 160px;
      max-height: 100%;
      padding-right: 20px;
      border-right: 1px solid #ddd;
      margin-right: 20px;
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
      color: #666666;
      margin-bottom: 3px;
    }

    button {
      font-size: 12px;
      color: #de3b3b;
      border: 0;
      background: none;
    }
  }
`;

export const MenuItem = styled.li`
  display: inline;
  color: ${props => (props.active ? '#444444' : '#999999')};
  margin-right: 15px;
  font-size: 12;
  font-weight: bold;
`;
