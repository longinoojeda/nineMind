export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "nineMind",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Courses",
			href: "/courses",
		},
		{
			label: "Project",
			href: "/project",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Courses",
			href: "/courses",
		},
		{
			label: "Project",
			href: "/project",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
