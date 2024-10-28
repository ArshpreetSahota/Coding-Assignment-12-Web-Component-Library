import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { IButton } from "./Button.types";
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components Assignment/Button',
  component: Button,
  parameters: {}
} as Meta<IButton>;

const ButtonTemplate: StoryFn<IButton> = (props: JSX.IntrinsicAttributes & IButton) => <Button {...props} />;

export const PrimaryButton = ButtonTemplate.bind({});
PrimaryButton.args = {
  primary: true,
  size: 'medium',
  text: 'Primary Button',
};

export const SmallButton = ButtonTemplate.bind({});
SmallButton.args = {
  primary: true,
  size: 'small',
  text: 'Click Small',
};

export const LargeButton = ButtonTemplate.bind({});
LargeButton.args = {
  primary: true,
  size: 'large',
  text: 'Click Large',
};

export const ButtonDisabled = ButtonTemplate.bind({});
ButtonDisabled.args = {
  primary: true,
  size: 'medium',
  text: 'Disabled Button',
  disabled: true,
};

export const ButtonSuccess = ButtonTemplate.bind({});
ButtonSuccess.args = {
  primary: true,
  size: 'medium',
  text: 'Success State',
  success: true,
};

export const ButtonError = ButtonTemplate.bind({});
ButtonError.args = {
  primary: true,
  size: 'medium',
  text: 'Error State',
  error: true,
};

export const ButtonWarning = ButtonTemplate.bind({});
ButtonWarning.args = {
  primary: true,
  size: 'medium',
  text: 'Warning State',
  warning: true,
};