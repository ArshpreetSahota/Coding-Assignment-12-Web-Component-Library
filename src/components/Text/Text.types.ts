export interface IText {
  text?: string;
  types?: "header" | "paragraph" | "copyright";
  bold?: boolean;
  italic?: boolean;
  disabled?: boolean;
}