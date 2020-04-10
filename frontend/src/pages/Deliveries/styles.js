import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '~/styles/colors';

const statusColor = {
  ENTREGUE: '#2ca42b',
  CANCELADA: '#DE3B3B',
  RETIRADA: '#4D85EE',
  PENDENTE: '#C1BC35',
};

export const Container = styled.div`
  padding: 30px 120px;

  table button {
    display: flex;
    align-items: center;
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

export const Deliveryman = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
  }
`;

export const Status = styled.div`
  position: relative;
  display: inline;
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

export const FilterButton = styled.div`
  padding: 10px 20px;
  border: 1px solid ${props => (props.active ? colors.primary : '#ddd')};
  background: #fefefe;
  color: ${props => (props.active ? '#333' : '#666')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 40px;

  svg {
    color: ${props => (props.active ? colors.primary : '#999')};
    margin-right: 5px;
  }

  &:hover {
    background: #ddd;
    cursor: pointer;
  }
`;

export const ModalStyle = styled.div`
  min-width: 400px;

  span {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin-bottom: 10px;
    color: #666;
  }

  hr {
    margin-bottom: 10px;
    border-top: 1px solid #fefefe;
  }

  img {
    height: 250px;
    width: 400px;
  }
`;
