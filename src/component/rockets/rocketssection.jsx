import React, { Component } from "react"
import Wrapper from "../wrapper"
import SearchForm from "./searchform"
import Rockets from "./rockets"
import RocketDetails from "./rocketdetails"

class RocketsSection extends Component {
	constructor(props) {
		super(props)

		this.state = {
			location: "",
			year: "",
			engine: "",
			open: false,
			rockets: [],
			filteredrockets: [],
		}

		this.handleSearch = this.handleSearch.bind(this)
	}

	componentDidMount() {
		fetch("https://api.spacexdata.com/v3/rockets")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					rockets: data,
					filteredrockets: data,
				})
			})
			.catch((error) => {
				console.error("Error fetching data:", error)
			})
	}

	handleSearch() {
		const { location, year, engine, rockets } = this.state

		const filtered = rockets.filter((rocket) => {
			if (location && rocket.country !== location) {
				return false
			}

			const rocketYear = new Date(rocket.first_flight).getFullYear()
			if (year && rocketYear !== parseInt(year)) {
				return false
			}

			if (engine && rocket.engines.type !== engine) {
				return false
			}

			return true
		})

		this.setState({
			filteredrockets: filtered,
		})
	}

	render() {
		const { location, year, engine, open, filteredrockets } = this.state

		return (
			<Wrapper id="rockets" className="py-12 flex flex-col gap-y-16">
				<h1 className="m-auto text-white text-3xl md:text-5xl">Rockets</h1>
				<SearchForm
					location={location}
					onLocation={(loc) => this.setState({ location: loc })}
					year={year}
					onYear={(yr) => this.setState({ year: yr })}
					engine={engine}
					onEngine={(eng) => this.setState({ engine: eng })}
					onSearch={this.handleSearch}
				/>
				<Rockets
					setOpen={(isOpen) => this.setState({ open: isOpen })}
					location={location}
					year={year}
					engine={engine}
					filteredrockets={filteredrockets}
					onSearch={this.handleSearch}
				/>
				<RocketDetails
					open={open}
					setOpen={() => this.setState({ open: false })}
				/>
			</Wrapper>
		)
	}
}

export default RocketsSection
