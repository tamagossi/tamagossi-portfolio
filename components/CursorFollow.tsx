import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import { useMousePosition } from '@/hooks';
import { MouseContext } from '@/context';

const AtomCursorFollow = () => {
	const { cursorType } = useContext(MouseContext);
	const { x, y } = useMousePosition();

	return (
		<Box display={['none', null, 'block']}>
			<div className={`ring ${cursorType}`} style={{ left: `${x}px`, top: `${y}px` }} />
			<div className={`dot ${cursorType}`} style={{ left: `${x}px`, top: `${y}px` }} />
		</Box>
	);
};

export default AtomCursorFollow;
