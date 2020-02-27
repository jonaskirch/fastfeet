import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 4px dotted ${colors.primary};
      background: #fff;
    }

    input {
      display: none;
    }
  }
`;

export const AddPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 4px dotted #ddd;
  background: #fff;
  color: #ddd;
`;
