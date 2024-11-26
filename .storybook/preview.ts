import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { MockedProvider } from "@apollo/client/testing"; // Use for Apollo Version 3+

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    apolloClient: {
      MockedProvider,
    },
  },
  tags: ["autodocs", "autodocs", "autodocs", "autodocs"],
};

export default preview;
