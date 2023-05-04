import React, { createContext, FC, ReactElement, ReactNode, useState } from 'react';

interface MouseContextProviderPropsInterface {
	children: ReactNode;
}

export const MouseContext = createContext({
	cursorType: '',
	cursorChangeHandler: (_cursorType: any) => {},
});

const MouseContextProvider: FC<MouseContextProviderPropsInterface> = ({
	children,
}): ReactElement => {
	const [cursorType, setCursorType] = useState<string>('');
	const cursorChangeHandler = (cursorType: any) => {
		setCursorType(cursorType);
	};

	return (
		<MouseContext.Provider
			value={{
				cursorType: cursorType,
				cursorChangeHandler: cursorChangeHandler,
			}}
		>
			{children}
		</MouseContext.Provider>
	);
};

export default MouseContextProvider;
