import { supabaseClient as supabase } from "@/config/supabase";
import { Course } from "@/types/course";

const fetchCourse = async (course_id: string): Promise<Course> => {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('course_id', course_id)
        .single(); //return only one row, so we don't need specify the index. 

    if (error) throw error;

    return data;
}

export { fetchCourse };