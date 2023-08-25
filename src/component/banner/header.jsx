import React, { useEffect, useRef, useState } from "react"
import logo from "../../assets/spacex-logo-svgrepo-com.svg"
import { gsap } from "gsap"

const Header = () => {
	const [time, setTime] = useState(new Date())
	const timeRef = useRef(null)
	const timeDesktopRef = useRef(null)
	const logoRef = useRef(null)
	const locationRef = useRef(null)

	useEffect(() => {
		const timemob = timeRef.current
		const desktime = timeDesktopRef.current
		const location = locationRef.current
		const logo = logoRef.current

		gsap.fromTo(
			logo,
			{
				opacity: 0,
				y: -70,
			},
			{ opacity: 1, y: 0, duration: 1, delay: 0.5 }
		)

		gsap.fromTo(
			timemob,
			{
				opacity: 0,
				x: -70,
			},
			{ opacity: 1, x: 0, duration: 1, delay: 0.5 }
		)

		gsap.fromTo(
			location,
			{
				opacity: 0,
				x: 70,
			},
			{ opacity: 1, x: 0, duration: 1, delay: 0.5 }
		)

		gsap.fromTo(
			desktime,
			{
				opacity: 0,
				x: -70,
			},
			{ opacity: 1, x: 0, duration: 1, delay: 0.5 }
		)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const formattedTime = time.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	})

	return (
		<div className="justify-between w-full max-w-7xl mx-auto px-4 md:px-20 text-white flex items-center">
			<p ref={locationRef} className="hidden md:block">Location: Pluto</p>
			<img ref={logoRef} className="w-[10em]" src={logo} alt="space-x logo" />
			<p ref={timeDesktopRef} className="hidden md:block">
				{formattedTime}
			</p>
			<div ref={timeRef} className="flex md:hidden flex-col items-end">
				<p className="">{formattedTime}</p>
				<p>Pluto</p>
			</div>
		</div>
	)
}

export default Header
