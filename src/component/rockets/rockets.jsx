import React, { Component } from "react"
import { Link } from "react-router-dom"

import PropType from "prop-types" 
import Rocket from "./Rocket"

class Rockets extends Component {
	render() {
		const { filteredrockets, setOpen } = this.props

		return (
			<div className="max-w-7xl mx-auto">
				{filteredrockets.length === 0 ? (
					<div className="flex flex-col gap-y-3 items-center">
						<p className="text-white font-bold text-3xl md:text-6xl text-center">
              No rockets match your search :( Try again
						</p>
						<button
							onClick={() => window.location.reload()}
							className="text-white rounded-lg m-auto text-xl border-white border bg-slate-600 px-10 py-6"
						>
              Please refresh
						</button>
					</div>
				) : (
					<div className="grid md:grid-cols-2 gap-x-8 px-2 md:px-6 gap-y-8 w-full">
						{filteredrockets.map((rocket) => (
							<Link to={`/${rocket.rocket_id}`} key={rocket.id}>
								<Rocket
									setOpen={setOpen}
									rocketname={rocket.rocket_name}
									activestatus={rocket.active}
									stages={rocket.stages}
									img={rocket.flickr_images[0]}
									boosters={rocket.boosters}
									success_rate={rocket.success_rate_pct}
								/>
							</Link>
						))}
					</div>
				)}
			</div>
		)
	}
}

export default Rockets

Rockets.propTypes = {
	filteredrockets: PropType.func,
	setOpen: PropType.func,
}
