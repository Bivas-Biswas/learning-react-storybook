import { addDecorator } from "@storybook/react";
// import Center from "../src/components/Center/Center";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/react";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    options: {
      storySort: (a, b) =>
          a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
  },
}

// global decorators
// addDecorator(story => <Center>{story()}</Center>)
addDecorator(story => <ThemeProvider theme={theme}><CSSReset/>{story()}</ThemeProvider>)