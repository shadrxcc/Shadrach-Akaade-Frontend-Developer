import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import App from "./App"

const RouteSwitch = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/:rocket_id" element={<App />} />
			</Routes>
		</>
	)
}

export default RouteSwitch
