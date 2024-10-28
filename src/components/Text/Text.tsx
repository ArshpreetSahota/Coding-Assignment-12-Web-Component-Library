import React from 'react';
import styled, { css } from 'styled-components';
import { IText } from './Text.types';

const CustomText = styled.span<IText>`
    font-family: 'Arial', sans-serif;
    font-size: ${({ types }) => (types === 'header' ? '1.5rem' : types === 'paragraph' ? '1rem' : '0.75rem')};
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
    color: ${({ disabled }) => (disabled ? '#999' : '#333')};
    ${({ disabled }) =>
            disabled &&
            css`
                background-color: #eee;
                cursor: not-allowed;
                opacity: 0.6;
            `}
    transition: opacity 0.3s ease-in-out;
`;

const Text: React.FC<IText> = ({
                                     types = 'paragraph',
                                     bold = false,
                                     italic = false,
                                     disabled = false,
                                     text,
                                     ...props
                                   }) => {
  return (
      <CustomText types={types} bold={bold} italic={italic} disabled={disabled} {...props}>
        {text}
      </CustomText>
  );
};

export default Text;