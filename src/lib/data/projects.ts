export interface Project {
	title: string;
	description: string;
	tags: string[];
	github?: string;
	live?: string;
	aiAssisted?: boolean;
}

export const projects: Project[] = [
	{
		title: 'DevOps-Gitlab-Infra',
		description:
			'Full IaC pipeline: Terraform provisions VMs on Proxmox VE, Ansible configures them, Sentinel enforces policy, and GitLab CI ties it all together.',
		tags: ['Terraform', 'Ansible', 'GitLab CI', 'Sentinel', 'Proxmox VE', 'HCL'],
		github: 'https://github.com/i-robert2/DevOps-Gitlab-Infra'
	},
	{
		title: 'jellyfin-ansible',
		description:
			'Automated Jellyfin media server deployment on Debian LXC containers using Ansible, with Nginx reverse proxy.',
		tags: ['Ansible', 'Nginx', 'Debian', 'Proxmox', 'Jellyfin', 'Automation'],
		github: 'https://github.com/i-robert2/jellyfin-ansible'
	},
	{
		title: 'terraform-sentinel-policies',
		description:
			'Policy-as-code for infrastructure governance on Terraform-managed Proxmox VE environments.',
		tags: ['Terraform', 'Sentinel', 'HashiCorp', 'Proxmox', 'Policy-as-Code', 'HCL'],
		github: 'https://github.com/i-robert2/terraform-sentinel-policies'
	},
	{
		title: 'script-arch-linux',
		description:
			'Bash-based Arch Linux installer for learning and practicing step-by-step OS installations.',
		tags: ['Bash', 'Arch Linux', 'Shell', 'Automation'],
		github: 'https://github.com/i-robert2/script-arch-linux'
	},
	{
		title: 'FlashLocal',
		description:
			'Offline-first spaced repetition flashcard app with SM-2 and FSRS scheduling, Markdown rendering, notebooks, knowledge maps, and global search. Runs as a PWA or Tauri desktop app.',
		tags: ['Svelte', 'TypeScript', 'Tauri', 'IndexedDB', 'PWA'],
		github: 'https://github.com/i-robert2/Flash-Local',
		aiAssisted: true
	},
	{
		title: 'Ticket Management Tool',
		description:
			'Desktop app for managing support tickets across EU and Global regions. Automated warning escalation on business-day deadlines, ticket search, notes, draft email tracking, and a live Bucharest clock.',
		tags: ['Electron', 'React', 'JavaScript', 'Vite'],
		github: 'https://github.com/i-robert2/ticket-mgmt-tool',
		aiAssisted: true
	}
];
