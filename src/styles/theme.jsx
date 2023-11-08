const colorNames = {
  White: "#FFFFFF",
  Black: "#000000",
  Woodsmoke: "#18181B",
  Waterloo: "#7E839A",
  Whisper: "#F5F5FA",
};

export const theme = {
  breakpoints: {
    xs: "414px",
    s: "600px",
    m: "900px",
    l: "1200px",
    xl: "1536px",
  },
  colors: {
    site: {
      background: colorNames.Whisper,
      text: colorNames.Black,
    },
    tile: {
      background: colorNames.White,
    },
    navigation: {
      background: colorNames.Woodsmoke,
      text: colorNames.White,
      mobileBackground: colorNames.Black,
    },
    searchBar: {
      background: colorNames.White,
      text: colorNames.Black,
      mutedText: colorNames.Waterloo,
    },
  },
};
