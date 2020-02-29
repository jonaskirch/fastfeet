import styled from 'styled-components';
import { lighten } from 'polished';

const statusColor = {
  ENTREGUE: '#2ca42b',
  CANCELADA: '#DE3B3B',
  RETIRADA: '#4D85EE',
  PENDENTE: '#C1BC35',
};

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

export const Deliveryman = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  background: #ddd;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 0;
  margin-right: 5px;
`;

export const Status = styled.div`
  position: relative;
  display: inline;
  /* margin: auto; */
  border-radius: 15px;
  font-weight: bold;
  padding: 5px 10px 5px 20px;
  color: ${props => statusColor[props.status]};
  background: ${props => lighten(0.3, statusColor[props.status])};

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    left: 5px;
    background: ${props => statusColor[props.status]};
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
