import React from "react";

interface CoOrdinates2D {
	x: number;
	y: number;
}

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = React.useState<CoOrdinates2D>({
		x: null,
		y: null
	});

	const updateMousePosition = (ev: MouseEvent) => {
		setMousePosition({ x: ev.clientX, y: ev.clientY });
	};

	React.useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () =>
			window.removeEventListener("mousemove", updateMousePosition);
	}, []);

	return mousePosition;
};

export default useMousePosition;
