import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const { ThemeProviderProps } = require("next-themes/dist/types");

function ThemeProvider({ children, ...props }) {
  return React.createElement(NextThemesProvider, props, children);
}

module.exports = {
  ThemeProvider: ThemeProvider
};