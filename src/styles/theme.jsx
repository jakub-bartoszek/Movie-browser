const colorNames = {
  White: "#FFFFFF",
  Whisper: "#F5F5FA",
  Mystic: "#E4E6F0",
  Silver: "#C4C4C4",
  Waterloo: "#7E839A",
  StormGrey: "#74788B",
  Woodsmoke: "#18181B",
  Black: "#000000",
  PattensBlue: "#D6E4FF",
};

export const theme = {
  breakpoints: {
    xs: "414px",
    s: "713px",
    m: "1000px",
    l: "1200px",
    xl: "1536px",
  },
  colors: {
    site: {
      background: colorNames.Whisper,
      text: colorNames.Black,
    },
    navigation: {
      background: colorNames.Woodsmoke,
      text: colorNames.White,
      mobileBackground: colorNames.Black,
    },
    pagination: {
      background: colorNames.PattensBlue,
      text: colorNames.Waterloo,
    },
    searchBar: {
      background: colorNames.White,
      text: colorNames.Black,
      mutedText: colorNames.Waterloo,
    },
    tile: {
      background: colorNames.White,
      text: colorNames.Black,
      mutedText: colorNames.StormGrey,
      genresBackground: colorNames.Mystic,
      imageWrapper: colorNames.Silver,
    },
    moviePage: {
      background: colorNames.Black,
      headerText: colorNames.White,
      genresBackground: colorNames.Mystic,
      imageWrapper: colorNames.StormGrey,
    },
  },
  properties: {
    tile: {
      boxShadow: "0px 4px 12px 0px rgba(186, 199, 213, 0.5)",
    },
  },
};
