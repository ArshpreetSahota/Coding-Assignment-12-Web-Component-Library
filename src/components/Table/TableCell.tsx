import React from 'react';
import styled from 'styled-components';
import { ITableCell } from './Table.types';

const CustomTableCell = styled.td<ITableCell>`
    padding: 10px;
    text-align: ${({ align }) => align};
    border-bottom: 1px solid #eee;
    color: #666;
    transition: background-color 0.3s;

    &:hover {
        background-color: #f9f9f9;
    }
`;

const TableCell: React.FC<ITableCell> = ({ children, align = "center" }) => {
  return <CustomTableCell align={align}>{children}</CustomTableCell>;
};

export default TableCell;