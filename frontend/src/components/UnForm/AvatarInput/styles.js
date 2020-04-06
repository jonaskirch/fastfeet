import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  border-radius: 50%;
  border: 4px dotted ${props => (props.avatarExists ? colors.primary : '#ddd')};

  &:hover {
    opacity: 0.7;
  }

  label {
    cursor: pointer;

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
  height: 148px;
  width: 148px;
  border-radius: 50%;
  background: #fff;
  color: #ddd;
`;
