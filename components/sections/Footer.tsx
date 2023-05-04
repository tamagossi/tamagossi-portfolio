import React from 'react';
import { Center, Button, Text, VStack } from '@chakra-ui/react';
import { COLORS } from '@/constants';

const FooterSection = () => {
	return (
		<Center h="100vh" borderTopRadius={['2rem', null, null, '7rem']} id="contact-section">
			<VStack justifyContent="center" h="70vh" spacing="2rem">
				<VStack spacing={0}>
					<Text className="font-fira" fontWeight={300} color={COLORS.pink}>
						WHAT&apos;S NEXT?
					</Text>

					<Text
						fontWeight={700}
						fontSize={['3xl', null, '4xl', null, '5xl']}
						color="gray.300"
					>
						Get in Touch
					</Text>
				</VStack>

				<Text
					textAlign="center"
					px={['2rem', null, '10rem', '20rem']}
					fontSize={['sm', null, 'md']}
					color="gray.400"
				>
					I am not actively seeking full-time employment, but I am open to exploring good
					opportunities. I am always excited to take on new projects and challenges that
					align with my interests and skill set. If you would like&apos;s collaborate and
					achieve great things together.
				</Text>

				<a href="mailto:mgf.prauliyatama@gmail.com">
					<Button variant="outline" borderColor={COLORS.pink}>
						<Text color={COLORS.pink} fontWeight={400} fontSize="12px">
							CONTACT ME
						</Text>
					</Button>
				</a>

				<Text fontSize="sm" position="absolute" bottom="2rem" __css={{}}>
					© 2023 Raka Pratama
				</Text>
			</VStack>
		</Center>
	);
};

export default FooterSection;
