const colorNames = {
	White: "#FFFFFF",
	Whisper: "#F5F5FA",
	Black: "#000000",
	Woodsmoke: "#18181B",
	Waterloo: "#7E839A",
	StormGrey: "#74788B",
<<<<<<< HEAD
	Mystic: "#E4E6F0",
	Whisper: "#F5F5FA"
=======
	Mystic: "#E4E6F0"
>>>>>>> 6aa77df65c5751e71f48388f4d33b41188be0c1c
};

export const theme = {
	breakpoints: {
		xs: "414px",
		s: "700px",
		m: "900px",
		l: "1200px",
		xl: "1536px"
	},
	colors: {
		site: {
			background: colorNames.Whisper,
			text: colorNames.Black
		},
		navigation: {
			background: colorNames.Woodsmoke,
			text: colorNames.White,
			mobileBackground: colorNames.Black
		},
		searchBar: {
			background: colorNames.White,
			text: colorNames.Black,
			mutedText: colorNames.Waterloo
		},
		tile: {
			background: colorNames.White,
			text: colorNames.Black,
			mutedText: colorNames.StormGrey,
<<<<<<< HEAD
			genresBackground: colorNames.Mystic,
		},
		MoviePage: {
			background: colorNames.Black,

		},
=======
			genresBackground: colorNames.Mystic
		}
>>>>>>> 6aa77df65c5751e71f48388f4d33b41188be0c1c
	}
};
