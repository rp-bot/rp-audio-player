import React, { useState, useEffect } from "react";

const useMouse = () => {
	const [mouseX, setMouseX] = useState({
		xPos: null,
	});
	// e.nativeEvent.clientX;
	useEffect(() => {
		function handle(e) {
			setMouseX({
				xPos: e.pageX,
				// xPos: e.nativeEvent.clientX,
			});
		}
		document.addEventListener("mousemove", handle);
		return () => document.removeEventListener("mousemove", handle);
	}, []);

	return mouseX;
};

export default useMouse;
