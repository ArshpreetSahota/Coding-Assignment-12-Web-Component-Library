import React, { useState } from "react";
import { type Meta, StoryFn } from "@storybook/react";
import Dropdown from "./Dropdown";
import { type IDropdown } from "./Dropdown.types";

const meta: Meta = {
  title: "Components Assignment/Dropdown",
  component: Dropdown,
  argTypes: {},
};
export default meta;

const DropdownTemplate: StoryFn<IDropdown> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Dropdown
      {...args}
      value={value}
      onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
        setValue(e.target.value);
      }}
    />
  );
};

export const Primary = DropdownTemplate.bind({});
Primary.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ],
  value: "option1",
};

export const Disabled = DropdownTemplate.bind({});
Disabled.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value: "option1",
  disabled: true,
};