"use client";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { fetchCourse, fetchVideosByCourseId } from "@/lib/fetchCourses";
import { Course } from "@/types/course";
import { Skeleton } from "@nextui-org/skeleton";
import { Accordion, AccordionItem } from "@nextui-org/react";


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
            <div className="flex justify-between">
                <div className='w-3/4'>
                    {!course?.trailer_url && <Skeleton />}
                    {course?.trailer_url && (
                        <video controls width="960" height="360" className='rounded-xl' poster={course.facebook_url ?? ''}>
                            <source src={course.trailer_url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                    {course?.course_id ? (
                        <div className='my-4 flex flex-col gap-2'>
                            <h2 className='text-3xl text-gray-700 '>Description</h2>
                            <p className='text-gray-600'>{course.description}</p>
                        </div>
                    ) : (
                        <Skeleton />
                    )}
                    <section>
                        <h2 className='text-2xl text-gray-700 '>Content</h2>
                        <Accordion>
                            {videos.map((video, index) => (
                                <AccordionItem key={index} aria-label={video.tittle} title={video.tittle} className='border bg-gray-50 border-gray-200 rounded-lg my-1 px-2 text-gray-700'>
                                    <p>{video.description}</p>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                </div>
                <div className='w-1/5 border border-gray-100 h-96 rounded-xl shadow-2xl flex flex-col justify-between'>
                    <div className="px-6 py-3 flex justify-start gap-4 items-center border-t border-gray-200 dark:border-gray-800">
                        <Skeleton className="w-9 h-9 rounded-full">
                        </Skeleton>
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-3 w-36 rounded-full"></Skeleton>
                            <Skeleton className="h-2 w-24 rounded-full"></Skeleton>
                        </div>
                    </div>
                    <button className="w-full py-2 mt-4 bg-ninemind text-white rounded-md transition duration-200 ease-in-out">
                        Enroll
                    </button>
                </div>
            </div>
        </>
    );
}

