import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Img from "./Image";
import { ImgProps } from "./Image.types";

const meta: Meta<ImgProps> = {
  title: "Components Assignment/Img",
  component: Img,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Toggle whether the image is disabled'
    }
  }
};

export default meta;

const ImageTemplate: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const DefaultImage = ImageTemplate.bind({});
DefaultImage.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
};

export const DisabledImage = ImageTemplate.bind({});
DisabledImage.args = {
  ...DefaultImage.args,
  disabled: true,
};