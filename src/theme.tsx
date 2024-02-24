import { createTheme, ThemeOptions } from "@mui/material/styles";

interface MyPaletteExtensions {
  border?: {
    primary?: string;
    secondary?: string;
  };
  text?: {
    primary?: string;
    secondary?: string;
    danger?: string;
  };
  filterBackgroundColor?: {
    primary?: string;
    secondary?: string;
  };
  icon?: {
    default?: string;
    selected?: string;
  };
  link?: {
    selected?: string;
    hover?: string;
  };
  boxShadow?: {
    primary?: string;
  };
  selected?: {
    primary?: string;
    secondary?: string;
  };
  button?: {
    primary?: {
      background?: string;
      text?: string;
      hover?: string;
    };
    action?: {
      background?: string;
      text?: string;
      hover?: string;
    };
    danger?: {
      background?: string;
      text?: string;
      hover?: string;
    };
  };
  alert?: {
    primary?: {
      background?: string;
      text?: string;
      icon?: string;
    };
    danger?: {
      background?: string;
      text?: string;
      icon?: string;
    };
  };
  backdrop?: { primary?: string };
  hover?: { primary?: string };
  selectionBox?: { primary?: string };
  explorer?: {
    background?: string;
    hover?: string;
  };
}

declare module "@mui/material/styles" {
  interface Palette extends MyPaletteExtensions {}
  interface PaletteOptions extends MyPaletteExtensions {}
}

const MY_EXTENSIONS: MyPaletteExtensions = {
  border: {
    primary: "rgba(145, 158, 171, 0.2)",
    secondary: "rgba(145, 158, 171, 1)",
  },
  icon: {
    default: "#637381",
    selected: "#2065D1",
  },
  link: {
    selected: "rgba(32, 101, 209, 0.08)",
    hover: "rgba(32, 101, 209, 0.16)",
  },
  backdrop: {
    primary: "rgba(22, 28, 36, 0.8)",
  },
  selectionBox: {
    primary: "rgba(72, 131, 217, 0.4)",
  },
};

const fontFamily = [
  "Public sans",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const breakpoints = {
  values: {
    xs: 0,
    sm: 350,
    md: 750,
    lg: 1200,
    xl: 1600,
  },
};

const darkThemeOptions: ThemeOptions = {
  breakpoints,
  typography: {
    fontFamily,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#161C24",
      paper: "#212B36",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#919EAB",
      danger: "#FF5630",
    },
    filterBackgroundColor: {
      primary: "rgba(22, 28, 36, 0.9)",
      secondary: "rgba(33, 43, 54, 0.9)",
    },
    boxShadow: {
      primary: "rgba(22, 28, 36, 0.9)",
    },
    selected: {
      primary: "#2F3944",
      secondary: "#1D242E",
    },
    button: {
      primary: {
        background: "#FFFFFF",
        text: "#212B36",
        hover: "#C4CDD5",
      },
      action: {
        background: "rgba(90, 131, 184, 0.16)",
        text: "rgb(90, 131, 184)",
        hover: "#1F3757",
      },
      danger: {
        background: "rgba(255, 86, 48, 0.16)",
        text: "rgb(255, 172, 130)",
        hover: "#683934",
      },
    },
    alert: {
      primary: {
        background: "rgb(0, 55, 104)",
        text: "rgb(202, 253, 245)",
        icon: "rgb(202, 253, 245)",
      },
      danger: {
        background: "rgb(122, 9, 22)",
        text: "rgb(255, 233, 213)",
      },
    },
    hover: { primary: "#3e4c5e" },
    explorer: {
      background: "rgba(145, 158, 171, 0.08)",
      hover: "#27313C",
    },
    ...MY_EXTENSIONS,
  },
};

const lightThemeOptions: ThemeOptions = {
  breakpoints,
  typography: {
    fontFamily,
  },
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    },
    text: {
      primary: "#000000",
      secondary: "#637381",
      danger: "#FF5630",
    },
    filterBackgroundColor: {
      primary: "rgba(255, 255, 255, 0.9)",
      secondary: "rgba(255, 255, 255, 0.9)",
    },
    boxShadow: {
      primary: "rgba(145, 158, 171, 0.24)",
    },
    selected: {
      primary: "#C2E7FF",
      secondary: "#F3F3F3",
    },
    button: {
      primary: {
        background: "#212B36",
        text: "#FFFFFF",
        hover: "#454F5B",
      },
      action: {
        background: "rgba(57, 75, 99, 0.16)",
        text: "#1E4B87",
        hover: "#BFC5CC",
      },
      danger: {
        background: "rgba(255, 86, 48, 0.16)",
        text: "rgb(183, 29, 24)",
        hover: "#FFC9BC",
      },
    },
    alert: {
      primary: {
        background: "rgb(202, 253, 245)",
        text: "rgb(0, 55, 104)",
        icon: "rgb(0, 184, 217)",
      },
      danger: {
        background: "rgb(255, 233, 213)",
        text: "rgb(122, 9, 22)",
      },
    },
    hover: { primary: "#CFCFCF" },
    explorer: {
      background: "rgba(145, 158, 171, 0.08)",
      hover: "rgba(145, 158, 171, 0.2)",
    },
    ...MY_EXTENSIONS,
  },
};

export const darkTheme = createTheme(darkThemeOptions);
export const lightTheme = createTheme(lightThemeOptions);
