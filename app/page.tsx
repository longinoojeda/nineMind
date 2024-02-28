import { title, subtitle } from "@/components/primitives";
import { Skeleton } from "@nextui-org/skeleton";
import Collaborations from "@/components/collaborations";
import { Course } from "@/types/course";
import { CardCourse } from "@/components/card-course";
import { CardContainer } from '@/components/card-container-courses';

export default function Home() {

	const testCourse: Course = {
		curso_id: 1,
		titulo: "Curso de prueba",
		descripcion: "Esta es una descripción de prueba para el curso. Es bastante larga para poder ver cómo se recorta en la tarjeta del curso.",
		portada_url: "https://i.imgur.com/hH6c1sF.png",
		categoria: "Categoría de prueba",
		trailer_url: null,
		fecha_creacion: new Date(),
	};

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
			<div className="p-4">
				<CardContainer courses={[testCourse, testCourse, testCourse, testCourse]} />
			</div>
		</>
	);
}
