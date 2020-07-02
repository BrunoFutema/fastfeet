import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Content from './Content';

import { CustomButton, CustomLink } from './styles';

export default function Button({
  color,
  fontColor,
  fontSize,
  fontWeight,
  text,
  type,
  url,
}) {
  return (
    <>
      {type === 'button' || type === 'submit' ? (
        <CustomButton
          color={color}
          type={`${type === 'submit' ? 'submit' : 'button'}`}
        >
          <Content
            fontColor={fontColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            text={text}
          />
        </CustomButton>
      ) : (
        <CustomLink
          color={color}
          type={`${type === 'submit' ? 'submit' : 'button'}`}
        >
          <Link to={url}>
            <Content
              fontColor={fontColor}
              fontSize={fontSize}
              fontWeight={fontWeight}
              text={text}
            />
          </Link>
        </CustomLink>
      )}
    </>
  );
}

Button.defaultProps = {
  fontSize: 16,
  fontWeight: 'bold',
  type: 'button',
  url: '',
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  url: PropTypes.string,
};
