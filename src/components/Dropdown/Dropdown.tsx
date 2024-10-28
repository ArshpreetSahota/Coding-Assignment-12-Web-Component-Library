import React from 'react';
import styled from 'styled-components';
import { IDropdown } from './Dropdown.types';

const CustomSelect = styled.select`
    padding: 12px;
    border-radius: 5px;
    border: solid 1px #b0b0b0;
    background-color: white;
    color: #444;

    &:hover {
        border-color: #a0a0a0;
    }

    &:disabled {
        background-color: #f0f0f0;
        color: #b0b0b0;
        cursor: not-allowed;
    }
`;

const Dropdown: React.FC<IDropdown> = ({
                                             id,
                                             name,
                                             value,
                                             onChange,
                                             options,
                                             disabled = false,
                                           }) => {
  return (
      <CustomSelect
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
      >
        {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
        ))}
      </CustomSelect>
  );
};

export default Dropdown;