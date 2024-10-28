import React from 'react';
import styled from 'styled-components';
import { IRadio } from './Radio.types';

const CustomRadio = styled.input.attrs({ type: 'radio' })`
    margin: 8px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    &:disabled {
        opacity: 0.6;
    }
`;

const Radio: React.FC<IRadio> = ({
                                   id,
                                   name,
                                   value,
                                   checked,
                                   disabled,
                                   onChange,
                                 }) => {
  return (
      <CustomRadio
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
      />
  );
};

export default Radio;