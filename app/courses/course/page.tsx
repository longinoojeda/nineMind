import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { fetchCourse } from "@/lib/fetchCourses";
import { Course as CourseType } from "@/types/course";
import { Skeleton } from "@nextui-org/skeleton";


const Course = () => {
    const router = useRouter()
    const { course_id } = router.query

    const [course, setCourse] = useState<CourseType | null>(null);
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
                        <source src={course?.trailer_url || ''} type="video/mp4" />
                        {!course?.trailer_url && <Skeleton />}
                        {course?.trailer_url && (
                            <video controls width="640" height="360">
                                <source src={course.trailer_url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </video>

                </div>
                <div>

                </div>
            </div>
        </>
    );
}