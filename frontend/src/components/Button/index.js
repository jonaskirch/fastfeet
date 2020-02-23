import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import colors from '~/styles/colors';

const Button = styled.button`
  display: flex;
  align-items: center;
  width: ${props => props.fullWidth && '100%'};
  justify-content: center;
  border: 0;
  padding: 10px 20px;
  background: ${props => (props.color ? props.color : colors.primary)};
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  transition: background 2s;

  &:hover {
    background: ${props =>
      darken(0.2, props.color ? props.color : colors.primary)};
  }

  & > * {
    margin-right: 10px;
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  fullWith: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: colors.primary,
  fullWidth: false,
};

export default Button;
