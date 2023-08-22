import * as React from "react";
import { LogServiceButton } from "../src/components/logservice/LogServiceButton";
import { LogServiceButtonData } from "../src/components/logservice/data";

export default {
  title: "Components/LogServiceButton",
  component: LogServiceButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = {
  render: (args) => {

    return (

      <LogServiceButton {...args} />

    )
  }
};


export const Default = {
  ...Template,
  // args: parksAndGreenForm,
};