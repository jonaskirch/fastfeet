import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 35px;
  width: 35px;

  div {
    margin: 0;
    padding: 0;
    display: inline;
  }
`;

export const Button = styled.button`
  border: 0;
  background: none;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #eee;
  }

  svg {
    margin-right: 0;
  }
`;

export const MenuList = styled.ul`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  z-index: 999;
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
  color: #999;
  height: 35px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  & * {
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
