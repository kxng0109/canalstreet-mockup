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
				"option-0" : "options 0.25s linear forwards",
				"option-1" : "options 0.25s linear 0.1s forwards",
				"option-2" : "options 0.25s linear 0.2s forwards",
				"option-3" : "options 0.25s linear 0.3s forwards",
				"option-4" : "options 0.25s linear 0.4s forwards",
				"movingLines" : "0.4s moving-lines linear infinite forwards",
				"movingLinesSlower" : "0.8s moving-lines-different linear infinite forwards"
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
				'lines' : 'linear-gradient(to right, black 50%, transparent 0)',
				'two-lines' : 'linear-gradient(to right, black 50%, transparent 0), linear-gradient(to right, black 50%, transparent 0)'
			},
			backgroundSize:{
				'24_1':'24px 1px',
				'24_1_2' : '24px 1px, 24px 1px'
			},
			backgroundPosition:{
				'up-down' : '0 0, 0 100%'
			},
			width:{
				'75' : '300px'
			},
		},
	},
	plugins: [],
}
