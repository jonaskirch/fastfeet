import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ccc;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  margin: ${props => props.margin};

  &:empty {
    background-repeat: repeat-y;
    background-size: 30px;
    background-position: 0;
    animation: shimmer 1s infinite;

    background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 100%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @keyframes shimmer {
    to {
      background-position: 100% 0;
    }
  }
`;
