import React from "react";
import { type Meta, StoryFn } from "@storybook/react";
import Card from "./Card";
import { ICard } from "./Card.types";

export default {
  title: "Components Assignment/Card",
  component: Card,
  parameters: {}
} as Meta<ICard>;

const CardTemplate: StoryFn<ICard> = (args) => <Card {...args} />;

export const Default = CardTemplate.bind({});
Default.args = {
  imageUrl: "https://via.placeholder.com/300",
  title: "Card Title",
  content: "This is a card description.",
  buttonText: "Click Me",
};

export const Disabled = CardTemplate.bind({});
Disabled.args = {
  imageUrl: "https://via.placeholder.com/300",
  title: "Card Title",
  content: "This is a card description.",
  buttonText: "Click Me",
  disabled: true,
};