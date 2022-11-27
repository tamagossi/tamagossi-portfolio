import 'react-vertical-timeline-component/style.min.css';
import React, { FC, ReactElement } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react';

const STAFFINC_ICON: string =
	'https://play-lh.googleusercontent.com/QcRvGzNDUANGf9ob-0sB3OhXDsfdHAkJwl3r10QLLGzhj3aAVIFAhf7g6AtiqwhtnUAd=w240-h480-rw';
const SMOOETS_ICON: string =
	'https://scontent.fbdo9-1.fna.fbcdn.net/v/t39.30808-6/267565350_299718725497141_3513585058395928116_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zTRgla6eXjwAX-BUa-3&_nc_ht=scontent.fbdo9-1.fna&oh=00_AfDbF4rcF9_6zLPZ2MGiUicnX8BXCWB-2gwVEuKevmLdZw&oe=63844DAD';
const NINETYNINE_ICON: string =
	'https://media-exp1.licdn.com/dms/image/C560BAQFuRu2qBFW1Aw/company-logo_200_200/0/1637827151534?e=2147483647&v=beta&t=4wSzcE0sjW7koD3pd_CMkA6Ukv2xy7ZxZOwOAnevhds';

const EXPERIENCES = [
	{
		title: 'Software Engineer',
		company: 'Staffinc Group',
		startYear: 2019,
		endYear: 'Present',
		icon: STAFFINC_ICON,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Front End Engineer Freelance',
		company: '99 Group',
		startYear: 2018,
		endYear: 2019,
		icon: NINETYNINE_ICON,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Team Lead Software Engineer',
		company: 'Smooets',
		startYear: 2018,
		endYear: 2019,
		icon: SMOOETS_ICON,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		title: 'Front-End Engineer',
		company: 'Smooets',
		startYear: 2018,
		endYear: 2018,
		icon: SMOOETS_ICON,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
];

const OrganisHomepageBioSection: FC = (): ReactElement => {
	return (
		<Center height="100vh" id="experience-section" overflowY="hidden" px="5rem">
			<VStack
				as={motion.div}
				initial={{ opacity: 0, scale: 0.8 }}
				w="100%"
				spacing={2}
				mt="7.7rem"
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: { ease: 'easeOut', duration: 0.5 },
				}}
			>
				<HStack justify="start" w={['100%', null, null, null, '60%']}>
					<Text
						fontSize={['5xl', null, null, '6xl', '7xl']}
						fontWeight="black"
						wordBreak="break-word"
						lineHeight="shorter"
					>
						Professional Experience
					</Text>
				</HStack>

				<Box
					w="97vw"
					maxH="70vh"
					overflowY="auto"
					css={{
						'&::-webkit-scrollbar': {
							width: '4px',
						},
						'&::-webkit-scrollbar-track': {
							width: '6px',
						},
						'&::-webkit-scrollbar-thumb': {
							borderRadius: '24px',
						},
					}}
				>
					<VerticalTimeline>
						{EXPERIENCES.map((experience, index) => {
							const { title, company, startYear, endYear, icon, description } =
								experience;

							return (
								<VerticalTimelineElement
									key={title + company}
									className="vertical-timeline-element--work"
									contentStyle={{ background: '#d53f8c', color: '#fff' }}
									contentArrowStyle={{ borderRight: '7px solid  #d53f8c' }}
									date={`${startYear} - ${endYear}`}
									dateClassName="date-vertical-element"
									icon={<Image src={icon} />}
									iconStyle={{
										background: '#d53f8c',
										color: '#fff',
										overflow: 'hidden',
									}}
								>
									<VStack alignItems="start" spacing={5}>
										<VStack alignItems="start" spacing={0}>
											<Text
												style={{
													fontSize: '24px',
													fontWeight: 600,
													marginTop: 0,
												}}
											>
												{title}
											</Text>

											<Text
												style={{
													fontSize: '17px',
													fontWeight: 600,
													marginTop: 0,
													color: 'rgba(255,255,255,.5s)',
												}}
											>
												{company}
											</Text>
										</VStack>

										<Text>{description}</Text>
									</VStack>
								</VerticalTimelineElement>
							);
						})}
					</VerticalTimeline>
				</Box>
			</VStack>
		</Center>
	);
};

export default OrganisHomepageBioSection;
