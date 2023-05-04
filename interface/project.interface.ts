export type ROLE =
	| 'Front-End Engineer'
	| 'Back-End Engineer'
	| 'Full-Stack Engineer'
	| 'Mobile Engineer';

export type Project = {
	category: 'Web Application' | 'Mobile Application' | 'Desktop Application';
	descriptions: string;
	end_date: string;
	github_url?: string;
	id: number;
	images?: string[];
	is_featured?: boolean;
	is_personal_project?: boolean;
	project_url?: string;
	responsibilities?: string[];
	role: ROLE;
	start_date: string;
	tech: string[];
	thumbnail?: string;
	title: string;
};
