import { type Meta, type StoryObj } from "@storybook/react";
import Text from "./Text";
import { type IText } from "./Text.types";
import { type ILabel } from "../Label/Label.types";

const meta: Meta = {
  title: "Components Assignment/Text",
  component: Text,
  argTypes: {},
};
export default meta;

export const DefaultText: StoryObj<IText> = {
  args: {
    types: "paragraph",
    text: "Paragraph",
  },
};

export const HeaderText: StoryObj<IText> = {
  args: {
    types: "header",
    text: "Header Text",
  },
};

export const CopyRightText: StoryObj<IText> = {
  args: {
    types: "copyright",
    text: "Copyright Text",
  },
};

export const BoldText: StoryObj<IText> = {
  args: {
    bold: true,
    text: "Bold Text",
  },
};

export const ItalicText: StoryObj<IText> = {
  args: {
    italic: true,
    text: "Italic Text",
  },
};

export const DisabledText: StoryObj<ILabel> = {
  args: {
    text: "Disabled",
    disabled: true,
  },
};