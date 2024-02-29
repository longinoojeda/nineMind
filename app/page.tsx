import { title, subtitle } from "@/components/primitives";
import { Skeleton } from "@nextui-org/skeleton";
import Collaborations from "@/components/collaborations";
import { Course } from "@/types/course";
import { CardContainer } from '@/components/card-container-courses';
import Image from 'next/image'

export default function Home() {

	const testCourse: Course = {
		course_id: 1,
		tittle: "Curso de prueba",
		description: "Esta es una descripción de prueba para el curso. Es bastante larga para poder ver cómo se recorta en la tarjeta del curso.",
		facebook_url: "https://i.imgur.com/hH6c1sF.png",
		category: "Categoría de prueba",
		trailer_url: null,
		creation_date: new Date(),
	};

	return (
		<>
			<section className="flex flex-col md:flex-row items-center justify-between gap-4 ">
				<div className="flex flex-col gap-4 max-w-lg text-center md:text-left animate-fade-right animate-once animate-ease-out">
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
				<div className="bg-ninemind rounded-full hidden md:block ">
					<figure className="animate-flip-up animate-once animate-ease-out">
						<Image 
							src='/student.png'
							alt='Un estudiante muy feliz' 
							height={450}
							width={450}
						/>
					</figure>
				</div>
			</section>
			<section className="animate-fade-up animate-once animate-ease-out">
			<Collaborations />

			</section>
			<section>
			<div className="flex flex-col gap-2 max-w-full text-center md:text-left mt-20 mb-10">
						<h3 className="text-md font-bold text-ninemind">Explore Programs</h3>
						<h3 className="text-2xl font-bold text-gray-600 dark:text-gray-200">Our Most Popular Class</h3>
						<h3 className="text-lg text-gray-500 dark:text-gray-2300">Let's join our famous class, the knowledge provided will definitely be useful for you.</h3>
				</div>
			</section>
			<div className="p-4">
				<CardContainer courses={[testCourse, testCourse, testCourse, testCourse]} />
			</div>
		</>
	);
}
