import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import { ITable } from "./Table.types";

const meta: Meta<ITable> = {
  title: "Components Assignment/Table",
  component: Table,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables interaction with the table',
    },
  }
};

export default meta;

const TableTemplate: StoryFn<ITable> = (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
      <TableRow>
        <TableCell>Row 1, Cell 1</TableCell>
        <TableCell>Row 1, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2, Cell 1</TableCell>
        <TableCell>Row 2, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 3, Cell 1</TableCell>
        <TableCell>Row 3, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 4, Cell 1</TableCell>
        <TableCell>Row 4, Cell 2</TableCell>
      </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
);

// Story for Default Table
export const DefaultTable = TableTemplate.bind({});
DefaultTable.args = {};

// Story for Disabled Table
export const DisabledTable = TableTemplate.bind({});
DisabledTable.args = {
  disabled: true,
};