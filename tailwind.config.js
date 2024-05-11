/**@type {import('tailwindcss'),config} */

module.exports = {
	content: ["./src/**/*.{html, js}"],
	theme: {
		extends: {
			colors: {
				nutmeg: "hsl(14 45% 36%)",
				raspbery: "hsl(332 51% 32%)",
				"rose-white": "hsl(330 100% 95%)",
				eggshell: "hsl(30 54% 90%)",
				grey: "hsl(30 18% 87%)",
				"weng-brown": "hsl(30 10% 34%)",
				charcoal: "hsl(23 5% 18%)",
			},
			fontFamily: {
				youngSerif: "Young Serif, serif",
				Outfit: "Outfit, sans-serif",
			},
		},
		plugin: [],
	},
};
