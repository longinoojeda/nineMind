import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { fetchCourse } from "@/lib/fetchCourses";
import { Course } from "@/types/course";

const Course = () => {

    const router = useRouter()
    const { course_id } = router.query

    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (typeof course_id === 'string') {
            fetchCourse(course_id)
                .then(data => setCourse(data))
                .catch(error => setError(error));
        }
    }, [course_id]);

    return (
        <>
            <div className="">
                <div>
                    <video controls width="640" height="360">
                        <source src="ruta_del_video.mp4" type="video/mp4" />
                        <source src="ruta_del_video.webm" type="video/webm" />
                        Tu navegador no admite el elemento de video.
                    </video>
                </div>
                <div>

                </div>
            </div>

        </>
    );
}