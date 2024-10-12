import React, { useState } from 'react';
import { createTeacher } from '../../api/teacherApi'; 

const TeachersForm = ({ onTeacherCreated }) => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newTeacher = { name, subject };

        try {
            await createTeacher(newTeacher); 
            onTeacherCreated();
            setName('');
            setSubject('');
        } catch (error) {
            console.error('Error al crear profesor', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Formulario de profesores */}
        </form>
    );
};

export default TeachersForm;
