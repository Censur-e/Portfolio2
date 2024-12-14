import { CodeIcon, HomeIcon, NotebookIcon, Globe } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import Discord from '$lib/imgs/discord.svg';
import DiscordDark from '$lib/imgs/DiscordDark.svg';

import site72 from '$lib/imgs/site72.webp';
import figma from '$lib/imgs/figma-logo.svg';

// Your resume data
export let DATA = {
	pseudo: 'CENSURE',
	name: 'Censure',
	initials: 'CE',
	url: 'https://github.com/Censur-e',
	img: '',
	location: 'Paris, France',
	locationLink: 'https://www.google.com/maps/place/paris',
	description:
		'UIDesigner à temps plein et exploiteur roblox.',
	summary:
		`Je suis un UI Designer Roblox passionné par la création d'interfaces innovantes pour les jeux Roblox. Mon objectif est de rendre chaque expérience de jeu non seulement fonctionnelle, mais aussi agréable et immersive.`,
	avatarUrl: 'https://avatars.githubusercontent.com/u/189171665?v=4',
	skills: [
		'Svelte',
		'Sveltekit',
		'Node.js',
		'Luau'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '/projects', icon: CodeIcon, label: 'Projects' }
	],
	posts: [
		{
			title: 'Création du Portfolio',
			date: 'Décembre 2024',
			content: `Sorti officiel de mon portfolio qui va me permettre d'afficher mon travail en ligne et aux yeux de tout le monde.`,
			lien: 'https://example.com',
			auteur: 'Censure',
			pdp: 'https://avatars.githubusercontent.com/u/189171665?v=4',
			role: 'Développeur',
		}
	],
	contact: {
		email: 'hello@example.com',
		tel: '+123456789',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/Censur-e',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			X: {
				name: 'Discord',
				url: 'https://discordapp.com/users/995719567210983534',
				icon: DiscordDark,
				navbar: true,
				dark_icon: Discord
			},
			// Youtube: {
			// 	name: 'Youtube',
			// 	url: '',
			// 	// // icon: Icons.youtube,
			// 	icon: Youtube,
			// 	navbar: true
			// },
			email: {
				name: 'Me contactez',
				url: '#',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Site-72',
			href: 'https://discord.com/invite/KCh3Rx7aJa',
			badges: [],
			location: 'Remote',
			title: 'Rôle : UIDesigner ( Pas Officiel )',
			logoUrl: site72,
			start: 'Décembre 2024',
			end: 'indéfinit',
			description:
				`Plongez dans l'univers mystérieux et dangereux de la Fondation SCP, où vous incarnez un membre du personnel chargé de confiner des anomalies anormales. Progressez dans les rangs en accomplissant des missions, en explorant les installations du site, et en découvrant les sombres secrets du Site-72.`
		}
	],
	education: [
		{
			school: 'Figma',
			titre: 'Figma est une application de Design est bien plus pour tout le monde.',
			href: 'https://www.figma.com/fr-fr/',
			degree: 's3, s4, sf1, s5',
			logoUrl: figma,
			start: '',
			end: 'Actuellement'
		},
	],
	projectsrecent: [
		// 2 MAX !
		{
			title: 'Astral',
			href: 'https://github.com/Censur-e/Astral',
			dates: 'Octobre 2024 - Décembre 2024',
			active: true,
			description:
				`Astral est un UI conçue pour l'exploitation dans le jeu Roblox. Cette UI offre des fonctionnalités avancées, permettant aux utilisateurs de profiter de diverses options, telle que la lecture de musique, et bien d'autres encore.`,
			technologies: [
				'Luau'
			],
			links: [
				//{
				//	type: 'Website',
				//	href: 'https://chatcollect.com',
				//	// icon: <Icons.globe className="size-3" />,
				//	icon: Globe
				//}
			],
			image: 'https://github.com/user-attachments/assets/7304a0ad-7623-4261-ac13-a8c5386249f5',
			video: ''
		},
		{
			title: 'Menu Site-72',
			href: 'https://github.com/Censur-e/UI-Site-72',
			dates: 'Décembre 2024 - Décembre 2024',
			active: true,
			description:
				`Pour aider Site-72 je leur est fait un menu pour pouvoir changer celui qu'il avait qui étais pas propre et pas professionnel.`,
			technologies: [
				'Luau',
				'Figma'
			],
			links: [
				{
					type: 'Discord Site 72',
					href: 'https://discord.com/invite/KCh3Rx7aJa',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				}
			],
			image: 'https://github.com/Censur-e/UI-Site-72/blob/main/Main%20UI%20Site%2072.png?raw=true',
			video: ''
		},
	],
	projects: [
		{
			title: 'Astral',
			href: 'https://github.com/Censur-e/Astral',
			dates: 'Octobre 2024 - Décembre 2024',
			active: true,
			description:
				`Astral est un UI conçue pour l'exploitation dans le jeu Roblox. Cette UI offre des fonctionnalités avancées, permettant aux utilisateurs de profiter de diverses options, telle que la lecture de musique, et bien d'autres encore.`,
			technologies: [
				'Luau'
			],
			links: [
				//{
				//	type: 'Website',
				//	href: 'https://chatcollect.com',
				//	// icon: <Icons.globe className="size-3" />,
				//	icon: Globe
				//}
			],
			image: 'https://github.com/user-attachments/assets/7304a0ad-7623-4261-ac13-a8c5386249f5',
			video: ''
		},
		{
			title: 'Menu Site-72',
			href: 'https://github.com/Censur-e/UI-Site-72',
			dates: 'Décembre 2024 - Décembre 2024',
			active: true,
			description:
				`Pour aider Site-72 je leur est fait un menu pour pouvoir changer celui qu'il avait qui étais pas propre et pas professionnel.`,
			technologies: [
				'Luau',
				'Figma'
			],
			links: [
				{
					type: 'Discord Site 72',
					href: 'https://discord.com/invite/KCh3Rx7aJa',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				}
			],
			image: 'https://github.com/Censur-e/UI-Site-72/blob/main/Main%20UI%20Site%2072.png?raw=true',
			video: ''
		},
		{
			title: 'Tablette UI',
			href: 'https://github.com/Censur-e/TabletteUI',
			dates: 'Décembre 2024 - Décembre 2024',
			active: true,
			description:
				`Ceci est un UI de Team et aussi un UI pour des teams seulement, on peut se team avec et l'utiliser pour voir ses collègues , radio etc`,
			technologies: [
				'Luau'
			],
			//links: [
			//	{
			//		type: 'Discord Site 72',
			//		href: 'https://discord.com/invite/KCh3Rx7aJa',
			//		// icon: <Icons.globe className="size-3" />,
			//		icon: Globe
			//	}
			//],
			image: '',
			video: ''
		}
	],
	hackathons: [
		//{
		//	title: 'HackDavis',
		//	dates: 'January 20th - 21st, 2018',
		//	location: 'Davis, California',
		//	description:
		//		'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
		//	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
		//	win: 'Best Data Hack',
		//	mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
		//	links: [
		//		{
		//			title: 'Devpost',
		//			icon: Globe,
		//			// icon: <Icons.globe className="h-4 w-4" />,
		//			href: 'https://devpost.com/software/my6footprint'
		//		},
		//		{
		//			title: 'ML',
		//			icon: Github,
		//			// icon: <Icons.github className="h-4 w-4" />,
		//			href: 'https://github.com/Wallet6/my6footprint-machine-learning'
		//		},
		//		{
		//			title: 'iOS',
		//			icon: Github,
		//			// icon: <Icons.github className="h-4 w-4" />,
		//			href: 'https://github.com/Wallet6/CarbonWallet'
		//		},
		//		{
		//			title: 'Server',
		//			icon: Github,
		//			// icon: <Icons.github className="h-4 w-4" />,
		//			href: 'https://github.com/Wallet6/wallet6-server'
		//		}
		//	]
		//}
	]
};
