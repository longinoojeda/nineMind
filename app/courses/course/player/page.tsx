"use client";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { fetchCourse, fetchVideosByCourseId } from "@/lib/fetchCourses";
import { Course } from "@/types/course";
import { Skeleton } from "@nextui-org/skeleton";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { url } from 'inspector';

export default function PlayerPage() {

    const searchParams = useSearchParams();
    const course_id = searchParams.get('id');

    const [course, setCourse] = useState<Course | null>(null);
    const [videos, setVideos] = useState<any[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [urlVideoSelected, setUrlVideoSelected] = useState<string | null>(null);
    const [descriptionVideoSelected, setDescriptionVideoSelected] = useState<string | null>(null);
    const [titleVideoSelected, setTitleVideoSelected] = useState<string | null>(null);
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

    useEffect(() => {
        if (selectedVideo) {
            const video = videos.find(video => video.video_id === selectedVideo);
            if (video) {
                setUrlVideoSelected(video.url_video);
                setDescriptionVideoSelected(video.description);
                setTitleVideoSelected(video.tittle);
            }
        }
    }, [selectedVideo]);

    const handleSelectVideo = (video_id: string) => () => {
        setSelectedVideo(video_id);
    }


    return (
        <>
            <div className='px-3 py-1 border border-gray-100 w-full rounded-md shadow-xl mb-4'>
                <Breadcrumbs>
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/courses">Courses</BreadcrumbItem>
                    <BreadcrumbItem href={`/courses/course?id=${course_id}`}>{course?.tittle}</BreadcrumbItem>
                    {selectedVideo && <BreadcrumbItem href={`/courses/course/player?title=${selectedVideo}`}>{selectedVideo}</BreadcrumbItem>}
                </Breadcrumbs>
            </div>
            <div className='flex justify-around'>

                <div className="listbox border border-gray-200 flex flex-col gap-2 h-fit rounded-xl shadow-lg ">
                    {videos.map((video) => (
                        <div
                            key={video.video_id}
                            className={`listbox-item py-3 px-2 ${selectedVideo === video.video_id ? 'bg-ninemind text-white hover:text-ninemind hover:border hover:pointer hover:border-ninemind' : ''} hover:bg-gray-100 hover:text-gray-800  rounded-xl`}
                            onClick={handleSelectVideo(video.video_id)}
                        >
                            {video.tittle}
                        </div>
                    ))}
                </div>
                <div className='w-2/3'>
                    {selectedVideo ? (
                        <video controls width="960" height="360" className='rounded-xl animate-jump-in animate-once animate-ease-in' poster={course?.facebook_url ?? ''}>
                            <source src={urlVideoSelected ? urlVideoSelected : ''} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className='w-full h-96'>
                            <Skeleton className='w-full h-96' />
                        </div>
                    )}

                    <section>
                        {selectedVideo ? (
                            <div className='my-4 flex flex-col gap-2'>
                                <h2 className='text-2xl font-bold text-gray-700 dark:text-gray-200'>Description</h2>
                                <p className='text-gray-600 dark:text-gray-500'>{descriptionVideoSelected}</p>
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

