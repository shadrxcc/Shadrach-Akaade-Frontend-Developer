import React from "react"
import PropTypes from "prop-types"

const Card = (props) => {
	const classes = "card " + props.className
	return (
		<div onClick={props.onClick} className={classes}>
			{props.children}
		</div>
	)
}

export default Card

Card.propTypes = {
	className: PropTypes.node,
	onClick: PropTypes.func,
	children: PropTypes.node,
}
