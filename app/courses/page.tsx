import { Course } from "@/types/course";
import { CardCourse } from "@/components/card-course";
import { CardContainer } from '@/components/card-container-courses';

export default function Courses() {

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
		<div className="p-4">
		  <CardContainer courses={[testCourse, testCourse, testCourse, testCourse]} />
		</div>
	  );
}