"use client";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { fetchCourse, fetchVideosByCourseId } from "@/lib/fetchCourses";
import { Course } from "@/types/course";
import { Video } from '@/types/video';
import { Skeleton } from "@nextui-org/skeleton";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function PlayerPage() {

    const searchParams = useSearchParams();
    const course_id = searchParams.get('id');

    const [course, setCourse] = useState<Course | null>(null);
    const [videos, setVideos] = useState<Video[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
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
    }, []);



    return (
        <>
            <div className='px-3 py-1 border border-gray-100 w-full rounded-md shadow-xl mb-4'>
                <Breadcrumbs>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/courses">Courses</BreadcrumbItem>
                    <BreadcrumbItem href={`/courses/course?id=${course_id}`}>{course?.tittle}</BreadcrumbItem>
                    {selectedVideo && <BreadcrumbItem href={`/courses/course/player?id=${course_id}`}>{selectedVideo.titulo}</BreadcrumbItem>}
                </Breadcrumbs>
                </div>
                <div className='flex justify-around'>

                <div className='w-1/4 border border-gray-100 rounded-md shadow-xl'>
                    <Listbox
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedVideo ? [selectedVideo.video_id] : []}
                        onSelectionChange={setSelectedVideo as any}
                        >
                        {videos.map((video) => (
                            <ListboxItem key={video.video_id} value={video.video_id} className='text-red-600'>
                                <p>{video.titulo}</p>
                            </ListboxItem>
                        ))}
                    </Listbox>
                </div>
                <div className='w-2/3'>
                    {selectedVideo ? (
                        <video controls width="960" height="360" className='rounded-xl' poster={course?.facebook_url ?? ''}>
                            <source src={selectedVideo.url_video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <Skeleton/>
                        )}

                    <section>
                    {selectedVideo ? (
                        <div className='my-4 flex flex-col gap-2'>
                            <h2 className='text-2xl font-bold text-gray-700 dark:text-gray-200'>Description</h2>
                            <p className='text-gray-600 dark:text-gray-500'>{selectedVideo.descripcion}</p>
                        </div>
                    ) : (
                        <Skeleton />
                    )}
                    </section>
                </div>
                       

            </div>
        </>
    );
}

