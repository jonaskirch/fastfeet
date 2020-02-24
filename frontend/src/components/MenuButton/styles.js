import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;

  div {
    margin: 0;
    padding: 0;
    display: inline;
  }
`;

export const MenuList = styled.ul`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 200px;
  top: 30px;
  left: calc(50% - 100px);
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px 10px;
  border-radius: 5px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 90px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ddd;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  color: #999;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  & > * {
    margin-right: 5px;
  }

  a {
    color: #999;
  }

  a:hover {
    color: #666;
    font-weight: bold;
  }
`;
