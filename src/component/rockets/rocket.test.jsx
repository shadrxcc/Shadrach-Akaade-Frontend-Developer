import Rocket from "./Rocket"
import PropTypes from "prop-types"
import { expectTypeOf, test } from "vitest"

test("my types work properly", () => {
	const expectedPropTypes = {
		img: PropTypes.node,
		id: PropTypes.number,
		rocketname: PropTypes.string,
		success_rate: PropTypes.number,
		boosters: PropTypes.number,
		stages: PropTypes.number,
		activestatus: PropTypes.bool,
		setOpen: PropTypes.func,
	}
	expectTypeOf(Rocket).toMatchTypeOf(expectedPropTypes)
})