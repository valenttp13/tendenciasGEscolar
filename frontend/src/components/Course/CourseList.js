import React, { useEffect, useState } from 'react';
import { getCourses, deleteCourse } from '../../api/courseApi'; 

const CoursesList = ({ onCourseSelected }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses(); 
                setCourses(data);
            } catch (error) {
                console.error('Error al obtener cursos', error);
            }
        };

        fetchCourses();
    }, []);

    const handleDelete = async (courseId) => {
        try {
            await deleteCourse(courseId); 
            setCourses(courses.filter((course) => course.id !== courseId)); 
        } catch (error) {
            console.error('Error al eliminar curso', error);
        }
    };

    return (
        <ul>
            {/* Lista de cursos */}
        </ul>
    );
};

export default CoursesList;
