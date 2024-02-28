import { Course } from "@/types/course";
import { CardCourse } from './card-course';

type CardContainerProps = {
  courses: Course[];
};

export const CardContainer: React.FC<CardContainerProps> = ({ courses }) => {
  return (
    <div className="flex overflow-x-scroll hide-scrollbar">
      {courses.map((course) => (
        <div className="min-w-[30%] pr-4" key={course.curso_id}>
          <CardCourse course={course} />
        </div>
      ))}
    </div>
  );
};