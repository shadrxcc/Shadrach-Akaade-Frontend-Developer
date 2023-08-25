import React, { useState, useEffect } from "react"
import Modal from "./modal"
import Wrapper from "../wrapper"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"

const RocketDetails = (props) => {
	const [rocketData, setRocketData] = useState([])
	const { rocket_id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			const url = `https://api.spacexdata.com/v3/rockets/${rocket_id}`

			try {
				if (rocket_id !== null) {
					const response = await fetch(url)
					const data = await response.json()
					setRocketData(data)
				}
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [rocket_id])

	return (
		<Wrapper>
			<Modal open={props.open}>
				<div
					id="details"
					className="text-white overflow-hidden rounded-md p-2.5 md:p-3"
				>
					<div className="flex items-center py-4 justify-between">
						<h2 className="text-2xl flex-1 text-center md:text-4xl font-bold">
							{rocketData.rocket_name}
						</h2>
						<button onClick={props.setOpen} className="f">
							<iconify-icon
								width="40"
								icon="ep:close"
								style={{ color: "white" }}
							/>
						</button>
					</div>

					<div className="flex flex-col pb-4 gap-y-4">
						<div className="">
							<img
								className="m-auto rounded-md w-[20rem]"
								src={rocketData.flickr_images}
								alt={rocketData.rocket_name}
							/>
						</div>
						<p className="text-center">{rocketData.description}</p>
						<div className="flex flex-col gap-y-4">
							<div className="grid grid-cols-2 gap-y-2 md:grid-cols-3">
								<span className="flex flex-col items-center">
									<p>Boosters</p>
									<p>{rocketData.boosters}</p>
								</span>

								<span className="flex flex-col items-center">
									<p>Stages</p>
									<p>{rocketData.stages}</p>
								</span>

								<span className="flex flex-col items-center">
									<p>Cost per launch</p>
									<p>{rocketData.cost_per_launch}</p>
								</span>

								<span className="flex flex-col items-center">
									<p>Success rate</p>
									<p>{rocketData.success_rate_pct}</p>
								</span>

								<span className="flex flex-col items-center">
									<p>First flight</p>
									<p>{rocketData.first_flight}</p>
								</span>

								<span className="flex flex-col items-center">
									<p>Country</p>
									<p>{rocketData.country}</p>
								</span>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</Wrapper>
	)
}

export default RocketDetails

RocketDetails.propTypes = {
	open: PropTypes.func,
	setOpen: PropTypes.func,
}