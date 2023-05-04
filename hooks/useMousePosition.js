import React, { useState } from 'react';

const useMousePosition = () => {
	const [x, setX] = useState();
	const [y, setY] = useState();

	React.useEffect(() => {
		const updateMousePosition = (ev) => {
			setX(ev.clientX);
			setY(ev.clientY);
		};

		window.addEventListener('mousemove', updateMousePosition);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return { x, y };
};
export default useMousePosition;
