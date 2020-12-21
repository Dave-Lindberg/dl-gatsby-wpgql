import { theme as defaultTheme } from "@chakra-ui/core"

const customTheme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        brandGreen: "#999900",
      },
    breakpoints: ["360px", "768px", "1024px", "1440px"]
      
};

export default customTheme;
