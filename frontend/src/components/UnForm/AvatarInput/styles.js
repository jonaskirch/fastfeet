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
      height: 148px;
      width: 148px;
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
  height: 148px;
  width: 148px;
  border-radius: 50%;
  border: 4px dotted #ddd;
  background: #fff;
  color: #ddd;
`;

export const AvatarName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 148px;
  width: 148px;
  border-radius: 50%;
  border: 4px dotted #a28fd0;
  background: #f4effc;
  color: #a28fd0;
  font-size: ${props => (props.nameSize > 3 ? 40 : 66)}px;
`;
