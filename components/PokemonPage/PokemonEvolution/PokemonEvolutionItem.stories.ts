import type { Meta, StoryObj } from "@storybook/react";

import PokemonEvolutionItem from "./PokemonEvolutionItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "PokemonEvolutionItem",
  component: PokemonEvolutionItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "This component shows the evolution item of a Pokemon.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    id: {
      control: "number",
      description: "Pokemon id",
    },
  },
} satisfies Meta<typeof PokemonEvolutionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: "1",
  },
};
