import React, { useState } from 'react';
import { createCourse } from '../../api/courseApi';
const CoursesForm = ({ onCourseCreated }) => {
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newCourse = { courseName, description };

        try {
            await createCourse(newCourse); 
            onCourseCreated();
            setCourseName('');
            setDescription('');
        } catch (error) {
            console.error('Error al crear curso', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Formulario de cursos */}
        </form>
    );
};

export default CoursesForm;
