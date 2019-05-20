export const flipAnimation = {
	enter: {
		y: 0,
		opacity: 1,
		delay: 350,
		transition: {
			default: { duration: 300 }
		},
		rotateY: 0,
		perspective: 1000
	},
	exit: {
		y: 0,
		originX: '50%',
		opacity: 0,
		delay: 50,
		transition: { duration: 200 },
		rotateY: 90,
		perspective: 1000
	}
}
