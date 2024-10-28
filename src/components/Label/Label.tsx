import React from 'react';
import styled from 'styled-components';
import { ILabel } from './Label.types';

const CustomLabel = styled.label<ILabel>`
    font-size: ${(props) =>
            props.size === "small" ? "0.75rem" : props.size === "medium" ? "1rem" : "1.2rem"};
    font-family: "Helvetica Neue", sans-serif;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    color: ${(props) => (props.disabled ? "#b2b2b2" : "#333")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
        color: ${(props) => (props.disabled ? "#b2b2b2" : "#555")};
    }
`;

const Label: React.FC<ILabel> = ({
                                       size = "medium",
                                       htmlFor,
                                       text,
                                       disabled = false,
                                       ...props
                                     }) => {
  return (
      <CustomLabel size={size} htmlFor={htmlFor} disabled={disabled} {...props}>
        {text}
      </CustomLabel>
  );
};

export default Label;