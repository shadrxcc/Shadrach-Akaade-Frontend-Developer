import { gsap } from "gsap"
import React, { useEffect } from "react"

const Hero = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			delay: 0.5,
		})

		tl.fromTo(
			".hero-text",
			{ y: 300 },
			{
				y: 0,
				delay: function (index) {
					return 0.5 * index
				},
			}
		)
	}, [])
	return (
		<div>
			<h1 className="font-bold hero-text text-white max-w-7xl mx-auto leading-tight text-center text-2xl md:text-7xl">
				<span className="hero-text">Igniting</span>{" "}
				<span className="hero-text">Imagination:</span>{" "}
				<span className="hero-text">Witness</span>{" "}
				<span className="hero-text">the</span>{" "}
				<span className="hero-text">Marvels</span>{" "}
				<span className="hero-text">of</span>{" "}
				<span className="hero-text">SpaceX&apos;s</span>{" "}
				<span className="hero-text">Spacecraft</span>
			</h1>
		</div>
	)
}

export default Hero
