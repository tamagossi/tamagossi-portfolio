import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';

import { MouseProvider } from '@/context';
import { CursorFollow } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MouseProvider>
			<ChakraProvider>
				<CursorFollow />

				<Box cursor="none">
					<Component {...pageProps} />
				</Box>
			</ChakraProvider>
		</MouseProvider>
	);
}
