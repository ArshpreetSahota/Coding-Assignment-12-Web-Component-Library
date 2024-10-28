import React from "react";
import styled from "styled-components";
import { ITableRow } from "./Table.types";

const CustomTableRow = styled.tr<ITableRow>`
    &:nth-child(odd) {
        background-color: #f4f4f4;
    }
`;

const TableRow: React.FC<ITableRow> = ({ children }) => {
  return <CustomTableRow>{children}</CustomTableRow>;
};

export default TableRow;