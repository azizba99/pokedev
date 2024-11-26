import type { Meta, StoryObj } from "@storybook/react";

import PokemonEvolution from "./PokemonEvolution";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "PokemonEvolution",
  component: PokemonEvolution,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "This component shows the evolution chain of a Pokemon.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    id: {
      control: "number",
      description: "Pokemon evolution id",
    },
    color: {
      control: "color",
      description: "Primary color",
    },
  },
} satisfies Meta<typeof PokemonEvolution>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: 1,
    color: "#88BE5D",
  },
};
