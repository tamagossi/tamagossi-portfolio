import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<ChakraProvider
				toastOptions={{
					defaultOptions: { position: 'bottom-left' },
				}}
			>
				<Component {...pageProps} />
			</ChakraProvider>
		</QueryClientProvider>
	);
}
