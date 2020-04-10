import { darken, transparentize } from 'polished';

const primary = '#7D40E7';

export default {
  primary,
  primary25: transparentize(0.75, primary),
  primary50: transparentize(0.5, primary),
  primary75: transparentize(0.25, primary),
  primaryDark: darken(0.2, primary),
  error: '#fb6f91',
};
