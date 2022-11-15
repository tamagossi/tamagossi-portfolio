import { MutableRefObject, useEffect, useRef, useState } from 'react';

export default function useVisibility<T>(offset = 0): [boolean, MutableRefObject<T>] {
	const [isVisible, setIsVisible] = useState(true);
	const currentElement = useRef<any>(null);

	const onScroll = () => {
		if (!currentElement.current) {
			setIsVisible(false);
			return;
		}
		const top = currentElement.current.getBoundingClientRect().top;
		setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
	};

	useEffect(() => {
		setTimeout(() => {
			document.addEventListener('scroll', onScroll, true);
		}, 500);

		return () => document.removeEventListener('scroll', onScroll, true);
	});

	return [isVisible, currentElement];
}
