import React from "react";
import styled from "styled-components";
import { ITableHeader } from "./Table.types";

const CustomTableHeader = styled.thead<ITableHeader>`
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.backgroundColor};
`;

const TableHeader: React.FC<ITableHeader> = ({ children }) => {
  return <CustomTableHeader>{children}</CustomTableHeader>;
};

export default TableHeader;