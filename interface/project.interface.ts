export type ROLE =
	| 'Front-End Engineer'
	| 'Back-End Engineer'
	| 'Full-Stack Engineer'
	| 'Mobile Engineer';

export type Project = {
	id: number;
	title: string;
	thumbnail: string;
	images: string[];
	role: ROLE;
	descriptions: string;
	responsibilities: string[];
	category: 'Web Application' | 'Mobile Application' | 'Desktop Application';
	end_date: string;
	start_date: string;
	project_url?: string;
	tech: string[];
	thumbnailSize: 'mobile' | 'desktop';
};
