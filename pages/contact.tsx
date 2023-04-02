import React from 'react';
import { NextPage } from 'next';
import {
    Box,
    Center,
    HStack,
    Image,
    Input,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react';

import { OrganismFooter } from '@/components/organisms';
import { MoleculeNavbar } from '@/components/molecules';

const ContactPage: NextPage = () => {
    return (
        <Box
            bg="linear-gradient(118.89deg, #353535 7.25%, #0A0A0A 68.67%)"
            h="100vh"
            overflowY="scroll"
            position="relative"
            css={{
                '&::-webkit-scrollbar': {
                    width: '1px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '1px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'trasnparent',
                    borderRadius: '24px',
                },
            }}
            sx={{ zIndex: 1 }}
        >
            <MoleculeNavbar stickOnTop />

            <Image
                src="/images/abstract-purple-square.svg"
                alt="Abstract Image"
                height="290px"
                position="absolute"
                sx={{
                    left: -150,
                    bottom: -100,
                    filter: `blur(60px)`,
                    zIndex: -4,
                }}
            />

            <Box
                w="100%"
                h="100vh"
                sx={{ zIndex: 1 }}
                position="relative"
                overflow="hidden"
            >
                <Image
                    src="/images/abstract-purple-square.svg"
                    alt="Abstract Image"
                    height="290px"
                    position="absolute"
                    sx={{
                        right: -20,
                        top: 0,
                        filter: `blur(60px)`,
                    }}
                />

                <Box
                    height="100vh"
                    position="relative"
                    overflow="hidden"
                    id="contact-section"
                    sx={{
                        zIndex: 3,
                    }}
                >
                    <Center
                        height="100%"
                        justifyContent={['center', null, 'space-between']}
                        px={['3rem', null, '8rem']}
                    >
                        <VStack
                            spacing={16}
                            alignItems={['center', null, 'self-start']}
                        >
                            <Text
                                fontSize={['40px', null, '48px']}
                                fontWeight="bold"
                                letterSpacing="tighter"
                                lineHeight="normal"
                                mb={0}
                                textAlign={['center', null, 'start']}
                                w={['80vw', null, '60vw', null, '45vw']}
                            >
                                Ready to discuss your project with me?
                            </Text>

                            <form>
                                <VStack spacing={5}>
                                    <HStack spacing={16}>
                                        <Input
                                            width="290px"
                                            focusBorderColor="#FF008C"
                                            variant="flushed"
                                            placeholder="Full name"
                                        />

                                        <Input
                                            width="290px"
                                            focusBorderColor="#FF008C"
                                            variant="flushed"
                                            placeholder="Email"
                                        />
                                    </HStack>

                                    <Textarea
                                        rows={2}
                                        focusBorderColor="#FF008C"
                                        variant="flushed"
                                        placeholder="Tell me what you need"
                                    />
                                </VStack>
                            </form>
                        </VStack>

                        <VStack
                            spacing={10}
                            alignItems={['center', null, 'self-start']}
                            bg="rgba(24, 24, 24, 0.1)"
                            px={10}
                            pt={16}
                            pb={6}
                            sx={{
                                boxShadow: `inset 16px -16px 48px rgba(147, 147, 147, 0.1), inset -16px -16px 48px rgba(19, 19, 19, 0.9), inset 16px 16px 60px rgba(15, 15, 15, 0.9)`,
                                borderRadius: '30px',
                            }}
                        >
                            <Text
                                fontSize={['14px', null, '16px']}
                                fontWeight={400}
                                letterSpacing="tighter"
                                mb={0}
                                textAlign={['center', null, 'start']}
                                w={['initial', null, '23vw']}
                            >
                                If you&apos;re looking for a skilled software
                                engineer who can help you bring your project to
                                life, you&apos;ve come to the right place! Need
                                help with your project? I&apos;m here to help.
                                Contact me today to discuss your project and
                                learn more about my expertise.
                            </Text>

                            <HStack spacing={5}>
                                <Image
                                    borderRadius="full"
                                    boxSize="86px"
                                    src="https://bit.ly/dan-abramov"
                                    alt="User Avatar"
                                />

                                <VStack alignItems="start">
                                    <Text fontWeight={600}>Tama</Text>
                                    <Text fontSize={14}>
                                        Your lovely{' '}
                                        <span style={{ fontWeight: 600 }}>
                                            software engineer
                                        </span>
                                    </Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Center>
                </Box>
            </Box>

            <OrganismFooter />
        </Box>
    );
};

export default ContactPage;
