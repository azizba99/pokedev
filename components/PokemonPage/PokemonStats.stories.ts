import type { Meta, StoryObj } from "@storybook/react";

import PokemonStats from "./PokemonStats";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "PokemonStats",
  component: PokemonStats,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "This component shows the stats of a Pokemon.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    stats: {
      control: "object",
      description: "The stats of pokemon",
    },
    color: {
      control: "color",
      description: "The primary color of pokemon",
    },
  },
} satisfies Meta<typeof PokemonStats>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    stats: [
      {
        base_stat: 200,
        pokemon_v2_stat: {
          pokemon_v2_statnames: [
            {
              name: "HP",
              language_id: 9,
            },
          ],
        },
      },
      {
        base_stat: 100,
        pokemon_v2_stat: {
          pokemon_v2_statnames: [
            {
              name: "Attack",
              language_id: 9,
            },
          ],
        },
      },
      {
        base_stat: 150,
        pokemon_v2_stat: {
          pokemon_v2_statnames: [
            {
              name: "Defense",
              language_id: 9,
            },
          ],
        },
      },
    ],
    color: "#88BE5D",
  },
};
