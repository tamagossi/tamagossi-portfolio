import { Project } from 'interface/project.interface';

const PROJECTS: Project[] = [
	{
		id: 0,
		title: 'Trevv',
		thumbnail: '/images/app-screenshots/freelance/trevv/trevv-thumbnail.png',
		thumbnailSize: 'mobile',
		images: [
			'/images/app-screenshots/freelance/trevv/trevv-1.png',
			'/images/app-screenshots/freelance/trevv/trevv-2.png',
			'/images/app-screenshots/freelance/trevv/trevv-3.png',
		],
		role: 'Mobile Engineer',
		descriptions: 'An Instagram-like apps to share a review of a place',
		category: 'Mobile Application',
		end_date: 'Present',
		start_date: 'January 2023',
		tech: ['React Native', 'Redux', 'Antd'],
		responsibilities: [
			'Fix bugs',
			'Create image/video taking page, and image/video processing page',
		],
	},
	{
		id: 1,
		title: 'Staffinc Jobs',
		thumbnail: '/images/app-screenshots/staffinc/staffinc-jobs/staffinc-jobs-thumbnail.png',
		thumbnailSize: 'mobile',
		images: [
			'/images/app-screenshots/staffinc/staffinc-jobs/staffinc-jobs-1.png',
			'/images/app-screenshots/staffinc/staffinc-jobs/staffinc-jobs-2.png',
			'/images/app-screenshots/staffinc/staffinc-jobs/staffinc-jobs-3.png',
			'/images/app-screenshots/staffinc/staffinc-jobs/staffinc-jobs-4.png',
			'/images/app-screenshots/staffinc/staffinc-jobs/staffinc-jobs-5.png',
		],
		role: 'Front-End Engineer',
		category: 'Web Application',
		end_date: 'Present',
		start_date: 'June 2021',
		project_url: 'https://jobs.staffinc.co/',
		tech: ['NextJS', 'Zustand', 'Antd', 'React Query'],
		descriptions:
			'Staffinc job searching application to handle user who not already downloaded the Staffinc app but still want to looking and apply to a job',
		responsibilities: [
			'Develop the app from the scratch',
			'Improve some patterns used within the app to minimize error possibility',
			'Lead the unit test process',
			'Improve the codebase',
			'Migrate codebase from Javascript to Typescript',
			'Solve memory leak issue due to lack of state management library',
		],
	},
	{
		id: 2,
		title: 'Staffinc - Recruitment Portal',
		thumbnailSize: 'dekstop',
		thumbnail:
			'/images/app-screenshots/staffinc/recruitment-portal/recruitment-portal-thumbnail.png',
		images: [
			'/images/app-screenshots/staffic/recruitment-portal/recruitment-portal-1.png',
			'/images/app-screenshots/staffic/recruitment-portal/recruitment-portal-2.png',
			'/images/app-screenshots/staffic/recruitment-portal/recruitment-portal-3.png',
			'/images/app-screenshots/staffic/recruitment-portal/recruitment-portal-4.png',
			'/images/app-screenshots/staffic/recruitment-portal/recruitment-portal-5.png',
			'/images/app-screenshots/staffic/recruitment-portal/recruitment-portal-6.png',
			'/images/app-screenshots/staffic/recruitment-portal/recruitment-portal-7.png',
		],
		role: 'Front-End Engineer',
		category: 'Web Application',
		end_date: 'Present',
		start_date: 'June 2021',
		project_url: 'https://jobs.staffinc.co/',
		tech: ['NextJS', 'Zustand', 'Antd', 'React Query'],
		descriptions:
			'Staffinc portal application for client who want to create job post, searching for agent, attend interview process',
		responsibilities: [
			'Develop all features within the apps that meet timeline and acceptance criteria',
			'Refactor its folder structure and its code style to increase clarity and code cleanness',
			'Do unit testing',
			'Migrate codebase from Javascript to Typescript',
			'Migrate state library to use zustand',
		],
	},
	{
		id: 3,
		title: 'Staffinc Suite',
		thumbnail: '/images/app-screenshots/staffinc/staffinc-suite/staffinc-suite-thumbnail.png',
		thumbnailSize: 'dekstop',
		images: [
			'/images/app-screenshots/staffinc/staffinc-suite/staffic-suite-1.png',
			'/images/app-screenshots/staffinc/staffinc-suite/staffic-suite-2.png',
			'/images/app-screenshots/staffinc/staffinc-suite/staffic-suite-3.png',
		],
		role: 'Front-End Engineer',
		category: 'Web Application',
		end_date: 'February 2022',
		start_date: 'December 2021',
		project_url: 'https://client.staffincsuite.co/',
		tech: ['NextJS', 'Zustand', 'ChakraUI', 'React Query'],
		descriptions:
			'Staffinc suite seamless portal as a platform for client to login both to Recruitment Portal or Management Portal',
		responsibilities: [
			'Help the team build the website',
			'Help the FE team by giving direction when developing the apps',
			'Do unit testing',
			'Migrate codebase from Javascript to Typescript',
			'Migrate state library to use zustand',
		],
	},
];

export default PROJECTS;