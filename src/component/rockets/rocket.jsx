import React, { Component } from "react"
import Card from "../card"
import PropTypes from "prop-types"

export class Rocket extends Component {
	render() {
		const {
			img,
			id,
			rocketname,
			success_rate,
			boosters,
			stages,
			activestatus,
			setOpen,
		} = this.props

		return (
			<Card
				onClick={setOpen}
				key={id}
				className="flex flex-col cursor-pointer m-auto w-fit gap-y-3 p-4 bg-white "
			>
				<img
					src={img}
					className="m max-[280px]:w-[14em] w-80 md:w-[30rem] h-60 md:h-80 m-auto object-cover"
					loading="lazy"
					alt={rocketname}
				/>
				<div className="flex justify-between">
					<p>{rocketname}</p>
					<span className="flex gap-x-2 items-center">
						<iconify-icon
							icon="ic:sharp-stars"
							style={{ color: "goldenrod" }}
						/>
						<p>{success_rate}</p>
					</span>
				</div>
				<div className="flex gap-x-5 justify-between">
					<span className="flex flex-col items-center">
						<p>Boosters</p>
						<p>{boosters}</p>
					</span>

					<span className="flex flex-col items-center">
						<p>Stages</p>
						<p>{stages}</p>
					</span>

					<span className="flex flex-col items-center">
						<p>Status</p>
						<p>{activestatus ? "Active" : "Inactive"}</p>
					</span>
				</div>
			</Card>
		)
	}
}

Rocket.propTypes = {
	img: PropTypes.node,
	id: PropTypes.number,
	rocketname: PropTypes.string,
	success_rate: PropTypes.number,
	boosters: PropTypes.number,
	stages: PropTypes.number,
	activestatus: PropTypes.bool,
	setOpen: PropTypes.func,
}
