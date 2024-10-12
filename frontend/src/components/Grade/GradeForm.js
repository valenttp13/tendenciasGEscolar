import React, { useState } from 'react';
import { createGrade } from '../../api/gradeApi'; 

const GradesForm = ({ onGradeCreated }) => {
    const [student, setStudent] = useState('');
    const [course, setCourse] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newGrade = { student, course, grade };

        try {
            await createGrade(newGrade); 
            onGradeCreated(); 
            setStudent('');
            setCourse('');
            setGrade('');
        } catch (error) {
            console.error('Error al crear calificación', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Formulario para agregar una calificación */}
        </form>
    );
};

export default GradesForm;
