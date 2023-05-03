export type ROLE =
	| 'Front-End Engineer'
	| 'Back-End Engineer'
	| 'Full-Stack Engineer'
	| 'Mobile Engineer';

export type Project = {
	category: 'Web Application' | 'Mobile Application' | 'Desktop Application';
	descriptions: string;
	end_date: string;
	id: number;
	images: string[];
	is_featured?: boolean;
	project_url?: string;
	responsibilities: string[];
	role: ROLE;
	start_date: string;
	tech: string[];
	thumbnail: string;
	thumbnailSize: 'mobile' | 'desktop';
	title: string;
};
