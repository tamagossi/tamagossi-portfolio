import React, { FC, ReactElement } from 'react';
import {
	Box,
	Circle,
	HStack,
	Text,
	VStack,
	Grid,
	GridItem,
	Heading,
	Spinner,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const MENUS: Record<'name' | 'path', string>[] = [
	{ name: 'Projects', path: '/dashboard/projects' },
	{ name: 'Experiences', path: '/dashboard/experiences' },
	{ name: 'Skills', path: '/dashboard/skills' },
	{ name: 'Techs', path: '/dashboard/techs' },
];

type LayoutProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	title: string;
};

const Layout: FC<LayoutProps> = ({ children, title }): ReactElement => {
	const { pathname } = useRouter();

	return (
		<Grid templateColumns="repeat(24, 1fr)" gap={0} overflowY="hidden">
			<GridItem colSpan={5} bg="black">
				<VStack w="100%" h="100%" px={10} py={7} spacing={10} align="start" boxShadow="2xl">
					<HStack spacing={5}>
						<Circle background="black" size={8} />

						<Heading fontSize="xl">Dashboard</Heading>
					</HStack>

					<VStack align="start" spacing={8}>
						{MENUS.map((menu) => {
							const isActive = pathname.includes(menu.path);

							return (
								<HStack key={menu.path}>
									{isActive && <Circle background="white" size={2} />}

									<Text fontWeight={isActive ? 600 : 400}>{menu.name}</Text>
								</HStack>
							);
						})}
					</VStack>
				</VStack>
			</GridItem>

			<GridItem colSpan={19} py={7} px={20} h="100vh" overflowY="auto" bg="blackAlpha.900">
				<VStack w="100%" spacing={10} align="start">
					<Heading fontSize="2xl">{title}</Heading>

					<Box h="100%" w="100%">
						{children || (
							<VStack w="100%" spacing={3}>
								<Spinner />
								<Text>Loading...</Text>
							</VStack>
						)}
					</Box>
				</VStack>
			</GridItem>
		</Grid>
	);
};

export default Layout;
