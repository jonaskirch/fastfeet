import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
`;
