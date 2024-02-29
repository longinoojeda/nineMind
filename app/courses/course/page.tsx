"use client";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { fetchCourse } from "@/lib/fetchCourses";
import { Course } from "@/types/course";
import { Skeleton } from "@nextui-org/skeleton";


export default function CoursePage() {

    const searchParams = useSearchParams();
    const course_id = searchParams.get('id');

    const [course, setCourse] = useState<Course | null>(null);
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
                    {!course?.trailer_url && <Skeleton />}
                    {course?.trailer_url && (
                        <video controls width="640" height="360">
                            <source src={course.trailer_url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
                {course?.course_id ? (
                    <div>
                        <h1>{course.tittle}</h1>
                        <p>{course.description}</p>
                    </div>
                ) : (
                    <Skeleton />
                )}
            </div>
        </>
    );
}
