"use client";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { fetchCourse, fetchVideosByCourseId } from "@/lib/fetchCourses";
import { Course } from "@/types/course";
import { Skeleton } from "@nextui-org/skeleton";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from 'next/link'

export default function CoursePage() {

    const searchParams = useSearchParams();
    const course_id = searchParams.get('id');

    const [course, setCourse] = useState<Course | null>(null);
    const [videos, setVideos] = useState<any[]>([]);
    const [errorCourse, setErrorCourse] = useState(null);
    const [errorVideos, setErrorVideos] = useState(null);

    useEffect(() => {
        if (typeof course_id === 'string') {
            fetchCourse(course_id)
                .then(data => setCourse(data))
                .catch(error => setErrorCourse(error));
        }

        if (!errorCourse && typeof course_id === 'string') {
            fetchVideosByCourseId(course_id)
                .then(data => setVideos(data))
                .catch(error => setErrorVideos(error));
        }
    }, [course_id]);



    return (
        <>
            <div className='px-3 py-1 border border-gray-100 w-fit rounded-md shadow-xl mb-4'>
                <Breadcrumbs>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/courses">Courses</BreadcrumbItem>
                    <BreadcrumbItem href={`/courses/course?id=${course_id}`}>{course?.tittle}</BreadcrumbItem>
                </Breadcrumbs>

            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className='w-full md:w-3/4'>
                    {!course?.trailer_url && <Skeleton />}
                    {course?.trailer_url && (
                        <video controls width="960" height="360" className='rounded-xl' poster={course.facebook_url ?? ''}>
                            <source src={course.trailer_url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                    <Link href={`/courses/course/player?id=${course_id}`}>
                        <button className="w-full py-2 mt-4 bg-ninemind text-white rounded-md transition duration-200 ease-in-out md:hidden">
                            Watch
                        </button>
                    </Link>
                    {course?.course_id ? (
                        <div className='my-4 flex flex-col gap-2'>
                            <h2 className='text-2xl font-bold text-gray-700 dark:text-gray-200'>Description</h2>
                            <p className='text-gray-600 dark:text-gray-500'>{course.description}</p>
                        </div>
                    ) : (
                        <Skeleton />
                    )}
                    <section>
                        <h2 className='text-2xl font-bold text-gray-700 dark:text-gray-200'>Content</h2>
                        <Accordion>
                            {videos.map((video, index) => (
                                <AccordionItem key={index} aria-label={video.tittle} title={video.tittle} className='border bg-gray-50 dark:bg-gray-800 border-gray-200 rounded-lg my-1 px-2 text-gray-700'>
                                    <p className='dark:text-gray-500'>{video.description}</p>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                </div>
                <div className='w-1/5 hidden md:flex border border-gray-100 dark:border-gray-700 h-96 rounded-xl shadow-2xl flex flex-col justify-end'>
                    <Link href={`/courses/course/player?id=${course_id}`}>
                        <button className="w-full py-2 mt-4 bg-ninemind text-white rounded-md transition duration-200 ease-in-out">
                            Watch
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

