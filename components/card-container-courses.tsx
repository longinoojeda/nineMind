import { Course } from "@/types/course";
import { CardCourse } from './card-course';

type CardContainerProps = {
    courses: Course[];
};

export const CardContainer: React.FC<CardContainerProps> = ({ courses }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-12 w-full lg:overflow-x-scroll lg:hide-scrollbar">
            {courses.map((course) => (
                <div className="min-w-[30%]" key={course.course_id}>
                    <CardCourse course={course} />
                </div>
            ))}
        </div>
    );
};