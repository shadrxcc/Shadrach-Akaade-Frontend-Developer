import React, { useEffect } from "react"
import ReactDom from "react-dom"
import PropTypes from "prop-types"

const MODAL_STYLES = {
	transform: "translate(-50%, -50%)",
}

const OVERLAY_STYLES = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0, 0, 0, .7)",
	zIndex: 1000,
}

const Modal = ({ open, children }) => {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}

		return () => {
			document.body.style.overflow = ""
		}
	}, [open])

	if (!open) return null
	return ReactDom.createPortal(
		<>
			<div style={OVERLAY_STYLES} />

			<div
				className="fixed max-w-7xl mx-auto md:p-[50px] mb-40 overflow-y-auto z-[1000] max-[280]:w-[53%] left-[50%] w-[90%] md:w-[80%] top-[55%] md:top-[55%] md:left-[50%] h-screen"
				style={MODAL_STYLES}
			>
				{children}
			</div>
		</>,
		document.getElementById("portal")
	)
}

export default Modal

Modal.propTypes = {
	open: PropTypes.func.isRequired,
	children: PropTypes.node
}
