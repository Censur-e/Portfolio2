import { CodeIcon, HomeIcon, NotebookIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import Discord from '$lib/imgs/discord.svg';
import DiscordDark from '$lib/imgs/Discorddark.svg';

import site72 from '$lib/imgs/site72.webp';
import figma from '$lib/imgs/figma-logo.svg';

// Your resume data
export let DATA = {
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
		{ href: '/#projects', icon: CodeIcon, label: 'Projects' }
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
			title: 'Rôle : UIDesigner',
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
			image: 'https://private-user-images.githubusercontent.com/189171665/391157274-7304a0ad-7623-4261-ac13-a8c5386249f5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQxMTkwMDIsIm5iZiI6MTczNDExODcwMiwicGF0aCI6Ii8xODkxNzE2NjUvMzkxMTU3Mjc0LTczMDRhMGFkLTc2MjMtNDI2MS1hYzEzLWE4YzUzODYyNDlmNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIxM1QxOTM4MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jOWYzMWI0MzFkZjQzOTQ0ZGYyNmEwYzBlMzI3YTM1OTJjZDA5ZTk4Y2YxZTZjNTQ4Yjg3YTkxNmYxZWFkYzMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Zd4l66-qwhsw-y_H-j-RZvSju3iq5FBop9AQyo7PXKI',
			video: ''
		},
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
