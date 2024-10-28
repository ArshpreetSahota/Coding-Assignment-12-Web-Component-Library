import React from 'react';
import styled from 'styled-components';
import { ITableFooter } from './Table.types';

const CustomTableFooter = styled.tfoot<ITableFooter>`
    width: 100%;
    background-color: #f8f8f8;
    padding: 10px 0;
    border-top: 2px solid #ccc;
`;

const TableFooter: React.FC<ITableFooter> = ({ children }) => {
  return <CustomTableFooter>{children}</CustomTableFooter>;
};

export default TableFooter;