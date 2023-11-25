const colorNames = {
  White: "#FFFFFF",
  Whisper: "#F5F5FA",
  Black: "#000000",
  Blue: "#0044CC",
  Woodsmoke: "#18181B",
  Waterloo: "#7E839A",
  StormGrey: "#74788B",
  Mystic: "#E4E6F0",
  PattensBlue: "#D6E4FF",
};

export const theme = {
  breakpoints: {
    xs: "414px",
    s: "714px",
    m: "900px",
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
      arrowsColor: colorNames.Blue,
      text: colorNames.StormGrey,
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
