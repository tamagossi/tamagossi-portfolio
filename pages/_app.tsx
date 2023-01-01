import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { MouseProvider } from '@/context';
import { AtomCursorFollow } from '@/components/atoms';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MouseProvider>
			<ChakraProvider>
				<AtomCursorFollow />

				<Box cursor="none">
					<Component {...pageProps} />
				</Box>
			</ChakraProvider>
		</MouseProvider>
	);
}
