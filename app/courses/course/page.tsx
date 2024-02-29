import { Course } from "@/types/course";

const Course = (props: { course: Course }) => {
    return (
        <>
            <div className="">
                <div>

                </div>
                <div>
                    <video controls width="640" height="360">
                        <source src="ruta_del_video.mp4" type="video/mp4" />
                        <source src="ruta_del_video.webm" type="video/webm" />
                        Tu navegador no admite el elemento de video.
                    </video>
                </div>
            </div>

        </>
    );
}