import type React from "react";

export interface ITable {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface ITableHeader {
  children: React.ReactNode;
}

export interface ITableRow {
  children: React.ReactNode;
}

export interface ITableCell {
  children: React.ReactNode;
  align?: "left" | "right" | "center";
}

export interface ITableFooter {
  children: React.ReactNode;
}