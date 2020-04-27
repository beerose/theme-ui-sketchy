const buttonStyles = {
  color: "text",
  backgroundColor: "gray",
  borderRadius: "sketchy0",
  transition: "all 235ms ease 0s",
  boxShadow: "15px 24px 25px -18px rgba(0,0,0,.4)",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "text",
  fontFamily: "inherit",
  "&:hover": {
    boxShadow: "2px 8px 10px -6px rgba(0,0,0,.4)",
  },
}

const formStyles = {
  borderRadius: "sketchy3",
  borderColor: "text",
  "&:focus": {
    borderColor: "primary",
    boxShadow: "0 0 0px 2px black",
    outline: "none",
  },
}

const borderStyles = {
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "text",
}

const theme = {
  colors: {
    text: "rgba(0,0,0,0.9)",
    background: "hsl(10, 10%, 98%)",
    gray: "rgba(0,0,0,0.1)",
    primary: "#F25F5C",
    primaryDark: "#b51916",
    primaryLight: "#FCBAB1",
    blue: "#b6dee2",
    blueDark: "#247ba0",
    highlight: "hsl(10, 40%, 90%)",
    greenDark: "#2D5948",
    green: "#b2e4dc",
    yellowDark: "#ffda3a",
    yellow: "#ffe36961",
  },
  fonts: {
    body:
      '"Architects Daughter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: {
    sketchy0: "225px 25px 225px / 25px 225px",
    sketchy1: "15px 255px 15px / 225px 15px",
    sketchy2: "10px 125px 20px / 205px 25px",
    sketchy3: "225px 15px 15px / 15px 225px",
    sketchy4: "80px 15px 105px / 25px 250px",
    circle: "200px 185px 160px / 195px 160px",
  },
  layout: {
    container: {
      borderRadius: "sketchy1",
      backgroundColor: "gray",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "primaryDark",
      },
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "gray",
      overflow: "auto",
      borderRadius: "sketchy1",
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "blueDark",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderRadius: "sketchy1",
        ...borderStyles,
        borderBottomStyle: "solid",
      },
      th: {
        borderRadius: "sketchy3",
      },
    },
    th: {
      borderRadius: "sketchy1",
      verticalAlign: "bottom",
      borderBottomWidth: "1px",
    },
    td: {
      borderRadius: "sketchy1",
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "gray",
    },
    img: {
      maxWidth: "100%",
    },
  },
  prism: {
    ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      color: "gray",
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
      color: "primaryLight",
    },
    ".atrule,.attr-value,.keyword": {
      color: "primaryDark",
    },
    ".selector,.attr-name,.string,.char,.builtin,.inserted": {
      color: "primary",
    },
  },
  buttons: {
    primary: buttonStyles,
    danger: {
      ...buttonStyles,
      borderColor: "primary",
      backgroundColor: "primaryLight",
    },
    info: {
      ...buttonStyles,
      borderColor: "blueDark",
      backgroundColor: "blue",
    },
    warning: {
      ...buttonStyles,
      borderColor: "yellowDark",
      backgroundColor: "yellow",
    },
    success: {
      ...buttonStyles,
      borderColor: "greenDark",
      backgroundColor: "green",
    },
  },
  cards: {
    primary: {
      color: "text",
      borderRadius: "sketchy1",
      transition: "all 235ms ease 0s",
      boxShadow: "15px 24px 25px -18px rgba(0,0,0,.4)",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "text",
      fontFamily: "inherit",
    },
  },
  forms: {
    input: formStyles,
    select: formStyles,
    textarea: formStyles,
    slider: {
      borderRadius: "sketchy1",
      bg: "gray",
    },
    primaryLightSlider: {
      color: "text",
    },
    radio: {
      borderRadius: "circle",
    },
  },
  links: {
    color: "primary",
    nav: {
      // ...borderStyles,
      borderRadius: "sketchy1",
      textDecoration: "none",
      px: 2,
      py: 1,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      "&:hover": {
        backgroundColor: "primaryLight",
      },
    },
  },
  progress: {
    color: "primary",
  },
  donut: {
    color: "primary",
  },
  badges: {
    primary: {
      borderRadius: "sketchy1",
      color: "background",
      bg: "primary",
    },
    outline: {
      borderRadius: "sketchy1",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  alerts: {
    danger: {
      ...borderStyles,
      color: "text",
      borderRadius: "sketchy0",
      borderColor: "primary",
      backgroundColor: "primaryLight",
    },
    info: {
      ...borderStyles,
      color: "text",
      borderRadius: "sketchy0",
      borderColor: "blueDark",
      backgroundColor: "blue",
    },
    warning: {
      ...borderStyles,
      color: "text",
      borderRadius: "sketchy0",
      borderColor: "yellowDark",
      backgroundColor: "yellow",
    },
    success: {
      ...borderStyles,
      color: "text",
      borderRadius: "sketchy0",
      borderColor: "greenDark",
      backgroundColor: "green",
    },
  },
  messages: {
    danger: {
      ...borderStyles,
      color: "text",
      borderRadius: "sketchy0",
      borderColor: "primary",
      backgroundColor: "primaryLight",
    },
    info: {
      ...borderStyles,
      color: "text",
      borderRadius: "sketchy0",
      borderColor: "blueDark",
      backgroundColor: "blue",
    },
    warning: {
      ...borderStyles,
      color: "text",
      borderRadius: "sketchy0",
      borderColor: "yellowDark",
      backgroundColor: "yellow",
    },
    success: {
      ...borderStyles,
      color: "text",
      borderRadius: "sketchy0",
      borderColor: "greenDark",
      backgroundColor: "green",
    },
  },
}

export default theme
