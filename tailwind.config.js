module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors:{
				"c-black": "#000",
				"c-blue": "#5ea3ec",
				"c-red": "#f64444",
				"c-gold": "#ffb400",
				"c-white": "#fff",
			},
			animation:{
				"option-1" : "food 0.25s linear forwards",
				"option-2" : "food 0.25s linear 0.1s forwards",
				"option-3" : "food 0.25s linear 0.2s forwards",
				"option-4" : "food 0.25s linear 0.3s forwards",
				"moveLeft" : "moveLeft 0.3s linear forwards",
				"movingLines" : "4s moving-lines linear infinite"
			},
			zIndex:{
				'1' : '1',
				'2' : '2',
				'3' : '3',
				'4' : '4',
				'5' : '5',
			},
			fontFamily:{
				'ogg' : 'ogg, Helvetica, sans-serif',
				'apercu' : 'apercu, Helvetica, sans-serif',
				'apercu-mono' : 'apercu mono, Helvetica, sans-serif',
				'pingfang' : 'pingfang, Helvetica, sans-serif',
			},
			backgroundImage:{
				'lines' : 'linear-gradient(to right, black 50%, transparent 0)'
			},
			backgroundSize:{
				'24_1':'24px 1px'
			},
			width:{
				'75' : '300px'
			},
		},
	},
	plugins: [],
}
