import type { Meta, StoryObj } from "@storybook/react";

import PokemonGlobalDetails from "./PokemonGlobalDetails";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "PokemonGlobalDetails",
  component: PokemonGlobalDetails,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component:
          "This component shows the global details of a Pokemon such as its name, types, image, and description.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    pokemonData: {
      control: "object",
      description: "Pokemon info",
    },
  },
} satisfies Meta<typeof PokemonGlobalDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    pokemonData: {
      name: "oddish",
      pokemon_v2_pokemontypes: [
        {
          pokemon_v2_type: {
            name: "grass",
          },
        },
        {
          pokemon_v2_type: {
            name: "poison",
          },
        },
      ],
      pokemon_v2_pokemonsprites: [
        {
          sprites: {
            other: {
              "official-artwork": {
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png",
              },
            },
          },
        },
      ],
      pokemon_v2_pokemonspecy: {
        pokemon_v2_pokemonspeciesflavortexts: [
          {
            flavor_text:
              "During the day,\nit keeps its face\nburied in the\fground. At night,\nit wanders around\nsowing its seeds.",
            language_id: 9,
          },
        ],
      },
    },
  },
};
