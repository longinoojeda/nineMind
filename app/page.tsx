import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
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
		</section>
	);
}
