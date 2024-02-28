import { title, subtitle } from "@/components/primitives";
import {Skeleton} from "@nextui-org/skeleton";
import Collaborations from "@/components/collaborations";
import CollaborationsDarkmode from "@/components/collaborations-darkmode";

export default function Home() {
	return (
		<>
			<section className="flex flex-col md:flex-row items-center justify-between gap-4 ">
				<div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
					<div>
						<h1 className={title({ size: 'lg' })}>Up Your&nbsp;</h1>
						<h1 className={title({ color: "nineMindGreen", size: 'lg' })}>Skills&nbsp;</h1>
					</div>
					<div>
						<h1 className={title({ size: 'lg' })}>To&nbsp;</h1>
						<h1 className={title({ color: "nineMindGreen", size: 'lg' })}>Advance&nbsp;</h1>
						<h1 className={title({ size: 'lg' })}>Your&nbsp;</h1>
					</div>
					<div>
						<h1 className={title({ color: "nineMindGreen", size: 'lg' })}>Career&nbsp;</h1>
						<h1 className={title({ size: 'lg' })}>Path&nbsp;</h1>
					</div>
					<h2 className={subtitle({ class: "mt-4" })}>
						Provides you with the latest online learning system and material that help your knowledge growing.
					</h2>
				</div>
				<Skeleton className="hidden md:block rounded-lg">
					<div className="h-64 w-64 lg:h-80 lg:w-96 rounded-lg bg-default-300"></div>
				</Skeleton>
			</section>
			<Collaborations />
		</>
	);
}
