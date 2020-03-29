import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import colors from '~/styles/colors';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.fullWidth && '100%'};
  border: 0;
  padding: 10px 20px;
  height: 36px;
  background: ${props => (props.color ? props.color : colors.primary)};
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: ${props =>
      darken(0.2, props.color ? props.color : colors.primary)};
  }

  & > * {
    margin: auto;
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
