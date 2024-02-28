import { Course } from "@/types/course";
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from "@nextui-org/skeleton";

export const CardCourse = (props: { course: Course }) => {
    const { course } = props;
    const descriptionPreview = course.descripcion
        ? `${course.descripcion.substring(0, 100)}...`
        : "";

    return (
        <Link href={`/course/${course.curso_id}`}>
            <div className="bg-gray-50 dark:bg-zinc-900 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="relative h-56 w-full">
                        {course.portada_url && (
                            <Image src={course.portada_url} alt={course.titulo} layout="fill" objectFit="cover" />
                        )}
                    </div>
                <div className="px-6 py-3 flex flex-col gap-1">
                    <p className="text-sm font-bold text-ninemind">{course.categoria}</p>
                    <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-200">{course.titulo}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{descriptionPreview}</p>
                </div>
                <div className="px-6 py-3 flex justify-start gap-4 items-center border-t border-gray-200 dark:border-gray-800">
                    <Skeleton className="w-9 h-9 rounded-full">
                    </Skeleton>
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-3 w-36 rounded-full"></Skeleton>
                        <Skeleton className="h-2 w-24 rounded-full"></Skeleton>
                    </div>
                </div>
            </div>
        </Link >
    );
}