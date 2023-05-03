import React, { useContext } from 'react';

import { useMousePosition } from '@/hooks';
import { MouseContext } from '@/context';

const AtomCursorFollow = () => {
	const { cursorType } = useContext(MouseContext);
	const { x, y } = useMousePosition();

	return (
		<>
			<div className={`ring ${cursorType}`} style={{ left: `${x}px`, top: `${y}px` }} />
			<div className={`dot ${cursorType}`} style={{ left: `${x}px`, top: `${y}px` }} />
		</>
	);
};

export default AtomCursorFollow;
