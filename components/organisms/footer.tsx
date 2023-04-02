import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { AtomButton } from '../atoms';

const OrganismFooter = () => {
    return (
        <Box
            bg="linear-gradient(118.55deg, #353535 20.84%, #0A0A0A 86.03%)"
            borderTopRadius={['2rem', null, null, '7rem']}
        >
            <VStack
                justifyContent="center"
                h="70vh"
                spacing="2rem"
                position="relative"
            >
                <VStack spacing={0}>
                    <Text fontWeight={500}>WHAT&apos;S NEXT?</Text>
                    <Text fontWeight={700} fontSize="3xl">
                        Get in Touch
                    </Text>
                </VStack>

                {/* <Text textAlign="center" px={['3rem', null, '10rem', '15rem']} fontSize="md">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
					doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
					veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</Text> */}

                <AtomButton>CONTACT ME</AtomButton>

                <Text fontSize="sm" position="absolute" bottom="2rem">
                    © 2023 Raka Pratama
                </Text>
            </VStack>
        </Box>
    );
};

export default OrganismFooter;
