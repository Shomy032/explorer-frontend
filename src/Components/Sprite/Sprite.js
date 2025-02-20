import React from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components';
import { ICON_NAMES } from 'consts';

const Svg = styled.svg`
  width: ${({ size, width }) => width || size};
  height: ${({ size, height }) => height || size};
  transform: ${({ flipX }) => flipX && `scaleX(-1)`} ${({ flipY }) => flipY && `scaleY(-1)`}
    ${({ spin }) => Boolean(spin) && `rotate(${spin}deg)`};
`;

const Sprite = ({ color, alt, icon, ...svgIcons }) => {
  const theme = useTheme();

  // Use the variable color name if it exists, else the actual color passed in, or else default color
  const colorValue = theme[color] ? theme[color] : color || theme.ICON_PRIMARY;

  return (
    <Svg {...svgIcons} alt={alt || `${icon} icon`} color={colorValue}>
      <use href={`#${icon}`} />
    </Svg>
  );
};

Sprite.propTypes = {
  alt: PropTypes.string,
  flipX: PropTypes.bool,
  flipY: PropTypes.bool,
  height: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  spin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  color: PropTypes.string,
};

Sprite.defaultProps = {
  alt: null,
  flipX: false,
  flipY: false,
  height: null,
  spin: 0,
  size: '100%',
  width: null,
  color: '',
};

// Exposes Icon constant so it doesn't need to be imported separately when consuming component
Sprite.Icon = ICON_NAMES;

export default Sprite;
