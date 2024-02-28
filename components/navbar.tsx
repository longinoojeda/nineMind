import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	NineMindLogo,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			labelPlacement="outside"
			placeholder="Want to learn?"
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			{/* DESKTOP */}
			<div className="flex items-center md:py-8 justify-between w-full">
				<NavbarContent className="basis-1/5 sm:basis-full">
					<NavbarBrand as="li" className="gap-3 max-w-fit">
						<NextLink className="flex justify-start items-center gap-3" href="/">
							<NineMindLogo size={70} />
							<article className="flex">
								<p className="font-regular text-inherit text-black dark:text-white">nine</p>
								<p className="font-bold text-inherit">Mind</p>
							</article>
						</NextLink>
					</NavbarBrand>
				</NavbarContent>
				<NavbarContent >
					<NavbarItem className="hidden md:flex">
						{searchInput}
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<ul className="hidden md:flex gap-10 justify-between ml-2">
						{siteConfig.navItems.map((item) => (
							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({ color: "foreground" }),
										"data-[active=true]:text-primary data-[active=true]:font-medium"
									)}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>
						))}
					</ul>
				</NavbarContent>
				<NavbarContent
					className="hidden sm:flex basis-1/5 sm:basis-full"
					justify="end"
				>
					<ThemeSwitch />
					<div className="lg:hidden">
					</div>
					<NavbarItem className="hidden md:flex">
						<Button
							className="text-md font-bold text-ninemind bg-default-50"
							variant="flat"
						>
							Log in
						</Button>
						<Button
							className="text-md font-semibold text-white bg-ninemind dark:text-white"
							variant="bordered"
						>
							Sign up
						</Button>
					</NavbarItem>
				</NavbarContent>
			</div>

			{/* MOBILE */}	
			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
